
import UserStats from './userStats';
import TripStats from './tripStats';
import DefectStats from './defectStats';

import styles from './page.module.css';
export default async function Home() {
   

    return (
        <div className={styles.mainPage}>
            <h1 className={styles.header}>Welcome to the Pat&apos;s Pre-Trips</h1>
            <div className={styles.infoContainer}>
                Pat&apos;s Pre Trips
                Streamline pre-trip inspections with this innovative web app, built with Next.js, Auth Kit, Vercel, and TypeScript. Quickly conduct safety checks and hit the road with confidence!
                Developed by Patrick MacDonald<br />
                Let me know if you&apos;d like me to make any changes!
            </div>
            <div className={styles.infoContainer}>
                <UserStats />
                <TripStats />
                <DefectStats />

            </div>
        </div>
    );
}
