'use server';
import AppBar from '../../appBar';
import { auth } from '../../actions'
import CreateTripContainer from '../../containers/createTripContainer';
export default async function CurrentTrip({
    children,
    params,
  }: {
    children: React.ReactNode;
    params: { email: string };
  }) {
    const decodedEmail = decodeURIComponent(params.email);
    await auth(decodedEmail);
    return (
        <>
            <AppBar email={decodedEmail} />
            <CreateTripContainer>
                {children}
            </CreateTripContainer>
        </>
    )
}