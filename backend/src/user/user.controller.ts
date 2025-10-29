/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/require-await */
import { Controller, Post, Body, HttpStatus, HttpCode, Param, Get } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { ApiTags, ApiOperation, ApiResponse, ApiCreatedResponse, ApiParam, ApiBody } from '@nestjs/swagger';

@ApiTags('Users')
@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('profile/:id')
  @ApiOperation({ summary: 'Get user profile by id' })
  @ApiParam({ name: 'id', required: true, description: 'User id' })
  @ApiResponse({ status: HttpStatus.OK, description: 'Profile retrieved successfully.' })
  async getProfile(@Param('id') id: string) {
    return this.userService.getProfile(id);
  }

  @Post('signup')
  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({ summary: 'User signup' })
  @ApiCreatedResponse({ description: 'User created successfully.' })
  @ApiBody({ type: CreateUserDto })
  async signup(@Body() createUserDto: CreateUserDto) {
    return this.userService.signup(createUserDto);
  }
}
