import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import styles from './page.module.css';

export default function TruckCheckBoxesForForm() {
    return (
        <>
            <div className={styles.checkboxContainer}>
                <FormControlLabel className={styles.checkbox} control={<Checkbox sx={{ color: "white" }} />} label="Air Compressor" sx={{ color: "white" }} />
                <FormControlLabel className={styles.checkbox} control={<Checkbox sx={{ color: "white" }} />} label="Air Lines" sx={{ color: "white" }} />
                <FormControlLabel className={styles.checkbox} control={<Checkbox sx={{ color: "white" }} />} label="Battery" sx={{ color: "white" }} />
                <FormControlLabel className={styles.checkbox} control={<Checkbox sx={{ color: "white" }} />} label="Belts" sx={{ color: "white" }} />
                <FormControlLabel className={styles.checkbox} control={<Checkbox sx={{ color: "white" }} />} label="Hoses" sx={{ color: "white" }} />
                <FormControlLabel className={styles.checkbox} control={<Checkbox sx={{ color: "white" }} />} label="Body" sx={{ color: "white" }} />
                <FormControlLabel className={styles.checkbox} control={<Checkbox sx={{ color: "white" }} />} label="Brake System" sx={{ color: "white" }} />
                <FormControlLabel className={styles.checkbox} control={<Checkbox sx={{ color: "white" }} />} label="Clutch" sx={{ color: "white" }} />
                <FormControlLabel className={styles.checkbox} control={<Checkbox sx={{ color: "white" }} />} label="Coupling Devices" sx={{ color: "white" }} />
                <FormControlLabel className={styles.checkbox} control={<Checkbox sx={{ color: "white" }} />} label="Defrost/Heater" sx={{ color: "white" }} />
                <FormControlLabel className={styles.checkbox} control={<Checkbox sx={{ color: "white" }} />} label="Drive Line" sx={{ color: "white" }} />
                <FormControlLabel className={styles.checkbox} control={<Checkbox sx={{ color: "white" }} />} label="Engine" sx={{ color: "white" }} />
                <FormControlLabel className={styles.checkbox} control={<Checkbox sx={{ color: "white" }} />} label="Exhaust" sx={{ color: "white" }} />
                <FormControlLabel className={styles.checkbox} control={<Checkbox sx={{ color: "white" }} />} label="Fifth Wheel" sx={{ color: "white" }} />
            </div>
        </>
    );
}