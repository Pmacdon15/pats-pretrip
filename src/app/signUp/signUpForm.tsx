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
import { useState } from "react";

import style from './page.module.css';

export default function LoginForm() {

    const { register } = useForm();

    const [showPassword, setShowPassword] = React.useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [confirmPasswordError, setConfirmPasswordError] = useState("");

    const handlePasswordChange = (e: any) => {
        setPassword(e.target.value);
    };

    const handleConfirmPasswordChange = (e: any) => {
        setConfirmPassword(e.target.value);
        setConfirmPasswordError(e.target.value !== password ? "Passwords do not match" : "");
    };
    return (
        <>
            <form className={style.form} >
                <TextField
                    id="outlined-start-adornment"
                    label="E mail"
                    required={true}
                    {...register("email", { required: true })}
                    sx={{
                        marginLeft: 'auto',
                        marginRight: 'auto',
                        width: '100%',
                        backgroundColor: "white",
                        borderRadius: "5px",
                        color: "black", "& .MuiInputLabel-root": {
                            "&.Mui-focused": {
                                color: "black", // focused label color
                            },
                        },
                    }}
                    InputLabelProps={{
                        required: false,
                    }}
                />
                <TextField
                    id="outlined-start-adornment"
                    label="First Name"
                    required={true}
                    {...register("first_name", { required: true })}
                    sx={{
                        marginLeft: 'auto',
                        marginRight: 'auto',
                        width: '100%',
                        backgroundColor: "white",
                        borderRadius: "5px",
                        color: "black", "& .MuiInputLabel-root": {
                            "&.Mui-focused": {
                                color: "black", // focused label color
                            },
                        },
                    }}
                    InputLabelProps={{
                        required: false,
                    }}
                />
                <TextField
                    id="outlined-start-adornment"
                    label="Last Name"
                    required={true}
                    {...register("last_name", { required: true })}
                    sx={{
                        marginLeft: 'auto',
                        marginRight: 'auto',
                        width: '100%',
                        backgroundColor: "white",
                        borderRadius: "5px",
                        color: "black", "& .MuiInputLabel-root": {
                            "&.Mui-focused": {
                                color: "black", // focused label color
                            },
                        },
                    }}
                    InputLabelProps={{
                        required: false,
                    }}
                />
                <TextField
                    id="outlined-adornment-password"
                    {...register("password", { required: true })}
                    type={showPassword ? 'text' : 'password'}
                    required={true}
                    onChange={handlePasswordChange}
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
                    sx={{
                        marginLeft: 'auto',
                        marginRight: 'auto',
                        width: '100%',
                        backgroundColor: "white",
                        borderRadius: "5px",
                        color: "black", "& .MuiInputLabel-root": {
                            "&.Mui-focused": {
                                color: "black", // focused label color
                            },
                        },
                    }}
                />
                <TextField
                    id="outlined-adornment-password"
                    {...register("confirm_password", { required: true })}
                    type={showPassword ? 'text' : 'password'}
                    required={true}
                    onChange={handleConfirmPasswordChange}
                    error={confirmPasswordError !== ""}
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
                    label="Confirm password"
                    sx={{
                        marginLeft: 'auto',
                        marginRight: 'auto',
                        width: '100%',
                        backgroundColor: "white",
                        borderRadius: "5px",
                        color: "black", "& .MuiInputLabel-root": {
                            "&.Mui-focused": {
                                color: "black", // focused label color
                            },
                        },
                    }}
                />
                <Button
                    variant="contained"
                    type="submit"
                    sx={{ marginLeft: 'auto', marginRight: 'auto', width: '80%', height: '50px' }}
                >
                    Sign In
                </Button>
            </form>
        </>
    );
}