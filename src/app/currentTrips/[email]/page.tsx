import AppBar from '../../appBar';
import {auth} from '../../actions'
export default async function CurrentTrips({ params }: { params: { email: string } }) {
    const decodedEmail = decodeURIComponent(params.email);
    await auth(decodedEmail);
    return (
        <>
        <AppBar email={decodedEmail} />
       
        </>
    );
}