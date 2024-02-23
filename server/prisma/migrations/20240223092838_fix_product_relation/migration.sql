/*
  Warnings:

  - You are about to drop the column `habitat_id` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `utility_id` on the `Product` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[product_id]` on the table `Habitat` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[product_id]` on the table `Utility` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `product_id` to the `Habitat` table without a default value. This is not possible if the table is not empty.
  - Added the required column `product_id` to the `Utility` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Product" DROP CONSTRAINT "Product_habitat_id_fkey";

-- DropForeignKey
ALTER TABLE "Product" DROP CONSTRAINT "Product_utility_id_fkey";

-- DropIndex
DROP INDEX "Product_habitat_id_key";

-- DropIndex
DROP INDEX "Product_utility_id_key";

-- AlterTable
ALTER TABLE "Habitat" ADD COLUMN     "product_id" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Product" DROP COLUMN "habitat_id",
DROP COLUMN "utility_id";

-- AlterTable
ALTER TABLE "Utility" ADD COLUMN     "product_id" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Habitat_product_id_key" ON "Habitat"("product_id");

-- CreateIndex
CREATE UNIQUE INDEX "Utility_product_id_key" ON "Utility"("product_id");

-- AddForeignKey
ALTER TABLE "Utility" ADD CONSTRAINT "Utility_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Habitat" ADD CONSTRAINT "Habitat_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
