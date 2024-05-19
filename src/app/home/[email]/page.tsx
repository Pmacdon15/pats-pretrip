'use server';
import AppBar from '../../appBar';
import { auth } from '../../actions'
export default async function Home({ params }: { params: { email: string } }) {
    const decodedEmail = decodeURIComponent(params.email);
    await auth(decodedEmail);
    return (
        <>
        <AppBar email={decodedEmail}/>
        {/* <div> Pat's Pre-Trips Home Page</div> */}
        </>
    )
}