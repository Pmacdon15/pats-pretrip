import styles from './page.module.css';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

export default function TrailerSectionOfForm() {
    const defects = [
        'Kingpin',
        'Body',
        'Frame',
        'Securement',
        'Lights',
        'Reflectors',
        'Rims',
        'Tires',
        "Hubs",
    ];

    return(
        <>
        <TextField 
        name="trailerLP"
        className={styles.textFieldSlim} 
        id="standard-basic" 
        label="Trailer License Plate" 
        variant="standard"
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
            <div className={styles.mainContainer}>
                {defects.map((defect, index) => {
                    const words = defect.split(' ');
                    const name = words[0].toLowerCase() + words.slice(1).join('');
                    const majorName = name + 'M';
                    return (
                        <div key={index} className={styles.checkboxContainer}>
                            <input
                                name={name}
                                className={styles.checkbox}
                                type="checkbox"
                            />
                            <label className={styles.label}>{defect}</label>
                            <div className={styles.hiddenInfo}>
                                <input
                                    name={majorName}
                                    className={styles.checkbox}
                                    type="checkbox"
                                />
                                <label className={styles.label}>Check here for major.</label>
                            </div>
                        </div>
                    );
                })}
            </div>
        </>
    )
}