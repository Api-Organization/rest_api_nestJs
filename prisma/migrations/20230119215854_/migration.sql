-- AlterTable
ALTER TABLE `Subscription` MODIFY `status` VARCHAR(191) NULL,
    MODIFY `current_period_start` DATETIME(3) NULL,
    MODIFY `current_period_end` DATETIME(3) NULL,
    MODIFY `cancel_at` DATETIME(3) NULL,
    MODIFY `canceled_at` DATETIME(3) NULL,
    MODIFY `ended_at` DATETIME(3) NULL,
    MODIFY `default_payment_method` VARCHAR(191) NULL,
    MODIFY `metadata` VARCHAR(191) NULL;
