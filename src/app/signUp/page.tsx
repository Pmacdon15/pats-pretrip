import styles from './page.module.css';
import SignUpForm from './signUpForm';
import LoginSignUpContainer from '../containers/loginSignUpContainer';
export default function SignUp() {
    return (
        <>
            <div className={styles.title}>
                <h1>Pat&apos;s Pre-Trip</h1>
            </div>
            <LoginSignUpContainer>
                <h1 className={styles.title}>Sign Up</h1>
                <SignUpForm />
            </LoginSignUpContainer>
        </>
    );
}
