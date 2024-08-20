'use server';
import CreateTripContainer from '../../components/createTrip/createTripContainer';
import { getUser } from '@workos-inc/authkit-nextjs';

export default async function CreateTrip({
  children,
}: {
  children: React.ReactNode;
}) {
  await getUser({ ensureSignedIn: true });
  return (
    <>
      {/* <AppBar email={decodedEmail} />user?.email*/}
      <CreateTripContainer>
        {children}
      </CreateTripContainer>

    </>
  )
}