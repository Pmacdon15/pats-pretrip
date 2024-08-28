export type Trip = {
    id: number;
    carrier: string;
    carrieraddress: string;
    inspectionaddress: string;
    remarks: string | null;
    esignature: string;
    inputdate: string;
    email: string;
};

export type Truck = {
    id: number;
    tripid: number;
    make: string;
    model: string;
    odometer: string;
    trucklp: string;
    trailerlp: string;
    trailerlp2: string;
};
