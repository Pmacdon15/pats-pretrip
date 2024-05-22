
'use server';

import TrailerSectionOfForm from './trailerSectionOfForm';
import styles from './page.module.css';
import CarrierAndTruckInfo from './carrierAndTruckInfo';
import TruckCheckBoxesForForm from './truckCheckBoxesForForm';
import SubmitButton from './submitButton';


async function submitForm(formData: FormData) {
    'use server'
    console.log("Form submitted");
    console.table(formData.get("carrier"));
    console.table(formData.get("dateTime"));
}

export default async function CreateTripForm() {
    return (
        <form action={submitForm} className={styles.textInputForm}>
            <CarrierAndTruckInfo />            
            <p className={styles.text}>Check box for defects found:</p>
            <TruckCheckBoxesForForm />
            <p className={styles.dividingLine}>---------------------------------------</p>
            <TrailerSectionOfForm />
            <SubmitButton />
        </form>
    );
}
