'use client';

import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import styles from './page.module.css';

import * as React from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';

export default function CreateTripForm() {
    return (
        <form className={styles.textInputForm}>
            <TextField className={styles.textFieldWide} id="standard-basic" label="Carrier" variant="standard"
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
            <TextField className={styles.textFieldWide} id="standard-basic" label="Address" variant="standard"
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
                }} />
            <div className={styles.formSection}>
                <TextField className={styles.textFieldSlim} id="standard-basic" label="Make" variant="standard"
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
                <TextField className={styles.textFieldSlim} id="standard-basic" label="Model" variant="standard"
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

                <TextField className={styles.textFieldSlim} id="standard-basic" label="Odometer Reading" variant="standard" type="number"
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
                <TextField className={styles.textFieldSlim} id="standard-basic" label="Truck License Plate" variant="standard"
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
            </div>
            {/* MARK: - DateTimePicker */}
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DateTimePicker
                    sx={{
                        marginTop: '1rem',
                        color: "white",
                        textColor: "white",
                        "& .MuiInputLabel-root": {
                            color: "white",
                            "&.Mui-focused": {
                                color: "white",
                            },
                        },
                        "& .MuiOutlinedInput-root": {
                            "& fieldset": {
                                borderColor: "white",
                            },
                            "&.Mui-focused fieldset": {
                                borderColor: "white",
                            },
                        },
                        "& .MuiInputBase-input": {
                            "&:focus": {
                                color: "white",
                            },
                            "&:not(:focus)": { // Add this line
                                color: "white", // Add this line
                            },
                        },
                    }}
                />
            </LocalizationProvider>
            <p className={styles.text} >
                Check box for defects found:
            </p>
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
        </form>
    )
}
