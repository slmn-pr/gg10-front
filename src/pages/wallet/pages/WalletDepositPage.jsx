import { WalletMoneyFlowForm } from '../components/WalletMoneyFlowForm.jsx';
import { moneyFlowConfig } from '../wallet-flow-config.js';

export default function WalletDepositPage() {
  return <WalletMoneyFlowForm type="deposit" config={moneyFlowConfig.deposit} />;
}
