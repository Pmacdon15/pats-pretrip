import styles from './page.module.css';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

export default function TrailerSectionOfForm() {
    return(
        <>
        <TextField className={styles.textFieldSlim} id="standard-basic" label="Trailer License Plate" variant="standard"
                sx={{
                    "& .MuiInputLabel-root": {
                        color: "white",
                        "&.Mui-focused": {
                            color: "white",
                        },
                    },
                    "& .MuiInput-underline": {
                        "&:before": {
                            borderBottomColor: "white",
                        },
                        "&:after": {
                            borderBottomColor: "white",
                        },
                    },
                }}
            />
            <div className={styles.checkboxContainer}>
                <FormControlLabel className={styles.checkbox} control={<Checkbox sx={{ color: "white" }} />} label="Brake Connections" sx={{ color: "white" }} />
            </div>
        </>
    )
}