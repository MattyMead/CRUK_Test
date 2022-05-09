export interface ISelectOption {
  label: string;
  value: string | number | string[] | number[];
  metadata?: { [key: string]: any };
}