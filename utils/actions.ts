'use server'

import { profileSchema } from "./schemas";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const createProfileAction = async (prevState: any, formData: FormData) => {
  try {
    const rawData = Object.fromEntries(formData);
    const validatedFields = profileSchema.parse(rawData);
    console.log(validatedFields);
    return {
      message: 'profile created..'
    }

  } catch (error) {
    console.log(error)
    return {
      message: 'there was an error in validation'
    }
  }
};