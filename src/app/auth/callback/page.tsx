import { handleAuth } from '@workos-inc/authkit-nextjs';

export default function  GET(){
    handleAuth({ returnPathname: '/' });
}