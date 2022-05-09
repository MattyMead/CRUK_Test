import { MediaType } from 'modules/media/types/media-type';

export type MediaSearchParams = {
  keywords: string;
  mediaType: MediaType;
  yearStart?: number;
};