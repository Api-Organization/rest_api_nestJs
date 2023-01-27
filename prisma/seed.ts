import { PrismaClient } from '@prisma/client';
import * as argon2 from 'argon2';

const prisma = new PrismaClient();
async function main() {
  //Create Products
  await prisma.products.createMany({
    data: [
      {
        name: 'AdHeart - 1 Mês',
        description:
          'AdHeart é um software de automação de marketing que permite que você crie anúncios de alta qualidade em minutos, sem precisar de conhecimentos técnicos.',
        active: true,
        price: 'R$ 19,90',
        photo: 'https://www.webspy.com.br/uploads/adheart.png',
      },
      {
        name: 'AdHeart - 3 Meses',
        description:
          'AdHeart é um software de automação de marketing que permite que você crie anúncios de alta qualidade em minutos, sem precisar de conhecimentos técnicos.',
        active: true,
        price: 'R$ 55,90',
        photo: 'https://www.webspy.com.br/uploads/adheart.png',
      },
      {
        name: 'AdHeart - 6 Meses',
        description:
          'AdHeart é um software de automação de marketing que permite que você crie anúncios de alta qualidade em minutos, sem precisar de conhecimentos técnicos.',
        active: true,
        price: 'R$ 109,90',
        photo: 'https://www.webspy.com.br/uploads/adheart.png',
      },
      {
        name: 'AdHeart - 1 Ano',
        description:
          'AdHeart é um software de automação de marketing que permite que você crie anúncios de alta qualidade em minutos, sem precisar de conhecimentos técnicos.',
        active: true,
        price: 'R$ 199,90',
        photo: 'https://www.webspy.com.br/uploads/adheart.png',
      },
      {
        name: 'Adserea - 1 Mês',
        description:
          'Adserea é um software de automação de marketing que permite que você crie anúncios de alta qualidade em minutos, sem precisar de conhecimentos técnicos.',
        active: true,
        price: 'R$ 197,00',
        photo: 'https://www.webspy.com.br/uploads/adserea.png',
      },
      {
        name: 'Adserea - 3 Meses',
        description:
          'Adserea é um software de automação de marketing que permite que você crie anúncios de alta qualidade em minutos, sem precisar de conhecimentos técnicos.',
        active: true,
        price: 'R$ 197,00',
        photo: 'https://www.webspy.com.br/uploads/adserea.png',
      },
      {
        name: 'Adserea - 6 Meses',
        description:
          'Adserea é um software de automação de marketing que permite que você crie anúncios de alta qualidade em minutos, sem precisar de conhecimentos técnicos.',
        active: true,
        price: 'R$ 197,00',
        photo: 'https://www.webspy.com.br/uploads/adserea.png',
      },
      {
        name: 'Adserea - 1 Ano',
        description:
          'Adserea é um software de automação de marketing que permite que você crie anúncios de alta qualidade em minutos, sem precisar de conhecimentos técnicos.',
        active: true,
        price: 'R$ 197,00',
        photo: 'https://www.webspy.com.br/uploads/adserea.png',
      },
      {
        name: 'BigSpy - 1 Mês',
        description:
          'BigSpy é um software de automação de marketing que permite que você crie anúncios de alta qualidade em minutos, sem precisar de conhecimentos técnicos.',
        active: true,
        price: 'R$ 197,00',
        photo: 'https://www.webspy.com.br/uploads/bigspy.webp',
      },
      {
        name: 'BigSpy - 3 Meses',
        description:
          'BigSpy é um software de automação de marketing que permite que você crie anúncios de alta qualidade em minutos, sem precisar de conhecimentos técnicos.',
        active: true,
        price: 'R$ 197,00',
        photo: 'https://www.webspy.com.br/uploads/bigspy.webp',
      },
      {
        name: 'BigSpy - 6 Meses',
        description:
          'BigSpy é um software de automação de marketing que permite que você crie anúncios de alta qualidade em minutos, sem precisar de conhecimentos técnicos.',
        active: true,
        price: 'R$ 197,00',
        photo: 'https://www.webspy.com.br/uploads/bigspy.webp',
      },
      {
        name: 'BigSpy - 1 Ano',
        description:
          'BigSpy é um software de automação de marketing que permite que você crie anúncios de alta qualidade em minutos, sem precisar de conhecimentos técnicos.',
        active: true,
        price: 'R$ 197,00',
        photo: 'https://www.webspy.com.br/uploads/bigspy.webp',
      },
      {
        name: 'Nichescrapper - 1 Mês',
        description:
          'Nichescrapper é um software de automação de marketing que permite que você crie anúncios de alta qualidade em minutos, sem precisar de conhecimentos técnicos.',
        active: true,
        price: 'R$ 09,90',
        photo: 'https://www.webspy.com.br/uploads/nichescraper.png',
      },
      {
        name: 'Nichescrapper - 3 Meses',
        description:
          'Nichescrapper é um software de automação de marketing que permite que você crie anúncios de alta qualidade em minutos, sem precisar de conhecimentos técnicos.',
        active: true,
        price: 'R$ 19,90',
        photo: 'https://www.webspy.com.br/uploads/nichescraper.png',
      },
      {
        name: 'Nichescrapper - 6 Meses',
        description:
          'Nichescrapper é um software de automação de marketing que permite que você crie anúncios de alta qualidade em minutos, sem precisar de conhecimentos técnicos.',
        active: true,
        price: 'R$ 49,90',
        photo: 'https://www.webspy.com.br/uploads/nichescraper.png',
      },
      {
        name: 'Nichescrapper - 1 Ano',
        description:
          'Nichescrapper é um software de automação de marketing que permite que você crie anúncios de alta qualidade em minutos, sem precisar de conhecimentos técnicos.',
        active: true,
        price: 'R$ 99,90',
        photo: 'https://www.webspy.com.br/uploads/nichescraper.png',
      },
      {
        name: 'Adspy - 1 Mês',
        description:
          'Adspy é um software de automação de marketing que permite que você crie anúncios de alta qualidade em minutos, sem precisar de conhecimentos técnicos.',
        active: true,
        price: 'R$ 49,90',
        photo: 'https://www.webspy.com.br/uploads/adspy.png',
      },
      {
        name: 'Adspy - 1 Mês',
        description:
          'Adspy é um software de automação de marketing que permite que você crie anúncios de alta qualidade em minutos, sem precisar de conhecimentos técnicos.',
        active: true,
        price: 'R$ 49,90',
        photo: 'https://www.webspy.com.br/uploads/adspy.png',
      },
      {
        name: 'Adspy - 3 Meses',
        description:
          'Adspy é um software de automação de marketing que permite que você crie anúncios de alta qualidade em minutos, sem precisar de conhecimentos técnicos.',
        active: true,
        price: 'R$ 129,90',
        photo: 'https://www.webspy.com.br/uploads/adspy.png',
      },
      {
        name: 'Adspy - 6 Meses',
        description:
          'Adspy é um software de automação de marketing que permite que você crie anúncios de alta qualidade em minutos, sem precisar de conhecimentos técnicos.',
        active: true,
        price: 'R$ 249,90',
        photo: 'https://www.webspy.com.br/uploads/adspy.png',
      },
      {
        name: 'Adspy - 1 Ano',
        description:
          'Adspy é um software de automação de marketing que permite que você crie anúncios de alta qualidade em minutos, sem precisar de conhecimentos técnicos.',
        active: true,
        price: 'R$ 499,90',
        photo: 'https://www.webspy.com.br/uploads/adspy.png',
      },
    ],
  });

  // Create permissions
  const permissions = await prisma.permissions.createMany({
    data: [
      {
        name: 'get_adheart',
      },
      {
        name: 'get_adserea',
      },
      {
        name: 'get_bigspy',
      },
      {
        name: 'get_nichescrapper',
      },
      {
        name: 'get_adspy',
      },
      {
        name: 'combo_premium',
      },
      {
        name: 'update_products',
      },
      {
        name: 'update_permissions',
      },
      {
        name: 'update_faq',
      },
      {
        name: 'update_notes',
      },
      {
        name: 'create_notes',
      },
      {
        name: 'create_products',
      },
      {
        name: 'create_permissions',
      },
      {
        name: 'create_faq',
      },
      {
        name: 'delete_notes',
      },
      {
        name: 'delete_products',
      },
      {
        name: 'delete_permissions',
      },
      {
        name: 'delete_faq',
      },
      {
        name: 'get_notes',
      },
      {
        name: 'get_products',
      },
      {
        name: 'get_permissions',
      },
      {
        name: 'get_faq',
      },
    ],
  });

  const adheartOneMonth = await prisma.products.findFirst({
    where: { name: 'Adheart - 1 Mês' },
  });

  const adheartthreeMonth = await prisma.products.findFirst({
    where: { name: 'AdHeart - 3 Meses' },
  });

  const adheartSixMonth = await prisma.products.findFirst({
    where: { name: 'Adheart - 6 Meses' },
  });

  const adheartOneYear = await prisma.products.findFirst({
    where: { name: 'Adheart - 1 Ano' },
  });

  const nichescrapperOneMonth = await prisma.products.findFirst({
    where: { name: 'Nichescrapper - 1 Mês' },
  });

  const nichescrapperThreeMonth = await prisma.products.findFirst({
    where: { name: 'Nichescrapper - 3 Meses' },
  });

  const nichescrapperSixMonth = await prisma.products.findFirst({
    where: { name: 'Nichescrapper - 6 Meses' },
  });

  const nichescrapperOneYear = await prisma.products.findFirst({
    where: { name: 'Nichescrapper - 1 Ano' },
  });

  const adspyOneMonth = await prisma.products.findFirst({
    where: { name: 'Adspy - 1 Mês' },
  });

  const adspyThreeMonth = await prisma.products.findFirst({
    where: { name: 'Adspy - 3 Meses' },
  });

  const adspySixMonth = await prisma.products.findFirst({
    where: { name: 'Adspy - 6 Meses' },
  });

  const adspyOneYear = await prisma.products.findFirst({
    where: { name: 'Adspy - 1 Ano' },
  });

  const bigspyOneMonth = await prisma.products.findFirst({
    where: { name: 'Bigspy - 1 Mês' },
  });

  const bigspyThreeMonth = await prisma.products.findFirst({
    where: { name: 'Bigspy - 3 Meses' },
  });

  const bigspySixMonth = await prisma.products.findFirst({
    where: { name: 'Bigspy - 6 Meses' },
  });

  const bigspyOneYear = await prisma.products.findFirst({
    where: { name: 'Bigspy - 1 Ano' },
  });

  const adsereaOneMonth = await prisma.products.findFirst({
    where: { name: 'Adserea - 1 Mês' },
  });

  const adsereaThreeMonth = await prisma.products.findFirst({
    where: { name: 'Adserea - 3 Meses' },
  });

  const adsereaSixMonth = await prisma.products.findFirst({
    where: { name: 'Adserea - 6 Meses' },
  });

  const adsereaOneYear = await prisma.products.findFirst({
    where: { name: 'Adserea - 1 Ano' },
  });

  const updateAdheartOneMonth = await prisma.permissions.update({
    where: { name: 'get_adheart' },
    data: {
      Products: {
        connect: {
          id: adheartOneMonth.id,
        },
      },
    },
  });

  const updateAdheartThreeMonth = await prisma.permissions.update({
    where: { name: 'get_adheart' },
    data: {
      Products: {
        connect: {
          id: adheartthreeMonth.id,
        },
      },
    },
  });

  const updateAdheartSixMonth = await prisma.permissions.update({
    where: { name: 'get_adheart' },
    data: {
      Products: {
        connect: {
          id: adheartSixMonth.id,
        },
      },
    },
  });

  const updateAdheartOneYear = await prisma.permissions.update({
    where: { name: 'get_adheart' },
    data: {
      Products: {
        connect: {
          id: adheartOneYear.id,
        },
      },
    },
  });

  const updateNichescrapperOneMonth = await prisma.permissions.update({
    where: { name: 'get_nichescrapper' },
    data: {
      Products: {
        connect: {
          id: nichescrapperOneMonth.id,
        },
      },
    },
  });

  const updateNichescrapperThreeMonth = await prisma.permissions.update({
    where: { name: 'get_nichescrapper' },
    data: {
      Products: {
        connect: {
          id: nichescrapperThreeMonth.id,
        },
      },
    },
  });

  const updateNichescrapperSixMonth = await prisma.permissions.update({
    where: { name: 'get_nichescrapper' },
    data: {
      Products: {
        connect: {
          id: nichescrapperSixMonth.id,
        },
      },
    },
  });

  const updateNichescrapperOneYear = await prisma.permissions.update({
    where: { name: 'get_nichescrapper' },
    data: {
      Products: {
        connect: {
          id: nichescrapperOneYear.id,
        },
      },
    },
  });

  const updateAdspyOneMonth = await prisma.permissions.update({
    where: { name: 'get_adspy' },
    data: {
      Products: {
        connect: {
          id: adspyOneMonth.id,
        },
      },
    },
  });

  const updateAdspyThreeMonth = await prisma.permissions.update({
    where: { name: 'get_adspy' },
    data: {
      Products: {
        connect: {
          id: adspyThreeMonth.id,
        },
      },
    },
  });

  const updateAdspySixMonth = await prisma.permissions.update({
    where: { name: 'get_adspy' },
    data: {
      Products: {
        connect: {
          id: adspySixMonth.id,
        },
      },
    },
  });

  const updateAdspyOneYear = await prisma.permissions.update({
    where: { name: 'get_adspy' },
    data: {
      Products: {
        connect: {
          id: adspyOneYear.id,
        },
      },
    },
  });

  const updateBigspyOneMonth = await prisma.permissions.update({
    where: { name: 'get_bigspy' },
    data: {
      Products: {
        connect: {
          id: bigspyOneMonth.id,
        },
      },
    },
  });

  const updateBigspyThreeMonth = await prisma.permissions.update({
    where: { name: 'get_bigspy' },
    data: {
      Products: {
        connect: {
          id: bigspyThreeMonth.id,
        },
      },
    },
  });

  const updateBigspySixMonth = await prisma.permissions.update({
    where: { name: 'get_bigspy' },
    data: {
      Products: {
        connect: {
          id: bigspySixMonth.id,
        },
      },
    },
  });

  const updateBigspyOneYear = await prisma.permissions.update({
    where: { name: 'get_bigspy' },
    data: {
      Products: {
        connect: {
          id: bigspyOneYear.id,
        },
      },
    },
  });

  const updateAdsereaOneMonth = await prisma.permissions.update({
    where: { name: 'get_adserea' },
    data: {
      Products: {
        connect: {
          id: adsereaOneMonth.id,
        },
      },
    },
  });

  const updateAdsereaThreeMonth = await prisma.permissions.update({
    where: { name: 'get_adserea' },
    data: {
      Products: {
        connect: {
          id: adsereaThreeMonth.id,
        },
      },
    },
  });

  const updateAdsereaSixMonth = await prisma.permissions.update({
    where: { name: 'get_adserea' },
    data: {
      Products: {
        connect: {
          id: adsereaSixMonth.id,
        },
      },
    },
  });

  const updateAdsereaOneYear = await prisma.permissions.update({
    where: { name: 'get_adserea' },
    data: {
      Products: {
        connect: {
          id: adsereaOneYear.id,
        },
      },
    },
  });

  // Create users
  const permission = await prisma.permissions.findFirst({
    where: { name: 'get_products' },
  });
  const permission2 = await prisma.permissions.findFirst({
    where: { name: 'get_adheart' },
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

  const allPermissions = await prisma.permissions.findMany();

  allPermissions.map(async (permission) => {
    await prisma.permissions.update({
      where: { id: permission.id },
      data: {
        Users: {
          connect: {
            id: user.id,
          },
        },
      },
    });
  });

  // Create Faq

  const faq = await prisma.faq.createMany({
    data: [
      {
        question: 'Porque o preço é tão baixo?',
        answer:
          'Todos os meses nós juntamos varias pessoas para dividir o valor da ferramenta, como o acesso e o valor é dividido entre varias pessoas acaba possibilitando um valor super acessível para cada um, oque nós permite cobrar um valor baixo com o máximo de qualidade possível!',
      },
      {
        question: 'Tenho limite de uso?',
        answer:
          'Não! Você poderá usar a ferramenta ilimitadamente, durante o periodo de 30 dias você poderá usar a ferramenta quantas vezes quiser, sem nenhum tipo de limite!',
      },
      {
        question: 'Como Funciona o acesso?',
        answer:
          'Com sua conta você terá acesso a uma área exclusiva, onde você poderá acessar a ferramenta que adquiriu e também terá acesso a todas as atualizações e novidades que iremos lançar!',
      },
      {
        question: 'Preciso ter uma conta para comprar?',
        answer:
          'Não! Você poderá comprar sem ter uma conta, caso você realize o pagamento sem está com o login efetuado em uma conta uma será criada para você automaticamente e enviada para o email que você nós forneceu na hora da compra.',
      },
    ],
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
