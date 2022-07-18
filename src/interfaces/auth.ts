import {User} from "@prisma/client";

export type NewUser = Omit<User,"id"|"created_at">