export default function DisplayTrip({
    trip,
    truck,
}: {
    trip: any;
    truck: any;
}) {
    return (
        <>
            Carrier Info:<br />
            Carrier: {trip?.carrier} <br />
            Carrier Address: {trip?.carrieraddress} <br />
            Inspection Address: {trip?.inspectionaddress} <br />

            Truck Info:<br />
            Make: {truck?.make} <br />
            Model: {truck?.model} <br />
            Odometer: {truck?.odometer} <br />
            License Plate: {truck?.trucklp} <br />
            Trailer License Plate: {truck?.trailerlp} <br />

        </>
    )
}