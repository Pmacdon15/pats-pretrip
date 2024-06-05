import { useEffect, useState } from "react";

const useGeoLocation = () => {
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
        error: null // add error property with null value
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

  return location;
};
export default useGeoLocation;