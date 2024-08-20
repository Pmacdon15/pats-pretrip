import styles from './page.module.css';
import { getTripStats } from "../../actions/db";
export default async function TripStats() {
    const amountOfTrips = await getTripStats();
    return (
        <div className={styles.infoBox}>
        <h4>Amount of Trips:</h4>
        {amountOfTrips ? (<div>{amountOfTrips}</div>) : (<div>Loading...</div>)}
    </div>
    );
}