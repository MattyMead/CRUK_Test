import { IAsyncActionParams } from 'core/api/types/entities/async-action-params';
import { ISimpleAction } from 'core/redux/types/IAction';
import { createAction, createAsyncAction } from 'core/redux/utils';
import { ActionTypes } from 'modules/media';
import MediaEndpoints from 'modules/media/endpoints';
import { MediaAsset } from 'modules/media/types/entities/media-asset';

export interface IMediaActionParams
  extends IAsyncActionParams<MediaAsset | string> {
  nasaId?: string;
}

export const getMedia: (params: IMediaActionParams) => ISimpleAction =
  (params) => createAsyncAction(
    ActionTypes.GET_MEDIA,
    MediaEndpoints.getMedia,
    params
  );