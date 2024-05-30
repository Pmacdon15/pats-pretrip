'use client';
import { getAllTrips, getAllTrucks, getAllDefects } from "@/app/db";
import InDepthDisplayTrip from '../../containers/trips/inDepthDisplayTrip';
import BasicDisplayTrips from '../../containers/trips/basicDisplayTrips';
import { useState, useEffect } from 'react';

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


export default function PastTrips({ params }: { params: { email: string } }) {
    const decodedEmail = decodeURIComponent(params.email);
    const [trips, setTrips] = useState<Trip[]>([]);
    const [trucks, setTrucks] = useState<Truck[]>([]);
    const [defects, setDefects] = useState<any[]>([]);
    const [selectedTrip, setSelectedTrip] = useState<Trip | null>(null);
    const [selectedTruck, setSelectedTruck] = useState<Truck | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            const fetchedTrips = await getAllTrips(decodedEmail) as Trip[];
            const fetchedTrucks = await getAllTrucks(decodedEmail) as Truck[];
            const fetchedDefects = await getAllDefects(decodedEmail) as any;
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
            <InDepthDisplayTrip trip={selectedTrip} truck={selectedTruck} defects={filteredDefects} >
               <div>Inspections older than 24 hours cannot be modified.</div>
            </InDepthDisplayTrip>
        </>

    );

}