import styles from './page.module.css';
import SignUpForm from './signUpForm';

export default function SignUp() {
    return (
        <div className={styles.mainContainer} >
            <h1 className={styles.title}>Sign Up</h1>
            <SignUpForm />
        </div>
    );
}