import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { JwtAuthGuard } from './auth/jwt-auth.guard';
import { UserModule } from './resource/user/user.module';
import { SubscriptionModule } from './resource/subscription/subscription.module';
import { SubscriptionTypeModule } from './resource/subscription-type/subscription-type.module';
import { Subscription } from './resource/subscription/entities/subscription.entity';
import { SubscriptionType } from './resource/subscription-type/entities/subscription-type.entity';
import { User } from './resource/user/entities/user.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'Betelgeuse99$',
      database: 'dastani',
      entities: [Subscription, SubscriptionType, User],
      synchronize: false,
    }),
    AuthModule,
    UserModule,
    SubscriptionModule,
    SubscriptionTypeModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
  ],
})
export class AppModule {}
