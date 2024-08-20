
import { getCurrentTrips, getCurrentTrucksInfo, getCurrentDefects } from "@/app/db";
import InDepthDisplayTrip from '../../containers/trips/inDepthDisplayTrip';
import BasicDisplayTrips from '../../containers/trips/basicDisplayTrips';
import { useState, useEffect, useCallback } from 'react';
import { Button } from '@mui/material';
import AddDefect from "./addDefect";
import { useSearchParams } from 'next/navigation'
import { useRouter, usePathname } from 'next/navigation';
import styles from '@/app/containers/trips/page.module.css';
import { revalidateCurrentTrips } from "@/app/actions";

import ClientComponent from "@/app/currentTrips/[email]/clientComponent";

type Trip = {
    id: number;
    carrier: string;
    carrieraddress: string;
    inspectionaddress: string;
    remarks: string | null;
    esignature: string;
    inputdate: Date;
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

export default async function CurrentTrips({ params }: { params: { email: string } }) {
    // const router = useRouter()
    // const pathname = usePathname()
    // const searchParams = useSearchParams()
    // const tripId = Number(searchParams.get("tripId")) ?? 0;

    const decodedEmail = decodeURIComponent(params.email);
    const fetchedTrips = await getCurrentTrips(decodedEmail) as Trip[];
    const fetchedTrucks = await getCurrentTrucksInfo(decodedEmail) as Truck[];
    const fetchedDefects = await getCurrentDefects(decodedEmail) as any;
    // const [showAddDefect, setShowAddDefect] = useState(false);

    // const createQueryString = useCallback(
    //     (tripId: number) => {
    //         const params = new URLSearchParams(searchParams.toString())
    //         params.set('tripId', tripId.toString())
    //         //params.set('truckId', truckId.toString())
    //         return params.toString()
    //     },
    //     [searchParams]
    // )

    // useEffect(() => {
    //     const fetchData = async () => {
    //         const fetchedTrips = await getCurrentTrips(decodedEmail) as Trip[];
    //         const fetchedTrucks = await getCurrentTrucksInfo(decodedEmail) as Truck[];
    //         const fetchedDefects = await getCurrentDefects(decodedEmail) as any;

    //         setTrips(fetchedTrips);
    //         setTrucks(fetchedTrucks);
    //         setDefects(fetchedDefects);
    //         console.log(fetchedTrips);

    //         if (fetchedTrips?.length > 0 && tripId === 0) {
    //             router.push(pathname + '?' + createQueryString(fetchedTrips[0].id));
    //         }
    //     };
    //     fetchData();
    // }, [decodedEmail, router, tripId, pathname, createQueryString]);

    // const handleTripClick = (trip: Trip) => {
    //     router.push(pathname + '?' + createQueryString(trip.id));
    // };


    // const handleAddDefectClick = () => {
    //     setShowAddDefect(true);
    // };

    // const handleHideAddDefect = async (formSubmitted: boolean) => {
    //     setShowAddDefect(false);
    //     if (formSubmitted) {
    //         revalidateCurrentTrips(decodedEmail);
    //     }
    // };

    return (
        <>
         <ClientComponent email={decodedEmail}trips={fetchedTrips} trucks={fetchedTrucks} defects={fetchedDefects} />
        </>
    );
}