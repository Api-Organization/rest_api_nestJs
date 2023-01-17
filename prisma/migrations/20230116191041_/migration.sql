/*
  Warnings:

  - You are about to drop the column `descriptions` on the `Permissions` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `Permissions` DROP COLUMN `descriptions`,
    ADD COLUMN `description` VARCHAR(191) NULL;
