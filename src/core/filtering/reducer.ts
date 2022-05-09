import { Reducer } from 'react';
import ActionTypes from 'core/filtering/action-types';
import { IFilter } from 'core/filtering/types/entities/IFilter';
import { ISimpleAction } from 'core/redux/types/IAction';
import _ from 'core/utils/deepdash';

const applyFilter = (state: IFilter[], filter: IFilter): IFilter[] => {

  const existingFilterIndex = state.findIndex(f => {
    return f.field === filter.field;
  });

  const filterExists = existingFilterIndex >= 0;

  if (filterExists) {
    state[existingFilterIndex] = filter;
  }
  else {
    state.push(filter);
  }
  return state;
};

const removeFilter = (state: IFilter[], filter: IFilter): IFilter[] => {
  const existingFilterIndex = state.findIndex(f => {
    return f.field === filter.field;
  });

  const filterExists = existingFilterIndex >= 0;

  if (filterExists) {
    _.pullAt(state, existingFilterIndex);
    return state;
  }

  return state;
};

const FiltersReducer: Reducer<IFilter[], ISimpleAction> =
  (state = [], action: ISimpleAction) => {
    let newState = _.clone(state);

    switch (action.type) {
      case ActionTypes.APPLY_FILTER: {
        const filter = action.payload as IFilter;

        return applyFilter(newState, filter);
      }

      case ActionTypes.APPLY_FILTERS: {
        const filters = action.payload as IFilter[];

        filters.forEach(filter => {
          newState = applyFilter(newState, filter);
        });

        return newState;
      }

      case ActionTypes.REMOVE_FILTER: {
        const filter = action.payload as IFilter;

        return removeFilter(newState, filter);
      }
    }

    return state;
  };

export default FiltersReducer;