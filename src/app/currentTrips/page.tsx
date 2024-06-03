import { redirect } from "next/navigation";
import { getUser } from "@workos-inc/authkit-nextjs";
export default async function CurrentTrip() {
    const { user } = await getUser();
    if (user) {
        redirect(`/currentTrips/${user.email}`);
    }
   

}