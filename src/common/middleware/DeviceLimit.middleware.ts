import { Injectable, NestMiddleware } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Request, Response, NextFunction } from 'express';
import { UsersService } from '@/users/users.service';
import { DevicesService } from '@/devices/devices.service';

@Injectable()
export class DeviceLimitMiddleware implements NestMiddleware {
  constructor(
    private readonly devicesService: DevicesService,
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  decodeToken(token: string) {
    return this.jwtService.verifyAsync(token, {
      secret: process.env.JWT_ACCESS_SECRET,
    });
  }

  async use(req: Request, res: Response, next: NextFunction) {
    try {
      const authHeader = req.headers['authorization'];
      const user_agent = req.headers['user-agent'];
      const token = authHeader && authHeader.split(' ')[1];
      const deviceId = req.body.device_id;

      const deviceName = req.body.device_name;
      console.log('Device ID: ', deviceId);
      console.log('Device Name: ', deviceName);
      const decodedToken = await this.decodeToken(token);
      const user = decodedToken;

      if (!deviceId) {
        return res.status(400).json({
          message: 'Device ID is required',
        });
      }

      if (!deviceName) {
        return res.status(400).json({
          message: 'Device NAME is required',
        });
      }
      const deviceCount = await this.devicesService.getDeviceCount(user.sub);
      const maxDeviceCount = await this.usersService.getDeviceLimit(user.sub);

      const checkDevice = await this.devicesService.checkDevice(
        user.sub,
        deviceId,
      );

      if (!checkDevice) {
        console.log('Device Count: ', deviceCount);
        console.log('maxDeviceCount: ', maxDeviceCount);
        if (deviceCount >= maxDeviceCount && deviceCount !== 0) {
          return res.status(401).json({
            message: 'Maximum device limit exceeded',
          });
        }
        await this.devicesService.addDevice(
          user.sub,
          deviceName,
          deviceId,
          user_agent,
        );
      }

      next();
    } catch (err) {
      return res.status(401).json({
        message: 'Invalid or expired token',
      });
    }
  }
}
