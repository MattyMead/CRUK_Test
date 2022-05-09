import { SelectFilterMode } from 'types/common/filtering/enums/SelectFilterMode';
import { ISelectOption } from 'types/common/filtering/models/entities/ISelectOption';

export interface ISelectFilterConfig {
  field: string;
  options: ISelectOption[];
}