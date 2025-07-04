-- CreateTable
CREATE TABLE "Student" (
    "id" SERIAL NOT NULL,
    "roll" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "marks" DOUBLE PRECISION NOT NULL,
    "address" TEXT NOT NULL,
    "email" TEXT NOT NULL,

    CONSTRAINT "Student_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Student_roll_key" ON "Student"("roll");

-- CreateIndex
CREATE UNIQUE INDEX "Student_email_key" ON "Student"("email");
