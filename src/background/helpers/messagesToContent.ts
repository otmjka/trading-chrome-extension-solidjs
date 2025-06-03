import {
  CabalUserActivityStreamMessages,
  UserResponse,
} from '../../services/cabal-clinet-sdk';
import {
  Confirmed,
  Failed,
  LandedTxnState,
  Lost,
} from '../../services/cabal-clinet-sdk/cabal/CabalRpc/txncb_pb';
import {
  CabalCommonMessages,
  CabalMessageType,
  FromBackgroundReadyStatusMessage,
  FromBackgroundTxMessage,
  txConfirmedParsed,
  txFailedParsed,
  txLostParsed,
} from '../../shared/types';
import { BackgroundState } from '../types';
import { getTxEventTrades } from './getTxEventTrades';

export const readyStatus = ({
  state,
}: {
  state: BackgroundState;
}): FromBackgroundReadyStatusMessage => ({
  type: CabalMessageType.CabalEvent,
  eventName: CabalCommonMessages.readyStatus,
  data: { isReady: state.isReady, shouldSetApiKey: !state.apiKey },
});

// TODO: to cabal service
export const txnCB = (event: {
  case: string;
  value: LandedTxnState;
}): undefined | FromBackgroundTxMessage => {
  try {
    console.log('#### #### #### handleUAtxnCB', event);

    if (event.value.stateType.case === 'confirmed') {
      const confirmed = event.value.stateType.value as unknown as Confirmed;
      const messageData: txConfirmedParsed = {
        type: event.case as CabalUserActivityStreamMessages.txnCb, // "txnCb"
        txType: event.value.stateType.case, // 'confirmed'
        cu: confirmed.cu, // 113076
        signature: confirmed.signature, // "5QhqGRhiue4aRHZdoRSUrVSebBtj2Wo64PktCwJDRuNsw3esE1LQV5NNp3WvfXsSCA9NxSKNvZjgYHJ2Cks6B6uq"
        slotDiff: confirmed.slotDiff, // 1
        tipJito: confirmed.tips?.jito.toString(),
        tipsPriority: confirmed.tips?.priority.toString(),
        trades: getTxEventTrades(confirmed.trades),
      };
      return {
        type: CabalMessageType.CabalEvent,
        eventName: CabalUserActivityStreamMessages.txnCb,
        data: messageData,
      };
    }

    if (event.value.stateType.case === 'failed') {
      const failed = event.value.stateType.value as unknown as Failed;
      const messageData: txFailedParsed = {
        type: event.case as CabalUserActivityStreamMessages.txnCb, // "txnCb"
        txType: event.value.stateType.case, // 'failed'
        cu: failed.cu, // 113076
        signature: failed.signature, // "5QhqGRhiue4aRHZdoRSUrVSebBtj2Wo64PktCwJDRuNsw3esE1LQV5NNp3WvfXsSCA9NxSKNvZjgYHJ2Cks6B6uq"
        slotDiff: failed.slotDiff, // 1
        tipJito: failed.tips?.jito.toString(),
        tipsPriority: failed.tips?.priority.toString(),
        err: failed.err,
        orderId: failed.orderId?.toString(),
      };
      return {
        type: CabalMessageType.CabalEvent,
        eventName: CabalUserActivityStreamMessages.txnCb,
        data: messageData,
      };
    }

    if (event.value.stateType.case === 'lost') {
      const lost = event.value.stateType.value as unknown as Lost;
      const messageData: txLostParsed = {
        type: event.case as CabalUserActivityStreamMessages.txnCb, // "txnCb"
        txType: event.value.stateType.case, // 'lost'
        signatures: lost.signatures, // "5QhqGRhiue4aRHZdoRSUrVSebBtj2Wo64PktCwJDRuNsw3esE1LQV5NNp3WvfXsSCA9NxSKNvZjgYHJ2Cks6B6uq"
        orderId: lost.orderId?.toString(),
      };
      return {
        type: CabalMessageType.CabalEvent,
        eventName: CabalUserActivityStreamMessages.txnCb,
        data: messageData,
      };
    }
  } catch (error) {
    console.error(`error in handleUserActivityTradeStats`, error);
  }
};
