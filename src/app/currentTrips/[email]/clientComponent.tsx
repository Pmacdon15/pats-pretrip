'use client';
import { getCurrentTrips, getCurrentTrucksInfo, getCurrentDefects, getAllTrips } from "@/actions/db";
import InDepthDisplayTrip from '@/components/trips/inDepthDisplayTrip';
import BasicDisplayTrips from '@/components/trips/basicDisplayTrips';
import { useState, useEffect, useCallback } from 'react';
import { Button } from '@mui/material';
import AddDefect from "./addDefect";
import { useSearchParams } from 'next/navigation'
import { useRouter, usePathname } from 'next/navigation';
import styles from '@/components/trips/page.module.css';
import { revalidateCurrentTrips } from "@/actions/actions";
import { Trip, Truck } from '@/types/types';


export default function ClientComponent({ email, currentTrips }: { email: string, currentTrips: boolean }) {
    const router = useRouter()
    const pathname = usePathname()
    const searchParams = useSearchParams()
    const tripId = Number(searchParams.get("tripId")) ?? 0;
    const decodedEmail = decodeURIComponent(email);

    const [trips, setTrips] = useState<Trip[]>([]);
    const [trucks, setTrucks] = useState<Truck[]>([]);
    const [defects, setDefects] = useState<any[]>([]);

    useEffect(() => {
        const fetchData = async () => {

            let fetchedTrips: Trip[] = [];
            let fetchedTrucks: Truck[] = [];
            let fetchedDefects: any[] = [];
            if (currentTrips) {
                fetchedTrips = await getCurrentTrips(decodedEmail) as Trip[];
                fetchedTrucks = await getCurrentTrucksInfo(decodedEmail) as Truck[];
                fetchedDefects = await getCurrentDefects(decodedEmail) as any;
            } else {
                fetchedTrips = await getAllTrips(decodedEmail) as Trip[];
                fetchedTrucks = await getCurrentTrucksInfo(decodedEmail) as Truck[];
                fetchedDefects = await getCurrentDefects(decodedEmail) as any;
            }
            setTrips(fetchedTrips);
            setTrucks(fetchedTrucks);
            setDefects(fetchedDefects);
        };
        fetchData();
    }, [currentTrips, decodedEmail]);

    const [showAddDefect, setShowAddDefect] = useState(false);

    const createQueryString = useCallback(
        (tripId: number) => {
            const params = new URLSearchParams(searchParams.toString())
            params.set('tripId', tripId.toString())
            return params.toString()
        },
        [searchParams]
    )

    useEffect(() => {
        const setSearchParams = async () => {
            if (trips?.length > 0 && tripId === 0) {
                router.push(pathname + '?' + createQueryString(trips[trips.length - 1].id));
            }
        };
        setSearchParams();
    }, [trips, router, tripId, pathname, createQueryString]);

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