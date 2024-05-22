
'use server';

import TrailerSectionOfForm from './trailerSectionOfForm';
import styles from './page.module.css';
import TextFieldsForForm from './textFieldsForForm';
import TruckCheckBoxesForForm from './truckCheckBoxesForForm';
import {useForm } from 'react-hook-form';
import SubmitButton from './submitButton';


async function submitForm(formData: FormData) {
    'use server'
    console.log("Form submitted");
    console.table(formData.get("carrier"));
}

export default async function CreateTripForm() {
    return (
        <form action={submitForm} className={styles.textInputForm}>
            <TextFieldsForForm />            
            <p className={styles.text}>Check box for defects found:</p>
            <TruckCheckBoxesForForm />
            <p className={styles.dividingLine}>---------------------------------------</p>
            <TrailerSectionOfForm />
            <SubmitButton />
        </form>
    );
}
