import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { OrdersModule } from './orders/orders.module';
import { NotificationModule } from './notification/notification.module';
import { SearchModule } from './search/search.module';

@Module({
  
  controllers: [AppController],
  providers: [AppService],
  imports: [AuthModule, OrdersModule, NotificationModule, SearchModule],
})
export class AppModule {}
