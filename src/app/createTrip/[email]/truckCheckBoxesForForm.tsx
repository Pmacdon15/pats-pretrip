// import FormControlLabel from '@mui/material/FormControlLabel';
// import Checkbox from '@mui/material/Checkbox';
import styles from './page.module.css';

export default function TruckCheckBoxesForForm() {
    const defects = [
        'Air Brake System',
        'Cab',
        'Cargo Securement',
        'Coupling Devices',
        'Dangerous Goods',
        'Driver Controls',
        'Driver Seat',
        'Safety Devices',
        'Exhaust System',
        'Frame',
        'Fuel System',
        'General',
        'Glass',
        'Mirrors',
        'Heater',
        'Horn',
        'Hydraulic System',
        'Lamps',
        'Steering',
        'Suspension',
        'Tires',
        'Rims',
        'Hubs',
        'Windows',
        'Wipers',  

    ];
    return (
        <>
            <div className={styles.mainContainer}>
                {defects.map((defect, index) => {
                    const words = defect.split(' ');
                    const name = words[0].toLowerCase() + words.slice(1).join('');
                    const majorName = name + 'M';
                    return (
                        <div key={index} className={styles.checkboxContainer}>
                            <input
                                name={name}
                                className={styles.checkbox}
                                type="checkbox"
                            />
                            <label className={styles.label}>{defect}</label>
                            <div className={styles.hiddenInfo}>
                                <input
                                    name={majorName}
                                    className={styles.checkbox}
                                    type="checkbox"
                                />
                                <label className={styles.label}>Check here for major.</label>
                            </div>
                        </div>
                    );
                })}
            </div>
        </>
    );
}



{/* < input className={styles.checkbox} type="checkbox" />
                <label className={styles.checkboxLabel}>Toggle Div</label>
                <div className={styles.hiddenInfo}>Hidden Div Content</div> */}


// <div className={styles.mainContainer}>
// <div className={styles.checkboxContainer}>
//     <input name='airBrakeSystem' className={styles.checkbox} type="checkbox" />
//     <label className={styles.label}>Air Brake System</label>
//     <div className={styles.hiddenInfo}>
//         <input name='airBrakeSystemM' className={styles.checkbox} type="checkbox" />
//         <label className={styles.label}>Check here for major</label>
//     </div>
// </div>