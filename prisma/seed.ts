import { PrismaClient } from '@prisma/client';
import * as argon2 from 'argon2';

const prisma = new PrismaClient();
async function main() {
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
