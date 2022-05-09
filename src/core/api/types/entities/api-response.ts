import { ApiResponseData } from 'core/api/types/entities/api-response-data';
import { ApiResponseError } from 'core/api/types/entities/api-response-error';

export type ApiResponse = {
  response: {
    ok: boolean;
  };
  data?: ApiResponseData;
  error?: ApiResponseError;
};