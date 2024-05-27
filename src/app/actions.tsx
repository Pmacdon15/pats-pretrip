"use server";
import { hash, verify } from "./hasher";
import { cookies } from "next/headers";
import jwt from "jsonwebtoken";
// import Database from "./db";
import { register, getHashedPassword, submitTripInfo, submitTruckInfo, addDefect} from "./db";
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

export async function signUp(prevState: any, formData: FormData) {

  const validatedFields = schemaSignup.safeParse({
    email: formData.get('email'),
    first_name: formData.get('first_name'),
    last_name: formData.get('last_name'),
    password: formData.get('password'),
    confirm_password: formData.get('confirm_password'),
  })
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    }
  }

  const email = formData.get("email") as string;
  const first_name = formData.get("first_name") as string;
  const last_name = formData.get("last_name") as string;
  const password = formData.get("password") as string;
  const confirm_password = formData.get("confirm_password") as string;

  try {
    if (password !== confirm_password) {
      throw new Error("Passwords do not match");
    }
    const hashedPassword = await hash(password);
    if (!await register(email, first_name, last_name, hashedPassword))
      throw new Error("Database rejected sign up!");

  } catch (error) {
    console.error(
      "Error registering user: ",
      error instanceof Error ? error.message : error
    );
    return { message: "User not signed up Error: " + (error instanceof Error ? error.message : error) };
  }

  applyCookie(email);
  redirect(`/currentTrips/${email}`);
}

export async function login(prevState: any, formData: FormData) {

  const validatedFields = schemaLogin.safeParse({
    email: formData.get('email'),
    password: formData.get('password'),
  })

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    }
  }
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  try {
    if (!await verifyPassword(email, password))
      throw new Error("Authentication failed");
  } catch (error) {
    console.error(
      "Error logging in user: ",
      error instanceof Error ? error.message : error
    );
    return { message: "Error: " + (error instanceof Error ? error.message : error) };
  }
  applyCookie(email);
  redirect(`/currentTrips/${email}`);
}

export async function auth(email: string) {
  let Authed = false;
  try {
    const token = cookies().get("AuthCookieTracking")?.value; // Access the cookie value as a string
    if (!token) {
      throw new Error("No token found");
    }
    const user = jwt.verify(token, process.env.SECRET_KEY_JWT as string) as {
      username: string;
    };

    if (user.username !== email) {
      throw new Error("Invalid token");
    }
    Authed = true;
  } catch (error) {
    console.error("Error: ", error instanceof Error ? error.message : error);
  }
  if (!Authed) {
    redirect("/");
  }
}

export async function logout() {
  try {
    cookies().delete("AuthCookieTracking");
  } catch (error) {
    console.error("Error: ", error);
  }
  redirect("/");
}

export async function submitForm(email: string, prevState: any, formData: FormData) {
  'use server'
  // const info = await submitTripInfo(
  //   email,
  //   formData.get("carrier") as string,
  //   formData.get("carrierAddress") as string,
  //   formData.get("inspectionAddress") as string,
  //   formData.get("dateTime") as string
  // );
  let userId = "1"
  let tripId = "16"
  // if (info !== false) {
  //   userId = info?.userid;
  //   tripId = info?.id;
  // }
  //TODO: figure out if i want to return anything with this call and if i want to do anything with that
  // await submitTruckInfo(
  //   tripId,
  //   formData.get("make") as string,
  //   formData.get("model") as string,
  //   formData.get("odometer") as string,
  //   formData.get("truckLP") as string,
  // );
  
  Array.from(formData.entries()).forEach(([key, value]) => {
    if (value === "on") {
      // Skip iterating over major defects because they are handled in the previous iteration
      if (key.endsWith("M"))  return;
      console.log(`${key}: ${value}`);
      const has_m_defect = formData.get(`${key}M`) === "on";
      addDefect(tripId, key, has_m_defect);
      console.log("Defect: ", key, " Major: ", has_m_defect);      
    }
  });
  
  
  
  
  
  console.log("Form submitted");
  console.log("Email: ", email);
  console.table(Array.from(formData.entries()));
  return { message: 'Form submitted' };
}


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
