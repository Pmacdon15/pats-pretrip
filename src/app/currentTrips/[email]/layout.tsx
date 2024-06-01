'use server';
import TripContainer from '../../containers/trips/tripContainer';
import { getUser } from '@workos-inc/authkit-nextjs';

export default async function CurrentTrip({
  children,
  // params,
}: {
  children: React.ReactNode;
  // params: { email: string };
}) {
  await getUser({ ensureSignedIn: true });
  return (
    <>
      <TripContainer header='Current Trips'>
        {children}
      </TripContainer>

    </>
  )
}