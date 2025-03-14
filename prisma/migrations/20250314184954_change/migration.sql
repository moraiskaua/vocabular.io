/*
  Warnings:

  - Made the column `consonants` on table `Word` required. This step will fail if there are existing NULL values in that column.
  - Made the column `etymology` on table `Word` required. This step will fail if there are existing NULL values in that column.
  - Made the column `grammaticalClass` on table `Word` required. This step will fail if there are existing NULL values in that column.
  - Made the column `letters` on table `Word` required. This step will fail if there are existing NULL values in that column.
  - Made the column `reverseWord` on table `Word` required. This step will fail if there are existing NULL values in that column.
  - Made the column `rhymes` on table `Word` required. This step will fail if there are existing NULL values in that column.
  - Made the column `syllabicDivision` on table `Word` required. This step will fail if there are existing NULL values in that column.
  - Made the column `vowels` on table `Word` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Word" ALTER COLUMN "consonants" SET NOT NULL,
ALTER COLUMN "etymology" SET NOT NULL,
ALTER COLUMN "grammaticalClass" SET NOT NULL,
ALTER COLUMN "letters" SET NOT NULL,
ALTER COLUMN "reverseWord" SET NOT NULL,
ALTER COLUMN "rhymes" SET NOT NULL,
ALTER COLUMN "syllabicDivision" SET NOT NULL,
ALTER COLUMN "vowels" SET NOT NULL;
