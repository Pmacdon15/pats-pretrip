'use client';
import { getCurrentTrips, getCurrentTrucksInfo, getCurrentDefects } from "@/app/db";
import InDepthDisplayTrip from '../../containers/trips/inDepthDisplayTrip';
import BasicDisplayTrips from '../../containers/trips/basicDisplayTrips';
import { useState, useEffect, useCallback } from 'react';
import { Button } from '@mui/material';
import AddDefect from "./addDefect";
import { useSearchParams } from 'next/navigation'

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


export default function CurrentTripsComponent({ email }: { email: string  }) {
    console.log("loading current trip component")
    const searchParams = useSearchParams()
    const tripId = searchParams.get("tripId")
    console.log("Search Params tripId: ", searchParams.get("tripId"))

    //const decodedEmail = decodeURIComponent(params.email);
    const [trips, setTrips] = useState<Trip[]>([]);
    const [trucks, setTrucks] = useState<Truck[]>([]);
    const [defects, setDefects] = useState<any[]>([]);
    const [selectedTrip, setSelectedTrip] = useState<Trip | null>(null);
    const [selectedTruck, setSelectedTruck] = useState<Truck | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            const fetchedTrips = await getCurrentTrips(email) as Trip[];
            const fetchedTrucks = await getCurrentTrucksInfo(email) as Truck[];
            const fetchedDefects = await getCurrentDefects(email) as any;
            setDefects(fetchedDefects);

            setTrips(fetchedTrips);
            setTrucks(fetchedTrucks);
            setSelectedTrip(fetchedTrips[0]);
            setSelectedTruck(fetchedTrucks[0]);
            // createQueryString(selectedTrip, selectedTruck);
        };
        fetchData();
    }, [email]);

    const handleTripClick = (trip: Trip, truck: Truck) => {
        setSelectedTrip(trip);
        setSelectedTruck(truck);
    };


    const filteredDefects = defects.filter(defect => defect.tripid === selectedTrip?.id);

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
            {/* Button is nested for styles reasons */}
            <BasicDisplayTrips onTripClick={handleTripClick} trips={trips} trucks={trucks} />
            <InDepthDisplayTrip trip={selectedTrip} truck={selectedTruck} defects={filteredDefects} >
                <Button variant="contained" color="primary" onClick={handleAddDefectClick}>
                    Add Defect
                </Button>
            </InDepthDisplayTrip>
            {showAddDefect && <AddDefect email={email} currentDefects={filteredDefects} tripId={selectedTrip?.id || 0} onHide={handleHideAddDefect} />}
        </>
    );

}