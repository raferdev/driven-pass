import { Cards } from "@prisma/client"

export type newCardRequest = Omit<Cards,"id"|"created_at"|"user_id">

export type newCard = Omit<Cards,"id"|"created_at">

export type deleteCard = {
    user_id:number,
    title: string
}

export type deleteCardRequest = Omit<deleteCard,"user_id">
