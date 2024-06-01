'use server';
import AppBar from '../../appBar/appBar';
// import { auth } from '../../actions'
import CreateTripContainer from '../../containers/createTripContainer';
export default async function CreateTrip({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { email: string };
}) {
  const decodedEmail = decodeURIComponent(params.email);
  // await auth(decodedEmail);
  return (
    <>
      {/* <AppBar email={decodedEmail} />user?.email*/}
      <CreateTripContainer>
        {children}
      </CreateTripContainer>

    </>
  )
}