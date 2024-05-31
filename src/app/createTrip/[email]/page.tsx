'use server';
import styles from './page.module.css';
import CreateTripForm from './createTripForm';
// import TrailerSectionOfForm from './trailerSectionOfForm';
import CarrierAndTruckInfo from './carrierAndTruckInfo';
import TruckCheckBoxesForForm from './truckCheckBoxesForForm';
import SubmitButton from './submitButton'

export default async function CreateTrip({ params }: { params: { email: string } }) {
    const decodedEmail = decodeURIComponent(params.email);
    
    return (
        <>
            <h1 className={styles.title} >Create Trip</h1>
            <CreateTripForm email={decodedEmail} >
                <CarrierAndTruckInfo />
                <p className={styles.text}>Check box for defects found:</p>
                <TruckCheckBoxesForForm />
                {/* <TrailerSectionOfForm /> */}
                <SubmitButton />
            </CreateTripForm>
        </>
    )
}