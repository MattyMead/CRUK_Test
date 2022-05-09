import { ImageSearchProvider } from 'modules/media/context';
import { ImageSearchForm } from 'modules/media/views/components/image-search-form';
import { SearchResults } from 'modules/media/views/components/search-results';
import React from 'react';

export const ImageSearchPage: React.FC<{}> = () => {
  return (
    <ImageSearchProvider>
      <ImageSearchForm />
      <SearchResults />
    </ImageSearchProvider>
  );
};