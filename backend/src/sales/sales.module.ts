import { Module } from '@nestjs/common';
import { SalesService } from './sales.service';
import { SalesController } from './sales.controller';
import { GoogleMapsModule } from 'src/google-maps/google-maps.module';

@Module({
  imports: [GoogleMapsModule],
  controllers: [SalesController],
  providers: [SalesService],
})
export class SalesModule {}
