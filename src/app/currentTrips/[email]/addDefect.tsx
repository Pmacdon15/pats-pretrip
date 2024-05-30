'use client';
import { Button } from '@mui/material';
import styles from './addDefect.module.css';
import TruckCheckBoxesForForm from '@/app/createTrip/[email]/truckCheckBoxesForForm';
export default function AddDefect() {
    return (
        <>
            <form className={styles.container} >Add Defect
                <TruckCheckBoxesForForm />
                <Button variant="contained" type="submit">Submit</Button>
            </form>
        </>
    );
}