import AppBar from '../../appBar';
import { auth } from '../../actions';
export default async function PastTrips({ params }: { params: { email: string } }) {
    await auth(params.email);
    return (
        <>
        <AppBar />        
        </>
    );
}