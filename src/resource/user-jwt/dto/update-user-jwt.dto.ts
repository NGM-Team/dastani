import { PartialType } from '@nestjs/mapped-types';
import { CreateUserJwtDto } from './create-user-jwt.dto';

export class UpdateUserJwtDto extends PartialType(CreateUserJwtDto) {}
