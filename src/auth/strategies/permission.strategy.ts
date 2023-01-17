import { ForbiddenException, Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

type JwtPayload = {
  userID: string;
  permissions: Permissions[];
};

// type PermissionType = {
//   id: string;
//   name: string;
//   descriptions: string;
//   created_at: string;
//   updated_at: string;
// };

@Injectable()
export class PermissionStrategy extends PassportStrategy(
  Strategy,
  'permission',
) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: process.env.JWT_ACCESS_SECRET,
    });
  }

  validate(payload: JwtPayload, requiredPermissions: string[] | string) {
    console.log(requiredPermissions);

    // payload.permissions.forEach((permission: any) => {
    //   if (!requiredPermissions.includes(permission.name)) {
    //     throw new ForbiddenException(
    //       `You don't have permission to ${permission}`,
    //     );
    //   }
    // });

    return payload;
  }
}
