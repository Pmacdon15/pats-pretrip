
'use server';

import TrailerSectionOfForm from './trailerSectionOfForm';
import styles from './page.module.css';
import CarrierAndTruckInfo from './carrierAndTruckInfo';
import TruckCheckBoxesForForm from './truckCheckBoxesForForm';
import SubmitButton from './submitButton';


async function submitForm(formData: FormData) {
    'use server'
    const formDataObj: Record<string, string> = {};
    console.log("Form submitted");
    console.table(Array.from(formData.entries()));
}

export default async function CreateTripForm() {
    return (
        <form action={submitForm} className={styles.textInputForm}>
            <CarrierAndTruckInfo />            
            <p className={styles.text}>Check box for defects found:</p>
            <TruckCheckBoxesForForm />
            <p className={styles.dividingLine}>--------------------------------</p>
            <TrailerSectionOfForm />
            <SubmitButton />
        </form>
    );
}
