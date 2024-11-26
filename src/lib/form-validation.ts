import { z } from "zod";

export function getRegistrationSchema() {
  z.object({
    name: z.string().min(2).max(50),
    email: z.string().min(1).email("This isn't a valid email"),
    password: z.string().min(4),
    repeatPassword: z.string().min(4),
    city: z.string().min(2),
  });
}
