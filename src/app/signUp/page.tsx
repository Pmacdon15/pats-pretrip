import styles from './page.module.css';
import SignUpForm from './signUpForm';
import LoginSignUpContainer from '../containers/loginSignUpContainer';
export default function SignUp() {
    return (
        <LoginSignUpContainer>
            <h1 className={styles.title}>Sign Up</h1>
            <SignUpForm />
        </LoginSignUpContainer>
    );
}