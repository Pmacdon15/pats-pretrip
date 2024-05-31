'use client';
import { getCurrentTrips, getCurrentTrucksInfo, getCurrentDefects } from "@/app/db";
import InDepthDisplayTrip from '../../containers/trips/inDepthDisplayTrip';
import BasicDisplayTrips from '../../containers/trips/basicDisplayTrips';
import { useState, useEffect, useCallback } from 'react';
import { Button } from '@mui/material';
import AddDefect from "./addDefect";
import { useSearchParams } from 'next/navigation'
import { useRouter ,usePathname} from 'next/navigation';


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
    const truckId = Number(searchParams.get("truckId")) ?? 0;
   
    const decodedEmail = decodeURIComponent(params.email);
    const [trips, setTrips] = useState<Trip[]>([]);
    const [trucks, setTrucks] = useState<Truck[]>([]);
    const [defects, setDefects] = useState<any[]>([]);
    const [selectedTrip, setSelectedTrip] = useState<number>(0);
    const [selectedTruck, setSelectedTruck] = useState<number>(0);

    useEffect(() => {
        const fetchData = async () => {
            const fetchedTrips = await getCurrentTrips(decodedEmail) as Trip[];
            const fetchedTrucks = await getCurrentTrucksInfo(decodedEmail) as Truck[];
            const fetchedDefects = await getCurrentDefects(decodedEmail) as any;
            setDefects(fetchedDefects);

            setTrips(fetchedTrips);
            setTrucks(fetchedTrucks);
            setSelectedTrip(tripId);
            setSelectedTruck(truckId);
            router.push(pathname + '?' + createQueryString(tripId, truckId));
        };
        fetchData();
    }, [decodedEmail]);

    const handleTripClick = (trip: Trip, truck: Truck) => {
        setSelectedTrip(tripId);
        setSelectedTruck(truckId);
        //console.log("Selected Trip: ", trip.id);
        router.push(pathname + '?' + createQueryString(trip.id, truck.id));
    };

   // const filteredDefects = defects.filter(defect => defect.tripid === selectedTrip?.id);

    const [showAddDefect, setShowAddDefect] = useState(false);

    const handleAddDefectClick = () => {
        setShowAddDefect(true);
    };

    const handleHideAddDefect = async () => {
        setShowAddDefect(false);
        window.location.reload();
    };

    const createQueryString = useCallback(
        (tripId: number, truckId: number) => {
            const params = new URLSearchParams(searchParams.toString())
            params.set('tripId', tripId.toString())
            params.set('truckId', truckId.toString())
            return params.toString()
        },
        [searchParams]
    )

    return (
        <>
            {/* Button is nested for styles reasons */}
            <BasicDisplayTrips onTripClick={handleTripClick} trips={trips} trucks={trucks} />
            <InDepthDisplayTrip trips={trips}  trucks={trucks}  defects={defects} selectedTripId={tripId} selectedTruckId={truckId}>
                <Button variant="contained" color="primary" onClick={handleAddDefectClick}>
                    Add Defect
                </Button>
            </InDepthDisplayTrip>
            {showAddDefect && <AddDefect email={decodedEmail} currentDefects={defects} tripId={selectedTrip } onHide={handleHideAddDefect} />}
        </>
    );

}