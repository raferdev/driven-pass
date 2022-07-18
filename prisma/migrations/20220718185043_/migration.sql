/*
  Warnings:

  - You are about to drop the `Cards` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Cards_Types` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Credentials` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Notes` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Wireless` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Cards" DROP CONSTRAINT "Cards_type_id_fkey";

-- DropForeignKey
ALTER TABLE "Cards" DROP CONSTRAINT "Cards_user_id_fkey";

-- DropForeignKey
ALTER TABLE "Credentials" DROP CONSTRAINT "Credentials_user_id_fkey";

-- DropForeignKey
ALTER TABLE "Notes" DROP CONSTRAINT "Notes_user_id_fkey";

-- DropForeignKey
ALTER TABLE "Wireless" DROP CONSTRAINT "Wireless_user_id_fkey";

-- DropTable
DROP TABLE "Cards";

-- DropTable
DROP TABLE "Cards_Types";

-- DropTable
DROP TABLE "Credentials";

-- DropTable
DROP TABLE "Notes";

-- DropTable
DROP TABLE "User";

-- DropTable
DROP TABLE "Wireless";

-- CreateTable
CREATE TABLE "user" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "notes" (
    "id" SERIAL NOT NULL,
    "title" VARCHAR(50) NOT NULL,
    "text" TEXT NOT NULL,
    "user_id" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "notes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "cards" (
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

    CONSTRAINT "cards_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "credentials" (
    "id" SERIAL NOT NULL,
    "title" VARCHAR(50) NOT NULL,
    "url" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "user_id" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "credentials_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "wireless" (
    "id" SERIAL NOT NULL,
    "title" VARCHAR(50) NOT NULL,
    "name" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "user_id" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "wireless_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "cards_types" (
    "id" SERIAL NOT NULL,
    "type" "Card_Type" NOT NULL,

    CONSTRAINT "cards_types_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "user_email_key" ON "user"("email");

-- CreateIndex
CREATE UNIQUE INDEX "notes_user_id_title_key" ON "notes"("user_id", "title");

-- CreateIndex
CREATE UNIQUE INDEX "cards_user_id_title_key" ON "cards"("user_id", "title");

-- CreateIndex
CREATE UNIQUE INDEX "credentials_user_id_title_key" ON "credentials"("user_id", "title");

-- CreateIndex
CREATE UNIQUE INDEX "wireless_user_id_title_key" ON "wireless"("user_id", "title");

-- CreateIndex
CREATE UNIQUE INDEX "cards_types_type_key" ON "cards_types"("type");

-- AddForeignKey
ALTER TABLE "notes" ADD CONSTRAINT "notes_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "cards" ADD CONSTRAINT "cards_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "cards" ADD CONSTRAINT "cards_type_id_fkey" FOREIGN KEY ("type_id") REFERENCES "cards_types"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "credentials" ADD CONSTRAINT "credentials_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "wireless" ADD CONSTRAINT "wireless_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
