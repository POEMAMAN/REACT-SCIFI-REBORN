const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const Character = require('./api/models/characters.model');

const arrayCharacters = [
  {
    name: 'Honor Harrington',
    profession: 'Comandante Naval',
    rank: 'Almirante',
    birthday: '2 de octubre de 1859 PD',
    planet: '65a8309d16f608e1d57eac93',
    country: '65a823a371cb2d6063ee162e',
    picture:
      'https://res.cloudinary.com/dmbeu9ipe/image/upload/v1705477652/yvfcqqny7s0gjqoqopof.webp',
  },
  {
    name: 'Andrew LaFollet',
    profession: 'Capitán Naval',
    rank: 'Capitán de Corbeta',
    birthday: '1842 PD',
    planet: '65a8309d16f608e1d57eac96',
    country: '65a823a371cb2d6063ee162f',
    picture:
      'https://res.cloudinary.com/dmbeu9ipe/image/upload/v1705477716/wxrgcdarhfkkxak3b5wg.webp',
  },
  {
    name: 'Thomas Theisman',
    profession: 'Comandante Naval',
    rank: 'Almirante',
    birthday: '1832 PD',
    planet: '65a8309d16f608e1d57eac9b',
    country: '65a823a371cb2d6063ee1630',
    picture:
      'https://res.cloudinary.com/dmbeu9ipe/image/upload/v1705477617/kdrjyg5m2pfzr6hf4nb5.jpg',
  },
  {
    name: 'Hamish Alexander',
    profession: 'Comandante Naval',
    rank: 'Almirante',
    birthday: '1820 PD',
    planet: '65a8309d16f608e1d57eac92',
    country: '65a823a371cb2d6063ee162e',
    picture:
      'https://res.cloudinary.com/dmbeu9ipe/image/upload/v1705477664/nn8jv0pbrf1d6qnskcac.webp',
  },
  {
    name: 'Horace Harkness',
    profession: 'Comandante Naval',
    rank: 'Chief Warrant Officer',
    birthday: '1832 PD',
    planet: '65a8309d16f608e1d57eac92',
    country: '65a823a371cb2d6063ee162e',
    picture:
      'https://res.cloudinary.com/dmbeu9ipe/image/upload/v1705477642/ojhv6v8cedz9sqydsvah.webp',
  },
  {
    name: 'Elisabeth III Winton',
    profession: 'Dirigente',
    rank: 'Reina',
    birthday: '1865 PD',
    planet: '65a8309d16f608e1d57eac92',
    country: '65a823a371cb2d6063ee162e',
    picture:
      'https://res.cloudinary.com/dmbeu9ipe/image/upload/v1705477676/jfmo5us1fc4afq8xt3hc.webp',
  },
  {
    name: 'Aldona Anisimovna',
    profession: 'Espia',
    rank: 'Espia',
    birthday: '1882 PD',
    planet: '65a8309d16f608e1d57eac98',
    country: '65a823a371cb2d6063ee1631',
    picture:
      'https://res.cloudinary.com/dmbeu9ipe/image/upload/v1705477702/anvibig7r7eeoxpu79ly.webp',
  },
  {
    name: 'Benjamin Mayhew IX',
    profession: 'Dirigente',
    rank: 'Protector',
    birthday: '1871 PD',
    planet: '65a8309d16f608e1d57eac96',
    country: '65a823a371cb2d6063ee162f',
    picture:
      'https://res.cloudinary.com/dmbeu9ipe/image/upload/v1705477689/h3cunplf1eqkej5wrkw3.webp',
  },
  {
    name: 'Lester Tourville',
    profession: 'Comandante Naval',
    rank: 'Almirante',
    birthday: '1881 PD',
    planet: '65a8309d16f608e1d57eac9b',
    country: '65a823a371cb2d6063ee1630',
    picture:
      'https://res.cloudinary.com/dmbeu9ipe/image/upload/v1705477631/lmhck7ocnbocnqw3otup.webp',
  },
];

mongoose
  .connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(async () => {
    const allCharacters = await Character.find();
    if (allCharacters.length > 0) {
      await Character.collection.drop();
      console.log('Personajes borrados');
    }
  })
  .catch((err) => {
    console.log('error borrando los Personajes', err);
  })
  .then(async () => {
    const charactersMap = arrayCharacters.map(
      (character) => new Character(character)
    );
    await Character.insertMany(charactersMap);
    console.log('Personajes insertados');
  })
  .catch((err) => {
    console.log('error insertando los Personajes', err);
  })
  .finally(() => mongoose.disconnect());
