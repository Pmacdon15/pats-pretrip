'use server';
import { getUser } from '@workos-inc/authkit-nextjs';
import TripContainer from '@/app/containers/trips/tripContainer';

export default async function CurrentTrip({
  children,
}: {
  children: React.ReactNode;
}) {

  await getUser({ ensureSignedIn: true });
  return (
    <>
      <TripContainer header='Past Trips'>
        {children}
      </TripContainer>
    </>
  )
}