import { PartialType } from '@nestjs/mapped-types';
import { SubscriptionType } from '../entities/subscription-type.entity';

export class CreateSubscriptionTypeDto extends PartialType(SubscriptionType) {}
