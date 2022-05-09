import React, { PropsWithChildren, useContext, useEffect, useReducer, useState } from 'react';
import { useFilters } from 'core/filtering/hooks';
import { Actions as FilterActions } from 'core/filtering';
import { IsNullOrUndefined } from 'core/utils/isNullOrUndefined';
import { IFilter } from 'core/filtering/types/entities/IFilter';
import { SortValue } from 'core/sorting/types/entities/sort-value';
import { SortDirection } from 'core/sorting/types/enums/sort-direction';

interface IRequestContextProps {
  initialFilters?: IFilter[];
}

interface IRequestContext {
  active: boolean;
  setActive: (active: boolean) => void;
  filters: IFilter[];
  getFilterByField: (field: string) => IFilter | null;
  applyFilter: (filter: IFilter, options?: { delay: boolean }) => void;
  removeFilter: (field: string) => void;
  page: number | null;
  setPage: (page: number | null) => void;
  pageSize: number | null;
  setPageSize: (pageSize: number | null) => void;
  sortValue: SortValue;
  setSortValue: (val: SortValue) => void;
}

const RequestContext = React.createContext<IRequestContext | null>(null);

RequestContext.displayName = 'RequestContext';

const useProvideRequestContext = (props: IRequestContextProps): IRequestContext => {
  const [filters, dispatch] = useFilters(props.initialFilters);

  const [page, setPage] = useState<number | null>(1);

  const [pageSize, setPageSize] = useState<number | null>(null);

  const [sortValue, updateSortValue] = useState<SortValue>({
    sortBy: '', sortDirection: SortDirection.Ascending
  });

  const [active, setActive] = useState(false);

  useEffect(() => {
    if (!IsNullOrUndefined(page)) {
      setPage(1);
    }
  }, [filters, sortValue]);

  const applyFilter = (filter: IFilter, options?: { delay: boolean }): void => {
    if (!IsNullOrUndefined(options) && options?.delay) {
      setActive(false);
    }

    dispatch(FilterActions.applyFilter(filter));
  };

  const applyFilters = (filters: IFilter[]): void => {
    dispatch(FilterActions.applyFilters(filters));
  };

  const removeFilter = (field: string): void => {
    dispatch(FilterActions.removeFilter({ field }));
  };

  const getFilterByField = (field: string): IFilter | null => {
    return filters.find(filter => filter.field === field) ?? null;
  };

  const setSortValue = (val: SortValue): void => {
    updateSortValue(val);
    setActive(true);
  };

  return {
    active,
    setActive,
    filters,
    getFilterByField,
    applyFilter,
    removeFilter,
    page,
    setPage,
    pageSize,
    setPageSize,
    sortValue,
    setSortValue
  };
};

export const RequestContextProvider: React.FC<PropsWithChildren<IRequestContextProps>> =
  (props: PropsWithChildren<IRequestContextProps>) => {
    const context = useProvideRequestContext(props);

    return (
      <RequestContext.Provider value={context}>
        { props.children}
      </RequestContext.Provider>
    );
  };

export const useRequestContext = (): IRequestContext | null => useContext(RequestContext);