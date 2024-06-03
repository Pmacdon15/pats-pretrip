import { redirect } from "next/navigation";
import { getUser } from "@workos-inc/authkit-nextjs";
export default async function CreateTrip() {
    const { user } = await getUser();
    if (user) {
        redirect(`/pastTrips/${user.email}`);
    }
   

}