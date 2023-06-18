import prisma from '@/app/libs/prismadb';

type ParamsType = {
  listingId?: string;
  userId?: string;
  authorId?: string;
};

type QueryType = {
  listingId?: string;
  userId?: string;
  listing?: { userId: string };
};

export const getReservations = async (params: ParamsType) => {
  try {
    const { listingId, userId, authorId } = params;

    const query: QueryType = {};

    if (listingId) {
      query.listingId = listingId;
    }

    if (userId) {
      query.userId = userId;
    }

    if (authorId) {
      query.listing = { userId: authorId };
    }

    const reservations = await prisma.reservation.findMany({
      where: query,
      include: {
        listing: true,
      },
      orderBy: {
        createdAt: 'desc',
      },
    });

    return reservations.map((reservation) => ({
      ...reservation,
      createdAt: reservation.createdAt.toISOString(),
      startDate: reservation.startDate.toISOString(),
      endDate: reservation.endDate.toISOString(),
      listing: {
        ...reservation.listing,
        createdAt: reservation.listing.createdAt.toISOString(),
      },
    }));
  } catch (error: any) {
    throw new Error(error);
  }
};
