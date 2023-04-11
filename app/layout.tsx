import React from 'react';

import { Nunito } from 'next/font/google';

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
          <div>{children}</div>
        </Layout>
      </body>
    </html>
  );
};

export default RootLayout;
