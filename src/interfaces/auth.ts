import {User} from "@prisma/client";

export type Auth = Omit<User,"id"|"created_at">