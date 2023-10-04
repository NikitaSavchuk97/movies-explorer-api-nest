import { Controller, Body, Param, Get, Post, Put, Delete, HttpCode, HttpStatus } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UsersService } from './users.service';
import { User } from 'src/schemas/users.schema';

@Controller('users')
export class UsersController {

	constructor(private readonly usersService: UsersService) {

	}

	@Get()
	getAllUsers(): Promise<User[]> {
		return this.usersService.getAll()
	}

	@Get(':id')
	getUserByID(@Param('id') id): Promise<User> {
		return this.usersService.getById(id)
	}

	@Post()
	@HttpCode(HttpStatus.CREATED)
	//@Header('Cache-control', 'none')
	createUser(@Body() createUserDto: CreateUserDto) {
		return this.usersService.create(createUserDto)
	}

	@Put(':id')
	updateUserInfo(@Body() updateUserDto: UpdateUserDto, @Param('id') id: string): Promise<User> {
		return this.usersService.update(id, updateUserDto)
	}

	@Delete(':id')
	removeUser(@Param('id') id: string): Promise<User> {
		return this.usersService.remove(id)
	}

}
