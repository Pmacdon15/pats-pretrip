
import styles from './page.module.css';

export default function CurrentTripContainer({
    children,
    header
}: {
    children: React.ReactNode;
    header: string;
}) {
    return <div className={styles.mainTripPage}>
        <h1>{header}</h1>
        <div className={styles.mainTripBasicAndInDepth}>
            {children}
        </div>
    </div>
}