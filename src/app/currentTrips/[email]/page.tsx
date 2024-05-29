import styles from './page.module.css';
import { getCurrentTrips, getTrucksInfo } from "@/app/db";
export default async function CurrentTrips({ params }: { params: { email: string } }) {
    const decodedEmail = decodeURIComponent(params.email);
    const trips = await getCurrentTrips(decodedEmail);
    const trucks = await getTrucksInfo(decodedEmail);
    console.log(trucks)
    console.log(trips)
    return (
        <>
            <div className={styles.tripsBasicInfoContainer} >
                {trips?.map((trip, index) => (
                    <div key={index}>
                        Vehicle: {trucks && trucks[index]?.trucklp}, <br />
                        {trip.datetime.toLocaleString()}
                    </div>
                ))}
            </div>
            <div className={styles.tripsInDepthInfoContainer}>
            </div>
        </>
    );

}