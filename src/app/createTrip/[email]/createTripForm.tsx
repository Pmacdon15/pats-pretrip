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
        <>
            {/* MARK: - Start of CreateTripForm */}
            <div className={styles.textInputContainer} style={{ marginTop: '1rem' }}>
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
                                borderBottomColor: "white",
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
                                borderBottomColor: "white",
                            },
                        },
                    }} />
                {/* <TextField className={styles.textField} id="standard-basic" label="Carrier" variant="standard"
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
                    }} /> */}
                {/* MARK: - DateTimePicker */}
                <div className={styles.dateTimeContainer}>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DateTimePicker sx={{
                            marginTop: '1rem',
                            color: "white",
                            "& .MuiInputLabel-root": {
                                color: "white",
                                "&.Mui-focused": {
                                    color: "white", // focused label color
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
                        }}
                        />
                    </LocalizationProvider>
                    <TextField id="standard-basic" label="Odometer Reading" variant="standard" type="number"
                        sx={{
                            marginTop: '1rem',
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
                </div>
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
                </div>
            </div>
        </>
    )
}
