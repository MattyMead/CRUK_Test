import { IsNullUndefinedOrEmpty } from 'core/utils/isNullOrUndefined';
import { useImageSearch } from 'modules/media/context';
import React from 'react';
import { Text } from '@cruk/cruk-react-components';
import styled from 'styled-components';

const MediaItemContainer = styled.div`
  display: flex;
  width: 100%;
  height: auto;
  padding: 20px;
  border: 1px solid black;
`;

const ImageContainer = styled.div`
  display: flex;
  width: 300px;
  height: 300px;
  margin-right: 20px;
`;

const AssetInfo = styled.div`
  display: flex;
  flex: 1;
  height: 300px;
`;

export const SearchResults: React.FC<{}> = () => {
  const { mediaItems, hasSearched } = useImageSearch();

  const renderMediaItems = () => {
    return mediaItems.map(mediaItem => {
      const data = mediaItem.data[0];
      return (
        <MediaItemContainer key={data.nasa_id}>
          <ImageContainer style={{
            background: `url(${mediaItem.links[0].href})`
          }}>
            <img width={300} height={300} src={mediaItem.links[0].href} />
          </ImageContainer>
          <AssetInfo>
            <Text>Description: {data.description}</Text>
          </AssetInfo>
        </MediaItemContainer>
      );
    });
  };

  if (!hasSearched) return null;

  return IsNullUndefinedOrEmpty(mediaItems)
    ? <Text>There are no results to display</Text>
    : renderMediaItems();
};