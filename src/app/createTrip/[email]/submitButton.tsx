import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import styles from "./page.module.css";
export default function SubmitButton() {
    return (
        <div  className={styles.submitContainer}>
        <Button
            type="submit"
            variant="contained"            
        >
            Submit
        </Button>
        <TextField
                name="eSignature"
                required={true}
                // className={styles.textFieldWide}                
                label="eSignature"
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
    );
}