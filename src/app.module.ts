import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PointsTransactionsModule } from './apis/points-transactions/points-transactions.module';

@Module({
  imports: [PointsTransactionsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
