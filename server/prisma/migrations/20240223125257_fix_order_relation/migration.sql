/*
  Warnings:

  - You are about to drop the column `product_id` on the `Order` table. All the data in the column will be lost.
  - You are about to drop the column `shipper_id` on the `Order` table. All the data in the column will be lost.
  - Added the required column `product_id` to the `OrderDetail` table without a default value. This is not possible if the table is not empty.
  - Added the required column `shipper_id` to the `OrderDetail` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Order" DROP CONSTRAINT "Order_product_id_fkey";

-- DropForeignKey
ALTER TABLE "Order" DROP CONSTRAINT "Order_shipper_id_fkey";

-- AlterTable
ALTER TABLE "Order" DROP COLUMN "product_id",
DROP COLUMN "shipper_id";

-- AlterTable
ALTER TABLE "OrderDetail" ADD COLUMN     "product_id" INTEGER NOT NULL,
ADD COLUMN     "shipper_id" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "OrderDetail" ADD CONSTRAINT "OrderDetail_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrderDetail" ADD CONSTRAINT "OrderDetail_shipper_id_fkey" FOREIGN KEY ("shipper_id") REFERENCES "Shipper"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
