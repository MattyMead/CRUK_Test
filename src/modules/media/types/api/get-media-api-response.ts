import { MediaCollection } from 'modules/media/types/entities/media-collection';

export type GetMediaApiResponse = {
  version: string;
  href: string;
  items: MediaCollection[];
};