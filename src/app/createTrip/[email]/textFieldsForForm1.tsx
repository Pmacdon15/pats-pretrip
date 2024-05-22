'use server'
import * as React from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import styles from './page.module.css';
import TextField from '@mui/material/TextField';
// import { useForm } from 'react-hook-form';


export default async function TextFieldsForForm1() {
    // const { register } = useForm();
    return (
        <>
            <TextField
                // {...register("carrier")}
                required={true}
                className={styles.textFieldWide}
               
                name="carrier"
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
            
        </>
    )
}