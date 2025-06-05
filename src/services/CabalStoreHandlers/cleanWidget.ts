import { setCabalTradeStream } from '../../stores/cabalTradeSreamStore';
import { setCabalUserActivity } from '../../stores/cabalUserActivity';
import { cleanContentAppStore } from '../../stores/contentAppStore';
import { setLogStore } from '../../stores/logStore';
import { handlers } from '../../widgets/TradeWidget/TradeWidgetStore/tradeWidgetStateStore';

export const cleanWidget = () => {
  setCabalTradeStream('status', undefined);
  setCabalUserActivity('status', undefined);

  handlers.setToInit();

  cleanContentAppStore();
  setLogStore('logs', []);
};
