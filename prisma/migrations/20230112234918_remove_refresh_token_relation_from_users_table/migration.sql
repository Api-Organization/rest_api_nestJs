/*
  Warnings:

  - You are about to drop the `refresh_Token` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `refresh_Token` DROP FOREIGN KEY `refresh_Token_userId_fkey`;

-- AlterTable
ALTER TABLE `users` ADD COLUMN `refresh_Token` VARCHAR(191) NULL;

-- DropTable
DROP TABLE `refresh_Token`;
