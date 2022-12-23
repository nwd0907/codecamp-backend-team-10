import { Module } from '@nestjs/common';
import { PointsTransactionsResolver } from './points-transactions.resolver';
import { PointsTransactionsService } from './points-transactions.service';

@Module({
  providers: [PointsTransactionsResolver, PointsTransactionsService]
})
export class PointsTransactionsModule {}
