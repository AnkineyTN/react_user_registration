/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { 
  Injectable, 
  ConflictException,
  BadRequestException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async getProfile(id: string) {
    const user = await this.userRepository.findOne({ where: { id } });
    if (!user) {
      throw new BadRequestException('User not found');
    }
    return user;
  }

  async signup(createUserDto: CreateUserDto) {
    const { email, password } = createUserDto;

    const existingUser = await this.userRepository.findOne({ 
      where: { email },
    });

    if (existingUser) {
      throw new ConflictException('This email is already registered');
    }

    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const newUser = this.userRepository.create({
      email,
      password: hashedPassword,
    });

    try {
      const savedUser = await this.userRepository.save(newUser);

      const { password, ...result } = savedUser;
      return result;
    } catch (error) {
      throw new BadRequestException('Cannot create user');
    }
  }
}