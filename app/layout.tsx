import React from 'react';

import { Nunito } from 'next/font/google';

import { Navbar } from '@/app/components/navbar/Navbar';
import Layout from '@/app/styles/layout';

export const metadata = {
  title: 'Airbnb',
  description: 'Airbnb clone',
};

const font = Nunito({
  subsets: ['latin'],
});

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body className={font.className}>
        <Layout>
          <Navbar />
          {children}
        </Layout>
      </body>
    </html>
  );
};

export default RootLayout;
