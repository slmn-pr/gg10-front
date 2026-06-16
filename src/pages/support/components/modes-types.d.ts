import { Dispatch, SetStateAction } from "react";

export type ModeVariants = 'faq' | 'ticket';

export interface ModeSwitchProps {
  mode: ModeVariants;
  setMode: Dispatch<SetStateAction<ModeVariants>>;
}
