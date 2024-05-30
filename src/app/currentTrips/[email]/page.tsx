'use client';
import styles from './page.module.css';
import { getCurrentTrips, getTrucksInfo , getDefects} from "@/app/db";
import InDepthDisplayTrip from './inDepthDisplayTrip';
import BasicDisplayTrips from './basicDisplayTrips';
import { useState, useEffect } from 'react';
import { set } from 'zod';
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
    const decodedEmail = decodeURIComponent(params.email);
    const [trips, setTrips] = useState<Trip[]>([]);
    const [trucks, setTrucks] = useState<Truck[]>([]);
    const [defects, setDefects] = useState<any[]>([]);
    const [selectedTrip, setSelectedTrip] = useState<Trip | null>(null);
    const [selectedTruck, setSelectedTruck] = useState<Truck | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            const fetchedTrips = await getCurrentTrips(decodedEmail) as Trip[];
            const fetchedTrucks = await getTrucksInfo(decodedEmail) as Truck[];
            const fetchedDefects = await getDefects(decodedEmail) as any;
            setDefects(fetchedDefects);
            

            setTrips(fetchedTrips);
            setTrucks(fetchedTrucks);
            setSelectedTrip(fetchedTrips[0]);
            setSelectedTruck(fetchedTrucks[0]);
        };
        fetchData();
    }, [decodedEmail]);

    const handleTripClick = (trip: Trip, truck: Truck) => {
        setSelectedTrip(trip);
        setSelectedTruck(truck);
    };

    console.log(trucks)
    console.log(trips)
    //console.log(defects)
    const filteredDefects = defects.filter(defect => defect.tripid === selectedTrip?.id);
    
    return (
        <>
            <BasicDisplayTrips onTripClick={handleTripClick} trips={trips} trucks={trucks} />
            <InDepthDisplayTrip trip={selectedTrip} truck={selectedTruck} defects={filteredDefects} />
        </>
    );

}