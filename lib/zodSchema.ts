import { z } from 'zod';

export const onboardingSchema = z.object({
    fullName: z.string().min(3).max(255),
    userName: z.string().min(3).max(255).regex(/^[a-zA-Z0-9-]+$/, {
        message: "Username must contain only letters, numbers, and hyphens",
    }),
});