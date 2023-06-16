'use client';

import { useEffect } from 'react';

import { EmptyState } from '@/app/components/emptyState/EmptyState';

type ErrorProps = {
  error: Error;
};

const Error = ({ error }: ErrorProps) => {
  useEffect(() => {
    console.log(error);
  }, [error]);

  return <EmptyState title="Uh Oh" subtitle="Something went wrong!" />;
};

export default Error;
