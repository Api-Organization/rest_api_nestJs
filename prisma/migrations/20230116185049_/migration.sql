/*
  Warnings:

  - You are about to drop the column `descriptions` on the `Notes` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `Notes` DROP COLUMN `descriptions`,
    ADD COLUMN `content` VARCHAR(191) NULL;
