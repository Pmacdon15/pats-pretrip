'use client';
import { getCurrentTrips, getCurrentTrucksInfo, getCurrentDefects } from "@/actions/db";
import InDepthDisplayTrip from '../../containers/trips/inDepthDisplayTrip';
import BasicDisplayTrips from '../../containers/trips/basicDisplayTrips';
import { useState, useEffect, useCallback } from 'react';
import { Button } from '@mui/material';
import AddDefect from "./addDefect";
import { useSearchParams } from 'next/navigation'
import { useRouter, usePathname } from 'next/navigation';
import styles from '@/app/containers/trips/page.module.css';
import { revalidateCurrentTrips } from "@/actions/actions";
import { Trip, Truck } from '@/types/types';


export default function ClientComponent({ email, trips, trucks, defects }: { email: string, trips: Trip[], trucks: Truck[], defects: any[] }) {
    const router = useRouter()
    const pathname = usePathname()
    const searchParams = useSearchParams()
    const tripId = Number(searchParams.get("tripId")) ?? 0;
    const decodedEmail = decodeURIComponent(email);

    const [showAddDefect, setShowAddDefect] = useState(false);

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
        const setSearchParams = async () => {

            console.log(trips);

            if (trips?.length > 0 && tripId === 0) {
                router.push(pathname + '?' + createQueryString(trips[0].id));
            }
        };
        setSearchParams();
    }, [router, tripId, pathname, createQueryString]);

    const handleTripClick = (trip: Trip) => {
        router.push(pathname + '?' + createQueryString(trip.id));
    };

    const handleAddDefectClick = () => {
        setShowAddDefect(true);
    };

    const handleHideAddDefect = async (formSubmitted: boolean) => {
        setShowAddDefect(false);
        if (formSubmitted) {
            revalidateCurrentTrips(decodedEmail);
        }
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
                {trips.length > 0 ? (
                    <Button variant="contained" color="primary" onClick={handleAddDefectClick}>
                        Add Defect
                    </Button>
                ) : (<> </>)}
            </InDepthDisplayTrip>
            {showAddDefect && <AddDefect defects={defects} tripId={tripId} onHide={handleHideAddDefect} />}
        </>
    );
}