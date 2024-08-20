'use server';
import styles from './page.module.css';
import CreateTripForm from '../../../components/createTrip/createTripForm';
// import TrailerSectionOfForm from './trailerSectionOfForm';
import CarrierAndTruckInfo from '../../../components/createTrip/carrierAndTruckInfo';
import TruckCheckBoxesForForm from '../../../components/createTrip/truckCheckBoxesForForm';
import SubmitButton from '../../../components/createTrip/submitButton'

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