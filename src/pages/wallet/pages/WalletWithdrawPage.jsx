import { WalletMoneyFlowForm } from '../components/WalletMoneyFlowForm.jsx';
import { moneyFlowConfig } from '../wallet-flow-config.js';

export default function WalletWithdrawPage() {
  return <WalletMoneyFlowForm type="withdraw" config={moneyFlowConfig.withdraw} />;
}
