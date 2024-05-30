'use client';
import styles from './page.module.css';
export default function InDepthDisplayTrip({
    trip,
    truck,
    defects
}: {
    trip: any;
    truck: any;
    defects: any;
}) {
    return (
        <div className={styles.tripsInDepthInfoContainer}>
            <div className={styles.inDepthTripInfo}>
                Carrier Info:<br />
                <p>Carrier: {trip?.carrier}<br />
                    Carrier Address: {trip?.carrieraddress}<br />
                    Inspection Address: {trip?.inspectionaddress}
                </p>
            </div>
            <div className={styles.inDepthTripInfo}>
                <p>Truck Info:<br />
                    Make: {truck?.make} <br />
                    Model: {truck?.model} <br />
                    Odometer: {truck?.odometer} <br />
                    License Plate: {truck?.trucklp} <br />
                    Trailer License Plate: {truck?.trailerlp}
                </p>
            </div>
            <div className={styles.inDepthTripInfo}>
                Defects:<br />
                {defects.map((defect: any, index: number) => (
                    <div key={index}>
                        {formatDefectName(defect.name)}: {defect.has_m_defect ? "Major" : "Minor"}
                    </div>
                ))}
            </div>
            <div className={styles.inDepthTripInfo}>
                Driver: {trip?.esignature}
            </div>
        </div>
    )
    // Format the defect name to be more readable
    function formatDefectName(name: string): string {
        const words = name.split(/(?=[A-Z])/);
        const formattedName = words.map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
        return formattedName;
    }
}