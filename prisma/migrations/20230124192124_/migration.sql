/*
  Warnings:

  - You are about to drop the `Photos` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_PhotosToProducts` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_PhotosToReviewers` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `_PhotosToProducts` DROP FOREIGN KEY `_PhotosToProducts_A_fkey`;

-- DropForeignKey
ALTER TABLE `_PhotosToProducts` DROP FOREIGN KEY `_PhotosToProducts_B_fkey`;

-- DropForeignKey
ALTER TABLE `_PhotosToReviewers` DROP FOREIGN KEY `_PhotosToReviewers_A_fkey`;

-- DropForeignKey
ALTER TABLE `_PhotosToReviewers` DROP FOREIGN KEY `_PhotosToReviewers_B_fkey`;

-- DropTable
DROP TABLE `Photos`;

-- DropTable
DROP TABLE `_PhotosToProducts`;

-- DropTable
DROP TABLE `_PhotosToReviewers`;

-- CreateTable
CREATE TABLE `Files` (
    `id` VARCHAR(191) NOT NULL,
    `link` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_FilesToProducts` (
    `A` VARCHAR(191) NOT NULL,
    `B` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `_FilesToProducts_AB_unique`(`A`, `B`),
    INDEX `_FilesToProducts_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_FilesToReviewers` (
    `A` VARCHAR(191) NOT NULL,
    `B` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `_FilesToReviewers_AB_unique`(`A`, `B`),
    INDEX `_FilesToReviewers_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `_FilesToProducts` ADD CONSTRAINT `_FilesToProducts_A_fkey` FOREIGN KEY (`A`) REFERENCES `Files`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_FilesToProducts` ADD CONSTRAINT `_FilesToProducts_B_fkey` FOREIGN KEY (`B`) REFERENCES `Products`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_FilesToReviewers` ADD CONSTRAINT `_FilesToReviewers_A_fkey` FOREIGN KEY (`A`) REFERENCES `Files`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_FilesToReviewers` ADD CONSTRAINT `_FilesToReviewers_B_fkey` FOREIGN KEY (`B`) REFERENCES `Reviewers`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
