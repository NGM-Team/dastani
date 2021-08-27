import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Role } from '../role/role.decorator';
import { Role as RoleEnum } from '../role/role.enum';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Role(RoleEnum.SUPERADMIN, RoleEnum.STAFFADMIN)
  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Role(RoleEnum.SUPERADMIN, RoleEnum.STAFFADMIN)
  @Get()
  findAll() {
    return this.userService.findAll();
  }

  @Role(RoleEnum.SUPERADMIN, RoleEnum.STAFFADMIN)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.findOne(+id);
  }

  @Role(RoleEnum.SUPERADMIN, RoleEnum.STAFFADMIN)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(+id, updateUserDto);
  }

  @Role(RoleEnum.SUPERADMIN, RoleEnum.STAFFADMIN)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.remove(+id);
  }
}
