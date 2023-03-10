-- CreateTable
CREATE TABLE `Requests` (
    `url` VARCHAR(191) NOT NULL,
    `method` VARCHAR(191) NOT NULL,
    `body` VARCHAR(191) NULL,
    `cookies` VARCHAR(191) NULL,
    `status` VARCHAR(191) NULL,
    `created_at` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),
    `tools` VARCHAR(191) NULL,
    `description` VARCHAR(191) NULL,

    PRIMARY KEY (`url`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
