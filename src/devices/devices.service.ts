import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateDeviceDto } from './dto/create-device.dto';

@Injectable()
export class DevicesService {
  constructor(private readonly prismaService: PrismaService) {}
  async addDevice(
    user_id: string,
    name: string,
    device_id: string,
  ): Promise<any> {
    const user = await this.prismaService.users.findUnique({
      where: { id: user_id },
    });

    if (!user) {
      throw new Error(`User with ID ${user_id} not found.`);
    }
    await this.prismaService.devices.create({
      data: {
        name: name,
        device: device_id,
        Users: {
          connect: {
            id: user_id,
          },
        },
      },
    });
  }

  async getDeviceCount(userId: string): Promise<number> {
    const devices = await this.prismaService.devices.findMany({
      where: {
        userId,
      },
    });
    return devices.length;
  }

  async checkDevice(userId: string, deviceId: string): Promise<boolean> {
    const user = await this.prismaService.users.findUnique({
      where: {
        id: userId,
      },
      include: {
        Devices: {
          where: {
            device: deviceId,
          },
        },
      },
    });

    if (user.Devices && user.Devices.length > 0) {
      return true;
    }
    return false;
  }
}
