/*
  Warnings:

  - You are about to drop the column `unit_price` on the `OrderDetail` table. All the data in the column will be lost.
  - Added the required column `distance` to the `OrderDetail` table without a default value. This is not possible if the table is not empty.
  - Added the required column `total_tariff` to the `OrderDetail` table without a default value. This is not possible if the table is not empty.
  - Added the required column `address` to the `Shipper` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "OrderDetail" DROP COLUMN "unit_price",
ADD COLUMN     "distance" TEXT NOT NULL,
ADD COLUMN     "total_tariff" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Shipper" ADD COLUMN     "address" TEXT NOT NULL;
