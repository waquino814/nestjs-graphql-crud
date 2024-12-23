// src/users/entities/user.entity.ts
import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType() // Add the ObjectType decorator
export class User {
  @Field() // Add the Field decorator to each property
  id: string;

  @Field()
  name: string;

  @Field()
  email: string;
}
