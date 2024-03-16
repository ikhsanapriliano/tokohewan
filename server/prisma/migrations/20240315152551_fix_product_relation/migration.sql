/*
  Warnings:

  - The primary key for the `Habitat` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Utility` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `product_id` on the `Utility` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[utility_id]` on the table `Product` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[habitat_id]` on the table `Product` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `habitat_id` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `utility_id` to the `Product` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Habitat" DROP CONSTRAINT "Habitat_product_id_fkey";

-- DropForeignKey
ALTER TABLE "Utility" DROP CONSTRAINT "Utility_product_id_fkey";

-- DropIndex
DROP INDEX "Utility_product_id_key";

-- AlterTable
ALTER TABLE "Habitat" DROP CONSTRAINT "Habitat_pkey",
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Habitat_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Product" ADD COLUMN     "habitat_id" TEXT NOT NULL,
ADD COLUMN     "utility_id" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Utility" DROP CONSTRAINT "Utility_pkey",
DROP COLUMN "product_id",
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Utility_pkey" PRIMARY KEY ("id");

-- CreateIndex
CREATE UNIQUE INDEX "Product_utility_id_key" ON "Product"("utility_id");

-- CreateIndex
CREATE UNIQUE INDEX "Product_habitat_id_key" ON "Product"("habitat_id");

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_utility_id_fkey" FOREIGN KEY ("utility_id") REFERENCES "Utility"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_habitat_id_fkey" FOREIGN KEY ("habitat_id") REFERENCES "Habitat"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
