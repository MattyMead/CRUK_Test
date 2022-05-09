import { IFilter } from 'core/filtering/types/entities/IFilter';
import { ISimpleAction } from 'core/redux/types/IAction';
import { createAction } from 'core/redux/utils';
import Actions from './action-types';

export const applyFilter = (filter: IFilter): ISimpleAction =>
  createAction(
    Actions.APPLY_FILTER,
    filter
  );

export const applyFilters = (filters: IFilter[]): ISimpleAction =>
  createAction(
    Actions.APPLY_FILTERS,
    filters
  );

export const removeFilter = (payload: { field: string }): ISimpleAction =>
  createAction(
    Actions.REMOVE_FILTER,
    payload
  );