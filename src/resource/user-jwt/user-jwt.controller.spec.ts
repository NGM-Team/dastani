import { Test, TestingModule } from '@nestjs/testing';
import { UserJwtController } from './user-jwt.controller';
import { UserJwtService } from './user-jwt.service';

describe('UserJwtController', () => {
  let controller: UserJwtController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserJwtController],
      providers: [UserJwtService],
    }).compile();

    controller = module.get<UserJwtController>(UserJwtController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
