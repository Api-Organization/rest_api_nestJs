import { Injectable } from '@nestjs/common';
import { PrismaService } from '@/prisma/prisma.service';

@Injectable()
export class PaymentService {
  constructor(private readonly prismaService: PrismaService) {}

  async createPayment({
    userId,
    productId,
  }: {
    userId: string;
    productId: string;
  }) {
    // Todo: Fazer requisição para o provedor de pagamento para recuperar o id do recibo e o status do pagamento
    return await this.prismaService.payments.create({
      data: {
        userId,
        productId,
        status: 'pending',
        receiptId: '123456789',
        method: 'CREDIT_CARD',
      },
    });
  }
}
