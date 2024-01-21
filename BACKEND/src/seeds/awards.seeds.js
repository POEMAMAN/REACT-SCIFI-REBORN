const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const Award = require("../api/models/awards.model");

const DB_URL = process.env.DBURL;

const arrayAwards =
    [
        {
            name: "HUGO",
            categories: "17",
            organization: "Convención mundial de ciencia ficción",
            countrie: "Earth",
            resume: "Los premios Hugo (en inglés: Hugo Awards) son un conjunto de galardones otorgados anualmente a las mejores obras de ciencia ficción o —en menor medida— de fantasía publicadas durante el año natural previo, así como a otros méritos relacionados con dichos géneros alcanzados durante el mismo periodo de tiempo. Los premios reciben su nombre en honor a Hugo Gernsback, inventor del propio término 'ciencia ficción' y fundador de la revista pionera en el género Amazing Stories. Hasta 1992 los premios eran oficialmente conocidos como Science Fiction Achievement Awards, pero dicha denominación se abandonó en favor de la más ampliamente usada de Hugos. La organización y supervisión de los premios corre a cargo de la Sociedad Mundial de Ciencia Ficción (WSFS), organizadora de la Convención Mundial de Ciencia Ficción (Worldcon), en cuyo seno la ceremonia de entrega de los premios Hugo ocupa un lugar prominente. Los primeros premios fueron otorgados en 1953 durante la 11.ª Worldcon, y han sido puntualmente entregados todos los años desde 1955. Las categorías a las que se entregan premios Hugo han ido cambiando a lo largo de su historia; en la actualidad existen 17 categorías diferentes, entre las que destacan las dedicadas a obras literarias de ficción (novelas, novelas cortas, relatos y relatos corto) y a presentaciones dramáticas (en formato largo y en formato corto).                                                   Los premios Hugo han sido calificados como uno de los mayores honores que se pueden alcanzar en literatura de ciencia ficción y fantasía. Las obras que han recibido un Hugo han sido publicadas en colecciones exclusivas, y es habitual que se mencione el premio en las cubiertas de las obras ganadoras por motivos promocionales.",
            picture: "https://res.cloudinary.com/dqfaa272n/image/upload/v1705857861/_e3393018-ed6c-4356-8753-74b4197eeecd_larppg.jpg",
        },
        {
            name: "LOCUS",
            categories: "6",
            organization: "Revista Locus",
            countrie: "EEUU",
            resume: "Los premios Locus son unos premios literarios otorgados anualmente por la revista estadounidense Locus Magazine a aquellas obras destacadas de los géneros de la ciencia ficción, el género fantástico y el terror cuyo seguimiento cubre la revista. Inicialmente las obras premiadas eran seleccionadas exclusivamente por los lectores de Locus mediante una votación por correo. En años recientes la votación se realiza telemáticamente a través del portal Locus Online de la revista, y la participación en la votación se ha abierto a cualquier persona que se inscriba en la misma.[cita requerida] Los primeros premios Locus fueron entregados en 1971 a las obras publicadas durante el año 1970.",
            picture: "https://res.cloudinary.com/dqfaa272n/image/upload/v1705863795/_259321d0-313a-42ea-bd5f-d9dc387a8350_hpmgiu.jpg",
        },
        {
            name: "NEBULA",
            categories: "5",
            organization: "Asociación de escritores de ciencia ficción y fantasía de Estados Unidos",
            countrie: "EEUU",
            resume: "Los premios Nébula (Nebula Awards en el original en inglés) son un conjunto de galardones literarios otorgados anualmente a las mejores obras de ciencia ficción o fantasía publicadas en los Estados Unidos. Los premios los organiza y otorga la Asociación de escritores de ciencia ficción y fantasía de Estados Unidos (SFWA), una asociación sin ánimo de lucro de escritores profesionales de ciencia ficción y fantasía. Se concedieron por primera vez en 1966 en una ceremonia creada para los premios y se conceden en cuatro categorías en función de la extensión de las obras. En los años 1974-78 y 2000-09 se otorgó una quinta categoría para los guiones de películas y episodios de televisión y en 2018 se inició una sexta categoría concedida a los guiones de juegos. Las normas que rigen los premios han sido modificadas en varias ocasiones a lo largo de su historia, la última en 2010. La Conferencia Nébula de la SFWA, en la que se anuncian y presentan los premios, se celebra cada primavera en los Estados Unidos; los lugares varían de un año a otro.              Son uno de los más conocidos y prestigiosos premios de ciencia ficción y fantasía y, junto con los premios Hugo han sido calificados como los «premios de ciencia ficción más importantes de Estados Unidos». Las obras ganadoras han sido publicadas en colecciones especiales y los ganadores y nominados se mencionan con frecuencia como tales en la portada de los libros. La SFWA determina los premios por el año de publicación, es decir, el año anterior al que se otorga el premio.",
            picture: "https://res.cloudinary.com/dqfaa272n/image/upload/v1705864025/NEBULA_iv6uyq.jpg",
        },
        {
            name: "Arthur C. Clarke Award",
            categories: "1",
            organization: "British Science Fiction Association, Science Fiction Foundation, Sci-Fi-London",
            countrie: "",
            resume: "El premio Arthur C. Clarke es un premio anual que se entrega a la mejor novela de ciencia ficción publicada por primera vez en el Reino Unido durante el año anterior a la entrega.1​ El premio fue establecido con una subvención proveniente de Arthur C. Clarke, entregándose el primer premio en 1987.                    La obra ganadora es seleccionada por un panel de jueces provenientes de la British Science Fiction Association, la Science Fiction Foundation y una tercera organización, que actualmente es el festival de cine Sci-Fi-London.                                El ganador recibe un premio consistente en una suma de dinero (en libras esterlinas) igual al año en el que se entrega el premio y un trofeo con forma de sujetalibros con una placa conmemorativa grabada. Así, por ejemplo, para el ganador del año 2019 el premio ascendió a £2019",
            picture: "https://res.cloudinary.com/dqfaa272n/image/upload/v1705864067/ARTHUR_d88fyp.jpg",
        },
        {
            name: "Premio Philip K. Dick",
            categories: "1",
            organization: "Philadelphia Science Fiction Society, Philip K. Dick Trust, Northwest Science Fiction Society",
            countrie: "EEUU",
            resume: "El Premio Philip K. Dick es un premio de ciencia ficción entregado anualmente en la Norwescon auspiciado por la Sociedad de Ciencia Ficción de Filadelfia y (desde el año 2005) apoyado por el Fondo Philip K. Dick, llamado así por el escritor de ciencia ficción Philip K. Dick. Ha sido otorgado desde el año 1983, el año posterior a la muerte de Dick. Los trabajos que han recibido este premio son identificados en sus cubiertas por el texto Mejor Original de ciencia ficción en rústica (Best Original SF Paperback). Este premio es entregado al mejor trabajo original publicado en rústica cada año en Estados Unidos.                  El premio fue fundado por Thomas Disch con asistencia de David G. Hartwell, Paul S. Williams y Charles N. Brown. Actualmente es administrado por David G. Hartwell y Gordon Van Gelder. Administradores anteriores incluyen a Algis J. Budrys y David Alexander Smith.",
            picture: "https://res.cloudinary.com/dqfaa272n/image/upload/v1705864143/PKD-Award_irioh3.jpg",
        },
    ]


mongoose.connect(DB_URL)
    .then(async () => {
        const allAwards = await Award.find();
        if (allAwards.length > 0) {
            await Award.collection.drop();
            console.log("deleted awards");
        }
    })
    .catch((error) => console.log("error deleting Awards", error))
    .then(async () => {
        const AwardMap = arrayAwards.map((award) => new Award(award));
        await Award.insertMany(AwardMap);
        console.log("Awards addins");
    })
    .catch((error) => console.log("error adding Awards", error))
    .finally(() => mongoose.disconnect());