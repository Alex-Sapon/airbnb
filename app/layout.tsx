import { ReactNode } from 'react';

import { Nunito } from 'next/font/google';

import { getCurrentUser } from '@/app/actions/getCurrentUser';
import {
  LoginModal,
  RegisterModal,
  RentModal,
  SearchModal,
} from '@/app/components/modals';
import { Navbar } from '@/app/components/navbar/Navbar';
import { Layout } from '@/app/providers/Layout';

export const metadata = {
  title: 'Airbnb',
  description: 'Airbnb clone',
};

const font = Nunito({
  subsets: ['latin'],
});

const RootLayout = async ({ children }: { children: ReactNode }) => {
  const currentUser = await getCurrentUser();

  return (
    <html lang="en">
      <body className={font.className}>
        <Layout>
          <SearchModal />
          <RentModal />
          <LoginModal />
          <RegisterModal />
          {/* @ts-expect-error Server Component */}
          <Navbar currentUser={currentUser} />
          {children}
        </Layout>
      </body>
    </html>
  );
};

export default RootLayout;
