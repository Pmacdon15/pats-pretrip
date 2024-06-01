import { getUser } from '@workos-inc/authkit-nextjs';
import Login from './login/page';
export default async function Home() {
  const { user } = await getUser();
  if(!user){
   
  }

  return (
    <div>
      <h1>Home</h1>
      {user?.firstName}<br />
    </div>
    // <Login/>
  );
}
