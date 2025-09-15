"use server";

import { z } from "zod";

const ContactFormSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  message: z.string().min(10),
  propertyId: z.string(),
});

export async function submitContactForm(prevState: any, formData: FormData) {
  const validatedFields = ContactFormSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    message: formData.get("message"),
    propertyId: formData.get("propertyId"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Validation failed. Please check your inputs.",
      status: "error",
    };
  }

  // Simulate sending an inquiry
  console.log("New Inquiry:", validatedFields.data);
  await new Promise(resolve => setTimeout(resolve, 1000));

  return {
    message: "Your inquiry has been sent successfully!",
    status: "success",
  };
}
