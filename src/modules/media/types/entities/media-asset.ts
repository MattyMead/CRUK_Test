import { MediaAssetField as FieldName } from 'modules/media/types/enums/media-asset-field';
import { MediaType } from 'modules/media/types/media-type';

export type MediaAsset = {
  [FieldName.CENTER]: string;
  [FieldName.DATE_CREATED]: string;
  [FieldName.DESCRIPTION]: string;
  [FieldName.DESCRIPTION_508]: string;
  [FieldName.KEYWORDS]: string[];
  [FieldName.MEDIA_TYPE]: MediaType;
  [FieldName.NASA_ID]: string;
  [FieldName.SECONDARY_CREATOR]: string;
  [FieldName.TITLE]: string;
};