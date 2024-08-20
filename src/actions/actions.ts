"use server";
import { submitTripInfo, submitTruckInfo, addDefect } from "@/actions/db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from 'zod';

const schemaSignup = z.object({
  email: z.string({
    invalid_type_error: 'Invalid Email',
  }),
  first_name: z.string({
    invalid_type_error: 'Invalid First Name',
  }),
  last_name: z.string({
    invalid_type_error: 'Invalid Last Name',
  }),
  password: z.string({
    invalid_type_error: 'Invalid Password',
  }),
  confirm_password: z.string({
    invalid_type_error: 'Invalid Confirm Password',
  }),
})

const schemaLogin = z.object({
  email: z.string({
    invalid_type_error: 'Invalid Email',
  }),
  password: z.string({
    invalid_type_error: 'Invalid Password',
  }),
})

// Revalidate Path for currentTrips
export async function revalidateCurrentTrips(email: string) {
  revalidatePath(`/currentTrips/${email}`);
  redirect(`/currentTrips/${email}`);
}

//MARK: Submit Form
export async function submitForm(email: string, prevState: any, formData: FormData) {
  'use server'
  try {
    const info = await submitTripInfo(
      email,
      formData.get("carrier") as string,
      formData.get("carrierAddress") as string,
      formData.get("inspectionAddress") as string,
      formData.get("remarks") as string,
      formData.get("eSignature") as string
    ) as { id: number };
    // const userId = info.userId;
    const tripId = info.id;

    await submitTruckInfo(
      tripId,
      formData.get("make") as string,
      formData.get("model") as string,
      Number(formData.get("odometer")),
      formData.get("truckLP") as string,
      formData.get("trailerLP") as string
    );

    Array.from(formData.entries()).forEach(([key, value]) => {
      if (value === "on") {
        // Skip iterating over major defects because they are handled in the previous iteration
        if (key.endsWith("M")) return;
        //console.log(`${key}: ${value}`);
        const has_m_defect = formData.get(`${key}M`) === "on";
        addDefect(tripId, key, has_m_defect);
        //console.log("Defect: ", key, " Major: ", has_m_defect);      
      }
    });

  } catch (error) {
    console.error("Error submitting form: ", error);
    return { message: "Error: " + (error instanceof Error ? error.message : error) };
  }
  console.log("Form submitted");
  redirect(`/currentTrips/${email}`);
}

