
import styles from './page.module.css';

export default function CreateTripContainer({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {    
    return <div className={styles.mainCreatePage}> {children}</div>
}