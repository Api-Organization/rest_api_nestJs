/*
  Warnings:

  - You are about to drop the column `payment` on the `Users` table. All the data in the column will be lost.
  - You are about to drop the `Tags` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_ProductsToUsers` table. If the table is not empty, all the data it contains will be lost.
  - Made the column `name` on table `Permissions` required. This step will fail if there are existing NULL values in that column.
  - Made the column `name` on table `Users` required. This step will fail if there are existing NULL values in that column.
  - Made the column `email` on table `Users` required. This step will fail if there are existing NULL values in that column.
  - Made the column `password` on table `Users` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE `Tags` DROP FOREIGN KEY `Tags_note_id_fkey`;

-- DropForeignKey
ALTER TABLE `Tags` DROP FOREIGN KEY `Tags_user_id_fkey`;

-- DropForeignKey
ALTER TABLE `_ProductsToUsers` DROP FOREIGN KEY `_ProductsToUsers_A_fkey`;

-- DropForeignKey
ALTER TABLE `_ProductsToUsers` DROP FOREIGN KEY `_ProductsToUsers_B_fkey`;

-- AlterTable
ALTER TABLE `Permissions` MODIFY `name` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `Users` DROP COLUMN `payment`,
    MODIFY `name` VARCHAR(191) NOT NULL,
    MODIFY `email` VARCHAR(191) NOT NULL,
    MODIFY `password` VARCHAR(191) NOT NULL;

-- DropTable
DROP TABLE `Tags`;

-- DropTable
DROP TABLE `_ProductsToUsers`;

-- CreateTable
CREATE TABLE `Payments` (
    `id` VARCHAR(191) NOT NULL,
    `receiptId` VARCHAR(191) NOT NULL,
    `method` ENUM('CREDIT_CARD', 'DEBIT_CARD', 'BANK_SLIP', 'PIX') NOT NULL,
    `status` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),
    `productId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_PaymentsToUsers` (
    `A` VARCHAR(191) NOT NULL,
    `B` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `_PaymentsToUsers_AB_unique`(`A`, `B`),
    INDEX `_PaymentsToUsers_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Payments` ADD CONSTRAINT `Payments_productId_fkey` FOREIGN KEY (`productId`) REFERENCES `Products`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_PaymentsToUsers` ADD CONSTRAINT `_PaymentsToUsers_A_fkey` FOREIGN KEY (`A`) REFERENCES `Payments`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_PaymentsToUsers` ADD CONSTRAINT `_PaymentsToUsers_B_fkey` FOREIGN KEY (`B`) REFERENCES `Users`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
