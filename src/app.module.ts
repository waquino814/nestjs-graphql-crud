// src/app.module.ts
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo'; // Correct import for @nestjs/apollo
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver, // Use the ApolloDriver provided by @nestjs/apollo
      autoSchemaFile: 'schema.gql', // Auto-generate the schema
      playground: true, // Enable GraphQL playground
    }),
    UsersModule,
    AuthModule,
  ],
})
export class AppModule {}
