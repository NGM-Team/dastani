import { Module } from '@nestjs/common';
import { UserJwtService } from './user-jwt.service';
import { UserJwtController } from './user-jwt.controller';

@Module({
  controllers: [UserJwtController],
  providers: [UserJwtService],
})
export class UserJwtModule {}
