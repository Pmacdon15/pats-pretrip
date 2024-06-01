import Home from '@/app/home/page';
import { getUser } from '@workos-inc/authkit-nextjs';

export default async function HomeWithEmail(){
    await getUser({ensureSignedIn: true});
    return (
        <>
        <Home/>
        </>
    );
}