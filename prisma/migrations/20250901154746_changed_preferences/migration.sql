/*
  Warnings:

  - You are about to drop the column `buddhist` on the `Preferences` table. All the data in the column will be lost.
  - You are about to drop the column `fastFoodAvoider` on the `Preferences` table. All the data in the column will be lost.
  - You are about to drop the column `halal` on the `Preferences` table. All the data in the column will be lost.
  - You are about to drop the column `intermittentFasting` on the `Preferences` table. All the data in the column will be lost.
  - You are about to drop the column `jain` on the `Preferences` table. All the data in the column will be lost.
  - You are about to drop the column `kosher` on the `Preferences` table. All the data in the column will be lost.
  - You are about to drop the column `locallySourced` on the `Preferences` table. All the data in the column will be lost.
  - You are about to drop the column `organicOnly` on the `Preferences` table. All the data in the column will be lost.
  - You are about to drop the column `processedFree` on the `Preferences` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "public"."Preferences" DROP COLUMN "buddhist",
DROP COLUMN "fastFoodAvoider",
DROP COLUMN "halal",
DROP COLUMN "intermittentFasting",
DROP COLUMN "jain",
DROP COLUMN "kosher",
DROP COLUMN "locallySourced",
DROP COLUMN "organicOnly",
DROP COLUMN "processedFree";
