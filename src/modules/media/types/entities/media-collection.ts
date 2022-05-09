import { MediaAsset } from 'modules/media/types/entities/media-asset';
import { MediaLink } from 'modules/media/types/entities/media-link';
import { MediaCollectionField as FieldName } from 'modules/media/types/enums/media-collection-field';

export type MediaCollection = {
  [FieldName.HREF]: string;
  [FieldName.DATA]: MediaAsset[];
  [FieldName.LINKS]: MediaLink[];
};