'use client';

import { PuffLoader } from 'react-spinners';

import { LoaderWrapper } from './styles';

export const Loader = () => {
  return (
    <LoaderWrapper>
      <PuffLoader size={100} color="red" />
    </LoaderWrapper>
  );
};
