import Button from "@mui/material/Button";
export default function SubmitButton() {
    return (
        <Button
            type="submit"
            variant="contained"
            // sx={{
            //     backgroundColor: "#f0c14b",
            //     color: "black",
            //     "&:hover": {
            //         backgroundColor: "#ddb347",
            //     },
            // }}
        >
            Submit
        </Button>
    );
}