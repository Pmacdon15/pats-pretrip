import { getCurrentTrips } from "@/app/db";
export default async function CurrentTrips({ params }: { params: { email: string } }) {
    const decodedEmail = decodeURIComponent(params.email);
    const trips = await getCurrentTrips(decodedEmail);

    return (
        <>
            {trips?.map((trip, index) => (
                <div key={index}>
                    trip.id: {trip.id}
                    trip.carrier: {trip.carrier}
                    
                </div>
            ))}
        </>
    );

}