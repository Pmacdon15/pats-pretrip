'use client'
import * as React from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import styles from './page.module.css';
import TextField from '@mui/material/TextField';
// import { useForm } from 'react-hook-form';


export default function TextFieldsForForm() {
    // const { register } = useForm();
    return (
        <>
            <TextField
                name="carrier"
                required={true}
                className={styles.textFieldWide}
                id="carrier"
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
            <TextField
                name='carrierAddress'
                required={true}
                className={styles.textFieldWide}
                id="standard-basic"
                label="Carrier Address"
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
            <TextField
            name='inspectionAddress'
            required={true}
            className={styles.textFieldWide}
            id="standard-basic"
            label="Inspection Address"
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
            <div className={styles.formSection}>
                <TextField
                    name='make'
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
                <TextField
                    name='model'
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

                <TextField
                    name='odometer'
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
                <TextField
                    name='truckLP'
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
            </div>
            {/* MARK: - DateTimePicker */}
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DateTimePicker
                    name='dateTime'
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