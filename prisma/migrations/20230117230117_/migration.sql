/*
  Warnings:

  - You are about to drop the `_PaymentsToUsers` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `userId` to the `Payments` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `_PaymentsToUsers` DROP FOREIGN KEY `_PaymentsToUsers_A_fkey`;

-- DropForeignKey
ALTER TABLE `_PaymentsToUsers` DROP FOREIGN KEY `_PaymentsToUsers_B_fkey`;

-- AlterTable
ALTER TABLE `Payments` ADD COLUMN `userId` VARCHAR(191) NOT NULL;

-- DropTable
DROP TABLE `_PaymentsToUsers`;

-- AddForeignKey
ALTER TABLE `Payments` ADD CONSTRAINT `Payments_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `Users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
