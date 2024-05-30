'use server';
import styles from './page.module.css';
import TextField from '@mui/material/TextField';

export default async function TruckCheckBoxesForForm() {
    const defects = [
        'Air Brake System',
        'Cab',
        'Cargo Securement',
        'Coupling Devices',
        'Dangerous Goods',
        'Driver Controls',
        'Driver Seat',
        'Safety Devices',
        'Exhaust System',
        'Frame',
        'Fuel System',
        'General',
        'Glass',
        'Mirrors',
        'Heater',
        'Horn',
        'Hydraulic System',
        'Steering',
        'Suspension',
        'Tires',
        'Rims',
        'Hubs',
        'Windows',
        'Wipers',
        'Kingpin',
        'Body',
        'Securement',
        'Lights',
        'Reflectors',
        'Air Lines',
    ];
    return (
        <>
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
                <TextField
                name="remarks"
                required={true}
                className={styles.textFieldWide}
                id="Remarks"
                label="remarks"
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
                    "& .MuiInputBase-input": {
                        "&:focus": {
                            color: "white",
                        },
                        "&:not(:focus)": {
                            color: "white",
                        },
                    },
                }}
                InputLabelProps={{
                    required: false,
                }}
            />
            </div>
        </>
    );
}



