// src/auth/auth.guard.ts
import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const gqlContext = GqlExecutionContext.create(context).getContext();

    const request = gqlContext.req;
    const loginRoute = '/login';

    // Skip the guard for login route
    if (request.url === loginRoute) {
      return true;
    }

    // Implement your logic to check authorization (e.g., check for headers or JWT token)
    const authToken = request.headers['authorization'];
    if (!authToken) {
      return false; // Unauthorized if no token is present
    }

    // Further validation logic can be added here (e.g., decode token)
    return true; // Authorization passed
  }
}
