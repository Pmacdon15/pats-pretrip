
import { getCurrentTrips, getCurrentTrucksInfo, getCurrentDefects } from "@/actions/db";
import ClientComponent from "@/app/currentTrips/[email]/clientComponent";
import { Trip, Truck } from '@/types/types';

export default async function CurrentTrips({ params }: { params: { email: string } }) {

    const decodedEmail = decodeURIComponent(params.email);
    let fetchedTrips = await getCurrentTrips(decodedEmail) as Trip[];
    fetchedTrips.forEach(trip => {
        trip.inputdate = new Date(trip.inputdate).toLocaleString();
    });
    const fetchedTrucks = await getCurrentTrucksInfo(decodedEmail) as Truck[];
    const fetchedDefects = await getCurrentDefects(decodedEmail) as any;

    return (
        <>
            <ClientComponent email={decodedEmail} trips={fetchedTrips} trucks={fetchedTrucks} defects={fetchedDefects} />
        </>
    );
}