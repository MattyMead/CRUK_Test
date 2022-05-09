import { IsNullOrUndefined } from 'core/utils/isNullOrUndefined';
import { CaptureFilterParams } from 'core/api/utils/capture-filter-params';
import { BuildRequestUrl } from 'core/api/utils/build-request-url';
import { CaptureSorts } from 'core/api/utils/capture-sorts';
import { request } from 'core/axios';
import { ApiRequestParams } from 'core/api/types/entities/api-request-params';
import { EndpointRoute } from 'core/api/types/entities/endpoint-route';
import { RequestMethod } from 'core/api/types/enums/request-method';
import { IPayload } from 'core/redux/types/IPayload';

export const BuildRequestParams = (
  endpoint: EndpointRoute,
  payload: IPayload,
): ApiRequestParams => {
  const { host, path, method, filters: availableFilters } = endpoint;

  const requestParams: ApiRequestParams = {
    url: BuildRequestUrl(payload, path, host),
    method
  };

  switch (method) {
    case RequestMethod.GET: {
      if (IsNullOrUndefined(payload)) break;

      const params: {[key: string]: string;} = {};

      const {
        filters: appliedFilters
      } = payload;

      const filterParams = CaptureFilterParams(
        availableFilters, appliedFilters
      );

      if (!IsNullOrUndefined(filterParams)) {
        requestParams.params = filterParams!;
      }

      break;
    }

    case RequestMethod.PUT:
    case RequestMethod.POST: {
      const { item, items, overrideHeaders, queryParams } = payload;

      if (!IsNullOrUndefined(overrideHeaders)) {
        requestParams.headers = overrideHeaders;
      }

      if (!IsNullOrUndefined(item)) {
        requestParams.body = item;
      }

      if (!IsNullOrUndefined(items)) {
        requestParams.body = items;
      }

      if (!IsNullOrUndefined(queryParams)) {
        requestParams.params = queryParams;
      }

      break;
    }

    default:
      break;
  }

  return requestParams;
};