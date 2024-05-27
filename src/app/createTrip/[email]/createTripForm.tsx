
'use client';
import styles from './page.module.css';
import { useFormState } from 'react-dom'
import { submitForm } from '../../actions';



const initialState = {
    message: '',
}

export default function CreateTripForm({
    children,
    email,
}: {
    children: React.ReactNode;
    email: string;
}) {
    const updateFormWithEmail = submitForm.bind(null, email)
    //const [state, formAction] = useFormState(updateFormWithEmail, initialState)
    return (
        <form action={updateFormWithEmail} className={styles.textInputForm}>            
            {children}            
            
            {/* <SubmitButton /> */}
        </form>
    );
}
