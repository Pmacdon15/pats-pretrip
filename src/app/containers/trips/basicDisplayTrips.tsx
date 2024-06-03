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
        Vehicle: {trucks && trucks[index]?.trucklp}, <br /><br/>
        {new Date(trip.datetime.getTime() + 6 * 60 * 60 * 1000).toString()} {/* Add 6 hours to the trip datetime */} <br/><br/>
        input Date:
        {trip.inputdate.toString()}
        <br /> <br/>
        input date + 6 hours:
        {new Date(trip.inputdate.getTime() + 6 * 60 * 60 * 1000).toString()}
        </div>
      ))}
      </div>
    );
  }