import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { CreateUserDto } from "./dto/create-user.dto";
import { User, UserDocument } from 'src/schemas/users.schema';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
	constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {

	}

	getAll(): Promise<User[]> {
		return this.userModel.find()
	}

	getById(id: string): Promise<User> {
		return this.userModel.findById(id)
	}

	create(createUserDto: CreateUserDto): Promise<User> {
		const newUser = new this.userModel(createUserDto)
		return newUser.save()
	}

	update(id: string, updateUserDto: UpdateUserDto): Promise<User> {
		return this.userModel.findByIdAndUpdate(id, updateUserDto, { new: true })
	}

	remove(id: string): Promise<User> {
		return this.userModel.findByIdAndRemove(id)
	}
}