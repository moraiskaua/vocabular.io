/*
  Warnings:

  - A unique constraint covering the columns `[word]` on the table `Word` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Word" ADD COLUMN     "consonants" TEXT,
ADD COLUMN     "etymology" TEXT,
ADD COLUMN     "grammaticalClass" TEXT,
ADD COLUMN     "letters" INTEGER,
ADD COLUMN     "reverseWord" TEXT,
ADD COLUMN     "rhymes" TEXT,
ADD COLUMN     "syllabicDivision" TEXT,
ADD COLUMN     "vowels" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "Word_word_key" ON "Word"("word");
