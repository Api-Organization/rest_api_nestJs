/*
  Warnings:

  - You are about to drop the column `product` on the `Products` table. All the data in the column will be lost.
  - Added the required column `name` to the `Products` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Products` DROP COLUMN `product`,
    ADD COLUMN `name` VARCHAR(191) NOT NULL,
    ADD COLUMN `stock` VARCHAR(191) NULL;
