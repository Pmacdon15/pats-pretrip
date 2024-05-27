"use server";
import { sql } from "@vercel/postgres";

// export default class Database {
export async function register(
  email: string,
  first_name: string,
  last_name: string,
  password: string
) {
  try {
    const { rows } = await sql`
        INSERT INTO ppUsers (email, first_name, last_name, password)
        VALUES (${email}, ${first_name}, ${last_name}, ${password})
        `;
    if (Array.isArray(rows) && rows.length === 0) {
      console.log("User registered");
      console.log(rows);
      return true;
    }
    return false;
  } catch (error) {
    console.error("Error registering user: ", error);
    return false;
  }
}
export async function getHashedPassword(email: string) {
  const { rows } = await sql`
      SELECT password FROM ppUsers WHERE email = ${email}
    `;

  if (rows.length === 0) {
    return false; // User not found
  }
  return rows[0].password;
}

export async function submitTripInfo(
  email: string,
  carrier: string,
  carrierAddress: string,
  inspectionAddress: string,
  dateTime: string,
  eSignature: string
) {
  try {
    const { rows } = await sql`
  INSERT INTO pptrips (
    userId,
    carrier,
    carrierAddress,
    inspectionAddress,
    dateTime,
    eSignature
  )
  VALUES (
    (SELECT id FROM ppusers WHERE email = ${email}),
    ${carrier},
    ${carrierAddress},
    ${inspectionAddress},
    ${dateTime},
    ${eSignature}    
  )
  RETURNING *;
  `;
    //console.log(rows);
    if (rows) {
      return rows[0]
    }
  } catch (error) {
    console.error("Error submitting trip: ", error);
    return false;
  }
}

export async function submitTruckInfo(  
  tripId: string,
  make: string,
  model: string,
  odometer: number,
  truckLP: string,
  trailerLP: string
) {
  try {
    const { rows } = await sql`
    INSERT INTO ppVehicles(
      tripId,
      make,
      model,
      odometer,
      truckLP,
      trailerLP
    )
  Values (
      ${tripId},
      ${make},
      ${model},
      ${odometer},
      ${truckLP},
      ${trailerLP}
    )
    RETURNING *;
  `;
    //console.log(rows);
    if (rows) {
      return true;
    }
  } catch (error) {
    console.error("Error submitting truck: ", error);
    return false;
  }
}


export async function addDefect(tripId: string, name: string, has_m_defect: boolean) {
  try {
    const { rows } = await sql`
    INSERT INTO ppdefects(
      tripId,
      name,
      has_m_defect
    )
    VALUES (
      ${tripId},
      ${name},
      ${has_m_defect}
    )`;
    if (rows) {
      return true;
    }
  } catch (error) {
    console.error("Error adding defect: ", error);
    return false;
  }
}
