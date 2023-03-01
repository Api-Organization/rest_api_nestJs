import { Injectable, NestMiddleware } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Request, Response, NextFunction } from 'express';
import { PrismaService } from '../../prisma/prisma.service';
import { UsersService } from '@/users/users.service';
import { DevicesService } from '@/devices/devices.service';

@Injectable()
export class DeviceLimitMiddleware implements NestMiddleware {
  constructor(
    private readonly devicesService: DevicesService,
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async use(req: Request, res: Response, next: NextFunction) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    const deviceId = req.headers['device_id'] as string;
    const deviceName = req.headers['device_name'] as string;

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

    try {
      const decodedToken = this.jwtService.verify(token);
      const user = decodedToken;

      const deviceCount = await this.devicesService.getDeviceCount(user.id);
      const maxDeviceCount = await this.usersService.getDeviceLimit(user.id);

      if (deviceCount >= maxDeviceCount) {
        return res.status(400).json({
          message: 'Maximum device limit exceeded',
        });
      } else {
        await this.devicesService.addDevice(user.id, deviceName, deviceId);
      }

      next();
    } catch (err) {
      return res.status(401).json({
        message: 'Invalid or expired token',
      });
    }

    console.log(req, deviceId);
  }
}
