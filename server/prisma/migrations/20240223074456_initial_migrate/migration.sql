-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" INTEGER NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Profile" (
    "id" SERIAL NOT NULL,
    "gender" TEXT NOT NULL,
    "photo" TEXT,
    "address" TEXT NOT NULL,
    "user_id" INTEGER NOT NULL,

    CONSTRAINT "Profile_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Product" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "photo" TEXT NOT NULL,
    "class" TEXT NOT NULL,
    "utility_id" INTEGER NOT NULL,
    "habitat_id" INTEGER NOT NULL,
    "price" INTEGER NOT NULL,
    "discount" INTEGER NOT NULL,
    "free_delivery" BOOLEAN NOT NULL,
    "rating" INTEGER NOT NULL,
    "seller_id" INTEGER NOT NULL,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Utility" (
    "id" SERIAL NOT NULL,
    "peliharaan" BOOLEAN NOT NULL,
    "peternakan" BOOLEAN NOT NULL,
    "militer" BOOLEAN NOT NULL,
    "hewan_kurban" BOOLEAN NOT NULL,
    "material" BOOLEAN NOT NULL,

    CONSTRAINT "Utility_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Habitat" (
    "id" SERIAL NOT NULL,
    "darat" BOOLEAN NOT NULL,
    "air" BOOLEAN NOT NULL,
    "udara" BOOLEAN NOT NULL,

    CONSTRAINT "Habitat_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Shipper" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "service" TEXT NOT NULL,
    "tariff" INTEGER NOT NULL,
    "unit" TEXT NOT NULL,

    CONSTRAINT "Shipper_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Order" (
    "id" SERIAL NOT NULL,
    "order_date" TIMESTAMP(3) NOT NULL,
    "product_id" INTEGER NOT NULL,
    "buyer_id" INTEGER NOT NULL,
    "shipper_id" INTEGER NOT NULL,

    CONSTRAINT "Order_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "OrderDetail" (
    "id" SERIAL NOT NULL,
    "product_name" TEXT NOT NULL,
    "amount" INTEGER NOT NULL,
    "unit" TEXT NOT NULL,
    "unit_price" INTEGER NOT NULL,
    "total_price" INTEGER NOT NULL,
    "order_id" INTEGER NOT NULL,

    CONSTRAINT "OrderDetail_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Profile_user_id_key" ON "Profile"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "OrderDetail_order_id_key" ON "OrderDetail"("order_id");

-- AddForeignKey
ALTER TABLE "Profile" ADD CONSTRAINT "Profile_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_seller_id_fkey" FOREIGN KEY ("seller_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_utility_id_fkey" FOREIGN KEY ("utility_id") REFERENCES "Utility"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_habitat_id_fkey" FOREIGN KEY ("habitat_id") REFERENCES "Habitat"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Order" ADD CONSTRAINT "Order_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Order" ADD CONSTRAINT "Order_buyer_id_fkey" FOREIGN KEY ("buyer_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Order" ADD CONSTRAINT "Order_shipper_id_fkey" FOREIGN KEY ("shipper_id") REFERENCES "Shipper"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrderDetail" ADD CONSTRAINT "OrderDetail_order_id_fkey" FOREIGN KEY ("order_id") REFERENCES "Order"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
