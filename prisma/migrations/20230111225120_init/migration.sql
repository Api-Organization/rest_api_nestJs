-- CreateTable
CREATE TABLE `links` (
    `id` VARCHAR(191) NOT NULL,
    `url` VARCHAR(191) NOT NULL,
    `note_id` VARCHAR(191) NULL,
    `created_at` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `notes` (
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
CREATE TABLE `permissions` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NULL,
    `descriptions` VARCHAR(191) NULL,
    `created_at` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `permissions_name_key`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `permissionRoles` (
    `id` VARCHAR(191) NOT NULL,
    `role_id` VARCHAR(191) NULL,
    `permission_id` VARCHAR(191) NULL,
    `created_at` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `roles` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NULL,
    `descriptions` VARCHAR(191) NULL,
    `created_at` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `roles_name_key`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tags` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `note_id` VARCHAR(191) NULL,
    `user_id` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `products` (
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
CREATE TABLE `productsFaq` (
    `id` VARCHAR(191) NOT NULL,
    `Product_id` VARCHAR(191) NOT NULL,
    `faq_id` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `faq` (
    `id` VARCHAR(191) NOT NULL,
    `question` VARCHAR(191) NOT NULL,
    `answer` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `productsPermissions` (
    `id` VARCHAR(191) NOT NULL,
    `product_id` VARCHAR(191) NULL,
    `permission_id` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `photos` (
    `id` VARCHAR(191) NOT NULL,
    `link` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `reviwers` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `photosReviwers` (
    `id` VARCHAR(191) NOT NULL,
    `reviwers_id` VARCHAR(191) NULL,
    `photo_id` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `productsReviwers` (
    `id` VARCHAR(191) NOT NULL,
    `reviwers_id` VARCHAR(191) NULL,
    `product_id` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `photosProducts` (
    `id` VARCHAR(191) NOT NULL,
    `product_id` VARCHAR(191) NULL,
    `photo_id` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `accounts` (
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
CREATE TABLE `accountsPermissions` (
    `id` VARCHAR(191) NOT NULL,
    `accounts_id` VARCHAR(191) NULL,
    `permission_id` VARCHAR(191) NULL,
    `created_at` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `userRole` (
    `id` VARCHAR(191) NOT NULL,
    `role_id` VARCHAR(191) NULL,
    `user_id` VARCHAR(191) NULL,
    `created_at` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `users` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NULL,
    `number` VARCHAR(191) NULL,
    `status` VARCHAR(191) NULL,
    `payment` DATETIME(3) NULL,
    `email` VARCHAR(191) NULL,
    `password` VARCHAR(191) NULL,
    `created_at` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `users_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `refresh_Token` (
    `id` VARCHAR(191) NOT NULL,
    `expiresIn` INTEGER NOT NULL,
    `userId` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `refresh_Token_userId_key`(`userId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `links` ADD CONSTRAINT `links_note_id_fkey` FOREIGN KEY (`note_id`) REFERENCES `notes`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `notes` ADD CONSTRAINT `notes_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `permissionRoles` ADD CONSTRAINT `permissionRoles_permission_id_fkey` FOREIGN KEY (`permission_id`) REFERENCES `permissions`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `permissionRoles` ADD CONSTRAINT `permissionRoles_role_id_fkey` FOREIGN KEY (`role_id`) REFERENCES `roles`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `tags` ADD CONSTRAINT `tags_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `tags` ADD CONSTRAINT `tags_note_id_fkey` FOREIGN KEY (`note_id`) REFERENCES `notes`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `productsFaq` ADD CONSTRAINT `productsFaq_faq_id_fkey` FOREIGN KEY (`faq_id`) REFERENCES `faq`(`id`) ON DELETE RESTRICT ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `productsFaq` ADD CONSTRAINT `productsFaq_Product_id_fkey` FOREIGN KEY (`Product_id`) REFERENCES `products`(`id`) ON DELETE RESTRICT ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `productsPermissions` ADD CONSTRAINT `productsPermissions_permission_id_fkey` FOREIGN KEY (`permission_id`) REFERENCES `permissions`(`id`) ON DELETE SET NULL ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `productsPermissions` ADD CONSTRAINT `productsPermissions_product_id_fkey` FOREIGN KEY (`product_id`) REFERENCES `products`(`id`) ON DELETE SET NULL ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `photosReviwers` ADD CONSTRAINT `photosReviwers_photo_id_fkey` FOREIGN KEY (`photo_id`) REFERENCES `photos`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `photosReviwers` ADD CONSTRAINT `photosReviwers_reviwers_id_fkey` FOREIGN KEY (`reviwers_id`) REFERENCES `reviwers`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `productsReviwers` ADD CONSTRAINT `productsReviwers_product_id_fkey` FOREIGN KEY (`product_id`) REFERENCES `products`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `productsReviwers` ADD CONSTRAINT `productsReviwers_reviwers_id_fkey` FOREIGN KEY (`reviwers_id`) REFERENCES `reviwers`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `photosProducts` ADD CONSTRAINT `photosProducts_photo_id_fkey` FOREIGN KEY (`photo_id`) REFERENCES `photos`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `photosProducts` ADD CONSTRAINT `photosProducts_product_id_fkey` FOREIGN KEY (`product_id`) REFERENCES `products`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `accountsPermissions` ADD CONSTRAINT `accountsPermissions_permission_id_fkey` FOREIGN KEY (`permission_id`) REFERENCES `permissions`(`id`) ON DELETE SET NULL ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `accountsPermissions` ADD CONSTRAINT `accountsPermissions_accounts_id_fkey` FOREIGN KEY (`accounts_id`) REFERENCES `accounts`(`id`) ON DELETE SET NULL ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `userRole` ADD CONSTRAINT `userRole_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `userRole` ADD CONSTRAINT `userRole_role_id_fkey` FOREIGN KEY (`role_id`) REFERENCES `roles`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `refresh_Token` ADD CONSTRAINT `refresh_Token_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
