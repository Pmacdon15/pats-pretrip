// 'use client';
import styles from './page.module.css';


export default function InDepthDisplayTrip({
    children,
    trips,
    trucks,
    defects,
    selectedTripId,       
}: {
    children: React.ReactNode;
    trips: any;
    trucks: any;
    defects: any;
    selectedTripId: number;        
}) {
 
    const trip = trips.find((trip: any) => trip.id === selectedTripId);
    const truck = trucks.find((truck: any) => truck.tripid === selectedTripId);
    const selectedDefects = defects.filter((defect: any) => defect.tripid === selectedTripId);   
    
    return (
        <div className={styles.tripsInDepthInfoContainer}> 
            <div className={styles.inDepthTripInfo}>
                Carrier Info:<br />
                <p>Carrier: {trip?.carrier}<br />
                    Carrier Address: {trip?.carrieraddress}<br />
                    Inspection Address: {trip?.inspectionaddress}<br/>
                    Inspection Time: {trip?.inputdate.toString()}
                </p>
            </div>
            <div className={styles.inDepthTripInfo}>
                Truck Info:<br />
                <p>Make: {truck?.make} <br />
                    Model: {truck?.model} <br />
                    Odometer: {truck?.odometer} <br />
                    License Plate: {truck?.trucklp} <br />
                    Trailer License Plate: {truck?.trailerlp}
                </p>
            </div>
            <div className={styles.inDepthTripInfo}>
                Defects:<br />
                {selectedDefects.map((defect: any, index: number) => (
                    <div key={index}>
                        {formatDefectName(defect.name)}: {defect.has_m_defect ? "Major" : "Minor"}
                    </div>
                ))}
            </div>
            <div className={styles.inDepthTripInfo}>
                Remarks: {trip?.remarks}
            </div>
            <div className={styles.inDepthTripInfo}>
                Driver: {trip?.esignature}
            </div> 
            {children}           
        </div>
    )
    // Format the defect name to be more readable
    function formatDefectName(name: string): string {
        const words = name.split(/(?=[A-Z])/);
        const formattedName = words.map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
        return formattedName;
    }
}