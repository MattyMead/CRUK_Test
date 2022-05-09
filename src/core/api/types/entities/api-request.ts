import { ApiRequestParams } from 'core/api/types/entities/api-request-params';
import { ApiResponse } from 'core/api/types/entities/api-response';

export default interface IApiRequest {
  (requestParams: ApiRequestParams): Promise<ApiResponse>;
}