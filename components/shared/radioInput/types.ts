export interface IRadioInput {
  id: number;
  isActive: boolean;
  value: number;
  label: string;
}

export type PropsType = {
  data: Array<IRadioInput>;
};
