import { getUser, getSignInUrl, signOut } from '@workos-inc/authkit-nextjs';
import middleware from '../../middleware';
import SignInButton from './signInButton';
import { Button } from '@mui/material';

export default async function LogInLogOuButtons(){
    const { user } = await getUser();
    const signInUrl = await getSignInUrl();
    return(
    user ? (<form action={async () => {
        'use server';
        await signOut();
    }}><Button type="submit" color="inherit">Logout</Button></form>) : (<SignInButton signInUrl={signInUrl} />)
    )
}