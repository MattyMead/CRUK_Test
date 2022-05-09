import { IFilter } from 'core/filtering/types/entities/IFilter';
import { IsNullOrUndefined } from 'core/utils/isNullOrUndefined';

export const CaptureFilterParams = (
  availableFilters?: { [key: string]: string; },
  appliedFilters?: IFilter[]
): { [key: string]: string } | null => {

  if (IsNullOrUndefined(availableFilters)
    || IsNullOrUndefined(appliedFilters)) {
    return null;
  }
  const filters: { [key: string]: string } = {};

  appliedFilters?.forEach(appliedFilter => {
    const { field, value } = appliedFilter;

    const filterField = Object.entries(availableFilters!).find(([key]) => {
      return key.toLowerCase() === field.toLowerCase();
    });

    if (IsNullOrUndefined(filterField)) return;

    const [filterKey, filterName] = filterField!;

    const valueString = Array.isArray(value)
      ? (value as string[] | number[]).join(',')
      : value.toString();

    filters[filterName] = valueString;
  });

  return filters;
};