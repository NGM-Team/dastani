import { Injectable } from '@nestjs/common';
import { CreateUserJwtDto } from './dto/create-user-jwt.dto';
import { UpdateUserJwtDto } from './dto/update-user-jwt.dto';

@Injectable()
export class UserJwtService {
  create(createUserJwtDto: CreateUserJwtDto) {
    return 'This action adds a new userJwt';
  }

  findAll() {
    return `This action returns all userJwt`;
  }

  findOne(id: number) {
    return `This action returns a #${id} userJwt`;
  }

  update(id: number, updateUserJwtDto: UpdateUserJwtDto) {
    return `This action updates a #${id} userJwt`;
  }

  remove(id: number) {
    return `This action removes a #${id} userJwt`;
  }
}
