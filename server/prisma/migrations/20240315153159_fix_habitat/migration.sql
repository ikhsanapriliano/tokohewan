/*
  Warnings:

  - You are about to drop the column `product_id` on the `Habitat` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "Habitat_product_id_key";

-- AlterTable
ALTER TABLE "Habitat" DROP COLUMN "product_id";
