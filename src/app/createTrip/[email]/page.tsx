'use server';
import styles from './page.module.css';
import CreateTripForm from './createTripForm';

export default async function CreateTrip({ params }: { params: { email: string } }) {
    const decodedEmail = decodeURIComponent(params.email);    
    return (
        <>
            <h1 className={styles.title} >Create Trip</h1>
            <CreateTripForm email={decodedEmail} />
        </>
    )
}