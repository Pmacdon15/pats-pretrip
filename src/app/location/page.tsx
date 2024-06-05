'use client';
import GeoLocation from '@/app/location/geoLocation';

export default function Page() {
 const location = GeoLocation();
 
    return (
        <div>
            <h1>GeoLocation</h1>
            {location.loaded ? JSON.stringify(location) : "Location data not available"}
        </div>
    );
}