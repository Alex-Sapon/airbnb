'use client';

import { useRouter } from 'next/navigation';

import { Button } from '@/app/components/button/Button';
import { Heading } from '@/app/components/heading/Heading';

import { EmptyStateWrapper } from './styles';

type EmptyStateProps = {
  title?: string;
  subtitle?: string;
  buttonLabel?: string;
  showReset?: boolean;
};

export const EmptyState = ({
  title = 'No exact matches',
  subtitle = 'Try changing or removing some of your filters',
  buttonLabel = 'Remove all filters',
  showReset,
}: EmptyStateProps) => {
  const router = useRouter();

  const handleReset = () => router.push('/');

  return (
    <EmptyStateWrapper>
      <Heading title={title} subtitle={subtitle} />
      {showReset && (
        <Button outline label={buttonLabel || ''} onClick={handleReset} />
      )}
    </EmptyStateWrapper>
  );
};
