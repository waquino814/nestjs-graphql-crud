// src/users/dto/update-user.input.ts
import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class UpdateUserInput {
  @Field()
  id: string;

  @Field()
  name: string;

  @Field()
  email: string;
}
