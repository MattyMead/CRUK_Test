import { SortDirection } from 'core/sorting/types/enums/sort-direction';
import { IsNullOrUndefined } from 'core/utils/isNullOrUndefined';

export const CaptureSorts = (
  sortBy?: string, sortDirection?: string
): string | null => {
  if (IsNullOrUndefined(sortBy) ||
    sortBy === '' ||
    IsNullOrUndefined(sortDirection)) return null;

  const prefix = sortDirection === SortDirection.Descending ? '-' : '';

  return `${prefix}${sortBy}`;
};