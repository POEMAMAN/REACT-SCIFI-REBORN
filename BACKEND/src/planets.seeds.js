const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const Planet = require('./api/models/planets.model');

const arrayPlanets = [
  {
    name: 'Manticore',
    settled: '1416 PD',
    population: '1,5 billion',
    capital: 'Aterrizaje',
    location: 'Sistema Manticore A',
    gravity: '1,01 G',
    country: '65a823a371cb2d6063ee162e',
    moons: '1 (Thorson)',
    picture:
      'https://res.cloudinary.com/dmbeu9ipe/image/upload/v1705477357/s9yqqhjcxvhmrpxesncl.jpg',
  },
  {
    name: 'Sphinx',
    settled: '1430 PD',
    population: '1,2 billion',
    capital: 'Yawata Crossing',
    location: 'Sistema Manticore A',
    gravity: '1,35 G',
    country: '65a823a371cb2d6063ee162e',
    moons: '2 (Perseus, Bellerefonte)',
    picture:
      'https://res.cloudinary.com/dmbeu9ipe/image/upload/v1705477375/t7m2a2iy3xux4eydr4d0.webp',
  },
  {
    name: 'Gryphon',
    settled: '1492 PD',
    population: '600 millones',
    capital: 'Yawata Crossing',
    location: 'Sistema Manticore A',
    gravity: '1,05 G',
    country: '65a823a371cb2d6063ee162e',
    moons: '0',
    picture:
      'https://res.cloudinary.com/dmbeu9ipe/image/upload/v1705477387/gptihrj1reoq3dp46euo.jpg',
  },
  {
    name: 'San Martin',
    settled: '1485 PD',
    population: '1 billion',
    capital: 'Ciudad San Marcos',
    location: 'Sistema Trevor Star',
    gravity: '2,7 G',
    country: '65a823a371cb2d6063ee162e',
    moons: '0',
    picture:
      'https://res.cloudinary.com/dmbeu9ipe/image/upload/v1705477421/hkpwq4cvowqsii7adqgm.webp',
  },
  {
    name: 'Grayson',
    settled: '988 PD',
    population: '3 billion',
    capital: 'Austin City',
    location: 'Sistema Grayson',
    gravity: '1,17 G',
    country: '65a823a371cb2d6063ee162f',
    moons: '0',
    picture:
      'https://res.cloudinary.com/dmbeu9ipe/image/upload/v1705477410/il1nnfmptaiwxovm9ab0.webp',
  },
  {
    name: 'Medusa',
    settled: '',
    population: '700 millones',
    capital: 'Residencia del comisionado',
    location: 'Sistema Medusa',
    gravity: '0,85 G',
    country: '65a823a371cb2d6063ee162e',
    moons: '0',
    picture:
      'https://res.cloudinary.com/dmbeu9ipe/image/upload/v1705477340/uyimfkiwbgm8ie5ihsae.webp',
  },
  {
    name: 'Mesa',
    settled: '1460 PD',
    population: '6 billions',
    capital: 'Mendel',
    location: 'Sistema Mesa',
    gravity: '1,02',
    country: '65a823a371cb2d6063ee1631',
    moons: '0',
    picture:
      'https://res.cloudinary.com/dmbeu9ipe/image/upload/v1705479725/fs4w5hz1ccr38mfzgpva.png',
  },
  {
    name: 'Tierra',
    settled: 'Hogar natal',
    population: 'muchos billions',
    capital: 'Chicago',
    location: 'Sistema Solar',
    gravity: '1',
    country: '65a823a371cb2d6063ee1631',
    moons: '1 (Luna)',
    picture:
      'https://res.cloudinary.com/dmbeu9ipe/image/upload/v1705477326/j6dzftqnfmtmpuduxia2.webp',
  },
  {
    name: 'Beowulf',
    settled: '250 PD',
    population: 'muchos billions',
    capital: 'Columbia',
    location: 'Sistema Sigma Draconis',
    gravity: '1',
    country: '65a823a371cb2d6063ee1631',
    moons: '0',
    picture:
      'https://res.cloudinary.com/dmbeu9ipe/image/upload/v1705479698/tvq5hmayj9k2m06xng31.webp',
  },
  {
    name: 'Haven',
    settled: '1309 PD',
    population: 'muchos billions',
    capital: 'Nuevo Paris',
    location: 'Sistema Haven',
    gravity: '1',
    country: '65a823a371cb2d6063ee1630',
    moons: '0',
    picture:
      'https://res.cloudinary.com/dmbeu9ipe/image/upload/v1705479712/qekouhi6i5sigdhqjqsx.webp',
  },
];

mongoose
  .connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(async () => {
    const allPlanets = await Planet.find();
    if (allPlanets.length > 0) {
      await Planet.collection.drop();
      console.log('PLanetas borrados');
    }
  })
  .catch((err) => {
    console.log('error borrando los planetas', err);
  })
  .then(async () => {
    const planetsMap = arrayPlanets.map((planet) => new Planet(planet));
    await Planet.insertMany(planetsMap);
    console.log('planetas insertados');
  })
  .catch((err) => {
    console.log('error insertando los planetas', err);
  })
  .finally(() => mongoose.disconnect());
