import { getDefectStats, getMostCommonDefect, getLeastCommonDefect } from "../db";
import styles from './page.module.css';

export default async function DefectStats() {
    const mostCommonDefect = await getMostCommonDefect();
    const amountOfDefects = await getDefectStats();
    const leastCommonDefect = await getLeastCommonDefect();
    return (
        <>
            <div className={styles.infoBox}>
                <h4>Amount of Defects</h4>
                {amountOfDefects ? (<div>{amountOfDefects}</div>) : (<div>Loading...</div>)}
            </div>
            <div className={styles.infoBox}>
                <h4>Most common defect:</h4>
                {mostCommonDefect ? (<div>{mostCommonDefect}</div>) : (<div>Loading...</div>)}
            </div>
            <div className={styles.infoBox}>
                <h4>Least common defect:</h4>
                {leastCommonDefect ? (<div>{leastCommonDefect}</div>) : (<div>Loading...</div>)}
            </div>
        </>
    );
}