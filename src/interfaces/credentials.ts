import { Credentials } from "@prisma/client";

export type newCredential = Omit<Credentials,"id"|"created_at">
export type newCredentialRequest = Omit<Credentials,"id"|"created_at"|"user_id">