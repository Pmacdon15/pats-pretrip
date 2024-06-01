import { getUser } from '@workos-inc/authkit-nextjs';
import { registerIfNotExistingUser } from '@/app/db';
export default async function Home() {
    const { user } = await getUser();

    if (user) {
        await registerIfNotExistingUser(user.email, user.firstName, user.lastName);
    }

    return (
        <div>
            <h1>Home</h1>
            <div>
                <p>
                    Hello {user?.firstName}<br/>
                    This page is under construction. The rest of the site works well. A homePage will be setup shortly.
                </p>
            </div>
        </div>
    );
}
