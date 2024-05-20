import styles from './page.module.css';

export default function LoginSignUpContainer({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return <div className={styles.mainContainer}> {children}</div>
}