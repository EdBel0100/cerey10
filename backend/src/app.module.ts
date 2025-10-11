import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OpenaiModule } from './openai/openai.module';
import { GoogleMapsModule } from './google-maps/google-maps.module';
import { UserModule } from './user/user.module';
import { PrismaModule } from './prisma/prisma.module';
import { PreferencesModule } from './preferences/preferences.module';
import { GroceriesModule } from './groceries/groceries.module';
import { FavoritesModule } from './favorites/favorites.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [OpenaiModule, GoogleMapsModule, UserModule, PrismaModule, PreferencesModule, GroceriesModule, FavoritesModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
