'use client';
import * as React from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import styles from './page.module.css';
import TextField from '@mui/material/TextField';
import { useForm } from 'react-hook-form';


export default function TextFieldsForForm() {
    const { register } = useForm();
    return (
        <>
            <TextField
                {...register("carrier")}
                required={true}
                className={styles.textFieldWide}
                id="standard-basic"
                label="Carrier"
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
                InputLabelProps={{
                    required: false,
                }}
            />
            <TextField
                {...register("address")}
                required={true}
                className={styles.textFieldWide}
                id="standard-basic"
                label="Address"
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
                InputLabelProps={{
                    required: false,
                }}
            />
            <div className={styles.formSection}>
                <TextField
                    {...register("make")}
                    required={true}
                    className={styles.textFieldSlim}
                    id="standard-basic"
                    label="Make"
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
                    InputLabelProps={{
                        required: false,
                    }}
                />
                <TextField
                    {...register("model")}
                    required={true}
                    className={styles.textFieldSlim}
                    id="standard-basic"
                    label="Model"
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
                    InputLabelProps={{
                        required: false,
                    }}
                />

                <TextField
                    {...register("odometer")}
                    required={true}
                    className={styles.textFieldSlim}
                    id="standard-basic"
                    label="Odometer Reading"
                    variant="standard"
                    type="number"
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
                        "& .MuiInputBase-input": { // Add this line
                            "&:focus": { // Add this line
                                color: "white", // Add this line
                            },
                            "&:not(:focus)": { // Add this line
                                color: "white", // Add this line
                            },
                        },
                    }}
                    InputLabelProps={{
                        required: false,
                    }}
                />
                <TextField
                    {...register("truckLP")}
                    required={true}
                    className={styles.textFieldSlim}
                    id="standard-basic"
                    label="Truck License Plate"
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
                    InputLabelProps={{
                        required: false,
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
        </>
    )
}