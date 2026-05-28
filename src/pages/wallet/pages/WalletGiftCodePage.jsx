import { WalletMoneyFlowForm } from '../components/WalletMoneyFlowForm.jsx';
import { moneyFlowConfig } from '../wallet-flow-config.js';

export default function WalletGiftCodePage() {
  return <WalletMoneyFlowForm type="gift" config={moneyFlowConfig.gift} />;
}
