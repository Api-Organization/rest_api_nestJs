import { PrismaClient } from '@prisma/client';
import * as argon2 from 'argon2';

const prisma = new PrismaClient();
async function main() {
  //Create Products
  await prisma.products.createMany({
    data: [
      {
        name: 'AdHeart',
        time: '1 mês',
        description:
          'AdHeart é um software de automação de marketing que permite que você crie anúncios de alta qualidade em minutos, sem precisar de conhecimentos técnicos.',
        active: true,
        price: 'R$ 19,90',
        photo: 'https://www.webspy.com.br/uploads/adheart.png',
      },
      {
        name: 'AdHeart',
        time: '3 meses',
        description:
          'AdHeart é um software de automação de marketing que permite que você crie anúncios de alta qualidade em minutos, sem precisar de conhecimentos técnicos.',
        active: true,
        price: 'R$ 55,90',
        photo: 'https://www.webspy.com.br/uploads/adheart.png',
      },
      {
        name: 'AdHeart',
        time: '6 meses',
        description:
          'AdHeart é um software de automação de marketing que permite que você crie anúncios de alta qualidade em minutos, sem precisar de conhecimentos técnicos.',
        active: true,
        price: 'R$ 109,90',
        photo: 'https://www.webspy.com.br/uploads/adheart.png',
      },
      {
        name: 'AdHeart ',
        time: '12 meses',
        description:
          'AdHeart é um software de automação de marketing que permite que você crie anúncios de alta qualidade em minutos, sem precisar de conhecimentos técnicos.',
        active: true,
        price: 'R$ 199,90',
        photo: 'https://www.webspy.com.br/uploads/adheart.png',
      },
      {
        name: 'Adserea',
        time: '1 mês',
        description:
          'Adserea é um software de automação de marketing que permite que você crie anúncios de alta qualidade em minutos, sem precisar de conhecimentos técnicos.',
        active: true,
        price: 'R$ 197,00',
        photo: 'https://www.webspy.com.br/uploads/adserea.png',
      },
      {
        name: 'Adserea',
        time: '3 meses',
        description:
          'Adserea é um software de automação de marketing que permite que você crie anúncios de alta qualidade em minutos, sem precisar de conhecimentos técnicos.',
        active: true,
        price: 'R$ 197,00',
        photo: 'https://www.webspy.com.br/uploads/adserea.png',
      },
      {
        name: 'Adserea',
        time: '6 meses',
        description:
          'Adserea é um software de automação de marketing que permite que você crie anúncios de alta qualidade em minutos, sem precisar de conhecimentos técnicos.',
        active: true,
        price: 'R$ 197,00',
        photo: 'https://www.webspy.com.br/uploads/adserea.png',
      },
      {
        name: 'Adserea',
        time: '12 meses',
        description:
          'Adserea é um software de automação de marketing que permite que você crie anúncios de alta qualidade em minutos, sem precisar de conhecimentos técnicos.',
        active: true,
        price: 'R$ 197,00',
        photo: 'https://www.webspy.com.br/uploads/adserea.png',
      },
      {
        name: 'BigSpy',
        time: '1 mês',
        description:
          'BigSpy é um software de automação de marketing que permite que você crie anúncios de alta qualidade em minutos, sem precisar de conhecimentos técnicos.',
        active: true,
        price: 'R$ 197,00',
        photo: 'https://www.webspy.com.br/uploads/bigspy.webp',
      },
      {
        name: 'BigSpy',
        time: '3 meses',
        description:
          'BigSpy é um software de automação de marketing que permite que você crie anúncios de alta qualidade em minutos, sem precisar de conhecimentos técnicos.',
        active: true,
        price: 'R$ 197,00',
        photo: 'https://www.webspy.com.br/uploads/bigspy.webp',
      },
      {
        name: 'BigSpy',
        time: '6 meses',
        description:
          'BigSpy é um software de automação de marketing que permite que você crie anúncios de alta qualidade em minutos, sem precisar de conhecimentos técnicos.',
        active: true,
        price: 'R$ 197,00',
        photo: 'https://www.webspy.com.br/uploads/bigspy.webp',
      },
      {
        name: 'BigSpy',
        time: '12 meses',
        description:
          'BigSpy é um software de automação de marketing que permite que você crie anúncios de alta qualidade em minutos, sem precisar de conhecimentos técnicos.',
        active: true,
        price: 'R$ 197,00',
        photo: 'https://www.webspy.com.br/uploads/bigspy.webp',
      },
      {
        name: 'Nichescrapper',
        time: '1 mês',
        description:
          'Nichescrapper é um software de automação de marketing que permite que você crie anúncios de alta qualidade em minutos, sem precisar de conhecimentos técnicos.',
        active: true,
        price: 'R$ 09,90',
        photo: 'https://www.webspy.com.br/uploads/nichescraper.png',
      },
      {
        name: 'Nichescrapper',
        time: '3 meses',
        description:
          'Nichescrapper é um software de automação de marketing que permite que você crie anúncios de alta qualidade em minutos, sem precisar de conhecimentos técnicos.',
        active: true,
        price: 'R$ 19,90',
        photo: 'https://www.webspy.com.br/uploads/nichescraper.png',
      },
      {
        name: 'Nichescrapper',
        time: '6 meses',
        description:
          'Nichescrapper é um software de automação de marketing que permite que você crie anúncios de alta qualidade em minutos, sem precisar de conhecimentos técnicos.',
        active: true,
        price: 'R$ 49,90',
        photo: 'https://www.webspy.com.br/uploads/nichescraper.png',
      },
      {
        name: 'Nichescrapper',
        time: '12 meses',
        description:
          'Nichescrapper é um software de automação de marketing que permite que você crie anúncios de alta qualidade em minutos, sem precisar de conhecimentos técnicos.',
        active: true,
        price: 'R$ 99,90',
        photo: 'https://www.webspy.com.br/uploads/nichescraper.png',
      },
      {
        name: 'Adspy',
        time: '1 mês',
        description:
          'Adspy é um software de automação de marketing que permite que você crie anúncios de alta qualidade em minutos, sem precisar de conhecimentos técnicos.',
        active: true,
        price: 'R$ 49,90',
        photo: 'https://www.webspy.com.br/uploads/adspy.png',
      },
      {
        name: 'Adspy',
        time: '3 meses',
        description:
          'Adspy é um software de automação de marketing que permite que você crie anúncios de alta qualidade em minutos, sem precisar de conhecimentos técnicos.',
        active: true,
        price: 'R$ 129,90',
        photo: 'https://www.webspy.com.br/uploads/adspy.png',
      },
      {
        name: 'Adspy',
        time: '6 meses',
        description:
          'Adspy é um software de automação de marketing que permite que você crie anúncios de alta qualidade em minutos, sem precisar de conhecimentos técnicos.',
        active: true,
        price: 'R$ 249,90',
        photo: 'https://www.webspy.com.br/uploads/adspy.png',
      },
      {
        name: 'Adspy',
        time: '12 meses',
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
    where: {
      name: 'AdHeart',
      time: '1 mês',
    },
  });

  const adheartthreeMonth = await prisma.products.findFirst({
    where: { name: 'AdHeart', time: '3 meses' },
  });

  const adheartSixMonth = await prisma.products.findFirst({
    where: { name: 'Adheart', time: '6 meses' },
  });

  const adheartOneYear = await prisma.products.findFirst({
    where: { name: 'Adheart', time: '12 meses' },
  });

  const nichescrapperOneMonth = await prisma.products.findFirst({
    where: { name: 'Nichescrapper', time: '1 mês' },
  });

  const nichescrapperThreeMonth = await prisma.products.findFirst({
    where: { name: 'Nichescrapper', time: '3 meses' },
  });

  const nichescrapperSixMonth = await prisma.products.findFirst({
    where: { name: 'Nichescrapper', time: '6 meses' },
  });

  const nichescrapperOneYear = await prisma.products.findFirst({
    where: { name: 'Nichescrapper', time: '12 meses' },
  });

  const adspyOneMonth = await prisma.products.findFirst({
    where: { name: 'Adspy', time: '1 mês' },
  });

  const adspyThreeMonth = await prisma.products.findFirst({
    where: { name: 'Adspy', time: '3 meses' },
  });

  const adspySixMonth = await prisma.products.findFirst({
    where: { name: 'Adspy', time: '6 meses' },
  });

  const adspyOneYear = await prisma.products.findFirst({
    where: { name: 'Adspy', time: '12 meses' },
  });

  const bigspyOneMonth = await prisma.products.findFirst({
    where: { name: 'Bigspy', time: '1 mês' },
  });

  const bigspyThreeMonth = await prisma.products.findFirst({
    where: { name: 'Bigspy', time: '3 meses' },
  });

  const bigspySixMonth = await prisma.products.findFirst({
    where: { name: 'Bigspy', time: '6 meses' },
  });

  const bigspyOneYear = await prisma.products.findFirst({
    where: { name: 'Bigspy', time: '12 meses' },
  });

  const adsereaOneMonth = await prisma.products.findFirst({
    where: { name: 'Adserea', time: '1 mês' },
  });

  const adsereaThreeMonth = await prisma.products.findFirst({
    where: { name: 'Adserea', time: '3 meses' },
  });

  const adsereaSixMonth = await prisma.products.findFirst({
    where: { name: 'Adserea', time: '6 meses' },
  });

  const adsereaOneYear = await prisma.products.findFirst({
    where: { name: 'Adserea', time: '12 meses' },
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
  const user2 = await prisma.users.create({
    data: {
      name: 'funcionaria',
      email: 'laradllany.lp@gmail.com',
      number: 'Não informado',
      password: await argon2.hash('lara123789'),
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

  const question = await prisma.faq.findFirst({
    where: { question: 'Porque o preço é tão baixo?' },
  });

  const question2 = await prisma.faq.findFirst({
    where: { question: 'Tenho limite de uso?' },
  });

  const question3 = await prisma.faq.findFirst({
    where: { question: 'Como Funciona o acesso?' },
  });

  const question4 = await prisma.faq.findFirst({
    where: { question: 'Preciso ter uma conta para comprar?' },
  });

  const findAllProducts = await prisma.products.findMany();

  await prisma.$transaction(
    findAllProducts.map((product) =>
      prisma.faq.update({
        where: { id: question.id },
        data: {
          Products: { connect: { id: product.id } },
        },
      }),
    ),
  );
  await prisma.$transaction(
    findAllProducts.map((product) =>
      prisma.faq.update({
        where: { id: question2.id },
        data: {
          Products: { connect: { id: product.id } },
        },
      }),
    ),
  );
  await prisma.$transaction(
    findAllProducts.map((product) =>
      prisma.faq.update({
        where: { id: question3.id },
        data: {
          Products: { connect: { id: product.id } },
        },
      }),
    ),
  );
  await prisma.$transaction(
    findAllProducts.map((product) =>
      prisma.faq.update({
        where: { id: question4.id },
        data: {
          Products: { connect: { id: product.id } },
        },
      }),
    ),
  );

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
