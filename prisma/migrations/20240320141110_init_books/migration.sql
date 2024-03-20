-- CreateTable
CREATE TABLE "Books" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "writer" TEXT NOT NULL,
    "cover_image" TEXT NOT NULL,
    "point" INTEGER NOT NULL,
    "tags" TEXT[]
);

-- CreateIndex
CREATE UNIQUE INDEX "Books_id_key" ON "Books"("id");
