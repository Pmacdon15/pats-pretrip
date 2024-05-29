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
}: {
  trips: Trip[];
  trucks: Truck[];
}) {
  return (
    <div className={styles.tripsBasicInfoContainer}>
      {trips?.map((trip, index) => (
        <div className={styles.tripsBasicInfo} key={index}>
          Vehicle: {trucks && trucks[index]?.trucklp}, <br />
          {trip.datetime.toLocaleString()}
        </div>
      ))}
    </div>
  );
}