import { ApiResponseError } from 'core/api/types/entities/api-response-error';
import { IFilter } from 'core/filtering/types/entities/IFilter';
import { SortDirection } from 'core/sorting/types/enums/sort-direction';

export interface IAsyncActionParams<TItem> {
  item?: TItem | string | Buffer;
  items?: TItem[] | string[] | Buffer[];
  extension?: string;
  overrideHeaders?: { [key: string]: string; };
  filters?: IFilter[];
  sortBy?: string;
  sortDirection?: SortDirection;
  page?: number | null;
  pageSize?: number | null;
  search?: {
    fields: string[];
    value: string;
  };
  queryParams?: {
    [key: string]: any;
  };
  callbackFn?: (response?: any) => void; // Remove at some point
  promise?: {
    onResolve: (data: any) => void;
    onReject: (error: ApiResponseError) => void;
  };
}