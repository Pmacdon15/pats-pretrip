"use server";
import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

//MARK: Submit Trip Info
export async function submitTripInfo(
  email: string,
  carrier: string,
  carrierAddress: string,
  inspectionAddress: string,
  remarks: string,
  eSignature: string

) {
  try {
    const { rows } = await sql`
      INSERT INTO pptrips (
        carrier,
        carrierAddress,
        inspectionAddress,        
        remarks,
        eSignature,
        inputDate,
        email
      )
      VALUES (        
        ${carrier},
        ${carrierAddress},
        ${inspectionAddress},         
        ${remarks},
        ${eSignature},
        CURRENT_TIMESTAMP,
        ${email}
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
  let results;
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
      results = rows;
    }
  } catch (error) {
    console.error("Error adding defect: ", error);
    throw new Error("adding defect: " + (error instanceof Error ? error.message : error));
  }
  revalidatePath("/currentTrips");
  redirect("/currentTrips");
}
//MARK: Change to major defect
export async function changeToMajorDefect(tripId: number, name: string) {
  try {
    const { rows } = await sql`
    UPDATE ppdefects
    SET has_m_defect = true
    WHERE tripId = ${tripId} AND name = ${name}
    `;
    if (rows) {
      return true;
    }
  } catch (error) {
    console.error("Error changing to major defect: ", error);
    throw new Error("changing to major defect: " + (error instanceof Error ? error.message : error));
  }
}

//MARK: Add remark
export async function addRemark(tripId: number, remark: string) {
  try {
    const { rows } = await sql`
      UPDATE pptrips
      SET remarks = remarks || ', ' || ${remark}
      WHERE id = ${tripId}
    `;
    if (rows) {
      return true;
    }
  } catch (error) {
    console.error("Error adding remark: ", error);
    //throw new Error("adding remark: " + (error instanceof Error ? error.message : error));
  }
}

//MARK: Get Current Trips
export async function getCurrentTrips(email: string) {
  try {
    const { rows } = await sql`  
      SELECT *
      FROM pptrips
      WHERE email = ${email}
      AND inputDate > CURRENT_TIMESTAMP - INTERVAL '24 hours'
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
      SELECT *
      FROM ppvehicles
      WHERE tripId IN (
        SELECT id
        FROM pptrips
        WHERE email = ${email}
        AND inputDate > CURRENT_TIMESTAMP - INTERVAL '24 hours'
      )
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
      SELECT *
      FROM ppdefects
      WHERE tripId IN (
        SELECT id
        FROM pptrips
        WHERE email = ${email}
        AND inputDate > CURRENT_TIMESTAMP - INTERVAL '24 hours'
      )
    `;
    if (rows) {
      return rows;
    }
  } catch (error) {
    console.error("Error getting defects: ", error);
    throw new Error("getting defects: " + (error instanceof Error ? error.message : error));
  }
}

//MARK: Get all trips for email older than 24 hours
export async function getAllTrips(email: string) {
  try {
    const { rows } = await sql`
      SELECT *
      FROM pptrips
      WHERE email = ${email}
      AND inputDate < CURRENT_TIMESTAMP - INTERVAL '24 hours'
    `;
    if (rows) {
      return rows;
    }
  } catch (error) {
    console.error("Error getting all trips: ", error);
    throw new Error("getting all trips: " + (error instanceof Error ? error.message : error));
  }
}

//MARK: Get all trucks for email older than 24 hours
export async function getAllTrucks(email: string) {
  try {
    const { rows } = await sql`
      SELECT *
      FROM pptrips
      WHERE email = ${email}
      AND inputDate < CURRENT_TIMESTAMP - INTERVAL '24 hours'
    `;
    if (rows) {
      return rows;
    }
  } catch (error) {
    console.error("Error getting all trucks: ", error);
    throw new Error("getting all trucks: " + (error instanceof Error ? error.message : error));
  }
}

//MARK: Get all defects for email older than 24 hours
export async function getAllDefects(email: string) {
  try {
    const { rows } = await sql`
      SELECT *
      FROM ppdefects
      WHERE tripId IN (
        SELECT id
        FROM pptrips
        WHERE email = ${email}
        AND inputDate < CURRENT_TIMESTAMP - INTERVAL '24 hours'
      )
    `;
    if (rows) {
      return rows;
    }
  } catch (error) {
    console.error("Error getting all defects: ", error);
    throw new Error("getting all defects: " + (error instanceof Error ? error.message : error));
  }
}

//MARK: Get user stats
export async function getUserStats() {
  try {
    const { rows } = await sql`
    SELECT COUNT(DISTINCT email) AS total_users FROM pptrips;
    `;
    //console.log(rows);
    if (rows) {
      return rows[0].total_users;
    }
  } catch (error) {
    console.error("Error getting user stats: ", error);
    //throw new Error("getting user stats: " + (error instanceof Error ? error.message : error));
  }
}

//MARK: Get trip stats
export async function getTripStats() {
  try {
    const { rows } = await sql`
    SELECT COUNT(*) AS total_trips FROM pptrips;
    `;
    if (rows) {
      return rows[0].total_trips;
    }
  } catch (error) {
    console.error("Error getting trip stats: ", error);
    //throw new Error("getting trip stats: " + (error instanceof Error ? error.message : error));
  }
}

//MARK: Get defect amount of defects
export async function getDefectStats() {
  try {
    const { rows } = await sql`
    SELECT COUNT(*) AS total_defects FROM ppdefects;
    `;
    if (rows) {
      return rows[0].total_defects;
    }
  } catch (error) {
    console.error("Error getting defect stats: ", error);
    //throw new Error("getting defect stats: " + (error instanceof Error ? error.message : error));
  }
}

// Get most common defect
export async function getMostCommonDefect() {
  try {
    const { rows } = await sql`
    SELECT name, COUNT(name) AS count FROM ppdefects GROUP BY name ORDER BY count DESC LIMIT 1;
    `;
    if (rows) {
      return rows[0].name;
    }
  } catch (error) {
    console.error("Error getting most common defect: ", error);
    //throw new Error("getting most common defect: " + (error instanceof Error ? error.message : error));
  }
}

//MARK: Get least common defect
export async function getLeastCommonDefect() {
  try {
    const { rows } = await sql`
    SELECT name, COUNT(name) AS count FROM ppdefects GROUP BY name ORDER BY count ASC LIMIT 1;
    `;
    if (rows) {
      return rows[0].name;
    }
  } catch (error) {
    console.error("Error getting least common defect: ", error);
    //throw new Error("getting least common defect: " + (error instanceof Error ? error.message : error));
  }
}
