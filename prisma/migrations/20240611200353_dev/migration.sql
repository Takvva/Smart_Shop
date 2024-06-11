/*
  Warnings:

  - You are about to drop the column `Visite` on the `clients` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `clients` DROP COLUMN `Visite`,
    ADD COLUMN `derniereVisite` DATETIME(3) NULL;
