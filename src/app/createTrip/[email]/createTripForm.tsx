import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import styles from './page.module.css';

export default function CreateTripForm() {
    return (
        <>
        <div className={styles.textInputContainer} >
            <TextField className={styles.textField} id="standard-basic" label="Carrier" variant="standard" />
            <TextField className={styles.textField} id="standard-basic" label="Address" variant="standard" />
            <TextField className={styles.textField} id="standard-basic" label="Carrier" variant="standard" />
            <div className={styles.dateTimeContainer}>
            <TextField className={styles.dateTimeField} id="standard-basic" label="Date" variant="standard" />
            <TextField className={styles.dateTimeField} id="standard-basic" label="Time(24hr)" variant="standard" />            
            </div>
            
        </div>
        <div>
        <FormControlLabel control={<Checkbox />} label="Label" />
        </div>
        </> 
    )
}