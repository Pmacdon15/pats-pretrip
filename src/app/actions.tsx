"use server";
import { hash, verify } from "./hasher";
import { cookies } from "next/headers";
import jwt from "jsonwebtoken";
import { register, getHashedPassword, submitTripInfo, submitTruckInfo, addDefect } from "./db";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
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
// //MARK: Sign Up
// export async function signUp(prevState: any, formData: FormData) {
//   const validatedFields = schemaSignup.safeParse({
//     email: formData.get('email'),
//     first_name: formData.get('first_name'),
//     last_name: formData.get('last_name'),
//     password: formData.get('password'),
//     confirm_password: formData.get('confirm_password'),
//   })
//   if (!validatedFields.success) {
//     return {
//       errors: validatedFields.error.flatten().fieldErrors,
//     }
//   }

//   const email = formData.get("email") as string;
//   const first_name = formData.get("first_name") as string;
//   const last_name = formData.get("last_name") as string;
//   const password = formData.get("password") as string;
//   const confirm_password = formData.get("confirm_password") as string;

//   try {
//     if (password !== confirm_password) {
//       throw new Error("Passwords do not match");
//     }
//     const hashedPassword = await hash(password);
//     if (!await register(email, first_name, last_name, hashedPassword))
//       throw new Error("Database rejected sign up!");

//   } catch (error) {
//     console.error(
//       "Error registering user: ",
//       error instanceof Error ? error.message : error
//     );
//     return { message: "User not signed up Error: " + (error instanceof Error ? error.message : error) };
//   }

//   applyCookie(email);
//   redirect(`/currentTrips/${email}`);
// }
// //MARK: Login
// export async function login(prevState: any, formData: FormData) {
//   const validatedFields = schemaLogin.safeParse({
//     email: formData.get('email'),
//     password: formData.get('password'),
//   })

//   if (!validatedFields.success) {
//     return {
//       errors: validatedFields.error.flatten().fieldErrors,
//     }
//   }
//   const email = formData.get("email") as string;
//   const password = formData.get("password") as string;
//   try {
//     if (!await verifyPassword(email, password))
//       throw new Error("Authentication failed");
//   } catch (error) {
//     console.error(
//       "Error logging in user: ",
//       error instanceof Error ? error.message : error
//     );
//     return { message: "Error: " + (error instanceof Error ? error.message : error) };
//   }
//   applyCookie(email);
//   redirect(`/currentTrips/${email}`);
// }
//MARK: Auth
// export async function auth(email: string) {
//   let Authed = false;
//   try {
//     const token = cookies().get("AuthCookieTracking")?.value; // Access the cookie value as a string
//     if (!token) {
//       throw new Error("No token found");
//     }
//     const user = jwt.verify(token, process.env.SECRET_KEY_JWT as string) as {
//       username: string;
//     };

//     if (user.username !== email) {
//       throw new Error("Invalid token");
//     }
//     Authed = true;
//   } catch (error) {
//     console.error("Error: ", error instanceof Error ? error.message : error);
//   }
//   if (!Authed) {
//     redirect("/");
//   }
// }
// //MARK: Logout
// export async function logout() {
//   try {
//     cookies().delete("AuthCookieTracking");
//   } catch (error) {
//     console.error("Error: ", error);
//   }
//   redirect("/");
// }

//MARK: Submit Form
export async function submitForm(email: string, prevState: any, formData: FormData) {
  'use server'
  try {
    const info = await submitTripInfo(
      email,
      formData.get("carrier") as string,
      formData.get("carrierAddress") as string,
      formData.get("inspectionAddress") as string,
      formData.get("dateTime") as string,
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
  //console.table(Array.from(formData.entries()));
  redirect(`/currentTrips/${email}`);
  //return { message: 'Form submitted' };
}
// TODO: remove this function
//MARK: Add Defect on route
// export async function addDefectFormAction(email:string, tripId: number, formData: FormData) {
//   try {
//     Array.from(formData.entries()).forEach(([key, value]) => {
//       if (value === "on") {
//         // Skip iterating over major defects because they are handled in the previous iteration
//         if (key.endsWith("M")) return;
//         //console.log(`${key}: ${value}`);
//         const has_m_defect = formData.get(`${key}M`) === "on";
//         addDefect(tripId, key, has_m_defect);
//         //console.log("Defect: ", key, " Major: ", has_m_defect);      
//       }
//     });
//   } catch (error) {
//     console.error("Error adding defect: ", error);
//     return { message: "Error: " + (error instanceof Error ? error.message : error) };
//   }
//   console.log("Defect(s) added");
//   revalidatePath(`/currentTrips/${email}`);
//   //redirect(`/currentTrips/${email}`);
//   //return { message: 'Defect added' };
// }

//MARK: Helper functions
async function verifyPassword(email: string, password: string) {
  try {
    const hash = await getHashedPassword(email);
    return await verify(password, hash);
  } catch (error) {
    console.error("Error verifying password: ", error);
    return false;
  }
}
async function applyCookie(email: string) {
  try {
    const user = { username: email };
    const token = jwt.sign(user, process.env.SECRET_KEY_JWT as string, {
      expiresIn: "1h",
    });
    cookies().set({
      name: "AuthCookieTracking",
      value: token,
      httpOnly: true,
      path: "/",
      maxAge: 3600,
      sameSite: "strict",
    });
  } catch (error) {
    console.error("Error applying cookie: ", error);
  }
}
