const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const Book = require('./api/models/books.model');

const arrayBooks = [
  {
    title: 'En la estación Basilisco',
    serie: 'Honorverse',
    publication_date: 1993,
    pages: 422,
    timeframe: '1900 PD',
    picture:
      'https://res.cloudinary.com/dmbeu9ipe/image/upload/v1705478477/ogyxnq00iwlxcbr4rwza.webp',
  },
  {
    title: 'El honor de la Reina',
    serie: 'Honorverse',
    publication_date: 1993,
    pages: 422,
    timeframe: '1903 PD',
    picture:
      'https://res.cloudinary.com/dmbeu9ipe/image/upload/v1705478496/hd20bzkehpippfhds6vj.webp',
  },
  {
    title: 'Una guerra Breve y triunfal',
    serie: 'Honorverse',
    publication_date: 1994,
    pages: 376,
    timeframe: '1904 PD',
    picture:
      'https://res.cloudinary.com/dmbeu9ipe/image/upload/v1705477789/jjb3miacky8nw9jyandi.webp',
  },
  {
    title: 'Campo de DesHonor',
    serie: 'Honorverse',
    publication_date: 1994,
    pages: 352,
    timeframe: '1905 PD',
    picture:
      'https://res.cloudinary.com/dmbeu9ipe/image/upload/v1705478055/fp1kcopwjis5ho5nzxwk.webp',
  },
  {
    title: 'Bandera en el exilio',
    serie: 'Honorverse',
    publication_date: 1995,
    pages: 417,
    timeframe: '1907 PD',
    picture:
      'https://res.cloudinary.com/dmbeu9ipe/image/upload/v1705478032/yyamalxhufjblz2ozquf.webp',
  },
  {
    title: 'Homor entre enemigos',
    serie: 'Honorverse',
    publication_date: 1996,
    pages: 538,
    timeframe: '1908 PD',
    picture:
      'https://res.cloudinary.com/dmbeu9ipe/image/upload/v1705477975/t0r8s7dmfkbu8cp0eapj.webp',
  },
  {
    title: 'En manos enemigas',
    serie: 'Honorverse',
    publication_date: 1996,
    pages: 544,
    timeframe: '1911 PD',
    picture:
      'https://res.cloudinary.com/dmbeu9ipe/image/upload/v1705477962/hktkf1udbn6yyzacshkb.webp',
  },
  {
    title: 'Ecos de Honor',
    serie: 'Honorverse',
    publication_date: 1998,
    pages: 592,
    timeframe: '1912 PD',
    picture:
      'https://res.cloudinary.com/dmbeu9ipe/image/upload/v1705478065/zthukpmnrufpcxtdvssa.webp',
  },
  {
    title: 'Cenizas de la victoria',
    serie: 'Honorverse',
    publication_date: 2000,
    pages: 576,
    timeframe: '1915 PD',
    picture:
      'https://res.cloudinary.com/dmbeu9ipe/image/upload/v1705478018/yhbnfeggagifedod7r8e.webp',
  },
  {
    title: 'Guerra de honor',
    serie: 'Honorverse',
    publication_date: 2002,
    pages: 880,
    timeframe: '1919 PD',
    picture:
      'https://res.cloudinary.com/dmbeu9ipe/image/upload/v1705477756/mk6te1tcbbmztvazonqc.webp',
  },
  {
    title: 'A toda Costa',
    serie: 'Honorverse',
    publication_date: 2005,
    pages: 864,
    timeframe: '1920 PD',
    picture:
      'https://res.cloudinary.com/dmbeu9ipe/image/upload/v1705478088/v7vxdazveacwnpl3pved.webp',
  },
  {
    title: 'Mision de Honor',
    serie: 'Honorverse',
    publication_date: 2010,
    pages: 600,
    timeframe: '1921 PD',
    picture:
      'https://res.cloudinary.com/dmbeu9ipe/image/upload/v1705478006/fmjap8iegyufyisgui0t.webp',
  },
  {
    title: 'Un trueno Creciente',
    serie: 'Honorverse',
    publication_date: 2012,
    pages: 464,
    timeframe: '1922 PD',
    picture:
      'https://res.cloudinary.com/dmbeu9ipe/image/upload/v1705477996/ul8ttgjastrpwqisjvjo.webp',
  },
  {
    title: 'Honor Intrasingente',
    serie: 'Honorverse',
    publication_date: 2018,
    pages: 880,
    timeframe: '1922 PD',
    picture:
      'https://res.cloudinary.com/dmbeu9ipe/image/upload/v1705477996/ul8ttgjastrpwqisjvjo.webp',
  },
  {
    title: 'Corona de Esclavos',
    serie: 'Crown of slaves',
    publication_date: 2003,
    pages: 530,
    timeframe: '1918 PD',
    picture:
      'https://res.cloudinary.com/dmbeu9ipe/image/upload/v1705478077/kqtwdlhepstcfx1nvk7c.webp',
  },
  {
    title: 'Antorcha de libertad',
    serie: 'Crown of slavess',
    publication_date: 2009,
    pages: 602,
    timeframe: '1919 PD',
    picture:
      'https://res.cloudinary.com/dmbeu9ipe/image/upload/v1705477768/nzypdkh5grxbyednmndh.webp',
  },
  {
    title: 'Caldero de fantasmas',
    serie: 'Crown of slaves',
    publication_date: 2014,
    pages: 512,
    timeframe: '1922 PD',
    picture:
      'https://res.cloudinary.com/dmbeu9ipe/image/upload/v1705478711/ytx8piyecq10ht75fsh2.webp',
  },
  {
    title: 'Para acabar en llamas',
    serie: 'Crown of slaves',
    publication_date: 2021,
    pages: 480,
    timeframe: '1923 PD',
    picture:
      'https://res.cloudinary.com/dmbeu9ipe/image/upload/v1705477779/us0ovvplvkdcyems3elk.webp',
  },
  {
    title: 'Sombra de Saganami',
    serie: 'Shadow',
    publication_date: 2004,
    pages: 736,
    timeframe: '1920 PD',
    picture:
      'https://res.cloudinary.com/dmbeu9ipe/image/upload/v1705477860/brtvcpvwehmvsrav0w1q.webp',
  },
  {
    title: 'Tormenta entre las sombras',
    serie: 'Shadow',
    publication_date: 2009,
    pages: 736,
    timeframe: '1921 PD',
    picture:
      'https://res.cloudinary.com/dmbeu9ipe/image/upload/v1705477897/nvjabiu3sbhyho3kdecq.webp',
  },
  {
    title: 'Sombra de libertad',
    serie: 'Shadow',
    publication_date: 2013,
    pages: 736,
    timeframe: '1921 PD',
    picture:
      'https://res.cloudinary.com/dmbeu9ipe/image/upload/v1705477925/u1gkpywvtdlz0g3sr8fa.webp',
  },
  {
    title: 'Sombra de Victoria',
    serie: 'Shadow',
    publication_date: 2016,
    pages: 480,
    timeframe: '1914 PD',
    picture:
      'https://res.cloudinary.com/dmbeu9ipe/image/upload/v1705477913/t88spdthqwitxhucplat.webp',
  },
];

mongoose
  .connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(async () => {
    const allBooks = await Book.find();
    if (allBooks.length > 0) {
      await Book.collection.drop();
      console.log('Libros borrados');
    }
  })
  .catch((err) => {
    console.log('error borrando los Libros', err);
  })
  .then(async () => {
    const booksMap = arrayBooks.map((book) => new Book(book));
    await Book.insertMany(booksMap);
    console.log('Libros insertados');
  })
  .catch((err) => {
    console.log('error insertando los Libros', err);
  })
  .finally(() => mongoose.disconnect());
