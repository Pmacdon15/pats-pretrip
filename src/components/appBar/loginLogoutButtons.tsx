import { getUser, getSignInUrl } from '@workos-inc/authkit-nextjs';
// import middleware from '../../middleware';
import SignInButton from './signInButton';
import { Button } from '@mui/material';
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation';
//TODO : change this to async
async function signOut() {
    cookies().delete('wos-session');
    redirect('/');
}

export default async function LogInLogOuButtons() {
    'use server'
    const { user } = await getUser();
    const signInUrl = await getSignInUrl();    
   
    return (
        user ? (<form action={async () => {
            'use server';
            await signOut();
        }}><Button type="submit" color="inherit">Logout</Button></form>) : (<SignInButton signInUrl={signInUrl} />)
    )
}