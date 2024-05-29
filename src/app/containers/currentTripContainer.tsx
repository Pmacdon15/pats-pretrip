
import styles from './page.module.css';

export default function CurrentTripContainer({
    children,
}: {
    children: React.ReactNode;
}) {    
    return <div className={styles.mainCurrentPage}> {children}</div>
}