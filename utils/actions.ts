'use server'
import db from './db';
import { auth, clerkClient, currentUser } from '@clerk/nextjs/server';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { profileSchema } from "./schemas";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const createProfileAction = async (prevState: any, formData: FormData) => {
  try {
    const user = await currentUser();
    if (!user) {
      throw new Error('Please login..')
    }
    const rawData = Object.fromEntries(formData);
    const validatedFields = profileSchema.parse(rawData);

    // ADD A USER PROFILE ONTO SUPABASE DB 
    await db.profile.create({
      data: {
        clerkId: user.id,
        email: user.emailAddresses[0].emailAddress,
        profileImage: user.imageUrl ?? '',
        ...validatedFields
      }
    })
    await clerkClient.users.updateUserMetadata(user.id, {
      privateMetadata: {
        hasProfile: true
      }
    })

  } catch (error) {
    return {
      message: error instanceof Error ? error.message : 'An error occured.'
    }
  }
  redirect('/')
};