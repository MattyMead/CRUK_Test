import { FilterOperator } from 'core/filtering/types/enums/FilterOperator';
import { FilterType } from 'core/filtering/types/enums/FilterType';

export interface IFilter {
  field: string;
  type: FilterType;
  operator?: FilterOperator;
  value: string | number | string[] | number[] | boolean;
}