/*
  Warnings:

  - You are about to drop the `permissionRoles` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `roles` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `userRole` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `permissionRoles` DROP FOREIGN KEY `permissionRoles_permission_id_fkey`;

-- DropForeignKey
ALTER TABLE `permissionRoles` DROP FOREIGN KEY `permissionRoles_role_id_fkey`;

-- DropForeignKey
ALTER TABLE `userRole` DROP FOREIGN KEY `userRole_role_id_fkey`;

-- DropForeignKey
ALTER TABLE `userRole` DROP FOREIGN KEY `userRole_user_id_fkey`;

-- AlterTable
ALTER TABLE `users` ADD COLUMN `role` VARCHAR(191) NULL;

-- DropTable
DROP TABLE `permissionRoles`;

-- DropTable
DROP TABLE `roles`;

-- DropTable
DROP TABLE `userRole`;

-- CreateTable
CREATE TABLE `usersPermissions` (
    `id` VARCHAR(191) NOT NULL,
    `user_id` VARCHAR(191) NULL,
    `permission_id` VARCHAR(191) NULL,
    `created_at` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `usersPermissions` ADD CONSTRAINT `usersPermissions_permission_id_fkey` FOREIGN KEY (`permission_id`) REFERENCES `permissions`(`id`) ON DELETE SET NULL ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `usersPermissions` ADD CONSTRAINT `usersPermissions_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE SET NULL ON UPDATE NO ACTION;
