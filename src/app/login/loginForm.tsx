'use client';

import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import { useForm } from "react-hook-form";
import style from './page.module.css';
import { login } from "@/app/actions";
import { useFormState } from 'react-dom';

const initialState = {
    message: '',
}

export default function LoginForm() {
    const [state, formAction] = useFormState(login, initialState);
    const { register } = useForm();

    const [showPassword, setShowPassword] = React.useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };
    return (
        <>
            <form  action={formAction} className={style.form} >
                <TextField
                    id="outlined-start-adornment"
                    label="E mail"
                    required={true}
                    {...register("email", { required: true })}
                    sx={{ marginLeft: 'auto', marginRight: 'auto', width: '100%', backgroundColor: "white", borderRadius: "5px", color: "black" }}
                    InputLabelProps={{
                        required: false,
                    }}
                />
                <TextField
                    id="outlined-adornment-password"
                    {...register("password", { required: true })}
                    type={showPassword ? 'text' : 'password'}
                    required={true}
                    InputLabelProps={{
                        required: false,
                    }}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                    edge="end"
                                >
                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                        ),
                    }}
                    label="Password"
                    sx={{ marginLeft: 'auto', marginRight: 'auto', width: '100%', backgroundColor: "white", borderRadius: "5px", color: "black" }}
                />
                <FormControlLabel control={<Checkbox />} label="Remember-me" sx={{ marginLeft: "5px", float: "left" }} />
                {state?.message}
                <Button
                    variant="contained"
                    type="submit"
                    sx={{ marginLeft: 'auto', marginRight: 'auto', width: '80%', height: '50px' }}
                >
                    Sign In
                </Button>
                <p>If you don&apos;t have an account,
                    <Link href="/signUp" sx={{ marginLeft: 'auto', marginRight: 'auto', width: '80%', textAlign: 'center', color: 'black' }}> click here!</Link>
                </p>
            </form>
        </>
    );
}