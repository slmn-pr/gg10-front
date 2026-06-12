import { WalletBankCardForm } from '../components/WalletBankCardForm.jsx';
import { bankCardConfig } from '../wallet-flow-config.js';

export default function WalletRegisterCardPage() {
  return <WalletBankCardForm config={bankCardConfig.register} />;
}
