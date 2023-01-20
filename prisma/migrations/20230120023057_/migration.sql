/*
  Warnings:

  - You are about to drop the column `active` on the `Users` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `Users` DROP COLUMN `active`,
    ADD COLUMN `isEmailConfirmed` BOOLEAN NULL;
