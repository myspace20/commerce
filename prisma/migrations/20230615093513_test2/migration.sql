-- CreateEnum
CREATE TYPE "Role" AS ENUM ('customer', 'admin');

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "role" "Role" NOT NULL DEFAULT 'customer',

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User_address_history" (
    "addressId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "User_address_history_pkey" PRIMARY KEY ("addressId","userId")
);

-- CreateTable
CREATE TABLE "Address" (
    "id" TEXT NOT NULL,
    "unit_number" TEXT NOT NULL,
    "street_address" TEXT NOT NULL,
    "address_line1" TEXT,
    "address_line2" TEXT,
    "city" TEXT NOT NULL,
    "region" TEXT NOT NULL,
    "postal_code" TEXT NOT NULL,
    "countryId" TEXT NOT NULL,

    CONSTRAINT "Address_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Country" (
    "id" TEXT NOT NULL,
    "country_name" TEXT NOT NULL,

    CONSTRAINT "Country_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Shopping_cart" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "Shopping_cart_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Shopping_cart_item" (
    "id" TEXT NOT NULL,
    "cartId" TEXT NOT NULL,
    "product_item_id" TEXT NOT NULL,
    "qty" INTEGER NOT NULL,

    CONSTRAINT "Shopping_cart_item_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User_payment_method" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "payment_type_id" TEXT NOT NULL,
    "provider" TEXT NOT NULL,
    "account_number" TEXT NOT NULL,
    "expiry_date" TEXT NOT NULL,
    "is_default" BOOLEAN NOT NULL,

    CONSTRAINT "User_payment_method_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Payment_type" (
    "id" TEXT NOT NULL,
    "value" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Payment_type_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User_review" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "ordered_product_id" TEXT NOT NULL,
    "rating_value" INTEGER NOT NULL,
    "comment" TEXT NOT NULL,

    CONSTRAINT "User_review_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Promotion_category" (
    "category_id" TEXT NOT NULL,
    "promotion_id" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Promotion" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "discount_rate" DOUBLE PRECISION NOT NULL,
    "start_date" TIMESTAMP(3) NOT NULL,
    "end_date" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Promotion_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Product" (
    "id" TEXT NOT NULL,
    "category_id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "product_image" TEXT NOT NULL,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Product_item" (
    "id" TEXT NOT NULL,
    "product_id" TEXT NOT NULL,
    "SKU" TEXT NOT NULL,
    "qty_in_stock" INTEGER NOT NULL,
    "product_image" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Product_item_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Variation" (
    "id" TEXT NOT NULL,
    "category_id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Variation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Variation_option" (
    "id" TEXT NOT NULL,
    "variation_id" TEXT NOT NULL,
    "value" TEXT NOT NULL,

    CONSTRAINT "Variation_option_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Product_configuration" (
    "product_item_id" TEXT NOT NULL,
    "variation_option_id" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Product_category" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "parent_category_id" TEXT,

    CONSTRAINT "Product_category_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Order_line" (
    "id" TEXT NOT NULL,
    "product_item_id" TEXT NOT NULL,
    "order_id" TEXT NOT NULL,
    "qty" INTEGER NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Order_line_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Shop_order" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "order_date" TIMESTAMP(3) NOT NULL,
    "payment_method_id" TEXT NOT NULL,
    "shiping_address_id" TEXT NOT NULL,
    "shipping_method_id" TEXT NOT NULL,
    "order_total" DOUBLE PRECISION NOT NULL,
    "order_status_id" TEXT NOT NULL,

    CONSTRAINT "Shop_order_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Shipping_method" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Shipping_method_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Order_status" (
    "id" TEXT NOT NULL,
    "status" TEXT NOT NULL,

    CONSTRAINT "Order_status_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Promotion_category_category_id_promotion_id_key" ON "Promotion_category"("category_id", "promotion_id");

-- CreateIndex
CREATE UNIQUE INDEX "Product_configuration_product_item_id_variation_option_id_key" ON "Product_configuration"("product_item_id", "variation_option_id");

-- AddForeignKey
ALTER TABLE "User_address_history" ADD CONSTRAINT "User_address_history_addressId_fkey" FOREIGN KEY ("addressId") REFERENCES "Address"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User_address_history" ADD CONSTRAINT "User_address_history_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Address" ADD CONSTRAINT "Address_countryId_fkey" FOREIGN KEY ("countryId") REFERENCES "Country"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Shopping_cart" ADD CONSTRAINT "Shopping_cart_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Shopping_cart_item" ADD CONSTRAINT "Shopping_cart_item_cartId_fkey" FOREIGN KEY ("cartId") REFERENCES "Shopping_cart"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Shopping_cart_item" ADD CONSTRAINT "Shopping_cart_item_product_item_id_fkey" FOREIGN KEY ("product_item_id") REFERENCES "Product_item"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User_payment_method" ADD CONSTRAINT "User_payment_method_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User_payment_method" ADD CONSTRAINT "User_payment_method_payment_type_id_fkey" FOREIGN KEY ("payment_type_id") REFERENCES "Payment_type"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User_review" ADD CONSTRAINT "User_review_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User_review" ADD CONSTRAINT "User_review_ordered_product_id_fkey" FOREIGN KEY ("ordered_product_id") REFERENCES "Order_line"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Promotion_category" ADD CONSTRAINT "Promotion_category_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "Product_category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Promotion_category" ADD CONSTRAINT "Promotion_category_promotion_id_fkey" FOREIGN KEY ("promotion_id") REFERENCES "Promotion"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "Product_category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Product_item" ADD CONSTRAINT "Product_item_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Variation" ADD CONSTRAINT "Variation_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "Product_category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Variation_option" ADD CONSTRAINT "Variation_option_variation_id_fkey" FOREIGN KEY ("variation_id") REFERENCES "Variation"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Product_configuration" ADD CONSTRAINT "Product_configuration_product_item_id_fkey" FOREIGN KEY ("product_item_id") REFERENCES "Product_item"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Product_configuration" ADD CONSTRAINT "Product_configuration_variation_option_id_fkey" FOREIGN KEY ("variation_option_id") REFERENCES "Variation_option"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Product_category" ADD CONSTRAINT "Product_category_parent_category_id_fkey" FOREIGN KEY ("parent_category_id") REFERENCES "Product_category"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Order_line" ADD CONSTRAINT "Order_line_product_item_id_fkey" FOREIGN KEY ("product_item_id") REFERENCES "Product_item"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Order_line" ADD CONSTRAINT "Order_line_order_id_fkey" FOREIGN KEY ("order_id") REFERENCES "Shop_order"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Shop_order" ADD CONSTRAINT "Shop_order_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Shop_order" ADD CONSTRAINT "Shop_order_shipping_method_id_fkey" FOREIGN KEY ("shipping_method_id") REFERENCES "Shipping_method"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Shop_order" ADD CONSTRAINT "Shop_order_order_status_id_fkey" FOREIGN KEY ("order_status_id") REFERENCES "Order_status"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Shop_order" ADD CONSTRAINT "Shop_order_payment_method_id_fkey" FOREIGN KEY ("payment_method_id") REFERENCES "User_payment_method"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Shop_order" ADD CONSTRAINT "Shop_order_shiping_address_id_fkey" FOREIGN KEY ("shiping_address_id") REFERENCES "Address"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
