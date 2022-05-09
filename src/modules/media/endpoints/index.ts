import { RequestMethod } from 'core/api/types/enums/request-method';
import { EndpointRoute } from 'core/api/types/entities/endpoint-route';
import paths from './paths';
import params from './params';
import filters from './filters';

const MediaEndpoints: { [Key: string]: EndpointRoute } = {
  getMedia: {
    method: RequestMethod.GET,
    host: paths.apiUrl,
    path: [
      paths.search
    ],
    filters
  },
  getAssetManifest: {
    method: RequestMethod.GET,
    host: paths.apiUrl,
    path: [
      paths.asset,
      params.nasaId
    ]
  },
  getAssetMetadata: {
    method: RequestMethod.GET,
    host: paths.apiUrl,
    path: [
      paths.metadata,
      params.nasaId
    ]
  },
  getVideoCaptions: {
    method: RequestMethod.GET,
    host: paths.apiUrl,
    path: [
      paths.captions,
      params.nasaId
    ]
  },
  getAlbumContents: {
    method: RequestMethod.GET,
    host: paths.apiUrl,
    path: [
      paths.album,
      params.albumName
    ]
  }
};

export default MediaEndpoints;