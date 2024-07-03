import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import * as bcrypt from 'bcrypt';


@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly usersRepository:Repository<User>
  ) {}

  async register(createUserDto: CreateUserDto): Promise<User | boolean> {
    if (createUserDto.password !== createUserDto.confirm_password) {
      return false;
    }

    const hashedPassword = await bcrypt.hash(createUserDto.password, 10);

    const newUser = this.usersRepository.create({
      full_name: createUserDto.full_name,
      email: createUserDto.email,
      password: hashedPassword,
      disabled: false,
    });

    await this.usersRepository.save(newUser);
    return newUser;
  }

  findByUsername(email: string) {
    return this.usersRepository.findOneBy({ email });
  }

  findAll() {
    return this.usersRepository.find();
  }

  findOne(id: number) {
    return this.usersRepository.findOneBy({ id });
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return this.usersRepository.update(id, updateUserDto);
  }

  remove(id: number) {
    return this.usersRepository.delete(id);
  }
}
