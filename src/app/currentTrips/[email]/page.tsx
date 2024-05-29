import styles from './page.module.css';
import { getCurrentTrips, getTrucksInfo } from "@/app/db";
import DisplayTrip from './displayTrip';
import BasicDisplayTrips from './basicDisplayTrips';

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
export default async function CurrentTrips({ params }: { params: { email: string } }) {
    const decodedEmail = decodeURIComponent(params.email);
    const trips = await getCurrentTrips(decodedEmail) as Trip[];
    const trucks = await getTrucksInfo(decodedEmail) as Truck[];
    console.log(trucks)
    console.log(trips)
    return (
        <>
            <BasicDisplayTrips trips={trips} trucks={trucks} />
            <DisplayTrip trip={trips && trips[0]} truck={trucks && trucks[0]} />
        </>
    );

}