import { getUserStats } from "../db";
import styles from './page.module.css';
export default async function UserStats() {
    const amountOfUsers = await getUserStats();
    return (
        <div className={styles.infoBox}>
            <h4>Amount of users:</h4>
            {amountOfUsers ? (<div>{amountOfUsers}</div>) : (<div>Loading</div>)}
        </div>
    );
}