'use client';
import { getAllTrips, getAllTrucks, getAllDefects } from "@/app/db";
import InDepthDisplayTrip from '../../containers/trips/inDepthDisplayTrip';
import BasicDisplayTrips from '../../containers/trips/basicDisplayTrips';
import { useState, useEffect, useCallback } from 'react';
import { useSearchParams } from 'next/navigation'
import { useRouter, usePathname } from 'next/navigation';
import styles from '@/app/containers/trips/page.module.css';

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


export default function PastTrips({ params }: { params: { email: string } }) {
    const router = useRouter()
    const pathname = usePathname()
    const searchParams = useSearchParams()
    const tripId = Number(searchParams.get("tripId")) ?? 0;

    const decodedEmail = decodeURIComponent(params.email);
    const [trips, setTrips] = useState<Trip[]>([]);
    const [trucks, setTrucks] = useState<Truck[]>([]);
    const [defects, setDefects] = useState<any[]>([]);

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
            const fetchedTrips = await getAllTrips(decodedEmail) as Trip[];
            const fetchedTrucks = await getAllTrucks(decodedEmail) as Truck[];
            const fetchedDefects = await getAllDefects(decodedEmail) as any;

            setTrips(fetchedTrips);
            setTrucks(fetchedTrucks);
            setDefects(fetchedDefects);

            if (fetchedTrips.length > 0 && tripId === 0) {
                router.push(pathname + '?' + createQueryString(fetchedTrips[0].id));
            }
        };
        fetchData();
    }, [decodedEmail, router, tripId, pathname, createQueryString]);

    const handleTripClick = (selectedTrip: Trip) => {        
        router.push(pathname + '?' + createQueryString(selectedTrip.id));
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
            <div>Inspections older than 24 hours cannot be modified.</div>
            </InDepthDisplayTrip> 
        </>

    );

}