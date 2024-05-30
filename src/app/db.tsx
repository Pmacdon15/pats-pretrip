"use server";
import { sql } from "@vercel/postgres";
//MARK: Register User
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
// MARK: Get hashed password
export async function getHashedPassword(email: string) {
  const { rows } = await sql`
      SELECT password FROM ppUsers WHERE email = ${email}
    `;

  if (rows.length === 0) {
    return false; // User not found
  }
  return rows[0].password;
}
//MARK: Submit Trip Info
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
        eSignature,
        inputDate
      )
      VALUES (
        (SELECT id FROM ppusers WHERE email = ${email}),
        ${carrier},
        ${carrierAddress},
        ${inspectionAddress},
        ${dateTime},
        ${eSignature},
        CURRENT_TIMESTAMP
      )
      RETURNING *;
    `;
    //console.log(rows);
    if (rows) {
      return rows[0]
    }
  } catch (error) {
    console.error("Error submitting trip: ", error);
    throw new Error("submitting trip info: " + (error instanceof Error ? error.message : error));
  }
}
//MARK: Submit Truck Info
export async function submitTruckInfo(
  tripId: number,
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
    throw new Error("submitting truck info:" + (error instanceof Error ? error.message : error));
  }
}
//MARK: Add Defect
export async function addDefect(tripId: number, name: string, has_m_defect: boolean) {
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
    throw new Error("adding defect: " + (error instanceof Error ? error.message : error));
  }
}

//MARK: Get Current Trips
export async function getCurrentTrips(email: string) {
  try {
    const { rows } = await sql`
    SELECT * FROM pptrips WHERE userId = (SELECT id FROM ppusers WHERE email = ${email}) AND inputDate > CURRENT_TIMESTAMP - INTERVAL '24 hours'
    `;
    if (rows) {
      return rows;
    }
  } catch (error) {
    console.error("Error getting current trips: ", error);
    //throw new Error("getting current trips: " + (error instanceof Error ? error.message : error));
  }
}

//MARK: Get current Truck Info for trips
export async function getCurrentTrucksInfo(email: string) {
  try {
    const { rows } = await sql`
    SELECT * FROM ppvehicles WHERE tripId IN (SELECT id FROM pptrips WHERE userId = (SELECT id FROM ppusers WHERE email = ${email}) AND inputDate > CURRENT_TIMESTAMP - INTERVAL '24 hours')
    `;
    if (rows) {
      return rows;
    }
  } catch (error) {
    console.error("Error getting truck info: ", error);
    throw new Error("getting truck info: " + (error instanceof Error ? error.message : error));
  }
}
//MARK: Get defects for email
export async function getCurrentDefects(email: string) {
  try {
    const { rows } = await sql`
    SELECT * FROM ppdefects WHERE tripId IN (SELECT id FROM pptrips WHERE userId = (SELECT id FROM ppusers WHERE email = ${email}) AND inputDate > CURRENT_TIMESTAMP - INTERVAL '24 hours')
    `;
    if (rows) {
      return rows;
    }
  } catch (error) {
    console.error("Error getting defects: ", error);
    throw new Error("getting defects: " + (error instanceof Error ? error.message : error));
  }
}