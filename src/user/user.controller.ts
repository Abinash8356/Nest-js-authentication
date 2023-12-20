import {
    Controller,
    Get,
    Post,
    Body,
    Param,
    Delete,
    UsePipes,
    ValidationPipe,
    UseGuards,
  } from '@nestjs/common';
  import { UserService } from './user.service';
  import { CreateUserDto } from './dto/user.dto';
  import { RoleGuard } from 'src/auth/guard/role.guard';
  import { Constants } from 'src/utills/constant';
import { User } from './entities/user.entity';
  
  @Controller('users')
  export class UserController {
    constructor(private readonly userService: UserService) {}
  
    // create the new user
    @Post("signUp")
    @UsePipes(new ValidationPipe({ transform: true }))
    create(@Body() createUserDto: CreateUserDto) {
      return this.userService.createUser(createUserDto);
    }
    
    @Get('me/:name')
    @UseGuards(new RoleGuard(Constants.ROLES.NORMAL_ROLE))
  async getDoctorByDoctorId(
    @Param('name') name: string,
  ): Promise<User> {
    return await this.userService.findUserByName(name);
  }
  
    // this deleting the user
    @Delete(':id')
    @UseGuards(new RoleGuard(Constants.ROLES.NORMAL_ROLE))
    remove(@Param('id') id: string) {
      return this.userService.removeUser(+id);
    }
  }