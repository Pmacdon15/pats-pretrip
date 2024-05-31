// 'use client';
import styles from './page.module.css';

type Trip = {
    id: number;
    userid: number;
    carrier: string;
    carrieraddress: string;
    inspectionaddress: string;
    datetime: Date;
    remarks: string | null;
    esignature: string;
    inputdate: Date;
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
    onTripClick: (trip: Trip, truck: Truck) => void; 
  }) {
    return (
      <div className={styles.tripsBasicInfoContainer}>
        {trips?.map((trip, index) => (
          <div
            className={styles.tripsBasicInfo}
            key={index}
            onClick={() => onTripClick(trip, trucks[index])} // Call the onTripClick handler when a trip is clicked
          >
            Vehicle: {trucks && trucks[index]?.trucklp}, <br />
            {trip.datetime.toLocaleString()}
          </div>
        ))}
      </div>
    );
  }