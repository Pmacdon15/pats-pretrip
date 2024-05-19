'use server';
import styles from './page.module.css';
import LoginForm  from './loginForm';
export default async function Login() {
    return (
        <div className={styles.mainContainer} >
            <h1 className={styles.title} >Sign In</h1>
            <LoginForm />
        </div>
    );
}