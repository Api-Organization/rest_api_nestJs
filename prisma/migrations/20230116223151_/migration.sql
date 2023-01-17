/*
  Warnings:

  - You are about to drop the `Reviwers` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_PhotosToReviwers` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_ProductsToReviwers` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `_PhotosToReviwers` DROP FOREIGN KEY `_PhotosToReviwers_A_fkey`;

-- DropForeignKey
ALTER TABLE `_PhotosToReviwers` DROP FOREIGN KEY `_PhotosToReviwers_B_fkey`;

-- DropForeignKey
ALTER TABLE `_ProductsToReviwers` DROP FOREIGN KEY `_ProductsToReviwers_A_fkey`;

-- DropForeignKey
ALTER TABLE `_ProductsToReviwers` DROP FOREIGN KEY `_ProductsToReviwers_B_fkey`;

-- DropTable
DROP TABLE `Reviwers`;

-- DropTable
DROP TABLE `_PhotosToReviwers`;

-- DropTable
DROP TABLE `_ProductsToReviwers`;

-- CreateTable
CREATE TABLE `Reviewers` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NULL,
    `created_at` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_ProductsToReviewers` (
    `A` VARCHAR(191) NOT NULL,
    `B` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `_ProductsToReviewers_AB_unique`(`A`, `B`),
    INDEX `_ProductsToReviewers_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_PhotosToReviewers` (
    `A` VARCHAR(191) NOT NULL,
    `B` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `_PhotosToReviewers_AB_unique`(`A`, `B`),
    INDEX `_PhotosToReviewers_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `_ProductsToReviewers` ADD CONSTRAINT `_ProductsToReviewers_A_fkey` FOREIGN KEY (`A`) REFERENCES `Products`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_ProductsToReviewers` ADD CONSTRAINT `_ProductsToReviewers_B_fkey` FOREIGN KEY (`B`) REFERENCES `Reviewers`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_PhotosToReviewers` ADD CONSTRAINT `_PhotosToReviewers_A_fkey` FOREIGN KEY (`A`) REFERENCES `Photos`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_PhotosToReviewers` ADD CONSTRAINT `_PhotosToReviewers_B_fkey` FOREIGN KEY (`B`) REFERENCES `Reviewers`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
