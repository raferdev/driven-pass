-- CreateEnum
CREATE TYPE "Card_Type" AS ENUM ('Credit', 'Debit', 'Crebit');

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Notes" (
    "id" SERIAL NOT NULL,
    "title" VARCHAR(50) NOT NULL,
    "text" TEXT NOT NULL,
    "user_id" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Notes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Cards" (
    "id" SERIAL NOT NULL,
    "title" VARCHAR(50) NOT NULL,
    "card_number" TEXT NOT NULL,
    "name_user" TEXT NOT NULL,
    "secure_code" TEXT NOT NULL,
    "exp_date" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "virtual_card" BOOLEAN NOT NULL,
    "type_id" INTEGER NOT NULL,
    "user_id" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Cards_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Credentials" (
    "id" SERIAL NOT NULL,
    "title" VARCHAR(50) NOT NULL,
    "url" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "user_id" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Credentials_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Wireless" (
    "id" SERIAL NOT NULL,
    "title" VARCHAR(50) NOT NULL,
    "name" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "user_id" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Wireless_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Cards_Types" (
    "id" SERIAL NOT NULL,
    "type" "Card_Type" NOT NULL,

    CONSTRAINT "Cards_Types_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Notes_user_id_title_key" ON "Notes"("user_id", "title");

-- CreateIndex
CREATE UNIQUE INDEX "Cards_user_id_title_key" ON "Cards"("user_id", "title");

-- CreateIndex
CREATE UNIQUE INDEX "Credentials_user_id_title_key" ON "Credentials"("user_id", "title");

-- CreateIndex
CREATE UNIQUE INDEX "Wireless_user_id_title_key" ON "Wireless"("user_id", "title");

-- CreateIndex
CREATE UNIQUE INDEX "Cards_Types_type_key" ON "Cards_Types"("type");

-- AddForeignKey
ALTER TABLE "Notes" ADD CONSTRAINT "Notes_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Cards" ADD CONSTRAINT "Cards_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Cards" ADD CONSTRAINT "Cards_type_id_fkey" FOREIGN KEY ("type_id") REFERENCES "Cards_Types"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Credentials" ADD CONSTRAINT "Credentials_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Wireless" ADD CONSTRAINT "Wireless_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
