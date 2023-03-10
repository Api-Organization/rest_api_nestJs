/*
  Warnings:

  - The primary key for the `Requests` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `status` on the `Requests` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `TinyInt`.
  - The required column `id` was added to the `Requests` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.

*/
-- AlterTable
ALTER TABLE `Requests` DROP PRIMARY KEY,
    ADD COLUMN `id` VARCHAR(191) NOT NULL,
    MODIFY `url` VARCHAR(191) NULL,
    MODIFY `method` VARCHAR(191) NULL,
    MODIFY `status` BOOLEAN NULL,
    ADD PRIMARY KEY (`id`);
