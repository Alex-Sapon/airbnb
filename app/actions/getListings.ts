import { Prisma } from '@prisma/client';

import prisma from '@/app/libs/prismadb';

import Enumerable = Prisma.Enumerable;
import ListingWhereInput = Prisma.ListingWhereInput;

export type ListingParams = {
  userId?: string;
  guestCount?: number;
  roomCount?: number;
  bathroomCount?: number;
  startDate?: string;
  endDate?: string;
  locationValue?: string;
  category?: string;
};

type QueryType = {
  userId?: string;
  category?: string;
  guestCount?: { gte: number };
  roomCount?: { gte: number };
  bathroomCount?: { gte: number };
  locationValue?: string;
  NOT?: Enumerable<ListingWhereInput>;
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
      category,
    } = params;

    const query: QueryType = {};

    if (userId) {
      query.userId = userId;
    }

    if (category) {
      query.category = category;
    }

    if (roomCount) {
      query.roomCount = {
        gte: Number(roomCount),
      };
    }

    if (guestCount) {
      query.guestCount = {
        gte: Number(guestCount),
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
                endDate: { gte: startDate },
                startDate: { lte: startDate },
              },
              {
                startDate: { lte: endDate },
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
