/*
  Warnings:

  - Added the required column `user_agent` to the `Devices` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Devices` ADD COLUMN `user_agent` VARCHAR(191) NOT NULL;
