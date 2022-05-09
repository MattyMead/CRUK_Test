import { ISuccessAction, ISimpleAction } from 'core/redux/types/IAction';
import { actionTypeSuccess } from 'core/redux/utils';
import ActionTypes from 'modules/media/action-types';
import { IMediaState } from 'modules/media/types/state/media-state';
import _ from 'core/utils/deepdash';
import { Reducer } from 'react';
import { GetMediaApiResponse } from 'modules/media/types/api/get-media-api-response';

const buildInitialState = (): IMediaState => {
  const state: IMediaState = {
    items: []
  };

  return state;
};

type AllowedActionTypes = ISuccessAction | ISimpleAction;

const PostsReducer: Reducer<IMediaState, AllowedActionTypes> =
(state = buildInitialState(), action: AllowedActionTypes) => {
  const simpleAction = action as ISimpleAction;
  const successAction = action as ISuccessAction;

  switch (action.type) {
    case actionTypeSuccess(ActionTypes.GET_MEDIA): {
      const newState = _.cloneDeep(state);

      const data = successAction.data.collection as GetMediaApiResponse;

      newState.items = data.items;

      return newState;
    }

    default:
      return state;
  }
};

export default PostsReducer;