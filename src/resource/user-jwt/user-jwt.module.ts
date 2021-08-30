import { Module } from '@nestjs/common';
import { UserJwtService } from './user-jwt.service';
import { UserJwtController } from './user-jwt.controller';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  controllers: [UserJwtController],
  providers: [UserJwtService],
  imports: [AuthModule],
})
export class UserJwtModule {}
