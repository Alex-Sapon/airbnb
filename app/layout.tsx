import React from 'react';

import { Nunito } from 'next/font/google';

import { getCurrentUser } from '@/app/actions/getCurrentUser';
import { LoginModal, RegisterModal } from '@/app/components/modals';
import { Navbar } from '@/app/components/navbar/Navbar';
import { Layout } from '@/app/providers/Layout';

export const metadata = {
  title: 'Airbnb',
  description: 'Airbnb clone',
};

const font = Nunito({
  subsets: ['latin'],
  preload: true,
});

const RootLayout = async ({ children }: { children: React.ReactNode }) => {
  const currentUser = await getCurrentUser();

  return (
    <html lang="en">
      <body className={font.className}>
        <Layout>
          <LoginModal />
          <RegisterModal />
          <Navbar currentUser={currentUser} />
          {children}
        </Layout>
      </body>
    </html>
  );
};

export default RootLayout;
