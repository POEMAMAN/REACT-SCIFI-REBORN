const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const Country = require('./api/models/countries.model');

const arrayCountries = [
  {
    name: 'Manticore',
    capital: 'Aterrizaje',
    foundation_date: 'Siglo 24',
    picture:
      'https://res.cloudinary.com/dmbeu9ipe/image/upload/v1705477462/r1ocnpuptlprnywcrq9l.webp',
  },
  {
    name: 'Grayson',
    capital: 'Austin City',
    foundation_date: 'Siglo 23',
    picture:
      'https://res.cloudinary.com/dmbeu9ipe/image/upload/v1705477588/vgxk2ekxyqsgxstze9jr.png',
  },
  {
    name: 'Haven',
    capital: 'Nuevo Paris',
    foundation_date: 'Siglo 23',
    picture:
      'https://res.cloudinary.com/dmbeu9ipe/image/upload/v1705477441/gyeymfdpkbdp0nvuqr7q.webp',
  },
  {
    name: 'Liga Solariana',
    capital: 'Tierra',
    foundation_date: 'mundo natal',
    picture:
      'https://res.cloudinary.com/dmbeu9ipe/image/upload/v1705477576/g5msytkjb9pgte0bd0l0.webp',
  },
  {
    name: 'Imperio Andermani',
    capital: 'Nuevo Berlin',
    foundation_date: 'Siglo 23',
    picture:
      'https://res.cloudinary.com/dmbeu9ipe/image/upload/v1705477597/ivbdfx9wzmdypt2vtjvr.jpg',
  },
  {
    name: 'Confederacion Silesiana',
    capital: 'Silesia',
    foundation_date: 'Siglo 23',
    picture:
      'https://res.cloudinary.com/dmbeu9ipe/image/upload/v1705477451/flfu23xxk13eg6inoqxu.jpg',
  },
  {
    name: 'Republica de Erewhon',
    capital: 'Erewhon',
    foundation_date: 'Siglo 23',
    picture:
      'https://res.cloudinary.com/dmbeu9ipe/image/upload/v1705479232/vpxclwngznkqqxzuwrko.png',
  },
  {
    name: 'Republica de Monica',
    capital: 'Monica',
    foundation_date: 'Siglo 23',
    picture:
      'https://res.cloudinary.com/dmbeu9ipe/image/upload/v1705477608/xle5dkqk5snlnnrkmwpx.png',
  },
];

mongoose
  .connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(async () => {
    const allCountries = await Country.find();
    if (allCountries.length > 0) {
      await Country.collection.drop();
      console.log('Paises borrados');
    }
  })
  .catch((err) => {
    console.log('error borrando los paises', err);
  })
  .then(async () => {
    const countriesMap = arrayCountries.map((country) => new Country(country));
    await Country.insertMany(countriesMap);
    console.log('paises insertados');
  })
  .catch((err) => {
    console.log('error insertando los paises', err);
  })
  .finally(() => mongoose.disconnect());
