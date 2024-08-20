
'use client';
import styles from './page.module.css';
import { useFormState } from 'react-dom'
import { submitForm } from '@/actions/actions';


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
    const [state, formAction] = useFormState(updateFormWithEmail, initialState)
    return (
        <form action={formAction} className={styles.textInputForm}>
            {children}
            <p aria-live="polite" className="sr-only">
                {state?.message}
            </p>
        </form>
    );
}
