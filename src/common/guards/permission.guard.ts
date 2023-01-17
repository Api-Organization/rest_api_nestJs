import {
  CanActivate,
  mixin,
  ExecutionContext,
  UnauthorizedException,
} from '@nestjs/common';
import { Permissions } from '@prisma/client';

export const PermissionGuard = (permissions: Array<string>) => {
  class RoleGuardMixin implements CanActivate {
    canActivate(context: ExecutionContext) {
      const userPermissions: Permissions[] = context.switchToHttp().getRequest()
        .user.permissions;

      function validatePermissions(userPermissions, requiredPermissions) {
        // Iterate through the required permissions array
        for (let i = 0; i < requiredPermissions.length; i++) {
          // Check if the user has the required permission
          if (!userPermissions.includes(requiredPermissions[i])) {
            // If not, return false
            throw new UnauthorizedException();
          }
        }
        // If all required permissions are found, return true
        return true;
      }

      return validatePermissions(
        userPermissions.map((permission) => permission.name),
        permissions,
      );
    }
  }
  const guard = mixin(RoleGuardMixin);
  return guard;
};
