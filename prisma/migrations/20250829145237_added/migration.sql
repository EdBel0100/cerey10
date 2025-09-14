-- CreateTable
CREATE TABLE "public"."User" (
    "id" SERIAL NOT NULL,
    "cognitoId" TEXT NOT NULL,
    "email" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Location" (
    "id" SERIAL NOT NULL,
    "userCognitoId" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "Address" TEXT NOT NULL,
    "radius" TEXT NOT NULL,
    "latitude" DECIMAL(10,7) NOT NULL,
    "longitude" DECIMAL(10,7) NOT NULL,

    CONSTRAINT "Location_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Preferences" (
    "id" SERIAL NOT NULL,
    "userCognitoId" TEXT NOT NULL,
    "vegetarianOnly" BOOLEAN NOT NULL DEFAULT false,
    "vegan" BOOLEAN NOT NULL DEFAULT false,
    "pescatarian" BOOLEAN NOT NULL DEFAULT false,
    "flexitarian" BOOLEAN NOT NULL DEFAULT false,
    "meatOnly" BOOLEAN NOT NULL DEFAULT false,
    "kosher" BOOLEAN NOT NULL DEFAULT false,
    "halal" BOOLEAN NOT NULL DEFAULT false,
    "jain" BOOLEAN NOT NULL DEFAULT false,
    "buddhist" BOOLEAN NOT NULL DEFAULT false,
    "glutenFree" BOOLEAN NOT NULL DEFAULT false,
    "lactoseFree" BOOLEAN NOT NULL DEFAULT false,
    "dairyFree" BOOLEAN NOT NULL DEFAULT false,
    "nutFree" BOOLEAN NOT NULL DEFAULT false,
    "peanutFree" BOOLEAN NOT NULL DEFAULT false,
    "shellfishFree" BOOLEAN NOT NULL DEFAULT false,
    "eggFree" BOOLEAN NOT NULL DEFAULT false,
    "soyFree" BOOLEAN NOT NULL DEFAULT false,
    "fishFree" BOOLEAN NOT NULL DEFAULT false,
    "nightshadeFree" BOOLEAN NOT NULL DEFAULT false,
    "lowCarb" BOOLEAN NOT NULL DEFAULT false,
    "keto" BOOLEAN NOT NULL DEFAULT false,
    "paleo" BOOLEAN NOT NULL DEFAULT false,
    "lowSugar" BOOLEAN NOT NULL DEFAULT false,
    "lowSalt" BOOLEAN NOT NULL DEFAULT false,
    "lowFat" BOOLEAN NOT NULL DEFAULT false,
    "highProtein" BOOLEAN NOT NULL DEFAULT false,
    "rawFood" BOOLEAN NOT NULL DEFAULT false,
    "whole30" BOOLEAN NOT NULL DEFAULT false,
    "diabeticFriendly" BOOLEAN NOT NULL DEFAULT false,
    "intermittentFasting" BOOLEAN NOT NULL DEFAULT false,
    "organicOnly" BOOLEAN NOT NULL DEFAULT false,
    "locallySourced" BOOLEAN NOT NULL DEFAULT false,
    "processedFree" BOOLEAN NOT NULL DEFAULT false,
    "fastFoodAvoider" BOOLEAN NOT NULL DEFAULT false,
    "customPreferences" TEXT NOT NULL,

    CONSTRAINT "Preferences_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."FavoriteRecipes" (
    "id" SERIAL NOT NULL,
    "imageUrl" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "userCognitoId" TEXT NOT NULL,

    CONSTRAINT "FavoriteRecipes_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_cognitoId_key" ON "public"."User"("cognitoId");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "public"."User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Location_userCognitoId_key" ON "public"."Location"("userCognitoId");

-- CreateIndex
CREATE UNIQUE INDEX "Preferences_userCognitoId_key" ON "public"."Preferences"("userCognitoId");

-- AddForeignKey
ALTER TABLE "public"."Location" ADD CONSTRAINT "Location_userCognitoId_fkey" FOREIGN KEY ("userCognitoId") REFERENCES "public"."User"("cognitoId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Preferences" ADD CONSTRAINT "Preferences_userCognitoId_fkey" FOREIGN KEY ("userCognitoId") REFERENCES "public"."User"("cognitoId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."FavoriteRecipes" ADD CONSTRAINT "FavoriteRecipes_userCognitoId_fkey" FOREIGN KEY ("userCognitoId") REFERENCES "public"."User"("cognitoId") ON DELETE RESTRICT ON UPDATE CASCADE;
