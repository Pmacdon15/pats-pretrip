import { getUser } from '@workos-inc/authkit-nextjs';
import Home from '@/app/home/page';
export default async function Base() {
  const { user } = await getUser();
  if(!user){
   
  }

  return (
    <>
      <Home/>
    </>
   
  );
}
