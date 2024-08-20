
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
    inputdate: string;
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

    const decodedEmail = decodeURIComponent(params.email);
    let fetchedTrips = await getCurrentTrips(decodedEmail) as Trip[];
    fetchedTrips.forEach(trip => {
        trip.inputdate = new Date(trip.inputdate).toLocaleString();
    });
    const fetchedTrucks = await getCurrentTrucksInfo(decodedEmail) as Truck[];
    const fetchedDefects = await getCurrentDefects(decodedEmail) as any; 

    return (
        <>
         <ClientComponent email={decodedEmail}trips={fetchedTrips} trucks={fetchedTrucks} defects={fetchedDefects} />
        </>
    );
}