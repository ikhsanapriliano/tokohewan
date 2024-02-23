/*
  Warnings:

  - You are about to drop the column `product_id` on the `OrderDetail` table. All the data in the column will be lost.
  - You are about to drop the column `shipper_id` on the `OrderDetail` table. All the data in the column will be lost.
  - You are about to drop the column `address` on the `Profile` table. All the data in the column will be lost.
  - You are about to drop the column `address` on the `Shipper` table. All the data in the column will be lost.
  - Added the required column `product_id` to the `Order` table without a default value. This is not possible if the table is not empty.
  - Added the required column `shipper_id` to the `Order` table without a default value. This is not possible if the table is not empty.
  - Added the required column `final_price` to the `OrderDetail` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tax` to the `OrderDetail` table without a default value. This is not possible if the table is not empty.
  - Added the required column `domicile_id` to the `Profile` table without a default value. This is not possible if the table is not empty.
  - Added the required column `domicile_id` to the `Shipper` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "OrderDetail" DROP CONSTRAINT "OrderDetail_product_id_fkey";

-- DropForeignKey
ALTER TABLE "OrderDetail" DROP CONSTRAINT "OrderDetail_shipper_id_fkey";

-- AlterTable
ALTER TABLE "Order" ADD COLUMN     "product_id" INTEGER NOT NULL,
ADD COLUMN     "shipper_id" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "OrderDetail" DROP COLUMN "product_id",
DROP COLUMN "shipper_id",
ADD COLUMN     "final_price" INTEGER NOT NULL,
ADD COLUMN     "tax" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Profile" DROP COLUMN "address",
ADD COLUMN     "domicile_id" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Shipper" DROP COLUMN "address",
ADD COLUMN     "domicile_id" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "Domicile" (
    "id" INTEGER NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Domicile_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Profile" ADD CONSTRAINT "Profile_domicile_id_fkey" FOREIGN KEY ("domicile_id") REFERENCES "Domicile"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Shipper" ADD CONSTRAINT "Shipper_domicile_id_fkey" FOREIGN KEY ("domicile_id") REFERENCES "Domicile"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Order" ADD CONSTRAINT "Order_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Order" ADD CONSTRAINT "Order_shipper_id_fkey" FOREIGN KEY ("shipper_id") REFERENCES "Shipper"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
