/*
  Warnings:

  - You are about to drop the `accounts` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `accountsPermissions` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `faq` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `links` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `notes` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `photos` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `photosProducts` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `photosReviwers` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `products` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `productsFaq` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `productsPermissions` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `productsReviwers` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `reviwers` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `tags` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `accountsPermissions` DROP FOREIGN KEY `accountsPermissions_accounts_id_fkey`;

-- DropForeignKey
ALTER TABLE `accountsPermissions` DROP FOREIGN KEY `accountsPermissions_permission_id_fkey`;

-- DropForeignKey
ALTER TABLE `links` DROP FOREIGN KEY `links_note_id_fkey`;

-- DropForeignKey
ALTER TABLE `notes` DROP FOREIGN KEY `notes_user_id_fkey`;

-- DropForeignKey
ALTER TABLE `photosProducts` DROP FOREIGN KEY `photosProducts_photo_id_fkey`;

-- DropForeignKey
ALTER TABLE `photosProducts` DROP FOREIGN KEY `photosProducts_product_id_fkey`;

-- DropForeignKey
ALTER TABLE `photosReviwers` DROP FOREIGN KEY `photosReviwers_photo_id_fkey`;

-- DropForeignKey
ALTER TABLE `photosReviwers` DROP FOREIGN KEY `photosReviwers_reviwers_id_fkey`;

-- DropForeignKey
ALTER TABLE `productsFaq` DROP FOREIGN KEY `productsFaq_Product_id_fkey`;

-- DropForeignKey
ALTER TABLE `productsFaq` DROP FOREIGN KEY `productsFaq_faq_id_fkey`;

-- DropForeignKey
ALTER TABLE `productsPermissions` DROP FOREIGN KEY `productsPermissions_permission_id_fkey`;

-- DropForeignKey
ALTER TABLE `productsPermissions` DROP FOREIGN KEY `productsPermissions_product_id_fkey`;

-- DropForeignKey
ALTER TABLE `productsReviwers` DROP FOREIGN KEY `productsReviwers_product_id_fkey`;

-- DropForeignKey
ALTER TABLE `productsReviwers` DROP FOREIGN KEY `productsReviwers_reviwers_id_fkey`;

-- DropForeignKey
ALTER TABLE `tags` DROP FOREIGN KEY `tags_note_id_fkey`;

-- DropForeignKey
ALTER TABLE `tags` DROP FOREIGN KEY `tags_user_id_fkey`;

-- DropTable
DROP TABLE `accounts`;

-- DropTable
DROP TABLE `accountsPermissions`;

-- DropTable
DROP TABLE `faq`;

-- DropTable
DROP TABLE `links`;

-- DropTable
DROP TABLE `notes`;

-- DropTable
DROP TABLE `photos`;

-- DropTable
DROP TABLE `photosProducts`;

-- DropTable
DROP TABLE `photosReviwers`;

-- DropTable
DROP TABLE `products`;

-- DropTable
DROP TABLE `productsFaq`;

-- DropTable
DROP TABLE `productsPermissions`;

-- DropTable
DROP TABLE `productsReviwers`;

-- DropTable
DROP TABLE `reviwers`;

-- DropTable
DROP TABLE `tags`;

-- CreateTable
CREATE TABLE `Links` (
    `id` VARCHAR(191) NOT NULL,
    `url` VARCHAR(191) NOT NULL,
    `note_id` VARCHAR(191) NULL,
    `created_at` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Notes` (
    `id` VARCHAR(191) NOT NULL,
    `title` VARCHAR(191) NULL,
    `descriptions` VARCHAR(191) NULL,
    `time` VARCHAR(191) NULL,
    `user_id` VARCHAR(191) NULL,
    `created_at` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Tags` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `note_id` VARCHAR(191) NULL,
    `user_id` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Products` (
    `id` VARCHAR(191) NOT NULL,
    `product` VARCHAR(191) NOT NULL,
    `price` VARCHAR(191) NULL,
    `description` VARCHAR(191) NULL,
    `photo` VARCHAR(191) NULL,
    `time` VARCHAR(191) NULL,
    `created_at` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Faq` (
    `id` VARCHAR(191) NOT NULL,
    `question` VARCHAR(191) NOT NULL,
    `answer` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Photos` (
    `id` VARCHAR(191) NOT NULL,
    `link` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Reviwers` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Accounts` (
    `id` VARCHAR(191) NOT NULL,
    `site` VARCHAR(191) NULL,
    `tool` VARCHAR(191) NULL,
    `email` VARCHAR(191) NULL,
    `password` VARCHAR(191) NULL,
    `created_at` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_ProductsToReviwers` (
    `A` VARCHAR(191) NOT NULL,
    `B` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `_ProductsToReviwers_AB_unique`(`A`, `B`),
    INDEX `_ProductsToReviwers_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_FaqToProducts` (
    `A` VARCHAR(191) NOT NULL,
    `B` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `_FaqToProducts_AB_unique`(`A`, `B`),
    INDEX `_FaqToProducts_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_PhotosToProducts` (
    `A` VARCHAR(191) NOT NULL,
    `B` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `_PhotosToProducts_AB_unique`(`A`, `B`),
    INDEX `_PhotosToProducts_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_PhotosToReviwers` (
    `A` VARCHAR(191) NOT NULL,
    `B` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `_PhotosToReviwers_AB_unique`(`A`, `B`),
    INDEX `_PhotosToReviwers_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_AccountsToPermissions` (
    `A` VARCHAR(191) NOT NULL,
    `B` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `_AccountsToPermissions_AB_unique`(`A`, `B`),
    INDEX `_AccountsToPermissions_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_PermissionsToProducts` (
    `A` VARCHAR(191) NOT NULL,
    `B` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `_PermissionsToProducts_AB_unique`(`A`, `B`),
    INDEX `_PermissionsToProducts_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Links` ADD CONSTRAINT `Links_note_id_fkey` FOREIGN KEY (`note_id`) REFERENCES `Notes`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `Notes` ADD CONSTRAINT `Notes_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `Users`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `Tags` ADD CONSTRAINT `Tags_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `Users`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `Tags` ADD CONSTRAINT `Tags_note_id_fkey` FOREIGN KEY (`note_id`) REFERENCES `Notes`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `_ProductsToReviwers` ADD CONSTRAINT `_ProductsToReviwers_A_fkey` FOREIGN KEY (`A`) REFERENCES `Products`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_ProductsToReviwers` ADD CONSTRAINT `_ProductsToReviwers_B_fkey` FOREIGN KEY (`B`) REFERENCES `Reviwers`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_FaqToProducts` ADD CONSTRAINT `_FaqToProducts_A_fkey` FOREIGN KEY (`A`) REFERENCES `Faq`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_FaqToProducts` ADD CONSTRAINT `_FaqToProducts_B_fkey` FOREIGN KEY (`B`) REFERENCES `Products`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_PhotosToProducts` ADD CONSTRAINT `_PhotosToProducts_A_fkey` FOREIGN KEY (`A`) REFERENCES `Photos`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_PhotosToProducts` ADD CONSTRAINT `_PhotosToProducts_B_fkey` FOREIGN KEY (`B`) REFERENCES `Products`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_PhotosToReviwers` ADD CONSTRAINT `_PhotosToReviwers_A_fkey` FOREIGN KEY (`A`) REFERENCES `Photos`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_PhotosToReviwers` ADD CONSTRAINT `_PhotosToReviwers_B_fkey` FOREIGN KEY (`B`) REFERENCES `Reviwers`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_AccountsToPermissions` ADD CONSTRAINT `_AccountsToPermissions_A_fkey` FOREIGN KEY (`A`) REFERENCES `Accounts`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_AccountsToPermissions` ADD CONSTRAINT `_AccountsToPermissions_B_fkey` FOREIGN KEY (`B`) REFERENCES `Permissions`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_PermissionsToProducts` ADD CONSTRAINT `_PermissionsToProducts_A_fkey` FOREIGN KEY (`A`) REFERENCES `Permissions`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_PermissionsToProducts` ADD CONSTRAINT `_PermissionsToProducts_B_fkey` FOREIGN KEY (`B`) REFERENCES `Products`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
