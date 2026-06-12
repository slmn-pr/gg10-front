import { createContext, Dispatch, SetStateAction, useContext } from 'react';
import { STEP_TYPES } from '../const';
interface StepContextData {
  step: string;
  setStep: Dispatch<SetStateAction<string>>;
  phoneNumber: string;
  setPhoneNumber: Dispatch<SetStateAction<string>>;
  password?: string;
  setPassword?: Dispatch<SetStateAction<string>>;
}

export const StepContext = createContext<StepContextData>({
  step: STEP_TYPES.PHONE_NUMBER,
  setStep: () => {},
  phoneNumber: '',
  setPhoneNumber: () => {},
  password: '',
});

export const useStep = () => {
  const context = useContext(StepContext);
  if (!context) {
    throw new Error('useStep must be used within StepProvider');
  }
  return context;
};
