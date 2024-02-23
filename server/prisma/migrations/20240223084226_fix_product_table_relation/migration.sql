/*
  Warnings:

  - A unique constraint covering the columns `[utility_id]` on the table `Product` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[habitat_id]` on the table `Product` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Product_utility_id_key" ON "Product"("utility_id");

-- CreateIndex
CREATE UNIQUE INDEX "Product_habitat_id_key" ON "Product"("habitat_id");
