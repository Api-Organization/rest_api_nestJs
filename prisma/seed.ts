import { PrismaClient } from '@prisma/client';
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
    ],
  });

  // Create roles
  await prisma.roles.createMany({
    data: [
      {
        name: 'USER',
      },
      {
        name: 'ADMIN',
      },
    ],
  });

  // Link all permissions to admin role
  const permissions = await prisma.permissions.findMany();
  const admin = await prisma.roles.findUnique({ where: { name: 'ADMIN' } });

  permissions.forEach(async (permission) => {
    await prisma.permissionRole.create({
      data: {
        permission_id: permission.id,
        role_id: admin.id,
      },
    });
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
