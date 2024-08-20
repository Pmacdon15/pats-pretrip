// 'use client';
import styles from './page.module.css';

type Trip = {
    id: number;
    carrier: string;
    carrieraddress: string;
    inspectionaddress: string;
    remarks: string | null;
    esignature: string;
    inputdate: string;
    email: string;
  };
  
  type Truck = {
    id: number;
    tripid: number;
    make: string;
    model: string;
    odometer: string;
    trucklp: string;
    trailerlp: string;
  };
  export default function BasicDisplayTrips({
    trips,
    trucks,
    onTripClick,
  }: {
    trips: Trip[];
    trucks: Truck[];
    onTripClick: (trip: Trip) => void; 
  }) {    
    return (
      <div className={styles.tripsBasicInfoContainer}>
      {trips?.map((trip, index) => (
        <div
        className={styles.tripsBasicInfo}
        key={index}
        onClick={() => onTripClick(trip)} // Call the onTripClick handler when a trip is clicked
        >
        Vehicle: {trucks && trucks[index]?.trucklp}, <br />        
        
        {trip.inputdate.toLocaleString()}                
        </div>
      ))}
      </div>
    );
  }