import { AppState } from 'core/redux/types/app-state';
import _ from 'core/utils/deepdash';
import { IMediaState } from 'modules/media/types/state/media-state';
import { MODULE_NAME } from '../constants';

const getState = (state: AppState): IMediaState => _.cloneDeep(state[MODULE_NAME]);

export const getMedia = (state: AppState, quantity: number): IMediaState['items'] =>
  getState(state).items.slice(0, quantity);