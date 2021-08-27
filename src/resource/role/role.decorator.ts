import { SetMetadata } from '@nestjs/common';
import { Role as RoleEnum } from './role.enum';

export const ROLE_KEY = 'ROLE';
export const Role = (...args: RoleEnum[]) => SetMetadata(ROLE_KEY, args);
