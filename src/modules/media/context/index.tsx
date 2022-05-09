import { useRequestContext } from 'core/api/context';
import { IFilter } from 'core/filtering/types/entities/IFilter';
import { FilterOperator } from 'core/filtering/types/enums/FilterOperator';
import { FilterType } from 'core/filtering/types/enums/FilterType';
import { useTypedSelector } from 'core/redux/utils';
import { IsNullOrUndefined } from 'core/utils/isNullOrUndefined';
import { Actions, Selectors } from 'modules/media';
import { MediaAsset } from 'modules/media/types/entities/media-asset';
import { MediaCollection } from 'modules/media/types/entities/media-collection';
import { MediaSearchParams } from 'modules/media/types/image-search-params';
import React, { createContext, PropsWithChildren, useContext, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

export interface IImageSearchContext {
  mediaItems: MediaCollection[];
  hasSearched: boolean;
  handleSearch: (params: MediaSearchParams) => void;
}

export const ImageSearchContext = createContext<IImageSearchContext>({} as IImageSearchContext);

export const ImageSearchProvider: React.FC<PropsWithChildren<{}>> =
(props: PropsWithChildren<{}>) => {

  const dispatch = useDispatch();

  const mediaItems = useTypedSelector(state => Selectors.getMedia(state, 10));

  const [hasSearched, setHasSearched] = useState(false);

  const handleSearch = (params: MediaSearchParams) => {
    setHasSearched(true);

    const filters = Object.entries(params)
      .map(([key, value]) => {
        return {
          field: key,
          type: FilterType.Search,
          operator: FilterOperator.Equals,
          value: value
        } as IFilter;
      });

    return new Promise((onResolve, onReject) => {
      dispatch(Actions.getMedia({
        filters,
        promise: {
          onResolve,
          onReject
        }
      }));
    });
  };

  const context = {
    mediaItems,
    hasSearched,
    handleSearch
  };

  return (
    <ImageSearchContext.Provider value={context}>
      {props.children}
    </ImageSearchContext.Provider>
  );
};

export const useImageSearch = (): IImageSearchContext =>
  useContext(ImageSearchContext);