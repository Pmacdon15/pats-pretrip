import { handleAuth, getUser } from '@workos-inc/authkit-nextjs';

export const GET = handleAuth({ returnPathname: '/' });