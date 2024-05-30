'use client';
import { Button } from '@mui/material';
import styles from './addDefect.module.css';
import TruckCheckBoxesForForm from '@/app/createTrip/[email]/truckCheckBoxesForForm';
import { addDefect, changeToMajorDefect } from '@/app/db';


export default function AddDefect({email, tripId, currentDefects, onHide }: ({email:string,  tripId: number, currentDefects: any, onHide: () => void })) {
    // const router = useRouter();
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const form = event.currentTarget;
        const formData = new FormData(form);
        //const data = Object.fromEntries(formData.entries());
        //console.log(data);

        Array.from(formData.entries()).forEach(([key, value]) => {
            if (value === "on" && !key.endsWith("M") ){
                const has_m_defect = formData.get(`${key}M`) === "on";
                const existingDefect = currentDefects.find((defect: any) => defect.name === key);
                if (!existingDefect) {                    
                    addDefect(tripId, key, has_m_defect);
                    console.log("Defect: ", key, " Major: ", has_m_defect);
                }else if (existingDefect.has_m_defect === false && has_m_defect === true){
                    changeToMajorDefect(tripId, key);
                    console.log("Changed to major defect: ", key);

                }
            }
        });       
      
       
        onHide();
    };

    return (
        <form onSubmit={handleSubmit} className={styles.container}>
            Add Defect:
            <TruckCheckBoxesForForm />
            <Button variant="contained" type="submit">
                Submit
            </Button>
            <br />
            <Button variant="contained" onClick={onHide}>
                Cancel
            </Button>
        </form>
    );
}