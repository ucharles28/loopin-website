"use server";

import { supabase } from "@/lib/supabase";

interface JoinWaitlistResult {
  success: boolean;
  error?: string;
}

export async function joinWaitlist({
  firstName,
  email,
}: {
  firstName: string;
  email: string;
}): Promise<JoinWaitlistResult> {
  // 1. Basic Server-side validation
  if (!firstName || !firstName.trim()) {
    return { success: false, error: "First name is required." };
  }
  if (!email || !email.trim()) {
    return { success: false, error: "Email address is required." };
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email.trim())) {
    return { success: false, error: "Please enter a valid email address." };
  }

  const cleanFirstName = firstName.trim();
  const cleanEmail = email.trim().toLowerCase();

  try {
    // 2. Option A: Check if email already exists on the waitlist
    const { data: existingEntry, error: checkError } = await supabase
      .from("waitlist")
      .select("email")
      .eq("email", cleanEmail)
      .maybeSingle();

    if (checkError) {
      console.error("Database check error:", checkError);
      return {
        success: false,
        error: "Database error occurred. Please try again.",
      };
    }

    if (existingEntry) {
      return {
        success: false,
        error: "This email is already on the waitlist!",
      };
    }

    // 3. Insert the new waitlist contact
    const { error: insertError } = await supabase
      .from("waitlist")
      .insert([{ first_name: cleanFirstName, email: cleanEmail }]);

    if (insertError) {
      console.error("Database insert error:", insertError);
      return {
        success: false,
        error: "Failed to join the waitlist. Please try again.",
      };
    }

    return { success: true };
  } catch (error) {
    console.error("Server Action error:", error);
    return {
      success: false,
      error: "An unexpected error occurred. Please try again later.",
    };
  }
}
