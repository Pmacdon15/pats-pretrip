import { useEffect, useState } from "react";
import { getAddress } from "./actions";

const useGeoLocation = () => {
    const [address, setAddress] = useState<any>([]);
    const [location, setLocation] = useState({
        loaded: false,
        coordinates: { lat: "", lng: "" },
        error: null
    });

    const onSuccess = (location: any) => {
        setLocation({
            loaded: true,
            coordinates: {
                lat: location.coords.latitude,
                lng: location.coords.longitude
            },
            error: null
        });
    }

    const onError = (error: any) => {
        setLocation(state => ({
            ...state,
            loaded: true,
            error: error.message
        }));
    };

    useEffect(() => {
        if (!("geolocation" in navigator)) {
            onError({ code: 0, message: "Geolocation not supported" });
        }
        navigator.geolocation.getCurrentPosition(onSuccess, onError);
    }, []);

    useEffect(() => {
        const fetchData = async () => {
            const address = await getAddress(location.coordinates.lat, location.coordinates.lng);
            console.log("Address: ", address);
            setAddress(address);
        };
        fetchData();
    }, [location]);

    let finishedAddress = "";
    if (address && address.features && address.features.length > 0) {
        const houseNumber = address.features[0].properties.housenumber || "";
        const street = address.features[0].properties.street;
        const city = address.features[0].properties.city;
        const state = address.features[0].properties.state;
        const country = address.features[0].properties.country;
        console.log("Address: ", houseNumber, street, city, state, country);
        finishedAddress = `${houseNumber} ${street}, ${city}, ${state}, ${country}`;
    }


    return finishedAddress;
};
export default useGeoLocation;