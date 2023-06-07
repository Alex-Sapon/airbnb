import prisma from '@/app/libs/prismadb';

export type ListingParams = {
  userId: string;
};

export const getListings = async (params: ListingParams) => {
  try {
    const { userId } = params;

    const query = {} as ListingParams;

    if (userId) {
      query.userId = userId;
    }

    const listings = await prisma.listing.findMany({
      where: query,
      orderBy: {
        createdAt: 'desc',
      },
    });

    return listings.map((listing) => ({
      ...listing,
      createdAt: listing.createdAt.toISOString(),
    }));
  } catch (error: any) {
    throw new Error(error);
  }
};
