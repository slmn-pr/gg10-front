import { WalletBankCardForm } from '../components/WalletBankCardForm.jsx';
import { bankCardConfig } from '../wallet-flow-config.js';

export default function WalletEditCardPage() {
  return <WalletBankCardForm config={bankCardConfig.edit} />;
}
