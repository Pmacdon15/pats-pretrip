import AppBar from '../../appBar';
import {auth} from '../../actions'
export default async function CurrentTrips({ params }: { params: { email: string } }) {
    await auth(params.email);
    return (
        <>
        <AppBar />
       
        </>
    );
}