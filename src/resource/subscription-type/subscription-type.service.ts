import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateSubscriptionTypeDto } from './dto/create-subscription-type.dto';
import { UpdateSubscriptionTypeDto } from './dto/update-subscription-type.dto';
import { SubscriptionType } from './entities/subscription-type.entity';

@Injectable()
export class SubscriptionTypeService {
  constructor(
    @InjectRepository(SubscriptionType)
    private subscriptionTypeRepository: Repository<SubscriptionType>,
  ) {}

  create(createSubscriptionTypeDto: CreateSubscriptionTypeDto) {
    return this.subscriptionTypeRepository.insert(createSubscriptionTypeDto);
  }

  findAll() {
    return this.subscriptionTypeRepository.find();
  }

  async findOne(id: number): Promise<SubscriptionType | undefined> {
    return this.subscriptionTypeRepository.findOne(id);
  }

  update(id: number, updateSubscriptionTypeDto: UpdateSubscriptionTypeDto) {
    return this.subscriptionTypeRepository.update(
      id,
      updateSubscriptionTypeDto,
    );
  }

  remove(id: number) {
    return this.subscriptionTypeRepository.delete(id);
  }
}
