import { Wireless } from "@prisma/client";


export type newWireless = Omit<Wireless,"id"|"created_at">
export type newWirelessRequest = Omit<Wireless,"id"|"created_at"|"user_id">