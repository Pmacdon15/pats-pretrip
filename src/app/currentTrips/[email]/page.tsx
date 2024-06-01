'use client';
import { getCurrentTrips, getCurrentTrucksInfo, getCurrentDefects } from "@/app/db";
import InDepthDisplayTrip from '../../containers/trips/inDepthDisplayTrip';
import BasicDisplayTrips from '../../containers/trips/basicDisplayTrips';
import { useState, useEffect, useCallback } from 'react';
import { Button } from '@mui/material';
import AddDefect from "./addDefect";
import { useSearchParams } from 'next/navigation'
import { useRouter, usePathname } from 'next/navigation';
import styles from '@/app/containers/trips/page.module.css';


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


export default function CurrentTrips({ params }: { params: { email: string } }) {
    const router = useRouter()
    const pathname = usePathname()
    const searchParams = useSearchParams()
    const tripId = Number(searchParams.get("tripId")) ?? 0;

    const decodedEmail = decodeURIComponent(params.email);
    const [trips, setTrips] = useState<Trip[]>([]);
    const [trucks, setTrucks] = useState<Truck[]>([]);
    const [defects, setDefects] = useState<any[]>([]);;

    const createQueryString = useCallback(
        (tripId: number) => {
            const params = new URLSearchParams(searchParams.toString())
            params.set('tripId', tripId.toString())
            //params.set('truckId', truckId.toString())
            return params.toString()
        },
        [searchParams]
    )

    useEffect(() => {
        const fetchData = async () => {
            const fetchedTrips = await getCurrentTrips(decodedEmail) as Trip[];
            const fetchedTrucks = await getCurrentTrucksInfo(decodedEmail) as Truck[];
            const fetchedDefects = await getCurrentDefects(decodedEmail) as any;

            setTrips(fetchedTrips);
            setTrucks(fetchedTrucks);
            setDefects(fetchedDefects);

            if (fetchedTrips.length > 0 && tripId === 0) {
                router.push(pathname + '?' + createQueryString(fetchedTrips[0].id));
            }
        };
        fetchData();
    }, [decodedEmail, router, tripId, pathname, createQueryString]);

    const handleTripClick = (trip: Trip, truck: Truck) => {
        router.push(pathname + '?' + createQueryString(trip.id));
    };

    const [showAddDefect, setShowAddDefect] = useState(false);

    const handleAddDefectClick = () => {
        setShowAddDefect(true);
    };

    const handleHideAddDefect = async () => {
        setShowAddDefect(false);
        window.location.reload();
    };

    return (
        <>
            {trips.length > 0 ? (
                <BasicDisplayTrips onTripClick={handleTripClick} trips={trips} trucks={trucks} />) : (
                <div className={styles.tripsBasicInfoContainer}>
                    <div className={styles.tripsBasicInfo} >
                        No trips found.
                    </div>
                </div>
            )}
            <InDepthDisplayTrip trips={trips} trucks={trucks} defects={defects} selectedTripId={tripId}>
                <Button variant="contained" color="primary" onClick={handleAddDefectClick}>
                    Add Defect
                </Button>
            </InDepthDisplayTrip>
            {showAddDefect && <AddDefect email={decodedEmail} defects={defects} tripId={tripId} onHide={handleHideAddDefect} />}
        </>
    );
}