'use client';
import { Button } from '@mui/material';
import styles from './addDefect.module.css';
import TruckCheckBoxesForForm from '@/app/createTrip/[email]/truckCheckBoxesForForm';
import { test} from '@/app/actions';

export default function AddDefect({ onHide }:({ onHide: () => void }) ) {
const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    test();
    alert('Feature coming soon');
    onHide();
};

return (
    <form onSubmit={handleSubmit} className={styles.container}>
        Add Defect
        <TruckCheckBoxesForForm />
        <Button variant="contained" type="submit">
            Submit
        </Button>  
        <br/>   
        <Button variant="contained" onClick={onHide}>
            Cancel
        </Button> 
    </form>
);
}