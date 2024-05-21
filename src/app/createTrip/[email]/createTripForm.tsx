'use client';

import TrailerSectionOfForm from './trailerSectionOfForm';
import styles from './page.module.css';
import TextFieldsForForm from './textFieldsForForm';
import TruckCheckBoxesForForm from './truckCheckBoxesForForm';

export default function CreateTripForm() {
    return (
        <form className={styles.textInputForm}>
            <TextFieldsForForm />
            <p className={styles.text} >Check box for defects found:</p>
            <TruckCheckBoxesForForm />
            <p className={styles.dividingLine} >---------------------------------------</p>
            <TrailerSectionOfForm />            
        </form>
    )
}
