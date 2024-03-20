-- CreateTable
CREATE TABLE "Members" (
    "id" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "point" INTEGER NOT NULL DEFAULT 200
);

-- CreateIndex
CREATE UNIQUE INDEX "Members_id_key" ON "Members"("id");
