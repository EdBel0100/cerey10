-- DropForeignKey
ALTER TABLE "public"."Preferences" DROP CONSTRAINT "Preferences_userCognitoId_fkey";

-- AddForeignKey
ALTER TABLE "public"."Preferences" ADD CONSTRAINT "Preferences_userCognitoId_fkey" FOREIGN KEY ("userCognitoId") REFERENCES "public"."User"("cognitoId") ON DELETE CASCADE ON UPDATE CASCADE;
