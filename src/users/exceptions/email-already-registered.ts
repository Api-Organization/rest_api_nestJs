import { ConflictException } from '@nestjs/common';

export class EmailAlreadyRegistered extends ConflictException {
  constructor() {
    super('This email is already registered.');
    this.name = 'EmailAlreadyRegistered';
  }
}
