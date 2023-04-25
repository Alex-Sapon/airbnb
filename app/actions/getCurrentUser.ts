import { DefaultSession } from 'next-auth';
import { getServerSession } from 'next-auth/next';

import prisma from '@/app/libs/prismadb';
import { authOptions } from '@/pages/api/auth/[...nextauth]';

export async function getSession() {
  return getServerSession(authOptions);
}

export const getCurrentUser = async () => {
  try {
    const session: DefaultSession | null = await getSession();

    if (!session?.user?.email) {
      return null;
    }

    const currentUser = await prisma.user.findUnique({
      where: {
        email: session.user.email,
      },
    });

    if (!currentUser) {
      return null;
    }

    return {
      ...currentUser,
      createdAt: currentUser.createdAt.toISOString(),
      updatedAt: currentUser.updatedAt.toISOString(),
      emailVerified: currentUser.emailVerified?.toISOString(),
    };
  } catch (error) {
    return null;
  }
};
