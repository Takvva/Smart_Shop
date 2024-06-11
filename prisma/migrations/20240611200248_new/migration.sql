/*
  Warnings:

  - You are about to drop the column `derniereVisite` on the `clients` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `clients` DROP COLUMN `derniereVisite`,
    ADD COLUMN `Visite` DATETIME(3) NULL;
