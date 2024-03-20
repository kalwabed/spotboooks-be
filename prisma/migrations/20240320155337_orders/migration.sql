-- CreateTable
CREATE TABLE "Orders" (
    "id" TEXT NOT NULL,
    "qty" INTEGER NOT NULL DEFAULT 1,
    "book_id" TEXT NOT NULL,
    "member_id" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Orders_id_key" ON "Orders"("id");

-- AddForeignKey
ALTER TABLE "Orders" ADD CONSTRAINT "Orders_book_id_fkey" FOREIGN KEY ("book_id") REFERENCES "Books"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Orders" ADD CONSTRAINT "Orders_member_id_fkey" FOREIGN KEY ("member_id") REFERENCES "Members"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
