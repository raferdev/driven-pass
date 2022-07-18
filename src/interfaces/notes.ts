import { Notes } from "@prisma/client";

export type notesSchemaRequest = Omit<Notes,"id"|"user_id"|"created_at">
export type notesSchema = Omit<Notes,"id"|"created_at">