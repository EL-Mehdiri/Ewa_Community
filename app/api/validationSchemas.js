import { z } from "zod";

export const IdeaSchema = z.object({
    title: z.string().min(2).max(255),
    content: z.string().min(1),
    // userId: z.string().min(5)
});
