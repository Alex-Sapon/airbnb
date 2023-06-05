import { NextResponse } from 'next/server';

import { getCurrentUser } from '@/app/actions';
import prisma from '@/app/libs/prismadb';

type ParamsType = {
  reservationId: string;
};

export async function DELETE(
  request: Request,
  { params }: { params: ParamsType }
) {
  const currentUser = await getCurrentUser();

  const { reservationId } = params;

  if (!currentUser) {
    return NextResponse.error();
  }

  if (!reservationId) {
    throw new Error('Invalid ID');
  }

  const reservations = await prisma.reservation.deleteMany({
    where: {
      id: reservationId,
      OR: [{ userId: currentUser.id }, { listing: { userId: currentUser.id } }],
    },
  });

  return NextResponse.json(reservations);
}
