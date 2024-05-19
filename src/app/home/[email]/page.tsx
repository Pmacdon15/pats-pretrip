'use server';
import AppBar from '../../appBar';
import { auth } from '../../actions'
export default async function Home({ params }: { params: { email: string } }) {
    await auth(params.email);
    return (
        <>
        <AppBar />
        {/* <div> Pat's Pre-Trips Home Page</div> */}
        </>
    )
}