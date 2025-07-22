// src/utils/validation.ts
import { z } from 'zod'

export const registrationSchema = z.object({
  schoolName: z
    .string()
    .min(2, 'School name must be at least 2 characters'),
  contactEmail: z
    .string()
    .email('Please enter a valid email address'),
  contactPhone: z
    .string()
    .min(8, 'Phone number must be at least 8 digits')
    .regex(/^[0-9+() -]*$/, 'Invalid phone number format'),
  studentDetails: z
    .string()
    .min(10, 'Please provide more details about the students')
})

export type RegistrationFormData = z.infer<typeof registrationSchema>
