
'use client';

import TrailerSectionOfForm from './trailerSectionOfForm';
import styles from './page.module.css';
import CarrierAndTruckInfo from './carrierAndTruckInfo';
import TruckCheckBoxesForForm from './truckCheckBoxesForForm';
import SubmitButton from './submitButton';
import { useFormState } from 'react-dom'
import { submitForm } from '../../actions';



const initialState = {
    message: '',
}

export default function CreateTripForm({ email }: { email: string }) {
    
    const updateFormWithEmail = submitForm.bind(null, email)
    const [state, formAction] = useFormState(updateFormWithEmail, initialState)
    return (
        <form action={formAction} className={styles.textInputForm}>
            {/* <CarrierAndTruckInfo />             */}
            <p className={styles.text}>Check box for defects found:</p>
            <TruckCheckBoxesForForm />
            <p className={styles.dividingLine}>--------------------------------</p>
            {/* <TrailerSectionOfForm /> */}
            <p aria-live="polite" className="sr-only">
                {state?.message}
            </p>
            <SubmitButton />
        </form>
    );
}
