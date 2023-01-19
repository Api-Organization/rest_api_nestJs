-- AlterTable
ALTER TABLE `Products` ADD COLUMN `active` BOOLEAN NULL;

-- AlterTable
ALTER TABLE `Users` ADD COLUMN `stripe_customer_id` VARCHAR(191) NULL;

-- CreateTable
CREATE TABLE `Address` (
    `id` VARCHAR(191) NOT NULL,
    `billing_details_id` VARCHAR(191) NOT NULL,
    `city` VARCHAR(191) NOT NULL,
    `country` VARCHAR(191) NOT NULL,
    `postal_code` VARCHAR(191) NOT NULL,
    `state` VARCHAR(191) NOT NULL,
    `line1` VARCHAR(191) NOT NULL,
    `metadata` VARCHAR(191) NOT NULL,
    `userId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Subscription` (
    `id` VARCHAR(191) NOT NULL,
    `userId` VARCHAR(191) NOT NULL,
    `stripe_subscription_id` VARCHAR(191) NOT NULL,
    `status` VARCHAR(191) NOT NULL,
    `active` BOOLEAN NOT NULL,
    `current_period_start` DATETIME(3) NOT NULL,
    `current_period_end` DATETIME(3) NOT NULL,
    `cancel_at_period_end` BOOLEAN NOT NULL,
    `cancel_at` DATETIME(3) NOT NULL,
    `canceled_at` DATETIME(3) NOT NULL,
    `ended_at` DATETIME(3) NOT NULL,
    `default_payment_method` VARCHAR(191) NOT NULL,
    `metadata` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Price` (
    `id` VARCHAR(191) NOT NULL,
    `subscription_id` VARCHAR(191) NOT NULL,
    `stripe_price_id` VARCHAR(191) NOT NULL,
    `stripe_product_id` VARCHAR(191) NOT NULL,
    `amount` INTEGER NOT NULL,
    `label` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Coupon` (
    `id` VARCHAR(191) NOT NULL,
    `stripe_coupon_id` VARCHAR(191) NOT NULL,
    `valid` BOOLEAN NOT NULL,
    `amount_off` INTEGER NOT NULL,
    `currency` VARCHAR(191) NOT NULL,
    `duration` VARCHAR(191) NOT NULL,
    `duration_in_months` INTEGER NOT NULL,
    `max_redemptions` INTEGER NOT NULL,
    `redeem_by` DATETIME(3) NOT NULL,
    `times_redeemed` INTEGER NOT NULL,
    `discount_id` VARCHAR(191) NOT NULL,
    `metadata` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Discount` (
    `id` VARCHAR(191) NOT NULL,
    `stripe_discount_id` VARCHAR(191) NOT NULL,
    `subscription_id` VARCHAR(191) NOT NULL,
    `user_id` VARCHAR(191) NOT NULL,
    `start` DATETIME(3) NOT NULL,
    `end` DATETIME(3) NOT NULL,
    `promo_code` VARCHAR(191) NOT NULL,
    `metadata` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Address` ADD CONSTRAINT `Address_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `Users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Discount` ADD CONSTRAINT `Discount_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `Users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
