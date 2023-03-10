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
    user_agent: string,
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
        user_agent: user_agent,
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

  async checkDevice(userId: string, user_agent: string): Promise<boolean> {
    const user = await this.prismaService.users.findUnique({
      where: {
        id: userId,
      },
      include: {
        Devices: {
          where: {
            user_agent: user_agent,
          },
        },
      },
    });

    if (user.Devices && user.Devices.length > 0) {
      return true;
    }
    return false;
  }
  async deleteDevice(userId: string, deviceId: string): Promise<any> {
    const user = await this.prismaService.users.findUnique({
      where: {
        id: userId,
      },
      include: {
        Devices: {
          where: {
            id: deviceId,
          },
        },
      },
    });

    if (!user) {
      throw new Error(`User with ID ${userId} not found.`);
    }

    if (user.Devices && user.Devices.length > 0) {
      return await this.prismaService.devices.delete({
        where: {
          id: deviceId,
        },
      });
    } else {
      throw new Error(`Device with ID ${deviceId} not found.`);
    }
  }
}
