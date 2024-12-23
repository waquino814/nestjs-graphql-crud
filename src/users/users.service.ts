// src/users/users.service.ts
import { Injectable } from '@nestjs/common';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  private users: User[] = []; // In-memory store

  create(createUserInput: CreateUserInput): User {
    const newUser = { id: Date.now().toString(), ...createUserInput };
    this.users.push(newUser);
    return newUser;
  }

  findAll(): User[] {
    return this.users;
  }

  findOne(id: string): User {
    return this.users.find((user) => user.id === id);
  }

  update(id: string, updateUserInput: UpdateUserInput): User {
    const userIndex = this.users.findIndex((user) => user.id === id);
    if (userIndex === -1) {
      return null; // User not found
    }
    this.users[userIndex] = { ...this.users[userIndex], ...updateUserInput };
    return this.users[userIndex];
  }

  remove(id: string): boolean {
    const userIndex = this.users.findIndex((user) => user.id === id);
    if (userIndex === -1) {
      return false; // User not found
    }
    this.users.splice(userIndex, 1);
    return true;
  }
}
