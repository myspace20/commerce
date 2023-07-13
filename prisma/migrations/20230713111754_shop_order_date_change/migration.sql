-- AlterTable
ALTER TABLE "Payment_type" ALTER COLUMN "value" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "Shop_order" ALTER COLUMN "order_date" SET DEFAULT CURRENT_TIMESTAMP;
