import { Test, TestingModule } from '@nestjs/testing';
import { UserJwtService } from './user-jwt.service';

describe('UserJwtService', () => {
  let service: UserJwtService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserJwtService],
    }).compile();

    service = module.get<UserJwtService>(UserJwtService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
