import { PartialType } from '@nestjs/mapped-types';
import { Subscription } from '../entities/subscription.entity';

export class CreateSubscriptionDto extends PartialType(Subscription) {}
