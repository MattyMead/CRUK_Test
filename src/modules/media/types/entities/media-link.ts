import { MediaLinkField as FieldName } from 'modules/media/types/enums/media-link-field';

export type MediaLink = {
  [FieldName.HREF]: string;
  [FieldName.REL]: string;
  [FieldName.RENDER]: string;
};