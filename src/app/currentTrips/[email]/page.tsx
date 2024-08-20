
import { getCurrentTrips, getCurrentTrucksInfo, getCurrentDefects } from "@/actions/db";
import ClientComponent from "@/app/currentTrips/[email]/clientComponent";
import { Trip, Truck } from '@/types/types';

export default async function CurrentTrips({ params }: { params: { email: string } }) {

    const decodedEmail = decodeURIComponent(params.email);   

    return (
        <>
            <ClientComponent email={decodedEmail} />
        </>
    );
}