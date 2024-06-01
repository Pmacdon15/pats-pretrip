'use server';
import styles from './page.module.css';
import LoginForm from './loginForm';
import LoginSignUpContainer from '../containers/loginSignUpContainer';
export default async function Login() {
    return (
        <>
            <div className={styles.title}>
                <h1>Pat&apos;s Pre-Trip</h1>
            </div>
            <LoginSignUpContainer >
                <h1 className={styles.title} >Sign In</h1>
                <LoginForm />
            </LoginSignUpContainer>
        </>
    );
}