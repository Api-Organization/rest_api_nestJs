import { PrismaClient } from '@prisma/client';
import * as argon2 from 'argon2';

const prisma = new PrismaClient();
async function main() {
  //Create Products
  // await prisma.products.createMany({
  //   data: [
  //     {
  //       name: 'AdHeart',
  //       time: '1 mês',
  //       description:
  //         'AdHeart é um software de automação de marketing que permite que você crie anúncios de alta qualidade em minutos, sem precisar de conhecimentos técnicos.',
  //       active: true,
  //       price: 'R$ 19,90',
  //       photo: 'https://www.webspy.com.br/uploads/adheart.png',
  //     },
  //     {
  //       name: 'AdHeart',
  //       time: '3 meses',
  //       description:
  //         'AdHeart é um software de automação de marketing que permite que você crie anúncios de alta qualidade em minutos, sem precisar de conhecimentos técnicos.',
  //       active: true,
  //       price: 'R$ 55,90',
  //       photo: 'https://www.webspy.com.br/uploads/adheart.png',
  //     },
  //     {
  //       name: 'AdHeart',
  //       time: '6 meses',
  //       description:
  //         'AdHeart é um software de automação de marketing que permite que você crie anúncios de alta qualidade em minutos, sem precisar de conhecimentos técnicos.',
  //       active: true,
  //       price: 'R$ 109,90',
  //       photo: 'https://www.webspy.com.br/uploads/adheart.png',
  //     },
  //     {
  //       name: 'AdHeart ',
  //       time: '12 meses',
  //       description:
  //         'AdHeart é um software de automação de marketing que permite que você crie anúncios de alta qualidade em minutos, sem precisar de conhecimentos técnicos.',
  //       active: true,
  //       price: 'R$ 199,90',
  //       photo: 'https://www.webspy.com.br/uploads/adheart.png',
  //     },
  //     {
  //       name: 'Adserea',
  //       time: '1 mês',
  //       description:
  //         'Adserea é um software de automação de marketing que permite que você crie anúncios de alta qualidade em minutos, sem precisar de conhecimentos técnicos.',
  //       active: true,
  //       price: 'R$ 197,00',
  //       photo: 'https://www.webspy.com.br/uploads/adserea.png',
  //     },
  //     {
  //       name: 'Adserea',
  //       time: '3 meses',
  //       description:
  //         'Adserea é um software de automação de marketing que permite que você crie anúncios de alta qualidade em minutos, sem precisar de conhecimentos técnicos.',
  //       active: true,
  //       price: 'R$ 197,00',
  //       photo: 'https://www.webspy.com.br/uploads/adserea.png',
  //     },
  //     {
  //       name: 'Adserea',
  //       time: '6 meses',
  //       description:
  //         'Adserea é um software de automação de marketing que permite que você crie anúncios de alta qualidade em minutos, sem precisar de conhecimentos técnicos.',
  //       active: true,
  //       price: 'R$ 197,00',
  //       photo: 'https://www.webspy.com.br/uploads/adserea.png',
  //     },
  //     {
  //       name: 'Adserea',
  //       time: '12 meses',
  //       description:
  //         'Adserea é um software de automação de marketing que permite que você crie anúncios de alta qualidade em minutos, sem precisar de conhecimentos técnicos.',
  //       active: true,
  //       price: 'R$ 197,00',
  //       photo: 'https://www.webspy.com.br/uploads/adserea.png',
  //     },
  //     {
  //       name: 'BigSpy',
  //       time: '1 mês',
  //       description:
  //         'BigSpy é um software de automação de marketing que permite que você crie anúncios de alta qualidade em minutos, sem precisar de conhecimentos técnicos.',
  //       active: true,
  //       price: 'R$ 197,00',
  //       photo: 'https://www.webspy.com.br/uploads/bigspy.webp',
  //     },
  //     {
  //       name: 'BigSpy',
  //       time: '3 meses',
  //       description:
  //         'BigSpy é um software de automação de marketing que permite que você crie anúncios de alta qualidade em minutos, sem precisar de conhecimentos técnicos.',
  //       active: true,
  //       price: 'R$ 197,00',
  //       photo: 'https://www.webspy.com.br/uploads/bigspy.webp',
  //     },
  //     {
  //       name: 'BigSpy',
  //       time: '6 meses',
  //       description:
  //         'BigSpy é um software de automação de marketing que permite que você crie anúncios de alta qualidade em minutos, sem precisar de conhecimentos técnicos.',
  //       active: true,
  //       price: 'R$ 197,00',
  //       photo: 'https://www.webspy.com.br/uploads/bigspy.webp',
  //     },
  //     {
  //       name: 'BigSpy',
  //       time: '12 meses',
  //       description:
  //         'BigSpy é um software de automação de marketing que permite que você crie anúncios de alta qualidade em minutos, sem precisar de conhecimentos técnicos.',
  //       active: true,
  //       price: 'R$ 197,00',
  //       photo: 'https://www.webspy.com.br/uploads/bigspy.webp',
  //     },
  //     {
  //       name: 'Nichescrapper',
  //       time: '1 mês',
  //       description:
  //         'Nichescrapper é um software de automação de marketing que permite que você crie anúncios de alta qualidade em minutos, sem precisar de conhecimentos técnicos.',
  //       active: true,
  //       price: 'R$ 09,90',
  //       photo: 'https://www.webspy.com.br/uploads/nichescraper.png',
  //     },
  //     {
  //       name: 'Nichescrapper',
  //       time: '3 meses',
  //       description:
  //         'Nichescrapper é um software de automação de marketing que permite que você crie anúncios de alta qualidade em minutos, sem precisar de conhecimentos técnicos.',
  //       active: true,
  //       price: 'R$ 19,90',
  //       photo: 'https://www.webspy.com.br/uploads/nichescraper.png',
  //     },
  //     {
  //       name: 'Nichescrapper',
  //       time: '6 meses',
  //       description:
  //         'Nichescrapper é um software de automação de marketing que permite que você crie anúncios de alta qualidade em minutos, sem precisar de conhecimentos técnicos.',
  //       active: true,
  //       price: 'R$ 49,90',
  //       photo: 'https://www.webspy.com.br/uploads/nichescraper.png',
  //     },
  //     {
  //       name: 'Nichescrapper',
  //       time: '12 meses',
  //       description:
  //         'Nichescrapper é um software de automação de marketing que permite que você crie anúncios de alta qualidade em minutos, sem precisar de conhecimentos técnicos.',
  //       active: true,
  //       price: 'R$ 99,90',
  //       photo: 'https://www.webspy.com.br/uploads/nichescraper.png',
  //     },
  //     {
  //       name: 'Adspy',
  //       time: '1 mês',
  //       description:
  //         'Adspy é um software de automação de marketing que permite que você crie anúncios de alta qualidade em minutos, sem precisar de conhecimentos técnicos.',
  //       active: true,
  //       price: 'R$ 49,90',
  //       photo: 'https://www.webspy.com.br/uploads/adspy.png',
  //     },
  //     {
  //       name: 'Adspy',
  //       time: '3 meses',
  //       description:
  //         'Adspy é um software de automação de marketing que permite que você crie anúncios de alta qualidade em minutos, sem precisar de conhecimentos técnicos.',
  //       active: true,
  //       price: 'R$ 129,90',
  //       photo: 'https://www.webspy.com.br/uploads/adspy.png',
  //     },
  //     {
  //       name: 'Adspy',
  //       time: '6 meses',
  //       description:
  //         'Adspy é um software de automação de marketing que permite que você crie anúncios de alta qualidade em minutos, sem precisar de conhecimentos técnicos.',
  //       active: true,
  //       price: 'R$ 249,90',
  //       photo: 'https://www.webspy.com.br/uploads/adspy.png',
  //     },
  //     {
  //       name: 'Adspy',
  //       time: '12 meses',
  //       description:
  //         'Adspy é um software de automação de marketing que permite que você crie anúncios de alta qualidade em minutos, sem precisar de conhecimentos técnicos.',
  //       active: true,
  //       price: 'R$ 499,90',
  //       photo: 'https://www.webspy.com.br/uploads/adspy.png',
  //     },
  //   ],
  // });

  // // Create permissions
  // const permissions = await prisma.permissions.createMany({
  //   data: [
  //     {
  //       name: 'get_adheart',
  //     },
  //     {
  //       name: 'get_adserea',
  //     },
  //     {
  //       name: 'get_bigspy',
  //     },
  //     {
  //       name: 'get_nichescrapper',
  //     },
  //     {
  //       name: 'get_adspy',
  //     },
  //     {
  //       name: 'combo_premium',
  //     },
  //     {
  //       name: 'update_products',
  //     },
  //     {
  //       name: 'update_permissions',
  //     },
  //     {
  //       name: 'update_faq',
  //     },
  //     {
  //       name: 'update_notes',
  //     },
  //     {
  //       name: 'create_notes',
  //     },
  //     {
  //       name: 'create_products',
  //     },
  //     {
  //       name: 'create_permissions',
  //     },
  //     {
  //       name: 'create_faq',
  //     },
  //     {
  //       name: 'delete_notes',
  //     },
  //     {
  //       name: 'delete_products',
  //     },
  //     {
  //       name: 'delete_permissions',
  //     },
  //     {
  //       name: 'delete_faq',
  //     },
  //     {
  //       name: 'get_notes',
  //     },
  //     {
  //       name: 'get_products',
  //     },
  //     {
  //       name: 'get_permissions',
  //     },
  //     {
  //       name: 'get_faq',
  //     },
  //     {
  //       name: 'get_users',
  //     },
  //   ],
  // });

  // const adheartOneMonth = await prisma.products.findFirst({
  //   where: {
  //     name: 'AdHeart',
  //     time: '1 mês',
  //   },
  // });

  // const adheartthreeMonth = await prisma.products.findFirst({
  //   where: { name: 'AdHeart', time: '3 meses' },
  // });

  // const adheartSixMonth = await prisma.products.findFirst({
  //   where: { name: 'Adheart', time: '6 meses' },
  // });

  // const adheartOneYear = await prisma.products.findFirst({
  //   where: { name: 'Adheart', time: '12 meses' },
  // });

  // const nichescrapperOneMonth = await prisma.products.findFirst({
  //   where: { name: 'Nichescrapper', time: '1 mês' },
  // });

  // const nichescrapperThreeMonth = await prisma.products.findFirst({
  //   where: { name: 'Nichescrapper', time: '3 meses' },
  // });

  // const nichescrapperSixMonth = await prisma.products.findFirst({
  //   where: { name: 'Nichescrapper', time: '6 meses' },
  // });

  // const nichescrapperOneYear = await prisma.products.findFirst({
  //   where: { name: 'Nichescrapper', time: '12 meses' },
  // });

  // const adspyOneMonth = await prisma.products.findFirst({
  //   where: { name: 'Adspy', time: '1 mês' },
  // });

  // const adspyThreeMonth = await prisma.products.findFirst({
  //   where: { name: 'Adspy', time: '3 meses' },
  // });

  // const adspySixMonth = await prisma.products.findFirst({
  //   where: { name: 'Adspy', time: '6 meses' },
  // });

  // const adspyOneYear = await prisma.products.findFirst({
  //   where: { name: 'Adspy', time: '12 meses' },
  // });

  // const bigspyOneMonth = await prisma.products.findFirst({
  //   where: { name: 'Bigspy', time: '1 mês' },
  // });

  // const bigspyThreeMonth = await prisma.products.findFirst({
  //   where: { name: 'Bigspy', time: '3 meses' },
  // });

  // const bigspySixMonth = await prisma.products.findFirst({
  //   where: { name: 'Bigspy', time: '6 meses' },
  // });

  // const bigspyOneYear = await prisma.products.findFirst({
  //   where: { name: 'Bigspy', time: '12 meses' },
  // });

  // const adsereaOneMonth = await prisma.products.findFirst({
  //   where: { name: 'Adserea', time: '1 mês' },
  // });

  // const adsereaThreeMonth = await prisma.products.findFirst({
  //   where: { name: 'Adserea', time: '3 meses' },
  // });

  // const adsereaSixMonth = await prisma.products.findFirst({
  //   where: { name: 'Adserea', time: '6 meses' },
  // });

  // const adsereaOneYear = await prisma.products.findFirst({
  //   where: { name: 'Adserea', time: '12 meses' },
  // });

  // const updateAdheartOneMonth = await prisma.permissions.update({
  //   where: { name: 'get_adheart' },
  //   data: {
  //     Products: {
  //       connect: {
  //         id: adheartOneMonth.id,
  //       },
  //     },
  //   },
  // });

  // const updateAdheartThreeMonth = await prisma.permissions.update({
  //   where: { name: 'get_adheart' },
  //   data: {
  //     Products: {
  //       connect: {
  //         id: adheartthreeMonth.id,
  //       },
  //     },
  //   },
  // });

  // const updateAdheartSixMonth = await prisma.permissions.update({
  //   where: { name: 'get_adheart' },
  //   data: {
  //     Products: {
  //       connect: {
  //         id: adheartSixMonth.id,
  //       },
  //     },
  //   },
  // });

  // const updateAdheartOneYear = await prisma.permissions.update({
  //   where: { name: 'get_adheart' },
  //   data: {
  //     Products: {
  //       connect: {
  //         id: adheartOneYear.id,
  //       },
  //     },
  //   },
  // });

  // const updateNichescrapperOneMonth = await prisma.permissions.update({
  //   where: { name: 'get_nichescrapper' },
  //   data: {
  //     Products: {
  //       connect: {
  //         id: nichescrapperOneMonth.id,
  //       },
  //     },
  //   },
  // });

  // const updateNichescrapperThreeMonth = await prisma.permissions.update({
  //   where: { name: 'get_nichescrapper' },
  //   data: {
  //     Products: {
  //       connect: {
  //         id: nichescrapperThreeMonth.id,
  //       },
  //     },
  //   },
  // });

  // const updateNichescrapperSixMonth = await prisma.permissions.update({
  //   where: { name: 'get_nichescrapper' },
  //   data: {
  //     Products: {
  //       connect: {
  //         id: nichescrapperSixMonth.id,
  //       },
  //     },
  //   },
  // });

  // const updateNichescrapperOneYear = await prisma.permissions.update({
  //   where: { name: 'get_nichescrapper' },
  //   data: {
  //     Products: {
  //       connect: {
  //         id: nichescrapperOneYear.id,
  //       },
  //     },
  //   },
  // });

  // const updateAdspyOneMonth = await prisma.permissions.update({
  //   where: { name: 'get_adspy' },
  //   data: {
  //     Products: {
  //       connect: {
  //         id: adspyOneMonth.id,
  //       },
  //     },
  //   },
  // });

  // const updateAdspyThreeMonth = await prisma.permissions.update({
  //   where: { name: 'get_adspy' },
  //   data: {
  //     Products: {
  //       connect: {
  //         id: adspyThreeMonth.id,
  //       },
  //     },
  //   },
  // });

  // const updateAdspySixMonth = await prisma.permissions.update({
  //   where: { name: 'get_adspy' },
  //   data: {
  //     Products: {
  //       connect: {
  //         id: adspySixMonth.id,
  //       },
  //     },
  //   },
  // });

  // const updateAdspyOneYear = await prisma.permissions.update({
  //   where: { name: 'get_adspy' },
  //   data: {
  //     Products: {
  //       connect: {
  //         id: adspyOneYear.id,
  //       },
  //     },
  //   },
  // });

  // const updateBigspyOneMonth = await prisma.permissions.update({
  //   where: { name: 'get_bigspy' },
  //   data: {
  //     Products: {
  //       connect: {
  //         id: bigspyOneMonth.id,
  //       },
  //     },
  //   },
  // });

  // const updateBigspyThreeMonth = await prisma.permissions.update({
  //   where: { name: 'get_bigspy' },
  //   data: {
  //     Products: {
  //       connect: {
  //         id: bigspyThreeMonth.id,
  //       },
  //     },
  //   },
  // });

  // const updateBigspySixMonth = await prisma.permissions.update({
  //   where: { name: 'get_bigspy' },
  //   data: {
  //     Products: {
  //       connect: {
  //         id: bigspySixMonth.id,
  //       },
  //     },
  //   },
  // });

  // const updateBigspyOneYear = await prisma.permissions.update({
  //   where: { name: 'get_bigspy' },
  //   data: {
  //     Products: {
  //       connect: {
  //         id: bigspyOneYear.id,
  //       },
  //     },
  //   },
  // });

  // const updateAdsereaOneMonth = await prisma.permissions.update({
  //   where: { name: 'get_adserea' },
  //   data: {
  //     Products: {
  //       connect: {
  //         id: adsereaOneMonth.id,
  //       },
  //     },
  //   },
  // });

  // const updateAdsereaThreeMonth = await prisma.permissions.update({
  //   where: { name: 'get_adserea' },
  //   data: {
  //     Products: {
  //       connect: {
  //         id: adsereaThreeMonth.id,
  //       },
  //     },
  //   },
  // });

  // const updateAdsereaSixMonth = await prisma.permissions.update({
  //   where: { name: 'get_adserea' },
  //   data: {
  //     Products: {
  //       connect: {
  //         id: adsereaSixMonth.id,
  //       },
  //     },
  //   },
  // });

  // const updateAdsereaOneYear = await prisma.permissions.update({
  //   where: { name: 'get_adserea' },
  //   data: {
  //     Products: {
  //       connect: {
  //         id: adsereaOneYear.id,
  //       },
  //     },
  //   },
  // });

  // // // Create users
  // const permission = await prisma.permissions.findFirst({
  //   where: { name: 'get_products' },
  // });
  // const permission2 = await prisma.permissions.findFirst({
  //   where: { name: 'get_adheart' },
  // });
  // const get_adserea = await prisma.permissions.findFirst({
  //   where: { name: 'get_adserea' },
  // });
  // const get_adspy = await prisma.permissions.findFirst({
  //   where: { name: 'get_adspy' },
  // });
  // const get_nichescrapper = await prisma.permissions.findFirst({
  //   where: { name: 'get_nichescrapper' },
  // });

  // const users = await prisma.users.createMany({
  //   data: [
  //     {
  //       name: 'Admin',
  //       email: 'fernando.atr@outlook.com',
  //       number: 'Não informado',
  //       password: await argon2.hash('teste1'),
  //     },
  //     {
  //       name: 'Pedro Rios',
  //       email: 'rios.jur@gmail.com',
  //       password: await argon2.hash('rios.jur'),
  //       number: '48 8817-4229',
  //     },
  //     {
  //       name: 'Tufik Carvalho',
  //       email: 'tufikcarvalho@gmail.com',
  //       password: await argon2.hash('tufikcarvalho'),
  //       number: '16 99992-9137',
  //     },
  //     {
  //       name: 'silvio souza',
  //       email: 'sillll75@gmail.com',
  //       password: await argon2.hash('sillll75'),
  //       number: '34 9237-9239',
  //     },
  //     {
  //       name: 'deboraalves-c08',
  //       email: 'deboraalves-c08@hotmail.com',
  //       password: await argon2.hash('deboraalves-c08'),
  //       number: '21 98618-5411',
  //     },
  //     {
  //       name: 'Isaias Echer',
  //       email: 'isaias.echer@hotmail.com',
  //       password: await argon2.hash('isaias.echer'),
  //       number: '+61 401 907 915',
  //     },
  //     {
  //       name: 'ANDREA DOMINGOS',
  //       email: 'riquezagora@gmail.com',
  //       password: await argon2.hash('riquezagora'),
  //       number: '11 94384-3817',
  //     },
  //     {
  //       name: 'Andr� Barros Bruno',
  //       email: 'andre_bruno@hajatec.com.br',
  //       password: await argon2.hash('andre_bruno'),
  //       number: '21 99188-1642',
  //     },
  //     {
  //       name: 'Fernando Ara�jo',
  //       email: 'araujofernando88@hotmail.com',
  //       password: await argon2.hash('araujofernando88'),
  //       number: '11 94891-8771',
  //     },
  //     {
  //       name: 'camila meireles',
  //       email: 'licencamania@gmail.com',
  //       password: await argon2.hash('licencamania'),
  //       number: '67 9697-4051',
  //     },
  //     {
  //       name: 'Guilherme Minucci',
  //       email: 'guih-m@outlook.com',
  //       password: await argon2.hash('guih-m'),
  //       number: '19 99554-0177',
  //     },
  //     {
  //       name: 'Guilherme Souza',
  //       email: 'guilhermeshid@gmail.com',
  //       password: await argon2.hash('guilhermeshid'),
  //       number: '41 8789-9827',
  //     },
  //     {
  //       name: 'IGOR COSTA',
  //       email: 'igor.costa.b.17@gmail.com',
  //       password: await argon2.hash('igor.costa.b.17'),
  //       number: '47 9227-5080',
  //     },
  //     {
  //       name: 'Pedro Antonio Rocha Coelho',
  //       email: 'pedro22233@gmail.com',
  //       password: await argon2.hash('pedro22233'),
  //       number: '62 8546-2595',
  //     },
  //     {
  //       name: 'Matheus  Avila',
  //       email: 'matheusavilax@gmail.com',
  //       password: await argon2.hash('matheusavilax'),
  //       number: '34 9652-6700',
  //     },
  //     {
  //       name: 'Julison Guilherme Souza De Lima',
  //       email: 'julisongui@gmail.com',
  //       password: await argon2.hash('julisongui'),
  //       number: '93 9175-3370',
  //     },
  //     {
  //       name: 'Pedro Paulo Gundim',
  //       email: 'ppgundim@gmail.com',
  //       password: await argon2.hash('ppgundim'),
  //       number: '62 8165-1107',
  //     },
  //     {
  //       name: 'Eduardo Demartini Jordao',
  //       email: 'eduardodemartinij@gmail.com',
  //       password: await argon2.hash('eduardodemartinij'),
  //       number: '28 99900-3841',
  //     },
  //     {
  //       name: 'Alex Morais',
  //       email: 'alex.morais10@gmail.com',
  //       password: await argon2.hash('alex.morais10'),
  //       number: '',
  //     },
  //     {
  //       name: 'Jos� Elson Bispo De S�',
  //       email: 'ghdiscordpigs@gmail.com',
  //       password: await argon2.hash('ghdiscordpigs'),
  //       number: '38 9731-1137',
  //     },
  //     {
  //       name: 'bazanelaherrera',
  //       email: 'bazanelaherrera@gmail.com',
  //       password: await argon2.hash('bazanelaherrera'),
  //       number: '19 99174-1440',
  //     },
  //     {
  //       name: 'Stephanie Kekuchi',
  //       email: 'stephanie_kekuchi@hotmail.com',
  //       password: await argon2.hash('stephanie_kekuchi'),
  //       number: '65 9968-7662',
  //     },
  //     {
  //       name: 'carlos alberto',
  //       email: 'alinemakelyne@gmail.com',
  //       password: await argon2.hash('alinemakelyne'),
  //       number: '21 99904-9900',
  //     },
  //     {
  //       name: 'Diogo Silva',
  //       email: 'dklsilva@hotmail.com',
  //       password: await argon2.hash('dklsilva'),
  //       number: '11 97459-4423',
  //     },
  //     {
  //       name: 'Manoel Cezario Dias',
  //       email: 'lucascdias20000@gmail.com',
  //       password: await argon2.hash('lucascdias20000'),
  //       number: '33 9140-5663',
  //     },
  //     {
  //       name: 'Lucas Matheus Carneiro de Souza',
  //       email: 'lucasmatheus.c@hotmail.com',
  //       password: await argon2.hash('lucasmatheus.c'),
  //       number: '31 8871-6854',
  //     },
  //     {
  //       name: 'Kau� Carvalho',
  //       email: 'kauacarvalhogp@gmail.com',
  //       password: await argon2.hash('kauacarvalhogp'),
  //       number: 'nao encontrado',
  //     },
  //     {
  //       name: 'LM  Digital',
  //       email: 'lukasmnz12+ml@hotmail.com',
  //       password: await argon2.hash('lukasmnz12+ml'),
  //       number: '61 9161-1222',
  //     },
  //     {
  //       name: 'lipi19bsb',
  //       email: 'lipi19bsb@gmail.com',
  //       password: await argon2.hash('lipi19bsb'),
  //       number: '61 9915-3876',
  //     },
  //     {
  //       name: 'JULIA R LAMOUNIER',
  //       email: 'julialamounier15@icloud.com',
  //       password: await argon2.hash('julialamounier15'),
  //       number: 'n�o encontrado',
  //     },
  //     {
  //       name: 'Lelio Mello',
  //       email: 'leliomello1@gmail.com',
  //       password: await argon2.hash('leliomello1'),
  //       number: '16 99274-6101',
  //     },
  //     {
  //       name: 'Vin�cius Pacheco',
  //       email: 'vippufv@gmail.com',
  //       password: await argon2.hash('vippufv'),
  //       number: '47 9901-2834',
  //     },
  //     {
  //       name: 'DAYANE PROSPERO CARVALHO',
  //       email: 'upeletronix@gmail.com',
  //       password: await argon2.hash('upeletronix'),
  //       number: 'nao encontrado',
  //     },
  //     {
  //       name: 'Ranier Tonin',
  //       email: 'raniertonin@gmail.com',
  //       password: await argon2.hash('raniertonin'),
  //       number: '54 9171-1911',
  //     },
  //     {
  //       name: 'Andressa Kellen',
  //       email: 'contato@epxdigitalbusiness.com',
  //       password: await argon2.hash('contato'),
  //       number: '11 93462-2724',
  //     },
  //     {
  //       name: 'Guilherme Augusto Mayer',
  //       email: 'guilhermemayer50@gmail.com',
  //       password: await argon2.hash('guilhermemayer50'),
  //       number: '51 9885-7680',
  //     },
  //     {
  //       name: 'christian neves',
  //       email: 'christianneves1@hotmail.com',
  //       password: await argon2.hash('christianneves1'),
  //       number: '41 8888-6725',
  //     },
  //     {
  //       name: 'marcinhoredskull',
  //       email: 'marcinhoredskull@gmail.com',
  //       password: await argon2.hash('marcinhoredskull'),
  //       number: '61 9580-9597',
  //     },
  //     {
  //       name: 'Geovane Louren�o',
  //       email: 'lourenco.geovane95@gmail.com',
  //       password: await argon2.hash('lourenco.geovane95'),
  //       number: '45 9821-0549',
  //     },
  //     {
  //       name: 'Juliana Silva',
  //       email: 'juliana.jan@gmail.com',
  //       password: await argon2.hash('juliana.jan'),
  //       number: 'n�o encontrado',
  //     },
  //     {
  //       name: 'Emmanuel Augusto de Oliveira Teixeira',
  //       email: 'emmanuel.sosshop@gmail.com',
  //       password: await argon2.hash('emmanuel.sosshop'),
  //       number: '13 98216-9591',
  //     },
  //     {
  //       name: 'eliseu santos Ara�jo silva',
  //       email: 'lidereliseu@gmail.com',
  //       password: await argon2.hash('lidereliseu'),
  //       number: 'nao encontrado',
  //     },
  //     {
  //       name: 'Wander Pinheiro',
  //       email: 'wanderpinheiro207@gmail.com',
  //       password: await argon2.hash('wanderpinheiro207'),
  //       number: 'nao encontrado',
  //     },
  //     {
  //       name: 'welington valad�o',
  //       email: 'tonvaladao@gmail.com',
  //       password: await argon2.hash('tonvaladao'),
  //       number: 'nao encontrado',
  //     },
  //     {
  //       name: 'Vitorio Augusto',
  //       email: 'vitorioleco3@gmail.com',
  //       password: await argon2.hash('vitorioleco3'),
  //       number: '49 9836-0208',
  //     },
  //     {
  //       name: 'gabriel troiano',
  //       email: 'gabrieltroiano2020@gmail.com',
  //       password: await argon2.hash('gabrieltroiano2020'),
  //       number: '85 9621-2249',
  //     },
  //     {
  //       name: 'Lorran Flavio Raslan Cancado',
  //       email: 'lorran.raslanr@gmail.com',
  //       password: await argon2.hash('lorran.raslanr'),
  //       number: '31 7157-1117',
  //     },
  //     {
  //       name: 'Mateus Caetano',
  //       email: 'mtscaetano@outlook.com',
  //       password: await argon2.hash('mtscaetano'),
  //       number: '14 99762-2236',
  //     },
  //     {
  //       name: 'Douglas Mazur Ballardin',
  //       email: 'douglasmazur@hotmail.com',
  //       password: await argon2.hash('douglasmazur'),
  //       number: '41 9169-2426',
  //     },
  //     {
  //       name: '�talo Moi� Sim�o',
  //       email: 'italosimao4@gmail.com',
  //       password: await argon2.hash('italosimao4'),
  //       number: 'nao encontrado',
  //     },
  //     {
  //       name: 'EDUARDO AUGUSTO PEREIRA 150884 EDUARDO AUGUSTO PEREIRA 150884',
  //       email: 'eduardoaugusto358@gmail.com',
  //       password: await argon2.hash('eduardoaugusto358'),
  //       number: '89 8134-0810',
  //     },
  //     {
  //       name: 'Mauro Rosa Alves',
  //       email: 'maurocomp@live.com',
  //       password: await argon2.hash('maurocomp'),
  //       number: 'nao encontrado',
  //     },
  //     {
  //       name: 'J�nior Ara�jo',
  //       email: 'juninhochr@gmail.com',
  //       password: await argon2.hash('juninhochr'),
  //       number: 'nao encontrado',
  //     },
  //     {
  //       name: 'LUCIMEIRE RIQUELME PIRES',
  //       email: 'enf.lupires1@gmail.com',
  //       password: await argon2.hash('enf.lupires1'),
  //       number: 'nao encontrado',
  //     },
  //     {
  //       name: 'pradomktg1',
  //       email: 'pradomktg1@gmail.com',
  //       password: await argon2.hash('pradomktg1'),
  //       number: '62 8125-0844',
  //     },
  //     {
  //       name: 'my.business.in.thailand',
  //       email: 'my.business.in.thailand@gmail.com',
  //       password: await argon2.hash('my.business.in.thailand'),
  //       number: 'nao encontrado',
  //     },
  //     {
  //       name: 'Marcelo Lima',
  //       email: 'marcelopereiralima@globo.com',
  //       password: await argon2.hash('marcelopereiralima'),
  //       number: 'nao encontrado',
  //     },
  //     {
  //       name: 'Jonathan Cristian',
  //       email: 'jonathancristian17@outlook.com',
  //       password: await argon2.hash('jonathancristian17'),
  //       number: '22 99955-6532',
  //     },
  //     {
  //       name: 'Bruno Antunes',
  //       email: 'bruninhopho@gmail.com',
  //       password: await argon2.hash('bruninhopho'),
  //       number: '54 9674-1342',
  //     },
  //     {
  //       name: 'Jhuan Veloso',
  //       email: 'velosojhuan123@gmail.com',
  //       password: await argon2.hash('velosojhuan123'),
  //       number: '51 9877-6676',
  //     },
  //     {
  //       name: 'Vinicius Barros de Oliveira',
  //       email: 'vinibarrox0o0@gmail.com',
  //       password: await argon2.hash('vinibarrox0o0'),
  //       number: 'nao encontrado',
  //     },
  //     {
  //       name: 'Alif Santos',
  //       email: 'alif.sferreira@gmail.com',
  //       password: await argon2.hash('alif.sferreira'),
  //       number: 'nao encontrado',
  //     },
  //     {
  //       name: 'dzmplayer4',
  //       email: 'dzmplayer4@gmail.com',
  //       password: await argon2.hash('dzmplayer4'),
  //       number: '17 99284-1484',
  //     },
  //     {
  //       name: 'Marcelo da Palma Oliveira Junior',
  //       email: 'marcelopoliveirajr@gmail.com',
  //       password: await argon2.hash('marcelopoliveirajr'),
  //       number: 'nao encontrado',
  //     },
  //     {
  //       name: 'Luiz Felipe da Silva Costa',
  //       email: 'felipesilvalk@hotmail.com',
  //       password: await argon2.hash('felipesilvalk'),
  //       number: 'nao encontrado',
  //     },
  //     {
  //       name: 'Carlos Maximiliano',
  //       email: 'netuno_king@hotmail.com',
  //       password: await argon2.hash('netuno_king'),
  //       number: 'nao encontrado',
  //     },
  //     {
  //       name: 'Connrado L. Chaves',
  //       email: 'connrado.ch@gmail.com',
  //       password: await argon2.hash('connrado.ch'),
  //       number: '32 8827-1221',
  //     },
  //     {
  //       name: 'Guilherme Garbellotto',
  //       email: 'guilherme.garbellotto@gmail.com',
  //       password: await argon2.hash('guilherme.garbellotto'),
  //       number: '13 99153-9345',
  //     },
  //     {
  //       name: 'Paloma Arce',
  //       email: 'palomaarces@outlook.com',
  //       password: await argon2.hash('palomaarces'),
  //       number: '51 9250-7794',
  //     },
  //     {
  //       name: 'LUIZ FELIpe SANTOS DA SILVA',
  //       email: 'maisumprajesus2015@gmail.com',
  //       password: await argon2.hash('maisumprajesus2015'),
  //       number: 'nao encontrado',
  //     },
  //     {
  //       name: 'NATALI ROSA',
  //       email: 'gustavoalves14061@gmail.com',
  //       password: await argon2.hash('gustavoalves14061'),
  //       number: '41 9225-8033',
  //     },
  //     {
  //       name: 'Mateus Batista',
  //       email: 'mt92017463@gmail.com',
  //       password: await argon2.hash('mt92017463'),
  //       number: '63 9116-2348',
  //     },
  //     {
  //       name: 'Andr�ia Aparecida Lacerda',
  //       email: 'financeiroduelights@gmail.com',
  //       password: await argon2.hash('financeiroduelights'),
  //       number: '11 94106-0755',
  //     },
  //     {
  //       name: 'Luan Muller Silva',
  //       email: 'luanmuller@hotmail.com',
  //       password: await argon2.hash('luanmuller'),
  //       number: 'nao encontrado',
  //     },
  //     {
  //       name: 'MMF MAGAZINE MULTIMARCAS',
  //       email: 'contato.mmf85@gmail.com',
  //       password: await argon2.hash('contato.mmf85'),
  //       number: 'nao encontrado',
  //     },
  //     {
  //       name: 'Dinamir Roberto Candido',
  //       email: 'vendas@renovamaster.com',
  //       password: await argon2.hash('vendas'),
  //       number: '16 98821-8442',
  //     },
  //     {
  //       name: 'Wagner Rodrigues',
  //       email: 'grafarena@hotmail.com',
  //       password: await argon2.hash('grafarena'),
  //       number: 'nao encontrado',
  //     },
  //     {
  //       name: 'Italo Bruno',
  //       email: 'iburnlabs@gmail.com',
  //       password: await argon2.hash('iburnlabs'),
  //       number: '21 98929-7073',
  //     },
  //     {
  //       name: 'Francielly Oliveira Diehl',
  //       email: 'franodiehl@gmail.com',
  //       password: await argon2.hash('franodiehl'),
  //       number: '48 9153-3128',
  //     },
  //     {
  //       name: 'Carlos Roberto',
  //       email: 'carlos.roberto22@gmail.com',
  //       password: await argon2.hash('carlos.roberto22'),
  //       number: '84 8866-4956',
  //     },
  //     {
  //       name: 'CARLA C A SOUZA',
  //       email: 'vitoru1337@gmail.com',
  //       password: await argon2.hash('vitoru1337'),
  //       number: '53 9903-3372',
  //     },
  //     {
  //       name: 'Sabrina Vieira',
  //       email: 'sabrinarh2017@hotmail.com',
  //       password: await argon2.hash('sabrinarh2017'),
  //       number: '12 99119-8120',
  //     },
  //     {
  //       name: 'Lucas Borges',
  //       email: 'lucas.borges10.lb.lb@gmail.com',
  //       password: await argon2.hash('lucas.borges10.lb.lb'),
  //       number: '96 8109-9036',
  //     },
  //     {
  //       name: 'DIRLEI LUIS SESTREM 0046616993 DIRLEI LUIS SESTREM 0046616993',
  //       email: 'dirleyluiz@hotmail.com',
  //       password: await argon2.hash('dirleyluiz'),
  //       number: 'nao encontrado',
  //     },
  //     {
  //       name: 'Anderson Fonseca',
  //       email: 'andersonfonseca21@yahoo.com.br',
  //       password: await argon2.hash('andersonfonseca21'),
  //       number: 'nao encontrado',
  //     },
  //     {
  //       name: 'Diagota Oficial',
  //       email: 'joaovictor@liderimobiliaria.com.br',
  //       password: await argon2.hash('joaovictor'),
  //       number: '34 9143-7805',
  //     },
  //     {
  //       name: 'Anne Carolina de Jesus Oliveira',
  //       email: 'anne.joliveira@hotmail.com',
  //       password: await argon2.hash('anne.joliveira'),
  //       number: 'nao encontrado',
  //     },
  //     {
  //       name: 'Robson Camargo Viana',
  //       email: 'robsondoc@ferramentasvalmar.com.br',
  //       password: await argon2.hash('robsondoc'),
  //       number: 'nao encontrado',
  //     },
  //     {
  //       name: 'Tawan Silva',
  //       email: 'aceleradormkt@gmail.com',
  //       password: await argon2.hash('aceleradormkt'),
  //       number: 'nao encontrado',
  //     },
  //     {
  //       name: 'Giovanni Laredo Leao',
  //       email: 'giggiolaredo2009@gmail.com',
  //       password: await argon2.hash('giggiolaredo2009'),
  //       number: '48 9190-0718',
  //     },
  //     {
  //       name: 'Fernanda de Oliveira',
  //       email: 'nandadeoliveira@icloud.com',
  //       password: await argon2.hash('nandadeoliveira'),
  //       number: 'nao encontrado',
  //     },
  //     {
  //       name: 'suporteclientetb',
  //       email: 'suporteclientetb@gmail.com',
  //       password: await argon2.hash('suporteclientetb'),
  //       number: '11 94216-3195',
  //     },
  //     {
  //       name: 'William Brand�o',
  //       email: 'williamfbrandao@gmail.com',
  //       password: await argon2.hash('williamfbrandao'),
  //       number: '1 (475) 342-0057',
  //     },
  //     {
  //       name: 'diulia almeida',
  //       email: 'diuliaalmeida@hotmail.com',
  //       password: await argon2.hash('diuliaalmeida'),
  //       number: 'nao encontrado',
  //     },
  //     {
  //       name: 'Victor Tomaz',
  //       email: 'lvictortomaz@gmail.com',
  //       password: await argon2.hash('lvictortomaz'),
  //       number: '11 96167-2482',
  //     },
  //     {
  //       name: 'Fabricio Ferreira',
  //       email: 'fabricio.rodrigues.ferreira.1983@gmail.com',
  //       password: await argon2.hash('fabricio.rodrigues.ferreira.1983'),
  //       number: '11 99467-9414',
  //     },
  //     {
  //       name: 'Felipe Gomez',
  //       email: 'felipelacerdaa@hotmail.com',
  //       password: await argon2.hash('felipelacerdaa'),
  //       number: 'nao encontrado',
  //     },
  //     {
  //       name: 'mariana merendino ponquio de s�',
  //       email: 'malopesm@icloud.com',
  //       password: await argon2.hash('malopesm'),
  //       number: '15 98128-8686',
  //     },
  //     {
  //       name: 'Matheus Melo Fernandes',
  //       email: 'mtths97mine@gmail.com',
  //       password: await argon2.hash('mtths97mine'),
  //       number: '63 9272-1214',
  //     },
  //     {
  //       name: 'irismar alves pessoa',
  //       email: 'erick_pessoa@outlook.com',
  //       password: await argon2.hash('erick_pessoa'),
  //       number: 'nao encontrado',
  //     },
  //     {
  //       name: 'Gustavo Cordeiro',
  //       email: 'gcaloko@gmail.com',
  //       password: await argon2.hash('gcaloko'),
  //       number: 'nao encontrado',
  //     },
  //     {
  //       name: 'Allan Martins Rosa',
  //       email: 'allanmartinsrosa@gmail.com',
  //       password: await argon2.hash('allanmartinsrosa'),
  //       number: '11 97749-0390',
  //     },
  //     {
  //       name: 'MK INTERMEDIACOES LTDA MK INTERMEDIACOES LTDA',
  //       email: 'intermediacoesmk@gmail.com',
  //       password: await argon2.hash('intermediacoesmk'),
  //       number: 'nao encontrado',
  //     },
  //     {
  //       name: 'Andrei Junior Xavier da Silva',
  //       email: 'thegoatdigital01@gmail.com',
  //       password: await argon2.hash('thegoatdigital01'),
  //       number: '51 9009-5114',
  //     },
  //     {
  //       name: 'Marcus Vinicius Pereira Alves',
  //       email: 'mvharry@gmail.com',
  //       password: await argon2.hash('mvharry'),
  //       number: 'nao encontrado',
  //     },
  //     {
  //       name: 'Claudia Mara Gazola Orlandin',
  //       email: 'gabrielorlandin2004@gmail.com',
  //       password: await argon2.hash('gabrielorlandin2004'),
  //       number: '44 9825-6374',
  //     },
  //     {
  //       name: 'Juliana Mello',
  //       email: 'jjuliana.mello@gmail.com',
  //       password: await argon2.hash('jjuliana.mello'),
  //       number: '21 97580-1780',
  //     },
  //     {
  //       name: 'Davi Rubim',
  //       email: 'davi.rubim7@gmail.com',
  //       password: await argon2.hash('davi.rubim7'),
  //       number: 'nao encontrado',
  //     },
  //     {
  //       name: 'NATHAN GRILLO FERREIRA NATHAN GRILLO FERREIRA',
  //       email: 'contact@nathangrillo3d.com',
  //       password: await argon2.hash('contact'),
  //       number: 'nao encontrado',
  //     },
  //     {
  //       name: 'Rodrigo Silva',
  //       email: 'rodrigo.silvarodrigo-digo@outlook.com',
  //       password: await argon2.hash('rodrigo.silvarodrigo-digo'),
  //       number: '11 99363-4214',
  //     },
  //     {
  //       name: 'Marileide Priscila da Silva Constante dos Santos',
  //       email: 'mariemarcos1608@gmail.com',
  //       password: await argon2.hash('mariemarcos1608'),
  //       number: '31 9237-6421',
  //     },
  //     {
  //       name: 'RODRIGO BENFICA',
  //       email: 'rodrigo-benfica@hotmail.com',
  //       password: await argon2.hash('rodrigo-benfica'),
  //       number: '34 9935-8280',
  //     },
  //     {
  //       name: 'projetoallinblack',
  //       email: 'projetoallinblack@gmail.com',
  //       password: await argon2.hash('projetoallinblack'),
  //       number: '37 9919-7266',
  //     },
  //     {
  //       name: 'blueoceandigitalbusiness',
  //       email: 'blueoceandigitalbusiness@gmail.com',
  //       password: await argon2.hash('blueoceandigitalbusiness'),
  //       number: 'nao encontrado',
  //     },
  //     {
  //       name: 'Silvane Kreusch',
  //       email: 'abnerveiga2101@gmail.com',
  //       password: await argon2.hash('abnerveiga2101'),
  //       number: '47 9111-9041',
  //     },
  //     {
  //       name: 'Web Storeema',
  //       email: 'fabiana_jcoliveira@hotmail.com',
  //       password: await argon2.hash('fabiana_jcoliveira'),
  //       number: 'nao encontrado',
  //     },
  //     {
  //       name: 'Emanuel Reis',
  //       email: 'emanuel.reis@yahoo.com.br',
  //       password: await argon2.hash('emanuel.reis'),
  //       number: '31 9769-0259',
  //     },
  //     {
  //       name: 'Bruno Luders',
  //       email: 'brunoluders@hotmail.com.br',
  //       password: await argon2.hash('brunoluders'),
  //       number: 'nao encontrado',
  //     },
  //     {
  //       name: 'VANDERLENE CARVALHO DE SOUSA VANDERLENE CARVALHO DE SOUSA',
  //       email: 'lenasousa67@gmail.com',
  //       password: await argon2.hash('lenasousa67'),
  //       number: 'nao encontrado',
  //     },
  //     {
  //       name: 'Jo�o Cust�dio',
  //       email: 'joaoocustodio@gmail.com',
  //       password: await argon2.hash('joaoocustodio'),
  //       number: '43 9128-7802',
  //     },
  //     {
  //       name: 'Claudineudo Gomes',
  //       email: 'claudineudo17@gmail.com',
  //       password: await argon2.hash('claudineudo17'),
  //       number: '31 8876-3868',
  //     },
  //     {
  //       name: 'Rodrigo Rodrigues',
  //       email: 'rodrigorodriguesbinomo@gmail.com',
  //       password: await argon2.hash('rodrigorodriguesbinomo'),
  //       number: 'nao encontrado',
  //     },
  //     {
  //       name: 'Rafael Paula Lura',
  //       email: 'lura.corretor@gmail.com',
  //       password: await argon2.hash('lura.corretor'),
  //       number: 'nao encontrado',
  //     },
  //     {
  //       name: 'Matheus Esm�rio',
  //       email: 'matheus_esmerio@hotmail.com',
  //       password: await argon2.hash('matheus_esmerio'),
  //       number: 'nao encontrado',
  //     },
  //     {
  //       name: 'ehcdabfg adbghfec',
  //       email: 'joaovitorcidade20@gmail.com',
  //       password: await argon2.hash('joaovitorcidade20'),
  //       number: 'nao encontrado',
  //     },
  //     {
  //       name: 'Maria de Figueiredo Costa',
  //       email: 'tamymaria3002@gmail.com',
  //       password: await argon2.hash('tamymaria3002'),
  //       number: 'nao encontrado',
  //     },
  //     {
  //       name: 'vitor melhado',
  //       email: 'vitsousagk1@hotmail.com',
  //       password: await argon2.hash('vitsousagk1'),
  //       number: 'nao encontrado',
  //     },
  //     {
  //       name: 'Bryan Cesar',
  //       email: 'bryancesarfull7@gmail.com',
  //       password: await argon2.hash('bryancesarfull7'),
  //       number: '21 98297-4029',
  //     },
  //     {
  //       name: 'Jo�o Paulo Sayd Rispoli',
  //       email: 'joao.rispoli@hotmail.com',
  //       password: await argon2.hash('joao.rispoli'),
  //       number: '21 99725-2323',
  //     },
  //     {
  //       name: 'Julio Augusto Silva Flores',
  //       email: 'jaugustoflores@gmail.com',
  //       password: await argon2.hash('jaugustoflores'),
  //       number: '77 8863-2116',
  //     },
  //     {
  //       name: 'Felipe Fernandes Dos Reis',
  //       email: 'scalesells7@gmail.com',
  //       password: await argon2.hash('scalesells7'),
  //       number: 'nao encontrado',
  //     },
  //     {
  //       name: 'danieljrrapple',
  //       email: 'danieljrrapple@gmail.com',
  //       password: await argon2.hash('danieljrrapple'),
  //       number: 'nao encontrado',
  //     },
  //     {
  //       name: 'gabriel laurindo',
  //       email: 'gabriellaurindo2016@hotmail.com',
  //       password: await argon2.hash('gabriellaurindo2016'),
  //       number: '81 9705-7207',
  //     },
  //     {
  //       name: 'Lucas Aguiar',
  //       email: 'lucas.aguiar79@gmail.com',
  //       password: await argon2.hash('lucas.aguiar79'),
  //       number: '19 99800-2277',
  //     },
  //     {
  //       name: 'Miguel Rejala',
  //       email: 'miguelrejala6@gmail.com',
  //       password: await argon2.hash('miguelrejala6'),
  //       number: '67 9195-3143',
  //     },
  //     {
  //       name: 'Aline Rodrigues Pereira',
  //       email: 'aline.r.pereira@hotmail.com',
  //       password: await argon2.hash('aline.r.pereira'),
  //       number: '54 9700-7749',
  //     },
  //     {
  //       name: 'wls celulares',
  //       email: 'wlscelulares@hotmail.com',
  //       password: await argon2.hash('wlscelulares'),
  //       number: 'nao encontrado',
  //     },
  //     {
  //       name: 'Marcio Jose Polizel',
  //       email: 'compras.mercadolivreaz@gmail.com',
  //       password: await argon2.hash('compras.mercadolivreaz'),
  //       number: 'nao encontrado',
  //     },
  //     {
  //       name: 'Neto Neves',
  //       email: 'netonevesgbi@gmail.com',
  //       password: await argon2.hash('netonevesgbi'),
  //       number: '77 9199-1276',
  //     },
  //     {
  //       name: 'matheus barbosa',
  //       email: 'matheus_medeiros97@hotmail.com',
  //       password: await argon2.hash('matheus_medeiros97'),
  //       number: '83 8774-0005',
  //     },
  //     {
  //       name: 'luana araujo',
  //       email: 'luana.donnaengenharia@gmail.com',
  //       password: await argon2.hash('luana.donnaengenharia'),
  //       number: 'nao encontrado',
  //     },
  //     {
  //       name: 'Henrique Alves Lib�rio',
  //       email: 'riqueliborio@gmail.com',
  //       password: await argon2.hash('riqueliborio'),
  //       number: 'nao encontrado',
  //     },
  //     {
  //       name: 'Gabriel Travaglia',
  //       email: 'gabriel.travaglia@gmail.com',
  //       password: await argon2.hash('gabriel.travaglia'),
  //       number: 'nao encontrado',
  //     },
  //     {
  //       name: 'Pedro Victor Melo Santana',
  //       email: 'pedrovms100@gmail.com',
  //       password: await argon2.hash('pedrovms100'),
  //       number: '87 9613-0619',
  //     },
  //     {
  //       name: 'Livia Lonetta',
  //       email: 'livialonetta@gmail.com',
  //       password: await argon2.hash('livialonetta'),
  //       number: '16 99243-4779',
  //     },
  //     {
  //       name: 'Adrian  Totti',
  //       email: 'tottiadrian8@gmail.com',
  //       password: await argon2.hash('tottiadrian8'),
  //       number: 'nao encontrado',
  //     },
  //     {
  //       name: 'Adriana Mara Dos Santos',
  //       email: 'rogeriokauan526@gmail.com',
  //       password: await argon2.hash('rogeriokauan526'),
  //       number: '15 99665-7434',
  //     },
  //     {
  //       name: 'PAULO ALBUQUERQUE',
  //       email: 'paulosmith842@gmail.com',
  //       password: await argon2.hash('paulosmith842'),
  //       number: '68 9605-7458',
  //     },
  //     {
  //       name: 'Mayton Ribeiro Machado',
  //       email: 'rkcompany.ti@gmail.com',
  //       password: await argon2.hash('rkcompany.ti'),
  //       number: '34 9211-8062',
  //     },
  //     {
  //       name: 'lea renata  ozorio casarin',
  //       email: 'learoc.pro@gmail.com',
  //       password: await argon2.hash('learoc.pro'),
  //       number: '14 99835-9538',
  //     },
  //     {
  //       name: 'Industria Led',
  //       email: 'leydianems10@gmail.com',
  //       password: await argon2.hash('leydianems10'),
  //       number: '11 98203-0164',
  //     },
  //     {
  //       name: 'Reis Rodrigues',
  //       email: 'suzyrodriguesmg@gmail.com',
  //       password: await argon2.hash('suzyrodriguesmg'),
  //       number: '37 9122-9877',
  //     },
  //     {
  //       name: 'hallyson.mkt',
  //       email: 'hallyson.mkt@gmail.com',
  //       password: await argon2.hash('hallyson.mkt'),
  //       number: 'nao encontrado',
  //     },
  //     {
  //       name: 'Rosilane Matias',
  //       email: 'matiasrosilane4@gmail.com',
  //       password: await argon2.hash('matiasrosilane4'),
  //       number: 'nao encontrado',
  //     },
  //     {
  //       name: 'Jos� Maria',
  //       email: 'zezinaero@outlook.com',
  //       password: await argon2.hash('zezinaero'),
  //       number: '37 9997-7870',
  //     },
  //     {
  //       name: 'Gustavo  Campos',
  //       email: 'gustavohieve@gmail.com',
  //       password: await argon2.hash('gustavohieve'),
  //       number: 'nao encontrado',
  //     },
  //     {
  //       name: 'Rosele Lenotti',
  //       email: 'roselelenotti@hotmail.com',
  //       password: await argon2.hash('roselelenotti'),
  //       number: 'nao encontrado',
  //     },
  //     {
  //       name: 'Gilmar Francisco de Souza Junior',
  //       email: 'gilmarsouzajunio2@gmail.com',
  //       password: await argon2.hash('gilmarsouzajunio2'),
  //       number: 'nao encontrado',
  //     },
  //     {
  //       name: 'Felipe Fabossi',
  //       email: 'fabotse@gmail.com',
  //       password: await argon2.hash('fabotse'),
  //       number: 'nao encontrado',
  //     },
  //     {
  //       name: 'Alexandre Rodrigues Nascimento',
  //       email: 'alexandrer95@hotmail.com',
  //       password: await argon2.hash('alexandrer95'),
  //       number: 'nao encontrado',
  //     },
  //     {
  //       name: 'Alessandro Brito',
  //       email: 'alessandrobritu16@gmail.com',
  //       password: await argon2.hash('alessandrobritu16'),
  //       number: 'nao encontrado',
  //     },
  //     {
  //       name: 'Eduardo Pedroso',
  //       email: 'pedrosotf@gmail.com',
  //       password: await argon2.hash('pedrosotf'),
  //       number: '27 99778-4501',
  //     },
  //     {
  //       name: 'LEDFUL M�dias',
  //       email: 'ledfulmidias@gmail.com',
  //       password: await argon2.hash('ledfulmidias'),
  //       number: 'nao encontrado',
  //     },
  //     {
  //       name: 'ShopFacul .-',
  //       email: 'shopfaculstore@gmail.com',
  //       password: await argon2.hash('shopfaculstore'),
  //       number: 'nao encontrado',
  //     },
  //     {
  //       name: 'Alexsander Rodrigues',
  //       email: 'alexsanderrodri12@gmail.com',
  //       password: await argon2.hash('alexsanderrodri12'),
  //       number: '27 99798-4063',
  //     },
  //     {
  //       name: 'GIOVANE SAMPAIO',
  //       email: 'giisampaiojr@gmail.com',
  //       password: await argon2.hash('giisampaiojr'),
  //       number: '65 9685-0043',
  //     },
  //     {
  //       name: 'Leonardo Figueir� Onnis',
  //       email: 'leoonnis@gmail.com',
  //       password: await argon2.hash('leoonnis'),
  //       number: '33 9912-9410',
  //     },
  //     {
  //       name: 'michael douglas',
  //       email: 'michaeldgmkt@gmail.com',
  //       password: await argon2.hash('michaeldgmkt'),
  //       number: '81 9669-6184',
  //     },
  //     {
  //       name: 'JOAO VITOR GUIMARAES SILVA',
  //       email: 'joaovictorcb8@gmail.com',
  //       password: await argon2.hash('joaovictorcb8'),
  //       number: '19 99113-1788',
  //     },
  //     {
  //       name: 'Carlo Valerio',
  //       email: 'sale@3csmartbusiness.com',
  //       password: await argon2.hash('sale'),
  //       number: 'nao encontrado',
  //     },
  //     {
  //       name: 'MIRLLA LIMA',
  //       email: 'lima.mirlla@gmail.com',
  //       password: await argon2.hash('lima.mirlla'),
  //       number: '92 8135-4613',
  //     },
  //     {
  //       name: 'wesley maratau� silva da costa',
  //       email: 'wesley9201@hotmail.com',
  //       password: await argon2.hash('wesley9201'),
  //       number: 'nao encontrado',
  //     },
  //     {
  //       name: 'Sandro Torezani da Fonseca',
  //       email: 'sandrotf@gmail.com',
  //       password: await argon2.hash('sandrotf'),
  //       number: 'nao encontrado',
  //     },
  //     {
  //       name: 'Marcos Vinicius Pedro Reis',
  //       email: 'reismarcosv@gmail.com',
  //       password: await argon2.hash('reismarcosv'),
  //       number: '48 9111-5560',
  //     },
  //     {
  //       name: 'Ana Carolina Rodrigues',
  //       email: 'carolrodriiguesoi@gmail.com',
  //       password: await argon2.hash('carolrodriiguesoi'),
  //       number: 'nao encontrado',
  //     },
  //     {
  //       name: 'Carla Regina Gama Souza',
  //       email: 'darffacil@gmail.com',
  //       password: await argon2.hash('darffacil'),
  //       number: 'nao encontrado',
  //     },
  //     {
  //       name: 'Renan Silva Brito',
  //       email: 'renansilvamd@gmail.com',
  //       password: await argon2.hash('renansilvamd'),
  //       number: 'nao encontrado',
  //     },
  //     {
  //       name: 'francisco deyfeson lima pereira',
  //       email: 'v6caroficial@gmail.com',
  //       password: await argon2.hash('v6caroficial'),
  //       number: 'nao encontrado',
  //     },
  //     {
  //       name: 'Kaua Pereira',
  //       email: 'kauapereira0657@gmail.com',
  //       password: await argon2.hash('kauapereira0657'),
  //       number: '35 9925-9237',
  //     },
  //     {
  //       name: 'donblionario',
  //       email: 'donblionario@gmail.com',
  //       password: await argon2.hash('donblionario'),
  //       number: 'nao encontrado',
  //     },
  //     {
  //       name: ' Igor Francisco Alves Motta',
  //       email: 'igorfamotta@gmail.com',
  //       password: await argon2.hash('igorfamotta'),
  //       number: '99 8511-5199',
  //     },
  //     {
  //       name: 'Jo�o Vitor Frutuoso Martins',
  //       email: 'joaolindo14@yahoo.com.br',
  //       password: await argon2.hash('joaolindo14'),
  //       number: '31 7118-8436',
  //     },
  //     {
  //       name: 'Israel Pereira da Silva Junior',
  //       email: 'israel94pro@gmail.com',
  //       password: await argon2.hash('israel94pro'),
  //       number: 'nao encontrado',
  //     },
  //     {
  //       name: 'Gustavo  Moreira grimm',
  //       email: 'gustavo24grimm@gmail.com',
  //       password: await argon2.hash('gustavo24grimm'),
  //       number: 'nao encontrado',
  //     },
  //     {
  //       name: 'Kazuki Fiorini',
  //       email: 'kazukihotmail@gmail.com',
  //       password: await argon2.hash('kazukihotmail'),
  //       number: '',
  //     },
  //     {
  //       name: 'brunoalc.direcional',
  //       email: 'brunoalc.direcional@gmail.com',
  //       password: await argon2.hash('brunoalc.direcional'),
  //       number: '',
  //     },
  //     {
  //       name: 'ALBERTO JUNIOR',
  //       email: 'alberto.nio@hotmail.com',
  //       password: await argon2.hash('alberto.nio'),
  //       number: '',
  //     },
  //     {
  //       name: 'Wesley Araujo',
  //       email: 'wesley_easy@outlook.com',
  //       password: await argon2.hash('wesley_easy'),
  //       number: '',
  //     },
  //     {
  //       name: 'Marcelo Oliveira Pontes',
  //       email: 'marcelooliveirar68@gmail.com',
  //       password: await argon2.hash('marcelooliveirar68'),
  //       number: '',
  //     },
  //     {
  //       name: 'samuelsampaiosant',
  //       email: 'samuelsampaiosant@gmail.com',
  //       password: await argon2.hash('samuelsampaiosant'),
  //       number: '',
  //     },
  //     {
  //       name: 'Silva Farkas',
  //       email: 'luiz_farkas@hotmail.com',
  //       password: await argon2.hash('luiz_farkas'),
  //       number: '',
  //     },
  //     {
  //       name: 'priscilaneves.0812',
  //       email: 'priscilaneves.0812@gmail.com',
  //       password: await argon2.hash('priscilaneves.0812'),
  //       number: '',
  //     },
  //     {
  //       name: 'Allan Teixeira',
  //       email: 'allanteixeira06@hotmail.com',
  //       password: await argon2.hash('allanteixeira06'),
  //       number: '',
  //     },
  //     {
  //       name: 'Jo�o Marco Brito',
  //       email: 'britojoaomarco@gmail.com',
  //       password: await argon2.hash('britojoaomarco'),
  //       number: '',
  //     },
  //     {
  //       name: 'Emerson Nogueira',
  //       email: 'emersonanogueira9@gmail.com',
  //       password: await argon2.hash('emersonanogueira9'),
  //       number: '',
  //     },
  //     {
  //       name: ' Maria marli da cunha dias Cunha dias',
  //       email: 'madameka222@gmail.com',
  //       password: await argon2.hash('madameka222'),
  //       number: '',
  //     },
  //     {
  //       name: 'mateus munhoz',
  //       email: 'mateuscmunhoz123@hotmail.com',
  //       password: await argon2.hash('mateuscmunhoz123'),
  //       number: '',
  //     },
  //     {
  //       name: 'julio  canan',
  //       email: 'juliocanan@hotmail.com',
  //       password: await argon2.hash('juliocanan'),
  //       number: '',
  //     },
  //     {
  //       name: 'Conceito PayPerUse e Servi�os .-',
  //       email: 'admskyshoes@gmail.com',
  //       password: await argon2.hash('admskyshoes'),
  //       number: '',
  //     },
  //     {
  //       name: 'Italo Santos Alves de Lima',
  //       email: 'italo.santos1020@hotmail.com',
  //       password: await argon2.hash('italo.santos1020'),
  //       number: '',
  //     },
  //     {
  //       name: ' Tech Descontos',
  //       email: 'fernandomsarruda@gmail.com',
  //       password: await argon2.hash('fernandomsarruda'),
  //       number: '',
  //     },
  //     {
  //       name: 'Victor Pedroso',
  //       email: 'victorpedroso150@yahoo.com.br',
  //       password: await argon2.hash('victorpedroso150'),
  //       number: '',
  //     },
  //     {
  //       name: 'contato',
  //       email: 'contato@lojaeasyclick.com',
  //       password: await argon2.hash('contato'),
  //       number: '',
  //     },
  //     {
  //       name: ' paulo henrique',
  //       email: 'pauloalvesadm@gmail.com',
  //       password: await argon2.hash('pauloalvesadm'),
  //       number: '',
  //     },
  //     {
  //       name: 'Daniel Macedo',
  //       email: 'daniel.macedom@gmail.com',
  //       password: await argon2.hash('daniel.macedom'),
  //       number: '',
  //     },
  //     {
  //       name: 'Caio Terenzi Cardoso',
  //       email: 'caioterenzic@gmail.com',
  //       password: await argon2.hash('caioterenzic'),
  //       number: '',
  //     },
  //     {
  //       name: 'Paulo Pavan',
  //       email: 'mmpaulopavan@gmail.com',
  //       password: await argon2.hash('mmpaulopavan'),
  //       number: '',
  //     },
  //     {
  //       name: 'LUCIANA APARECIDA PINHEIRO IUNES',
  //       email: 'luciana.iunes09@gmail.com',
  //       password: await argon2.hash('luciana.iunes09'),
  //       number: '',
  //     },
  //     {
  //       name: ' LUCAS DAMIANI D AVILA 12563461 LUCAS DAMIANI D AVILA 12563461',
  //       email: 'novabusinessmarketing@gmail.com',
  //       password: await argon2.hash('novabusinessmarketing'),
  //       number: '',
  //     },
  //     {
  //       name: 'kauenog16',
  //       email: 'kauenog16@gmail.com',
  //       password: await argon2.hash('kauenog16'),
  //       number: '',
  //     },
  //     {
  //       name: 'Marcio  Luzardo Oliveira',
  //       email: 'marcio_luzardo@hotmail.com',
  //       password: await argon2.hash('marcio_luzardo'),
  //       number: '',
  //     },
  //     {
  //       name: 'Henrique Perinazzo',
  //       email: 'hperinazzo@hotmail.com',
  //       password: await argon2.hash('hperinazzo'),
  //       number: '',
  //     },
  //     {
  //       name: 'matheus iago',
  //       email: 'matheuspeba62@gmail.com',
  //       password: await argon2.hash('matheuspeba62'),
  //       number: '',
  //     },
  //     {
  //       name: ' Lucas Maciel Pereira',
  //       email: 'ulucasmp1@gmail.com',
  //       password: await argon2.hash('ulucasmp1'),
  //       number: '',
  //     },
  //     {
  //       name: 'Joao Vitor Milani',
  //       email: 'joao.chocante@gmail.com',
  //       password: await argon2.hash('joao.chocante'),
  //       number: '',
  //     },
  //     {
  //       name: ' RICARDO RRIBEIRO',
  //       email: 'ricardoribeiro10@icloud.com',
  //       password: await argon2.hash('ricardoribeiro10'),
  //       number: '',
  //     },
  //     {
  //       name: 'FERNANDO RUSSO JUNIOR 22332482 FERNANDO RUSSO JUNIOR 22332482',
  //       email: 'doersads@gmail.com',
  //       password: await argon2.hash('doersads'),
  //       number: '',
  //     },
  //     {
  //       name: 'Olavo Siqueira Vieira',
  //       email: 'olavovieira@outlook.com',
  //       password: await argon2.hash('olavovieira'),
  //       number: '',
  //     },
  //     {
  //       name: ' Tiago de Souza Santos',
  //       email: 'drtiago21@gmail.com',
  //       password: await argon2.hash('drtiago21'),
  //       number: '',
  //     },
  //     {
  //       name: 'gabriel silva morais',
  //       email: 'gabrielmorais.gm23@gmail.com',
  //       password: await argon2.hash('gabrielmorais.gm23'),
  //       number: '',
  //     },
  //     {
  //       name: 'Caio Fantinato',
  //       email: 'caio.m.fantinato@gmail.com',
  //       password: await argon2.hash('caio.m.fantinato'),
  //       number: '',
  //     },
  //     {
  //       name: 'Emanuel Lima da Silva',
  //       email: 'umavoltapelobrasil@gmail.com',
  //       password: await argon2.hash('umavoltapelobrasil'),
  //       number: '',
  //     },
  //     {
  //       name: 'Lua Guedes',
  //       email: 'lj.jobim@gmail.com',
  //       password: await argon2.hash('lj.jobim'),
  //       number: '',
  //     },
  //     {
  //       name: 'Fez Sucesso Neg�cios Digitais LTDA',
  //       email: 'ossianjrlopes@gmail.com',
  //       password: await argon2.hash('ossianjrlopes'),
  //       number: '',
  //     },
  //     {
  //       name: 'Bruna Barros',
  //       email: 'brunamarigny@gmail.com',
  //       password: await argon2.hash('brunamarigny'),
  //       number: '',
  //     },
  //     {
  //       name: 'Vinicius Barbe Ariosi',
  //       email: 'vicoshalom@gmail.com',
  //       password: await argon2.hash('vicoshalom'),
  //       number: '',
  //     },
  //     {
  //       name: ' Gustavo Ribeiro',
  //       email: 'gustavoconc01@gmail.com',
  //       password: await argon2.hash('gustavoconc01'),
  //       number: '',
  //     },
  //     {
  //       name: 'Hergamenes Souza',
  //       email: 'hergamenescsouza@gmail.com',
  //       password: await argon2.hash('hergamenescsouza'),
  //       number: '',
  //     },
  //     {
  //       name: 'Loja Beleza e Charme',
  //       email: 'jwfaststore@gmail.com',
  //       password: await argon2.hash('jwfaststore'),
  //       number: '',
  //     },
  //     {
  //       name: ' Mauricio Silva',
  //       email: 'megaliderimportados@gmail.com',
  //       password: await argon2.hash('megaliderimportados'),
  //       number: '',
  //     },
  //     {
  //       name: 'Jefferson Justino',
  //       email: 'moleke.play10@gmail.com',
  //       password: await argon2.hash('moleke.play10'),
  //       number: '',
  //     },
  //     {
  //       name: ' Valter de Oliveira Wincheski',
  //       email: 'renangoncalvess00a@gmail.com',
  //       password: await argon2.hash('renangoncalvess00a'),
  //       number: '',
  //     },
  //     {
  //       name: ' bdahfceg fabdgche',
  //       email: 'jeancustodiointl@gmail.com',
  //       password: await argon2.hash('jeancustodiointl'),
  //       number: '',
  //     },
  //     {
  //       name: 'Diemis Ricardo de Lima',
  //       email: 'diemisrl@gmail.com',
  //       password: await argon2.hash('diemisrl'),
  //       number: '',
  //     },
  //     {
  //       name: 'Lidice Magdalle Silva',
  //       email: 'lidicemagdalle@gmail.com',
  //       password: await argon2.hash('lidicemagdalle'),
  //       number: '',
  //     },
  //     {
  //       name: 'Wendy Bueno',
  //       email: 'wendyfbueno@yahoo.com.br',
  //       password: await argon2.hash('wendyfbueno'),
  //       number: '',
  //     },
  //     {
  //       name: 'flowplaypix',
  //       email: 'flowplaypix@gmail.com',
  //       password: await argon2.hash('flowplaypix'),
  //       number: '',
  //     },
  //     {
  //       name: 'Lucas Fernandes Fernandes',
  //       email: 'fernandeslucas2312@hotmail.com',
  //       password: await argon2.hash('fernandeslucas2312'),
  //       number: '',
  //     },
  //     {
  //       name: 'Wellison Alves Ferreira',
  //       email: 'wellison.alves@uobaimports.com.br',
  //       password: await argon2.hash('wellison.alves'),
  //       number: '',
  //     },
  //     {
  //       name: 'Felipe Piva Martins Vieira',
  //       email: 'felipepivamv@gmail.com',
  //       password: await argon2.hash('felipepivamv'),
  //       number: '',
  //     },
  //     {
  //       name: ' Victor Monteiro',
  //       email: 'victoralves.monteiro@outlook.com',
  //       password: await argon2.hash('victoralves.monteiro'),
  //       number: '',
  //     },
  //     {
  //       name: 'Luiz Henrique De Lima Sousa',
  //       email: 'luizhenriquedelima10@gmail.com',
  //       password: await argon2.hash('luizhenriquedelima10'),
  //       number: '',
  //     },
  //     {
  //       name: 'jonas nunes de souza',
  //       email: 'jobvb-@hotmail.com',
  //       password: await argon2.hash('jobvb-'),
  //       number: '',
  //     },
  //     {
  //       name: 'caio santos',
  //       email: 'caioszott433@gmail.com',
  //       password: await argon2.hash('caioszott433'),
  //       number: '',
  //     },
  //     {
  //       name: ' Gilberto Fernandes',
  //       email: 'gilbertofernandesrn@gmail.com',
  //       password: await argon2.hash('gilbertofernandesrn'),
  //       number: '',
  //     },
  //     {
  //       name: ' Acervo Online',
  //       email: 'plataforma.acervodigital@gmail.com',
  //       password: await argon2.hash('plataforma.acervodigital'),
  //       number: '',
  //     },
  //     {
  //       name: 'Carlos Santos',
  //       email: 'carlosaugustonbs@hotmail.com',
  //       password: await argon2.hash('carlosaugustonbs'),
  //       number: '',
  //     },
  //     {
  //       name: 'Lucas Simoes Santiago de Carvalho',
  //       email: 'agoraeseuwebloja@gmail.com',
  //       password: await argon2.hash('agoraeseuwebloja'),
  //       number: '',
  //     },
  //     {
  //       name: 'PABLO JUNIO',
  //       email: 'sosrisadasagora@gmail.com',
  //       password: await argon2.hash('sosrisadasagora'),
  //       number: '',
  //     },
  //     {
  //       name: ' BMBraga Servi�os em Internet L .-',
  //       email: 'breno@bmbraga.com',
  //       password: await argon2.hash('breno'),
  //       number: '',
  //     },
  //     {
  //       name: 'Newerton da Silveira Ferreira da Silveira Ferreira',
  //       email: 'newertonsf@gmail.com',
  //       password: await argon2.hash('newertonsf'),
  //       number: '',
  //     },
  //     {
  //       name: 'Matheus Moura Diniz Moura Diniz',
  //       email: 'matheusmdiniz@hotmail.com',
  //       password: await argon2.hash('matheusmdiniz'),
  //       number: '',
  //     },
  //     {
  //       name: ' Elaine Ribeiro',
  //       email: 'jety.gum@gmail.com',
  //       password: await argon2.hash('jety.gum'),
  //       number: '',
  //     },
  //     {
  //       name: 'Matheus Chaves',
  //       email: 'amschavess@gmail.com',
  //       password: await argon2.hash('amschavess'),
  //       number: '',
  //     },
  //     {
  //       name: 'wandeson silva batista',
  //       email: 'wandesoncti@gmail.com',
  //       password: await argon2.hash('wandesoncti'),
  //       number: '',
  //     },
  //     {
  //       name: 'Lucas Bosa',
  //       email: 'lucasvbosa@hotmail.com',
  //       password: await argon2.hash('lucasvbosa'),
  //       number: '',
  //     },
  //     {
  //       name: 'davidribeirostone',
  //       email: 'davidribeirostone@gmail.com',
  //       password: await argon2.hash('davidribeirostone'),
  //       number: '',
  //     },
  //     {
  //       name: ' Marcio Ramo',
  //       email: 'marcioramo@hotmail.com.br',
  //       password: await argon2.hash('marcioramo'),
  //       number: '',
  //     },
  //     {
  //       name: 'Daniel Sarro',
  //       email: 'danielbsarro@gmail.com',
  //       password: await argon2.hash('danielbsarro'),
  //       number: '',
  //     },
  //     {
  //       name: 'agnesveigaa97',
  //       email: 'agnesveigaa97@gmail.com',
  //       password: await argon2.hash('agnesveigaa97'),
  //       number: '',
  //     },
  //     {
  //       name: 'Ederson Souza',
  //       email: 'efglsouza04@hotmail.com',
  //       password: await argon2.hash('efglsouza04'),
  //       number: '',
  //     },
  //     {
  //       name: 'Franci�lio Gon�alves',
  //       email: 'elio.rwx@gmail.com',
  //       password: await argon2.hash('elio.rwx'),
  //       number: '',
  //     },
  //     {
  //       name: 'Raphael Muniz',
  //       email: 'raphaelmuniz.corretor@gmail.com',
  //       password: await argon2.hash('raphaelmuniz.corretor'),
  //       number: '',
  //     },
  //     {
  //       name: 'matheus santiago',
  //       email: 'mr.santiagofc@gmail.com',
  //       password: await argon2.hash('mr.santiagofc'),
  //       number: '',
  //     },
  //     {
  //       name: 'Kaue Costa',
  //       email: 'kauerc@icloud.com',
  //       password: await argon2.hash('kauerc'),
  //       number: '',
  //     },
  //     {
  //       name: 'bvmidialtda',
  //       email: 'bvmidialtda@gmail.com',
  //       password: await argon2.hash('bvmidialtda'),
  //       number: '',
  //     },
  //     {
  //       name: 'joao vitor macena',
  //       email: 'joaomacena07@hotmail.com',
  //       password: await argon2.hash('joaomacena07'),
  //       number: '',
  //     },
  //     {
  //       name: 'liezzo nas',
  //       email: 'liezzoml@gmail.com',
  //       password: await argon2.hash('liezzoml'),
  //       number: '',
  //     },
  //     {
  //       name: 'Marcelo da Silva',
  //       email: 'contato@marcelodsilva.com.br',
  //       password: await argon2.hash('contato'),
  //       number: '',
  //     },
  //     {
  //       name: 'Kayna Costa Aguiar',
  //       email: 'kayna.costa12@gmail.com',
  //       password: await argon2.hash('kayna.costa12'),
  //       number: '',
  //     },
  //     {
  //       name: 'Gabriel Kaique',
  //       email: 'gabrielkaique444@gmail.com',
  //       password: await argon2.hash('gabrielkaique444'),
  //       number: '',
  //     },
  //     {
  //       name: 'vinicius.negociosonlinedigital',
  //       email: 'vinicius.negociosonlinedigital@gmail.com',
  //       password: await argon2.hash('vinicius.negociosonlinedigital'),
  //       number: '',
  //     },
  //     {
  //       name: 'Carlos Alberto Pereira',
  //       email: 'drcarlosap@hotmail.com',
  //       password: await argon2.hash('drcarlosap'),
  //       number: '',
  //     },
  //     {
  //       name: 'Douglas Frana',
  //       email: 'dg.growhacking@gmail.com',
  //       password: await argon2.hash('dg.growhacking'),
  //       number: '',
  //     },
  //     {
  //       name: ' Diego de Oliveira Martins dos Santos',
  //       email: 'diegoms2708@gmail.com',
  //       password: await argon2.hash('diegoms2708'),
  //       number: '',
  //     },
  //     {
  //       name: 'otavio augusto',
  //       email: 'otavam@hotmail.com',
  //       password: await argon2.hash('otavam'),
  //       number: '',
  //     },
  //     {
  //       name: 'Ricardo Nascimento Trindade',
  //       email: 'kadao50@outlook.com',
  //       password: await argon2.hash('kadao50'),
  //       number: '',
  //     },
  //     {
  //       name: ' Eduardo Souza',
  //       email: 'eduardorsouza14@gmail.com',
  //       password: await argon2.hash('eduardorsouza14'),
  //       number: '',
  //     },
  //     {
  //       name: ' Mateus Neto',
  //       email: 'mrneto@tucashop.com',
  //       password: await argon2.hash('mrneto'),
  //       number: '',
  //     },
  //     {
  //       name: ' Lucas Rezende',
  //       email: 'lucasrezendedearaujo@gmail.com',
  //       password: await argon2.hash('lucasrezendedearaujo'),
  //       number: '',
  //     },
  //     {
  //       name: ' Kaike Mendes Chagas',
  //       email: 'kaikemch361@gmail.com',
  //       password: await argon2.hash('kaikemch361'),
  //       number: '',
  //     },
  //     {
  //       name: 'Tiago Ferreira Nagao',
  //       email: 'startzeadm@gmail.com',
  //       password: await argon2.hash('startzeadm'),
  //       number: '',
  //     },
  //     {
  //       name: 'Paulo Profes',
  //       email: 'paulorafaelprofes@gmail.com',
  //       password: await argon2.hash('paulorafaelprofes'),
  //       number: '',
  //     },
  //     {
  //       name: 'henriquecr006',
  //       email: 'henriquecr006@gmail.com',
  //       password: await argon2.hash('henriquecr006'),
  //       number: '',
  //     },
  //     {
  //       name: ' Bruno Cesar Guimaraes de Faria',
  //       email: 'suporte@wolfcarteiras.com',
  //       password: await argon2.hash('suporte'),
  //       number: '',
  //     },
  //     {
  //       name: 'Arthur Delgado',
  //       email: 'arthurgamesdf@hotmail.com',
  //       password: await argon2.hash('arthurgamesdf'),
  //       number: '',
  //     },
  //     {
  //       name: 'Thiago Eddine',
  //       email: 'thiago@socialcliques.com.br',
  //       password: await argon2.hash('thiago'),
  //       number: '',
  //     },
  //     {
  //       name: ' Isaac Lovisi',
  //       email: 'isaaclovisi@gmail.com',
  //       password: await argon2.hash('isaaclovisi'),
  //       number: '',
  //     },
  //     {
  //       name: 'bruno mello',
  //       email: 'brunomello303@gmail.com',
  //       password: await argon2.hash('brunomello303'),
  //       number: '',
  //     },
  //     {
  //       name: 'Kristian Rafael Rodrigues Gualberto',
  //       email: 'kristiangualberto@gmail.com',
  //       password: await argon2.hash('kristiangualberto'),
  //       number: '',
  //     },
  //     {
  //       name: 'wallzyk',
  //       email: 'wallzyk@gmail.com',
  //       password: await argon2.hash('wallzyk'),
  //       number: '',
  //     },
  //     {
  //       name: 'jhonnata de araujo',
  //       email: 'jhonaraujo032@gmail.com',
  //       password: await argon2.hash('jhonaraujo032'),
  //       number: '',
  //     },
  //     {
  //       name: 'Gustavo Barbosa',
  //       email: 'suporte@ofertasnacaixa.com.br',
  //       password: await argon2.hash('suporte'),
  //       number: '',
  //     },
  //     {
  //       name: 'Lucas Lopes de Barros Batista',
  //       email: 'llopesbb.94@gmail.com',
  //       password: await argon2.hash('llopesbb.94'),
  //       number: '',
  //     },
  //     {
  //       name: 'Eduardo Felipe Siewert',
  //       email: 'eduardo_siewert@hotmail.com',
  //       password: await argon2.hash('eduardo_siewert'),
  //       number: '',
  //     },
  //     {
  //       name: 'Antony Gabriel',
  //       email: 'antonymec123@outlook.com',
  //       password: await argon2.hash('antonymec123'),
  //       number: '',
  //     },
  //     {
  //       name: 'Silveira Silveira',
  //       email: 'vittoriosilveira@gmail.com',
  //       password: await argon2.hash('vittoriosilveira'),
  //       number: '',
  //     },
  //     {
  //       name: 'CONNECT LIBERTY LB LTDA CONNECT LIBERTY LB LTDA',
  //       email: 'braslibertybackup@gmail.com',
  //       password: await argon2.hash('braslibertybackup'),
  //       number: '',
  //     },
  //     {
  //       name: 'Adriel Azeredo',
  //       email: 'azeredoribeiro.adriel@gmail.com',
  //       password: await argon2.hash('azeredoribeiro.adriel'),
  //       number: '',
  //     },
  //     {
  //       name: 'Loja Mix do Lar',
  //       email: 'randersonaraujo@gmail.com',
  //       password: await argon2.hash('randersonaraujo'),
  //       number: '',
  //     },
  //     {
  //       name: 'LuKs H4RD',
  //       email: 'lucassa_98@hotmail.com',
  //       password: await argon2.hash('lucassa_98'),
  //       number: '',
  //     },
  //     {
  //       name: 'Marlon Ruiz',
  //       email: 'marlonsruiz@gmail.com',
  //       password: await argon2.hash('marlonsruiz'),
  //       number: '',
  //     },
  //     {
  //       name: 'Brenno Soares Rodrigues',
  //       email: 'brennosrsr@gmail.com',
  //       password: await argon2.hash('brennosrsr'),
  //       number: '',
  //     },
  //     {
  //       name: 'Luciana Dias de Andrade',
  //       email: 'lu.dias.andrade092@gmail.com',
  //       password: await argon2.hash('lu.dias.andrade092'),
  //       number: '',
  //     },
  //     {
  //       name: ' Roberto Inocencio',
  //       email: 'mateusoliveira110085@gmail.com',
  //       password: await argon2.hash('mateusoliveira110085'),
  //       number: '',
  //     },
  //     {
  //       name: 'Thiago Rossi Quintino Mendon�a',
  //       email: 'thiago922137@gmail.com',
  //       password: await argon2.hash('thiago922137'),
  //       number: '',
  //     },
  //     {
  //       name: 'Isaac Levi Battiston',
  //       email: 'battistonisaac@gmail.com',
  //       password: await argon2.hash('battistonisaac'),
  //       number: '',
  //     },
  //     {
  //       name: 'WFC MARKETING DIGITAL LTDA WFC MARKETING DIGITAL LTDA',
  //       email: 'apfcbol@gmail.com',
  //       password: await argon2.hash('apfcbol'),
  //       number: '',
  //     },
  //     {
  //       name: ' GUSTAVO HENRIQUE SANTOS DE SOU GUSTAVO HENRIQUE SANTOS DE SOU',
  //       email: 'gestor.gustavo@hotmail.com',
  //       password: await argon2.hash('gestor.gustavo'),
  //       number: '',
  //     },
  //     {
  //       name: 'Luis Henrique silva',
  //       email: 'pontodigitallan@hotmail.com',
  //       password: await argon2.hash('pontodigitallan'),
  //       number: '',
  //     },
  //     {
  //       name: 'APARECIDA CAROLINE REIS DO NAS APARECIDA CAROLINE REIS DO NAS',
  //       email: 'atendimento@lardocelarpets.com',
  //       password: await argon2.hash('atendimento'),
  //       number: '',
  //     },
  //     {
  //       name: 'Lincoln Souza Viana',
  //       email: 'lincolnsouza2008@hotmail.com',
  //       password: await argon2.hash('lincolnsouza2008'),
  //       number: '',
  //     },
  //     {
  //       name: 'LARISSA OLIVEIRA',
  //       email: 'laribrazz14@gmail.com',
  //       password: await argon2.hash('laribrazz14'),
  //       number: '',
  //     },
  //     {
  //       name: 'Lucas huback',
  //       email: 'lhubackk@gmail.com',
  //       password: await argon2.hash('lhubackk'),
  //       number: '',
  //     },
  //     {
  //       name: 'Quatro Por Dia',
  //       email: '4pordiashop@gmail.com',
  //       password: await argon2.hash('4pordiashop'),
  //       number: '',
  //     },
  //     {
  //       name: ' Bruna Alves Dos Santos',
  //       email: 'ba256352@gmail.com',
  //       password: await argon2.hash('ba256352'),
  //       number: '',
  //     },
  //     {
  //       name: 'Gustavo Andrigo',
  //       email: 'prof.gustavo.andrigo@gmail.com',
  //       password: await argon2.hash('prof.gustavo.andrigo'),
  //       number: '',
  //     },
  //     {
  //       name: 'atoniojnegocios',
  //       email: 'atoniojnegocios@hotmail.com',
  //       password: await argon2.hash('atoniojnegocios'),
  //       number: '',
  //     },
  //     {
  //       name: ' GABRIELA SARTORI',
  //       email: 'gabi.sartori@gmail.com',
  //       password: await argon2.hash('gabi.sartori'),
  //       number: '',
  //     },
  //     {
  //       name: 'Matheus Oliveira',
  //       email: 'matheusoliveira.m13@gmail.com',
  //       password: await argon2.hash('matheusoliveira.m13'),
  //       number: '',
  //     },
  //     {
  //       name: 'Alex Sales Moreira Pinto',
  //       email: 'contato.alexsales@gmail.com',
  //       password: await argon2.hash('contato.alexsales'),
  //       number: '',
  //     },
  //     {
  //       name: ' manoel neto',
  //       email: 'm.andrade0096@gmail.com',
  //       password: await argon2.hash('m.andrade0096'),
  //       number: '',
  //     },
  //     {
  //       name: ' sabrinavieira1',
  //       email: 'sabrina_vieira1@hotmail.com',
  //       password: await argon2.hash('sabrina_vieira1'),
  //       number: '',
  //     },
  //     {
  //       name: 'Leandro Pinheiro',
  //       email: 'leocsb@yahoo.com.br',
  //       password: await argon2.hash('leocsb'),
  //       number: '',
  //     },
  //     {
  //       name: 'contato',
  //       email: 'contato@geovanamurata.com',
  //       password: await argon2.hash('contato'),
  //       number: '',
  //     },
  //     {
  //       name: ' Marcelo Braz Santos de Oliveira',
  //       email: 'jmbrazzco@gmail.com',
  //       password: await argon2.hash('jmbrazzco'),
  //       number: '',
  //     },
  //     {
  //       name: 'flavio alves',
  //       email: 'flavioalves_rs@hotmail.com',
  //       password: await argon2.hash('flavioalves_rs'),
  //       number: '',
  //     },
  //     {
  //       name: 'Jefferson Morales',
  //       email: 'contatojm@hotmail.com',
  //       password: await argon2.hash('contatojm'),
  //       number: '',
  //     },
  //     {
  //       name: 'Erick Amoedo',
  //       email: 'gomake@outlook.com',
  //       password: await argon2.hash('gomake'),
  //       number: '',
  //     },
  //     {
  //       name: 'Creativity Loja',
  //       email: 'loja.creativity1@gmail.com',
  //       password: await argon2.hash('loja.creativity1'),
  //       number: '',
  //     },
  //     {
  //       name: 'Matheus Filipe',
  //       email: 'matheusfilipe56@hotmail.com',
  //       password: await argon2.hash('matheusfilipe56'),
  //       number: '',
  //     },
  //     {
  //       name: 'Lisandra Bergoli Pasqualetto Fank',
  //       email: 'lisandrabpf@gmail.com',
  //       password: await argon2.hash('lisandrabpf'),
  //       number: '',
  //     },
  //     {
  //       name: 'Frank Costa',
  //       email: 'junior.hyller@gmail.com',
  //       password: await argon2.hash('junior.hyller'),
  //       number: '',
  //     },
  //     {
  //       name: 'Francisco Jose da Silva Junior',
  //       email: 'franzjotajr@gmail.com',
  //       password: await argon2.hash('franzjotajr'),
  //       number: '',
  //     },
  //     {
  //       name: 'Claudia Orlandin',
  //       email: 'orlandingabriel10@gmail.com',
  //       password: await argon2.hash('orlandingabriel10'),
  //       number: '',
  //     },
  //     {
  //       name: 'Matheus Willian Ferreira de Oliveira',
  //       email: 'matheuswillian.mkt@gmail.com',
  //       password: await argon2.hash('matheuswillian.mkt'),
  //       number: '',
  //     },
  //     {
  //       name: 'Rodrigo Silva',
  //       email: 'rodanac@gmail.com',
  //       password: await argon2.hash('rodanac'),
  //       number: '',
  //     },
  //     {
  //       name: 'Ricardo rocha',
  //       email: 'hairiris@hotmail.com',
  //       password: await argon2.hash('hairiris'),
  //       number: '',
  //     },
  //     {
  //       name: 'APOLO DA SILVA BARBOSA',
  //       email: 'apolobarbosa137@gmail.com',
  //       password: await argon2.hash('apolobarbosa137'),
  //       number: '',
  //     },
  //     {
  //       name: 'davisalesssss32',
  //       email: 'davisalesssss32@gmail.com',
  //       password: await argon2.hash('davisalesssss32'),
  //       number: '',
  //     },
  //     {
  //       name: 'Weslley Oliveira Ribeiro',
  //       email: 'weslleyduda82@gmail.com',
  //       password: await argon2.hash('weslleyduda82'),
  //       number: '',
  //     },
  //     {
  //       name: 'LUCAS CORREA GOMES DOS ANJOS',
  //       email: 'lucascorrea.business@gmail.com',
  //       password: await argon2.hash('lucascorrea.business'),
  //       number: '',
  //     },
  //     {
  //       name: 'Rafael Pinto',
  //       email: 'rafaelgomesmp@yahoo.com.br',
  //       password: await argon2.hash('rafaelgomesmp'),
  //       number: '',
  //     },
  //     {
  //       name: ' Fabio Santos Felipe Morais',
  //       email: 'fabiomorais.web@gmail.com',
  //       password: await argon2.hash('fabiomorais.web'),
  //       number: '',
  //     },
  //     {
  //       name: 'Thiago RamosOliveira',
  //       email: 'thiagosites654@gmail.com',
  //       password: await argon2.hash('thiagosites654'),
  //       number: '',
  //     },
  //     {
  //       name: 'Daniel Viola Costa',
  //       email: 'daniel.violacosta@gmail.com',
  //       password: await argon2.hash('daniel.violacosta'),
  //       number: '',
  //     },
  //     {
  //       name: 'Douglas Santos',
  //       email: 'douglas_santos99@icloud.com',
  //       password: await argon2.hash('douglas_santos99'),
  //       number: '',
  //     },
  //     {
  //       name: 'G S DE CASTRO MARKETING DIGITA G S DE CASTRO MARKETING DIGITA',
  //       email: 'sevenbrasil77@gmail.com',
  //       password: await argon2.hash('sevenbrasil77'),
  //       number: '',
  //     },
  //     {
  //       name: 'Cap. Vendedor',
  //       email: 'iannunes0100@gmail.com',
  //       password: await argon2.hash('iannunes0100'),
  //       number: '',
  //     },
  //     {
  //       name: 'Grazi Aquino',
  //       email: 'graziaquinoml@gmail.com',
  //       password: await argon2.hash('graziaquinoml'),
  //       number: '',
  //     },
  //     {
  //       name: 'isadorabaldon1001',
  //       email: 'isadorabaldon1001@gmail.com',
  //       password: await argon2.hash('isadorabaldon1001'),
  //       number: '',
  //     },
  //     {
  //       name: 'giovaneoba',
  //       email: 'giovaneoba@gmail.com',
  //       password: await argon2.hash('giovaneoba'),
  //       number: '',
  //     },
  //     {
  //       name: 'nikolas nakamura',
  //       email: 'n4nike@hotmail.com',
  //       password: await argon2.hash('n4nike'),
  //       number: '',
  //     },
  //     {
  //       name: 'Victor Paix�o',
  //       email: 'victor.pc.live@gmail.com',
  //       password: await argon2.hash('victor.pc.live'),
  //       number: '',
  //     },
  //     {
  //       name: 'BERNARDO DA SILVA LENARDUZZI BERNARDO DA SILVA LENARDUZZI',
  //       email: 'lenarduzzi.imports@gmail.com',
  //       password: await argon2.hash('lenarduzzi.imports'),
  //       number: '',
  //     },
  //     {
  //       name: 'Kauan mtk',
  //       email: 'km160073@gmail.com',
  //       password: await argon2.hash('km160073'),
  //       number: '',
  //     },
  //     {
  //       name: ' admin',
  //       email: 'admin@leticiafelisberto.com',
  //       password: await argon2.hash('admin'),
  //       number: '',
  //     },
  //     {
  //       name: 'Salatiel Silas Santos',
  //       email: 'salatiel20168@gmail.com',
  //       password: await argon2.hash('salatiel20168'),
  //       number: '',
  //     },
  //     {
  //       name: 'Pedro Diniz',
  //       email: 'pedrodiniz210@gmail.com',
  //       password: await argon2.hash('pedrodiniz210'),
  //       number: '',
  //     },
  //     {
  //       name: 'Marcelo Santana',
  //       email: 'celossantana@gmail.com',
  //       password: await argon2.hash('celossantana'),
  //       number: '',
  //     },
  //     {
  //       name: 'Danyel Schumacher',
  //       email: 'danyschuma@gmail.com',
  //       password: await argon2.hash('danyschuma'),
  //       number: '',
  //     },
  //     {
  //       name: 'Victor Hugo Falco Hurtado Rodriguez',
  //       email: 'vhfalco@gmail.com',
  //       password: await argon2.hash('vhfalco'),
  //       number: '',
  //     },
  //     {
  //       name: 'Multi Vitrine',
  //       email: 'contatomvitrine@gmail.com',
  //       password: await argon2.hash('contatomvitrine'),
  //       number: '',
  //     },
  //     {
  //       name: 'Luis Canales',
  //       email: 'luiscanales13@live.com',
  //       password: await argon2.hash('luiscanales13'),
  //       number: '',
  //     },
  //     {
  //       name: 'jw',
  //       email: 'jw@efeito.digital',
  //       password: await argon2.hash('jw'),
  //       number: '',
  //     },
  //     {
  //       name: ' andersonti2016',
  //       email: 'anderson.ti2016@gmail.com',
  //       password: await argon2.hash('anderson.ti2016'),
  //       number: '',
  //     },
  //     {
  //       name: 'LUAN P DE OLIVEIRA DE OLIVEIRA',
  //       email: 'luanoliver1310@gmail.com',
  //       password: await argon2.hash('luanoliver1310'),
  //       number: '',
  //     },
  //     {
  //       name: 'alan.clique.simples',
  //       email: 'alan.clique.simples@gmail.com',
  //       password: await argon2.hash('alan.clique.simples'),
  //       number: '',
  //     },
  //     {
  //       name: 'Marcus Vinicius de Moraes',
  //       email: 'marcusvmoraes86@gmail.com',
  //       password: await argon2.hash('marcusvmoraes86'),
  //       number: '',
  //     },
  //     {
  //       name: 'Raveny Shop',
  //       email: 'sistemalives1@hotmail.com',
  //       password: await argon2.hash('sistemalives1'),
  //       number: '',
  //     },
  //     {
  //       name: 'Gabriel Rodrigues',
  //       email: 'gabbrielrodrigues@outlook.com.br',
  //       password: await argon2.hash('gabbrielrodrigues'),
  //       number: '',
  //     },
  //     {
  //       name: 'Geraldo Dalm�nico Junior',
  //       email: 'g.dalmonico@gmail.com',
  //       password: await argon2.hash('g.dalmonico'),
  //       number: '',
  //     },
  //     {
  //       name: ' emagrecendocomsaude238',
  //       email: 'emagrecendocomsaude238@gmail.com',
  //       password: await argon2.hash('emagrecendocomsaude238'),
  //       number: '',
  //     },
  //     {
  //       name: 'Midas Team',
  //       email: 'contato.fabriciofernandes@gmail.com',
  //       password: await argon2.hash('contato.fabriciofernandes'),
  //       number: '',
  //     },
  //     {
  //       name: 'ferramentas',
  //       email: 'ferramentas@1andar.com.br',
  //       password: await argon2.hash('ferramentas'),
  //       number: '',
  //     },
  //     {
  //       name: ' soniarsedrez',
  //       email: 'soniarsedrez@hotmail.com',
  //       password: await argon2.hash('soniarsedrez'),
  //       number: '',
  //     },
  //     {
  //       name: ' Igor Koji',
  //       email: 'igor.koji@gmail.com',
  //       password: await argon2.hash('igor.koji'),
  //       number: '',
  //     },
  //     {
  //       name: 'Isabella Camatta',
  //       email: 'isabellacamatta@gmail.com',
  //       password: await argon2.hash('isabellacamatta'),
  //       number: '',
  //     },
  //     {
  //       name: 'Lucas de Carli Oliveira',
  //       email: 'lojaopcaomais@gmail.com',
  //       password: await argon2.hash('lojaopcaomais'),
  //       number: '',
  //     },
  //     {
  //       name: 'luziane souza da silva',
  //       email: 'lsilvarepresentacoes@gmail.com',
  //       password: await argon2.hash('lsilvarepresentacoes'),
  //       number: '',
  //     },
  //     {
  //       name: 'Edson Felinto',
  //       email: 'edson.felinto@msn.com',
  //       password: await argon2.hash('edson.felinto'),
  //       number: '',
  //     },
  //     {
  //       name: 'Matheus Dorneles Wessling',
  //       email: 'myshowgamer82@gmail.com',
  //       password: await argon2.hash('myshowgamer82'),
  //       number: '',
  //     },
  //     {
  //       name: 'JohnatanSobreira johnatansobreira',
  //       email: 'johnatansobreira@gmail.com',
  //       password: await argon2.hash('johnatansobreira'),
  //       number: '',
  //     },
  //     {
  //       name: ' Fernando Couto Cavichiolli Junior',
  //       email: 'ncavichiolli@gmail.com',
  //       password: await argon2.hash('ncavichiolli'),
  //       number: '',
  //     },
  //     {
  //       name: 'HENRIQUE Rodrigues',
  //       email: 'henriquehr@live.com',
  //       password: await argon2.hash('henriquehr'),
  //       number: '',
  //     },
  //     {
  //       name: ' Gabriel Aur�lio Fernandes',
  //       email: 'gabrielaurelliofernandes@gmail.com',
  //       password: await argon2.hash('gabrielaurelliofernandes'),
  //       number: '',
  //     },
  //     {
  //       name: ' Nilson dos passos junior',
  //       email: 'passosnil@gmail.com',
  //       password: await argon2.hash('passosnil'),
  //       number: '',
  //     },
  //     {
  //       name: 'Yan Leonardo Caldeira Barroso',
  //       email: 'yanleonardo10@hotmail.com',
  //       password: await argon2.hash('yanleonardo10'),
  //       number: '',
  //     },
  //     {
  //       name: ' zeka cardoso',
  //       email: 'z.k.2@hotmail.com',
  //       password: await argon2.hash('z.k.2'),
  //       number: '',
  //     },
  //     {
  //       name: 'Antonio Jos�',
  //       email: 'anjesis@hotmail.com',
  //       password: await argon2.hash('anjesis'),
  //       number: '',
  //     },
  //     {
  //       name: ' Fabio Gerzely',
  //       email: 'gerzely_@hotmail.com',
  //       password: await argon2.hash('gerzely_'),
  //       number: '',
  //     },
  //     {
  //       name: 'Leonardo Brito',
  //       email: 'leotheobrito@gmail.com',
  //       password: await argon2.hash('leotheobrito'),
  //       number: '',
  //     },
  //     {
  //       name: ' Kau� Santana',
  //       email: 'kaue.eng@gmail.com',
  //       password: await argon2.hash('kaue.eng'),
  //       number: '',
  //     },
  //     {
  //       name: 'Benza Store',
  //       email: 'fortes.lh@gmail.com',
  //       password: await argon2.hash('fortes.lh'),
  //       number: '',
  //     },
  //     {
  //       name: 'fabio leandro',
  //       email: 'faabiinhul@hotmail.com',
  //       password: await argon2.hash('faabiinhul'),
  //       number: '',
  //     },
  //     {
  //       name: ' Juliana f e souza',
  //       email: 'carlosfelipesm98@gmail.com',
  //       password: await argon2.hash('carlosfelipesm98'),
  //       number: '',
  //     },
  //     {
  //       name: 'Tiago Cabral Falqueiro',
  //       email: 'tiagofalqueiro@gmail.com',
  //       password: await argon2.hash('tiagofalqueiro'),
  //       number: '',
  //     },
  //     {
  //       name: 'Claudia Rodrigues',
  //       email: 'claudiaclaudinhaevoce@gmail.com',
  //       password: await argon2.hash('claudiaclaudinhaevoce'),
  //       number: '',
  //     },
  //     {
  //       name: ' Lucas Bilhar Saraiva',
  //       email: 'lucassaraivatpd@outlook.com',
  //       password: await argon2.hash('lucassaraivatpd'),
  //       number: '',
  //     },
  //     {
  //       name: 'Julio Cesar Soares',
  //       email: 'juliocesarsoares11@gmail.com',
  //       password: await argon2.hash('juliocesarsoares11'),
  //       number: '',
  //     },
  //     {
  //       name: 'LAISE SILVA DE OLIVEIRA',
  //       email: 'laisepay@gmail.com',
  //       password: await argon2.hash('laisepay'),
  //       number: '',
  //     },
  //     {
  //       name: 'Ricardo Soares',
  //       email: 'sergio.ricardo.soares@hotmail.com',
  //       password: await argon2.hash('sergio.ricardo.soares'),
  //       number: '',
  //     },
  //     {
  //       name: 'aleatoriozk12',
  //       email: 'aleatoriozk12@gmail.com',
  //       password: await argon2.hash('aleatoriozk12'),
  //       number: '',
  //     },
  //     {
  //       name: 'Gustavo Zorzetto',
  //       email: 'gzorza@gmail.com',
  //       password: await argon2.hash('gzorza'),
  //       number: '',
  //     },
  //     {
  //       name: ' Lucas Madureira Franco Cancado',
  //       email: 'lucasfcancado@gmail.com',
  //       password: await argon2.hash('lucasfcancado'),
  //       number: '',
  //     },
  //     {
  //       name: 'Daniel Henrique Garavelo',
  //       email: 'danielhgaravelo@yahoo.com.br',
  //       password: await argon2.hash('danielhgaravelo'),
  //       number: '',
  //     },
  //     {
  //       name: 'mariahvariedadesfaq',
  //       email: 'mariahvariedadesfaq@gmail.com',
  //       password: await argon2.hash('mariahvariedadesfaq'),
  //       number: '',
  //     },
  //     {
  //       name: 'CARLOS BOCHELOF',
  //       email: 'carlosbochelof@gmail.com',
  //       password: await argon2.hash('carlosbochelof'),
  //       number: '',
  //     },
  //     {
  //       name: 'Hugo Carvalho',
  //       email: 'hcg1324@hotmail.com',
  //       password: await argon2.hash('hcg1324'),
  //       number: '',
  //     },
  //     {
  //       name: 'MATEUS HENRIQUE MARQUES',
  //       email: 'mateus.henrique.marques@hotmail.com',
  //       password: await argon2.hash('mateus.henrique.marques'),
  //       number: '',
  //     },
  //     {
  //       name: 'xandmkt',
  //       email: 'xandmkt@gmail.com',
  //       password: await argon2.hash('xandmkt'),
  //       number: '',
  //     },
  //     {
  //       name: 'gfaehdbc',
  //       email: 'matheus@nucleoexpert.com',
  //       password: await argon2.hash('matheus'),
  //       number: '',
  //     },
  //     {
  //       name: 'alvarohenriquemkt3',
  //       email: 'alvarohenriquemkt3@gmail.com',
  //       password: await argon2.hash('alvarohenriquemkt3'),
  //       number: '',
  //     },
  //     {
  //       name: ' Alvaro matheus',
  //       email: 'ard83uy@hotmail.com',
  //       password: await argon2.hash('ard83uy'),
  //       number: '',
  //     },
  //     {
  //       name: ' bhfegcda cbagfedh',
  //       email: 'carrinhoinfinito@gmail.com',
  //       password: await argon2.hash('carrinhoinfinito'),
  //       number: '',
  //     },
  //     {
  //       name: 'Luiz Carlos Ladeira',
  //       email: 'mtzimport@gmail.com',
  //       password: await argon2.hash('mtzimport'),
  //       number: '',
  //     },
  //     {
  //       name: ' eduardo araujo viana',
  //       email: 'eduherald8@gmail.com',
  //       password: await argon2.hash('eduherald8'),
  //       number: '',
  //     },
  //     {
  //       name: 'Sergio Wei',
  //       email: 'mercadodecasa77@gmail.com',
  //       password: await argon2.hash('mercadodecasa77'),
  //       number: '',
  //     },
  //     {
  //       name: '�liver Toscano da Silva',
  //       email: 'digitalexpressltda@gmail.com',
  //       password: await argon2.hash('digitalexpressltda'),
  //       number: '',
  //     },
  //     {
  //       name: 'Leonardo Vaz',
  //       email: 'leonardovaz19@gmail.com',
  //       password: await argon2.hash('leonardovaz19'),
  //       number: '',
  //     },
  //     {
  //       name: 'TJI CAPS COMERCIO DE PRODUTOS TJI CAPS COMERCIO DE PRODUTOS',
  //       email: '2n.tji.digital@gmail.com',
  //       password: await argon2.hash('2n.tji.digital'),
  //       number: '',
  //     },
  //     {
  //       name: 'Hugo Henrique',
  //       email: 'engenheirohugo@clinimerces.com.br',
  //       password: await argon2.hash('engenheirohugo'),
  //       number: '',
  //     },
  //     {
  //       name: ' Wellington Veronez',
  //       email: 'wellitin_97@hotmail.com',
  //       password: await argon2.hash('wellitin_97'),
  //       number: '',
  //     },
  //     {
  //       name: 'Jo�o Pedro Krastins',
  //       email: 'jpedrokrastins@gmail.com',
  //       password: await argon2.hash('jpedrokrastins'),
  //       number: '',
  //     },
  //     {
  //       name: 'Murilo Henrique Goulart santos',
  //       email: 'muugoulart@icloud.com',
  //       password: await argon2.hash('muugoulart'),
  //       number: '',
  //     },
  //     {
  //       name: ' JONATAN V GOULART',
  //       email: 'goulartmga@gmail.com',
  //       password: await argon2.hash('goulartmga'),
  //       number: '',
  //     },
  //     {
  //       name: 'Jose Lucas De Faria Almeida',
  //       email: 'lucas.rox@uol.com.br',
  //       password: await argon2.hash('lucas.rox'),
  //       number: '',
  //     },
  //     {
  //       name: 'Legbox Silvana Lago Seixas',
  //       email: 'adm@legboxbrasil.com.br',
  //       password: await argon2.hash('adm'),
  //       number: '',
  //     },
  //     {
  //       name: 'anderson guerra',
  //       email: 'ander.guerra@hotmail.com',
  //       password: await argon2.hash('ander.guerra'),
  //       number: '',
  //     },
  //     {
  //       name: 'Guilherme Garcia guilhermetorrico',
  //       email: 'guilhermetorrico@gmail.com',
  //       password: await argon2.hash('guilhermetorrico'),
  //       number: '',
  //     },
  //     {
  //       name: 'jkbachtold',
  //       email: 'jkbachtold@gmail.com',
  //       password: await argon2.hash('jkbachtold'),
  //       number: '',
  //     },
  //     {
  //       name: 'EDUARDO SOUZA',
  //       email: 'eduardo@polishopsp.com.br',
  //       password: await argon2.hash('eduardo'),
  //       number: '',
  //     },
  //     {
  //       name: ' cfhbdaeg bcgdhfae',
  //       email: 'dedstore14@gmail.com',
  //       password: await argon2.hash('dedstore14'),
  //       number: '',
  //     },
  //     {
  //       name: 'nayltontc',
  //       email: 'nayltontc@gmail.com',
  //       password: await argon2.hash('nayltontc'),
  //       number: '',
  //     },
  //     {
  //       name: ' RENIER A E SILVA LTDA RENIER A E SILVA LTDA',
  //       email: 'rennersilva@rennersilva.com.br',
  //       password: await argon2.hash('rennersilva'),
  //       number: '',
  //     },
  //     {
  //       name: ' Arlen Delwin',
  //       email: 'delwin.arlen@hotmail.com',
  //       password: await argon2.hash('delwin.arlen'),
  //       number: '',
  //     },
  //     {
  //       name: 'Guilherme Costa Silva',
  //       email: 'bankinggcs@gmail.com',
  //       password: await argon2.hash('bankinggcs'),
  //       number: '',
  //     },
  //     {
  //       name: 'Gabriel Gomes',
  //       email: 'gabrielgvm123@gmail.com',
  //       password: await argon2.hash('gabrielgvm123'),
  //       number: '',
  //     },
  //     {
  //       name: 'Neandro Macedo',
  //       email: 'neandropm@gmail.com',
  //       password: await argon2.hash('neandropm'),
  //       number: '',
  //     },
  //     {
  //       name: 'Vitor Coimbra Rocha',
  //       email: 'vitor.coimbra@mambaculture.com',
  //       password: await argon2.hash('vitor.coimbra'),
  //       number: '',
  //     },
  //     {
  //       name: ' Claudio Rodarte Camozzi',
  //       email: 'ccamozzi@terra.com.br',
  //       password: await argon2.hash('ccamozzi'),
  //       number: '',
  //     },
  //     {
  //       name: ' Rafael Salviano',
  //       email: 'rafael.salviano@gmail.com',
  //       password: await argon2.hash('rafael.salviano'),
  //       number: '',
  //     },
  //     {
  //       name: 'Matheus Pereira',
  //       email: 'mrshipping15@gmail.com',
  //       password: await argon2.hash('mrshipping15'),
  //       number: '',
  //     },
  //     {
  //       name: 'Claudio Andre',
  //       email: 'claudiofandre@gmail.com',
  //       password: await argon2.hash('claudiofandre'),
  //       number: '',
  //     },
  //     {
  //       name: 'contato',
  //       email: 'contato@joceliods.com.br',
  //       password: await argon2.hash('contato'),
  //       number: '',
  //     },
  //     {
  //       name: 'Daiana Farias',
  //       email: 'elianalour1@gmail.com',
  //       password: await argon2.hash('elianalour1'),
  //       number: '',
  //     },
  //     {
  //       name: 'markusvinicyus009003',
  //       email: 'markusvinicyus009003@gmail.com',
  //       password: await argon2.hash('markusvinicyus009003'),
  //       number: '',
  //     },
  //     {
  //       name: 'fernanda jurgensen rodrigues',
  //       email: 'ferjurgensen@hotmail.com',
  //       password: await argon2.hash('ferjurgensen'),
  //       number: '',
  //     },
  //   ],
  // });

  // const admin = await prisma.users.findFirst({
  //   where: {
  //     name: 'Admin',
  //   },
  // });

  // const allPermissions = await prisma.permissions.findMany();

  const get_notes = await prisma.permissions.findFirst({
    where: { name: 'get_notes' },
  });

  const allUsers = await prisma.users.findMany();

  allUsers.map(async (userUnique) => {
    await prisma.users.update({
      where: { id: userUnique.id },
      data: {
        permissions: {
          connect: {
            id: get_notes.id,
          },
        },
      },
    });
  });

  // allPermissions.map(async (permission) => {
  //   await prisma.permissions.update({
  //     where: { id: permission.id },
  //     data: {
  //       Users: {
  //         connect: {
  //           id: admin.id,
  //         },
  //       },
  //     },
  //   });
  // });

  // await prisma.$transaction(
  //   allUsers.map((userUnique) =>
  //     prisma.users.update({
  //       where: { id: userUnique.id },
  //       data: {
  //         permissions: {
  //           connect: {
  //             id: permission2.id,
  //           },
  //         },
  //       },
  //     }),
  //   ),
  // );

  // Create Faq

  // const faq = await prisma.faq.createMany({
  //   data: [
  //     {
  //       question: 'Porque o preço é tão baixo?',
  //       answer:
  //         'Todos os meses nós juntamos varias pessoas para dividir o valor da ferramenta, como o acesso e o valor é dividido entre varias pessoas acaba possibilitando um valor super acessível para cada um, oque nós permite cobrar um valor baixo com o máximo de qualidade possível!',
  //     },
  //     {
  //       question: 'Tenho limite de uso?',
  //       answer:
  //         'Não! Você poderá usar a ferramenta ilimitadamente, durante o periodo de 30 dias você poderá usar a ferramenta quantas vezes quiser, sem nenhum tipo de limite!',
  //     },
  //     {
  //       question: 'Como Funciona o acesso?',
  //       answer:
  //         'Com sua conta você terá acesso a uma área exclusiva, onde você poderá acessar a ferramenta que adquiriu e também terá acesso a todas as atualizações e novidades que iremos lançar!',
  //     },
  //     {
  //       question: 'Preciso ter uma conta para comprar?',
  //       answer:
  //         'Não! Você poderá comprar sem ter uma conta, caso você realize o pagamento sem está com o login efetuado em uma conta uma será criada para você automaticamente e enviada para o email que você nós forneceu na hora da compra.',
  //     },
  //   ],
  // });

  // const question = await prisma.faq.findFirst({
  //   where: { question: 'Porque o preço é tão baixo?' },
  // });

  // const question2 = await prisma.faq.findFirst({
  //   where: { question: 'Tenho limite de uso?' },
  // });

  // const question3 = await prisma.faq.findFirst({
  //   where: { question: 'Como Funciona o acesso?' },
  // });

  // const question4 = await prisma.faq.findFirst({
  //   where: { question: 'Preciso ter uma conta para comprar?' },
  // });

  // const findAllProducts = await prisma.products.findMany();

  // await prisma.$transaction(
  //   findAllProducts.map((product) =>
  //     prisma.faq.update({
  //       where: { id: question.id },
  //       data: {
  //         Products: { connect: { id: product.id } },
  //       },
  //     }),
  //   ),
  // );
  // await prisma.$transaction(
  //   findAllProducts.map((product) =>
  //     prisma.faq.update({
  //       where: { id: question2.id },
  //       data: {
  //         Products: { connect: { id: product.id } },
  //       },
  //     }),
  //   ),
  // );
  // await prisma.$transaction(
  //   findAllProducts.map((product) =>
  //     prisma.faq.update({
  //       where: { id: question3.id },
  //       data: {
  //         Products: { connect: { id: product.id } },
  //       },
  //     }),
  //   ),
  // );
  // await prisma.$transaction(
  //   findAllProducts.map((product) =>
  //     prisma.faq.update({
  //       where: { id: question4.id },
  //       data: {
  //         Products: { connect: { id: product.id } },
  //       },
  //     }),
  //   ),
  // );

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
