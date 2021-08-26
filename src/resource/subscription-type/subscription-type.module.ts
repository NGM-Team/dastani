import { Module } from '@nestjs/common';
import { SubscriptionTypeService } from './subscription-type.service';
import { SubscriptionTypeController } from './subscription-type.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SubscriptionType } from './entities/subscription-type.entity';

@Module({
  controllers: [SubscriptionTypeController],
  providers: [SubscriptionTypeService],
  imports: [TypeOrmModule.forFeature([SubscriptionType])],
})
export class SubscriptionTypeModule {}
