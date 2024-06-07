import { Button } from '@mui/material';
import styles from './addDefect.module.css';
import TruckCheckBoxesForForm from '@/app/createTrip/[email]/truckCheckBoxesForForm';
import { addDefect, changeToMajorDefect, addRemark } from '@/app/db';
import { useEffect, useState } from 'react';

export default function AddDefect({ tripId, defects, onHide }: ({ tripId: number, defects: any, onHide:(formSubmitted: boolean)  => void })) {
    const [show, setShow] = useState(false);

    useEffect(() => {        
        setShow(true);        
    }, []);

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const form = event.currentTarget;
        const formData = new FormData(form);
        //console.log("tripId to be updated: ", tripId);
        Array.from(formData.entries()).forEach(([key, value]) => {
            if (value === "on" && !key.endsWith("M")) {
                const has_m_defect = formData.get(`${key}M`) === "on";
                const selectedDefects = defects.filter((defect: any) => defect.tripid === tripId);
                const existingDefect = selectedDefects.find((defect: any) => defect.name === key);
                if (!existingDefect) {
                    addDefect(tripId, key, has_m_defect);
                    //console.log("Defect: ", key, " Major: ", has_m_defect);
                } else if (existingDefect.has_m_defect === false && has_m_defect === true) {
                    changeToMajorDefect(tripId, key);
                    //console.log("Changed to major defect: ", key);
                }
            }
        });
        const newRemarks = formData.get("remarks") as string;
        await addRemark(tripId, newRemarks);

        setShow(false);
        setTimeout(() => {
            onHide(true);
        }, 1000);
    };

    return (
        <form onSubmit={handleSubmit} className={`${styles.container} ${show ? styles.show : styles.hide}`}>
            Add Defect:
            <TruckCheckBoxesForForm />
            <Button variant="contained" type="submit">
                Submit
            </Button>
            <br />
            <Button variant="contained"  onClick={() => {
                setShow(false);
                setTimeout(() => {
                    onHide(false);
                }, 1000);
            }}>
                Cancel
            </Button>
        </form>
    );
}