import { Body, Controller, Delete, Param, Post } from '@nestjs/common';
import { DevicesService } from './devices.service';
import { DeleteDeviceDto } from './dto/delete-device.dto';

@Controller('devices')
export class DevicesController {
  constructor(private readonly devicesService: DevicesService) {}

  @Post()
  async addDevice(): Promise<any> {}

  @Delete(':id')
  async deleteDevice(
    @Param('id') id: string,
    @Body() deleteDeviceDto: DeleteDeviceDto,
  ): Promise<any> {
    return this.devicesService.deleteDevice(id, deleteDeviceDto.id);
  }
}
