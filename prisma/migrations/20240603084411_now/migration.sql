/*
  Warnings:

  - You are about to alter the column `prix` on the `product` table. The data in that column could be lost. The data in that column will be cast from `Int` to `Double`.

*/
-- AlterTable
ALTER TABLE `product` MODIFY `prix` DOUBLE NULL;
