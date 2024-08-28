'use client';
import * as React from 'react';
import styles from './page.module.css';
import TextField from '@mui/material/TextField';
import GeoLocation from '@/app/location/geoLocation';

export default function TextFieldsForForm() {
    const location = GeoLocation()    
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
                defaultValue={location}
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
                    shrink: location ? true : false 
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
                        "& .MuiInputBase-input": {
                            "&:focus": {
                                color: "white",
                            },
                            "&:not(:focus)": {
                                color: "white",
                            },
                        },
                    }}
                />
                <TextField
                    name="trailerLP2"
                    className={styles.textFieldSlim}
                    id="standard-basic"
                    label="Second Trailer License Plate"
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
                />
            </div>
        </>
    )
}