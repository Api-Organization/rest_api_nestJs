import { PrismaClient } from '@prisma/client';
import * as argon2 from 'argon2';

const prisma = new PrismaClient();
async function main() {
  //Create Products
  await prisma.products.createMany({
    data: [
      {
        name: 'AdHeart',
        description:
          'AdHeart é um software de automação de marketing que permite que você crie anúncios de alta qualidade em minutos, sem precisar de conhecimentos técnicos.',
        active: true,
        price: 'R$ 197,00',
        photo:
          'https://adheart.com.br/wp-content/uploads/2020/10/AdHeart-Logo-1.png',
      },
      {
        name: 'Adserea',
        description:
          'Adserea é um software de automação de marketing que permite que você crie anúncios de alta qualidade em minutos, sem precisar de conhecimentos técnicos.',
        active: true,
        price: 'R$ 197,00',
        photo:
          'https://adheart.com.br/wp-content/uploads/2020/10/AdHeart-Logo-1.png',
      },
      {
        name: 'BigSpy',
        description:
          'BigSpy é um software de automação de marketing que permite que você crie anúncios de alta qualidade em minutos, sem precisar de conhecimentos técnicos.',
        active: true,
        price: 'R$ 197,00',
        photo:
          'https://adheart.com.br/wp-content/uploads/2020/10/AdHeart-Logo-1.png',
      },
      {
        name: 'Nichescrapper',
        description:
          'Nichescrapper é um software de automação de marketing que permite que você crie anúncios de alta qualidade em minutos, sem precisar de conhecimentos técnicos.',
        active: true,
        price: 'R$ 197,00',
        photo:
          'https://adheart.com.br/wp-content/uploads/2020/10/AdHeart-Logo-1.png',
      },
    ],
  });

  // Create permissions
  await prisma.permissions.createMany({
    data: [
      {
        name: 'adheart_get',
      },
      {
        name: 'adserea_get',
      },
      {
        name: 'bigspy_get',
      },
      {
        name: 'nichescrapper_get',
      },
      {
        name: 'products_get',
      },
    ],
  });

  // Create users
  const permission = await prisma.permissions.findFirst({
    where: { name: 'products_get' },
  });
  const permission2 = await prisma.permissions.findFirst({
    where: { name: 'adheart_get' },
  });

  const user = await prisma.users.create({
    data: {
      name: 'Admin',
      email: 'fernando.atr@outlook.com',
      number: 'Não informado',
      password: await argon2.hash('teste1'),
      Address: {
        create: {
          city: 'Brasília',
          state: 'DF',
          country: 'Brasil',
          postal_code: '70686055',
          line1: 'Rua teste 30',
        },
      },
      permissions: {
        connect: {
          id: permission.id,
        },
      },
    },
  });

  await prisma.users.update({
    where: { id: user.id },
    data: {
      permissions: {
        connect: {
          id: permission2.id,
        },
      },
    },
  });

  console.log('Done!');
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
