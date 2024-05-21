import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import styles from './page.module.css';

export default function CreateTripForm() {
    return (
        <>
            <div className={styles.textInputContainer} >
                <TextField className={styles.textField} id="standard-basic" label="Carrier" variant="standard"
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
                                borderBottomColor: "#F7F7F7",
                            },
                        },
                    }}

                />
                <TextField className={styles.textField} id="standard-basic" label="Address" variant="standard"
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
                                borderBottomColor: "#F7F7F7",
                            },
                        },
                    }} />
                <TextField className={styles.textField} id="standard-basic" label="Carrier" variant="standard"
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
                                borderBottomColor: "#F7F7F7",
                            },
                        },
                    }} />
                <div className={styles.dateTimeContainer}>
                    <TextField className={styles.dateTimeField} id="standard-basic" label="Date" variant="standard"
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
                                    borderBottomColor: "#F7F7F7",
                                },
                            },
                        }} />
                    <TextField className={styles.dateTimeField} id="standard-basic" label="Time(24hr)" variant="standard"
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
                                    borderBottomColor: "#F7F7F7",
                                },
                            },
                        }} />
                </div>

            </div>
            <div>
                <FormControlLabel control={<Checkbox sx={{color:"white"}}/>} label="Label" sx={{color:"white"}} />
            </div>
        </>
    )
}