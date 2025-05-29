import { EventEmitter } from 'events';
import { createGRPCCabalClient } from './cabal';
import {
  UserResponse,
  TradeEventResponse,
  TradeResponse,
} from './cabal/CabalRpc/cabal_pb';

import CabalStream, { CabalStreamEvents } from './CabalStream';
import {
  CabalStreamEventsHandler,
  streamNames,
  CabalTradeStreamMessages,
} from './CabalServiceTypes';
import { CabalUserActivityStreamMessages } from '.';

class CabalService extends EventEmitter {
  client: ReturnType<typeof createGRPCCabalClient>;
  userActivityStream: CabalStream<UserResponse> | undefined;
  tradesStream: CabalStream<TradeEventResponse> | undefined;
  ready: boolean;
  constructor({ apiKey, apiUrl }: { apiKey: string; apiUrl: string }) {
    super();
    this.client = createGRPCCabalClient({
      apiKey,
      apiUrl,
    });
    this.ready = false;
  }

  createUAStream() {
    this.handleUserActivityMessage = this.handleUserActivityMessage.bind(this);
    // <StreamResponse> <UserResponse>
    this.userActivityStream = new CabalStream<UserResponse>({
      nameStream: streamNames.UA,

      clientConnectToStream: () => this.client.userActivityUni({}),
      clientIsPong: (response: UserResponse) =>
        response.userResponseKind.case === 'pong',

      streamPinger: ({ count }: { count: bigint }) =>
        this.client.userPing({ count }),
      onMessage: this.handleUserActivityMessage,

      debug: true,
    });

    return this.userActivityStream;
  }

  destroyUAStrem() {
    this.ready = false;
    this.userActivityStream?.destroy();
    this.userActivityStream = undefined;
  }

  createTradeStream() {
    this.handleTradeMessage = this.handleTradeMessage.bind(this);

    this.tradesStream = new CabalStream<TradeEventResponse>({
      nameStream: streamNames.TRADE,

      clientConnectToStream: () => this.client.tradesUni({}),
      clientIsPong: (response: TradeEventResponse) =>
        response.tradeEventResponseKind.case === 'pong',

      streamPinger: ({ count }: { count: bigint }) =>
        this.client.tradePing({ count }),

      onMessage: this.handleTradeMessage,

      debug: true,
    });
  }

  destroyTStrem() {
    this.ready = false;
    this.tradesStream?.destroy();
    this.tradesStream = undefined;
  }

  async start() {
    try {
      this.ready = true;
      this.createUAStream();
      await this.userActivityStream?.start();
      this.handleUserActivityMessage(CabalStreamEvents.connected);
      this.createTradeStream();
      await this.tradesStream?.start();
    } catch (error) {
      this.ready = false;
      console.log('Cabal Service Error');
      this.stop();
    }
  }

  stop() {
    this.destroyUAStrem();
    this.destroyTStrem();
  }

  // TODO: https://stackoverflow.com/questions/71200948/how-can-i-validate-a-solana-wallet-address-with-web3js
  // CabalRpc -> SubscribeToken(TokenTradeEventSub) returns (TradeResponse) {}
  async subscribeToken(mint: string): Promise<TradeResponse | undefined> {
    try {
      const result = await this.client.subscribeToken({
        mint,
      });
      console.log('subscribeToken', result);
      return result;
    } catch (error) {
      console.error('subscribeToken', error);
    }
  }
  // CabalRpc -> MarketSell
  // CabalRpc -> MarketBuy
  // CabalRpc -> GetTokenLimitOrders
  // CabalRpc -> PlaceLimitOrders
  // CabalRpc -> DeleteLimitOrders

  /* 
    private 
  */

  handleTradeMessage: CabalStreamEventsHandler = (
    messageType,
    messagePayload,
  ) => {
    if (!this.ready) {
      return;
    }
    switch (messageType) {
      case CabalStreamEvents.connected:
        this.emit(CabalTradeStreamMessages.tradeConnected);
        break;
      case CabalStreamEvents.error:
        console.error('[[CabalService]]: trade stream error');
        this.stop();
        this.emit(CabalTradeStreamMessages.tradeError);
        break;
      case CabalStreamEvents.message:
        this.processTradeMessage(messagePayload as TradeEventResponse);
        break;
      default:
        console.log(
          `[handleUserActivityMessage]: unknown message type ${messageType}`,
        );
    }
  };

  handleUserActivityMessage: CabalStreamEventsHandler = (
    messageType,
    messagePayload,
  ) => {
    if (!this.ready) {
      return;
    }
    switch (messageType) {
      case CabalStreamEvents.connected:
        this.emit(CabalUserActivityStreamMessages.userActivityConnected);
        break;
      case CabalStreamEvents.error:
        console.error('[[CabalService]]: UA stream error');
        this.stop();
        this.emit(CabalUserActivityStreamMessages.userActivityError);
        break;
      case CabalStreamEvents.message:
        this.processUserActivityMessage(messagePayload as UserResponse);
        break;
      default:
        console.log(
          `[handleUserActivityMessage]: unknown message type ${messageType}`,
        );
    }
  };

  processUserActivityMessage(message: UserResponse) {
    const messageCase = message.userResponseKind.case;
    switch (messageCase) {
      case 'tradeStatus':
        break;
      case 'tradeStats':
        this.emit(
          CabalUserActivityStreamMessages.tradeStats,
          message.userResponseKind,
        );
        break;
      case 'txnCb':
        break;
      case 'ping':
        break;
      case 'pong':
        this.emit(CabalUserActivityStreamMessages.userActivityPong, {
          count: message.userResponseKind.value,
        });
        break;
      default:
        console.log(
          `[handleUserActivityMessage]: unknown case message: ${messageCase}`,
        );
    }
  }

  processTradeMessage(message: TradeEventResponse) {
    const messageCase = message.tradeEventResponseKind.case;
    switch (messageCase) {
      case 'tradeEvent':
        this.emit(CabalTradeStreamMessages.tradeEvent, {
          value: message.tradeEventResponseKind.value.tradeEventKind,
        });
        break;
      case 'tokenStatus':
        this.emit(CabalTradeStreamMessages.tokenStatus, {
          value: message.tradeEventResponseKind,
        });
        break;
      case 'ping':
        this.emit(CabalTradeStreamMessages.tradePing, {
          value: message.tradeEventResponseKind.value,
        });
        break;
      case 'pong':
        this.emit(CabalTradeStreamMessages.tradePong, {
          count: message.tradeEventResponseKind.value,
        });
        break;
      default:
        console.log(
          `[processTradeMessage]: unknown case message: ${messageCase}`,
        );
    }
  }
}

export default CabalService;
