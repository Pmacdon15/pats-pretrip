'use server';
import styles from './page.module.css';
import LoginForm  from './loginForm';
import LoginSignUpContainer from '../container/loginSignUpContainer';
export default async function Login() {
    return (
        <LoginSignUpContainer >
            <h1 className={styles.title} >Sign In</h1>
            <LoginForm />
        </LoginSignUpContainer>
    );
}