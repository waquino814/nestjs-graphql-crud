import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';

import { AuthGuard } from '../auth/auth.guard';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { User } from './entities/user.entity';
import { UsersService } from './users.service';
import { UseGuards } from '@nestjs/common';

@Resolver(() => User)
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Mutation(() => User)
  @UseGuards(AuthGuard) // Protect this route
  createUser(@Args('createUserInput') createUserInput: CreateUserInput): User {
    return this.usersService.create(createUserInput);
  }

  @Query(() => [User])
  @UseGuards(AuthGuard) // Protect this route
  findAll() {
    return this.usersService.findAll();
  }

  @Query(() => User)
  @UseGuards(AuthGuard) // Protect this route
  findOne(@Args('id') id: string) {
    return this.usersService.findOne(id);
  }

  @Mutation(() => User)
  @UseGuards(AuthGuard) // Protect this route
  updateUser(@Args('updateUserInput') updateUserInput: UpdateUserInput) {
    return this.usersService.update(updateUserInput.id, updateUserInput);
  }

  @Mutation(() => Boolean)
  @UseGuards(AuthGuard) // Protect this route
  removeUser(@Args('id') id: string) {
    return this.usersService.remove(id);
  }
}
