import prisma from '@/app/libs/prismadb';

export type ListingParams = {
  userId?: string;
  guestCount?: number;
  roomCount?: number;
  bathroomCount?: number;
  locationValue?: string;
  startDate?: string;
  endDate?: string;
  category?: string;
};

export const getListings = async (params: ListingParams) => {
  try {
    const {
      userId,
      guestCount,
      roomCount,
      bathroomCount,
      locationValue,
      startDate,
      endDate,
    } = params;

    const query: any = {};

    if (userId) {
      query.userId = userId;
    }

    if (guestCount) {
      query.guestCount = {
        gte: Number(guestCount),
      };
    }

    if (roomCount) {
      query.roomCount = {
        gte: Number(roomCount),
      };
    }

    if (bathroomCount) {
      query.bathroomCount = {
        gte: Number(bathroomCount),
      };
    }

    if (locationValue) {
      query.locationValue = locationValue;
    }

    if (startDate && endDate) {
      query.NOT = {
        reservations: {
          some: {
            OR: [
              {
                endDate: { gte: endDate },
                startDate: { lte: startDate },
              },
              {
                startDate: { lte: startDate },
                endDate: { gte: endDate },
              },
            ],
          },
        },
      };
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
