import FiltersReducer from 'core/filtering/reducer';
import { IFilter } from 'core/filtering/types/entities/IFilter';
import { ISimpleAction } from 'core/redux/types/IAction';
import { useReducer } from 'react';

export const useFilters = (initialFilters: IFilter[] = []):
[IFilter[], React.Dispatch<ISimpleAction>] =>
  useReducer(FiltersReducer, initialFilters);