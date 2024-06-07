'use server';

export async function getAddress(lat: string, lng: string): Promise<object> {
    const apiKey = process.env.REVERSE_GEOCODING_API_KEY;
    let data;
    try {
        const response = await fetch(
            `https://api.geoapify.com/v1/geocode/reverse?lat=${lat}&lon=${lng}&apiKey=${apiKey}`,
            {
                cache: "no-cache",
            }
        );
        data = await response.json();
        //console.log(data);
    } catch (error) {
        console.error("Error fetching:", (error instanceof Error ? error.message : error))
    }

    return data;


}