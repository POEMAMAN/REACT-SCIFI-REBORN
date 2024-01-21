const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const Universe = require("../api/models/universes.model");

const DB_URL = process.env.DBURL;

const arrayUniverses =
    [
        {
            nameUniverse: "Foundation",
            author: "Isaac Asimov",
            sagas1: "Robots (I, Robot, Robot`s Dreams, Robot`s Visions)",
            sagas2: "Earth_Cycle (The Caves of Steel, The Naked Sun, The Robots of Dawn, Robots and Empire)",
            sagas3: "Galactic_Empire (The Stars, Like Dust, The Currents of Space, Pebble in the Sky, Blind Alley)",
            sagas4: "Foundation_Prequels (Prelude to Foundation, Forward the Foundation)",
            sagas5: "Foundation_Prequels (Prelude to Foundation, Forward the Foundation)",
            sagas6: "Foundation (Foundation, Foundation and Empire, Second Foundation)",
            sagas7: "Extended_Foundation (Foundation's Edge, Foundation and Earth, The End of Eternity)",
            resume: "La premisa de las historias es que, en los tiempos decadentes de un futuro Imperio Galáctico, el matemático Hari Seldon se pasa la vida desarrollando la teoría de la psicohistoria, una nueva y eficaz sociología matemática. Utilizando las leyes estadísticas de acción de masas, puede predecir el futuro de las grandes poblaciones. Seldon prevé la inminente caída del Imperio, que abarca toda la Vía Láctea, y unos años oscuros que durarán 30.000 años antes de que surja un segundo imperio. Aunque el impulso de la caída del Imperio es demasiado grande para detenerlo, Seldon idea un Plan mediante el cual 'la masa de eventos irrumpiente debe desviarse solo un poco' para limitar finalmente este interregno a solo mil años. Para implementar su Plan, Seldon crea las Fundaciones —dos grupos de científicos e ingenieros establecidos en extremos opuestos de la galaxia— para preservar el espíritu de la ciencia y la civilización, y así convertirse en las piedras angulares del nuevo imperio galáctico",
            picture: "https://res.cloudinary.com/dqfaa272n/image/upload/v1705790130/81i5i05EgHL._SY466__tcmcyw.jpg",
        },
        {
        nameUniverse: "Uplift",
        author: "David Brind",
        sagas1: "Uplift_Trilogy (Sundiver, Startide Rising, The Uplift War)",
        sagas2: "Secound_Uplift_Trilogy (Brightness Reef, Infinity's Shore, Heaven's Reach)",
        resume: "En el universo de la elevación de los pupilos existe una civilización intergaláctica denominada de las Cinco Galaxias, que incluye una multitud de razas inteligentes, ha existido durante miles de millones de años. Esta civilización se perpetúa por el acto de la Elevación, evolución en la que una especie tutora modifica a una especie Pupila o Pre-Sapiente hasta que alcance la plena sapiencia. Las especies pupilas suelen ser sirvientes por contrato de las especies tutoras que les elevan por un periodo de 100.000 años. La tutoría de una especie genera ganancias considerables, y los pupilos y los tutores a veces se unen en poderosos clanes. De todos modos el grado de tutor puede perderse debido al exterminio, o a crímenes graves contra la civilización galáctica. En general se acepta en este universo que el proceso de elevación se inició hace por lo menos mil millones de años por una especie conocida sólo como los Progenitores. La humanidad es una rara anomalía en este universo, ya que en apariencia es una especie que ha alcanzado la sapiencia sin tutor conocido: Si verdaderamente la humanidad evolucionó de manera independiente, o si fue abandonada plenamente por un tutor desconocido a principios de su elevación, es un tema de intenso debate. La mayoría de la humanidad cree que son lobeznos, es decir una especie que se ha elevado a sí misma, sin manipulación genética de una especie tutora, a la sapiencia. Esta creencia es considerada herejía y ridícula por la mayoría de la civilización galáctica y ha hecho enemigos de la humanidad, el Clan terrestre, a la mayor parte de los poderes galácticos. Además, el hecho de que la humanidad hubiera elevado ya a dos especies (neo-chimpancés y neo-delfines) cuando se encontró con la civilización galáctica concedió a la humanidad rango de tutor, lo cual es una de las pocas cosas buenas que le ha sucedido al Clan terrestre en su difícil posición de paria en la civilización galáctica. Esto salvó a la humanidad del destino probable de convertirse en pupila de otra raza a través de una adopción forzada o ser exterminados por el daño ambiental causado a la Tierra y a sus especies nativas.",
        picture: "https://res.cloudinary.com/dqfaa272n/image/upload/v1705791065/brin-upliftwar_r6dgw3.webp",
},
{
        nameUniverse: "The Expanse",
        author: "James S. A. Corey",
        sagas1: "First_Cycle (Leviathan Wakes, Caliban's War, Abbadon's Gate, Cibola Burn)",
        sagas2: "Secound_Cycle (Nemesis Games, Babylon's Ashes, Persepolis Rising, Tiamat's Wrath, Leviathan Falls)",
        resume: "Doscientos años en el futuro, en un sistema solar totalmente colonizado, el detective de la policía Josephus Miller (Thomas Jane), nacido en Ceres en el cinturón de asteroides, tiene asignada la misión de encontrar a una joven desaparecida: Juliette «Julie» Andrómeda Mao (Florence Faivre).Mientras tanto, James Holden (Steven Strait), primer oficial del carguero de hielo Canterbury, se ve envuelto en un trágico accidente que amenaza con desestabilizar las relaciones entre la Tierra, Marte y el Cinturón.Lejos de estas dificultades, en el espacio, Chrisjen Avasarala (Shohreh Aghdashloo), una ejecutiva de Naciones Unidas, organización que ha logrado un gobierno mundial, trabaja para evitar la guerra entre esta y Marte, gobernado por el Congreso General Marciano, cueste lo que cueste.Pronto, los tres descubrirán que la mujer desaparecida y el trágico destino del carguero de hielo eran parte de una vasta conspiración que amenaza a toda la humanidad.",
        picture: "https://res.cloudinary.com/dqfaa272n/image/upload/v1705790925/theexpanse_iq3rgq.jpg",
},
{
        nameUniverse: "Old Man's War",
        author: "John Scalzi",
        sagas1: "Main Cycle (The Ghost Brigades, The Last Colony, Zoe's Tale, The Human Division, The End of All Things, The Sagan Diary)",
        resume: "Old Man's War trata sobre un soldado llamado John Perry y sus hazañas en las Fuerzas de Defensa Colonial (CDF). La narrativa en primera persona sigue la carrera militar de Perry desde recluta de las CDF hasta el rango de capitán. Está ambientado en un universo densamente poblado de formas de vida, en el que las especies que viajan al espacio compiten por los escasos planetas que son adecuados para sustentar la vida. Como resultado, Perry debe aprender a luchar contra una amplia variedad de alienígenas. Los personajes de Old Man's War tienen ADN y nanotecnología mejorados, lo que les otorga ventajas en fuerza, velocidad, resistencia y conciencia situacional."
},
{
        nameUniverse: "Lock In",
        author: "John Scalzi",
        sagas1: "Main_Cycle (Lock In, Head on)",
        resume: "El mundo está expuesto a un virus altamente contagioso. La mayoría de los que se enferman no experimentan nada peor que síntomas parecidos a los de la gripe. Para el 1%, el virus hace que las víctimas estén completamente despiertas, pero incapaces de moverse o responder a estímulos. Esto se conoce como 'encierro' y se asemeja a la condición real conocida como síndrome de encierro. La enfermedad pasa a conocerse como 'Síndrome de Haden' y sus víctimas se llaman 'Hadens'. Las unidades de transporte personal robóticas humanoides controladas por el cerebro de Haden (apodado 'Threeps' en honor a C-3PO de Star Wars) se desarrollan como la forma principal para que Haden interactúe con el mundo exterior.Veinticinco años después de la exposición inicial al virus, los agentes del FBI Chris Shane (que es un Haden) y Leslie Vann son asignados a un asesinato relacionado con Haden, con un sospechoso que es un 'Integrador', alguien que puede permitir que un Haden use sus cuerpos. Si el Integrador llevaba un Haden, entonces encontrar al sospechoso del asesinato es complicado. Se producen más asesinatos relacionados con Integrator-Haden, lo que hace que el caso sea más grande de lo esperado y, a medida que Shane y Vann profundizan, descubren un complot para sacudir por completo la economía de Haden.",
        picture: "https://res.cloudinary.com/dqfaa272n/image/upload/v1705791309/9780575134355_xal1ao.jpg",
},
{
        nameUniverse: "The Interdependency",
        author: "John Scalzi",
        sagas1: "Main_Cycle (The Collapsing Empire, (2017)The Consuming Fire, (2018)The Last Emperox (2020))",
        resume: "is a thousand-year-old human empire of 48 star systems connected by the Flow, a network of 'streams' allowing faster-than-light travel. Each stream is one way and has an entry point and an exit point. There is no faster-than-light communication faster than the Flow, and interstellar trips are not instantaneous—ships carrying mail or passengers from Hub, the capital of the empire and the system with the most Flow connections, arrive at End, the most distant, nine months later—but the network permits life-sustaining intersystem trade. As a natural phenomenon, the Flow is poorly understood; Earth disconnected from the network thousands of years ago, and civilization on another system collapsed more recently when its pathway suddenly closed. Family-owned megacorporations control all interstellar trade in the Interdependency's mercantile economy; one, House Wu, is the royal family. The trading houses are incredibly wealthy from government-sanctioned monopolies and by collecting tolls at 'shoals', entrances and exits to Flow pathways. The state religion, with the Emperox as titular head, celebrates the Interdependency as a divinely sanctioned society.",
        picture: "https://res.cloudinary.com/dqfaa272n/image/upload/v1705791375/The-Interdependency-1_rvirif.jpg",
        
},
{
        nameUniverse: "Dune",
        author: "Frank Herber",
        sagas1: "The Butlerian Jihad (The Butlerian Jihad (2002), The Machine Crusade (2003), The Battle of Corrin (2004))",
        sagas2: "Prelude to Dune (Atreides House, Harkonen House, Corrino, House)",
        sagas3: "Big House of Dune (Sisterhood of Dune, Mentats of Dune, Navigators of Dune)",
        sagas4: "Dune`s Heroe (Paul of Dune, Winds of Dune)",
        sagas5: "Original Saga (Dune (1965), Dune Messiah (1969), Children of Dune (1976) by Frank Herbert, Heroes of Dune series (2008–2023), God Emperor of Dune (1981))",
        sagas6: "The return from the Scattering (Heretics of Dune (1984) by Frank Herbert, Chapterhouse: Dune (1985), Hunters of Dune (2006),Sandworms of Dune (2007))",
        resume: "El Universo de Dune es el escenario político, científico y social inventado por Frank Herbert para la saga original de seis novelas de ciencia ficción Dune. El primer libro de la saga, Dune (1965), fue adaptado en la película Dune (1984) de David Lynch y en las películas Dune (2021) y Dune: parte dos (2023) de Denis Villeneuve, así como en una miniserie de televisión (2000); las segunda y tercera partes fueron adaptadas en otra miniserie de televisión (2003). El universo de Dune ha inspirado también varios videojuegos, incluyendo Dune II, uno de los primeros juegos de estrategia en tiempo real modernos. Tras la muerte de Frank Herbert, su hijo Brian y el autor de ciencia ficción Kevin J. Anderson han producido un número de libros sobre los tiempos anteriores al inicio de la saga que han tenido bastante éxito comercial. No obstante, hay disputas entre los fanes de la saga original sobre si forman parte del canon Dune propiamente o no. En 2006 los mismos autores publicaron una continuación de la saga original titulada Cazadores de Dune, y en 2007 el octavo y final Gusanos de arena de Dune. Estas continuaciones y las trilogías anteriores están parcialmente basadas según los autores en notas del propio Frank Herbert, descubiertas una década después de su fallecimiento.",
        picture: "https://res.cloudinary.com/dqfaa272n/image/upload/v1705791461/dune-de-frank-herbert_kgtphl.webp",
}
    ]


mongoose.connect(DB_URL)
    .then(async () => {
        const allUniverses = await Universe.find();
        if (allUniverses.length > 0) {
            await Universe.collection.drop();
            console.log("deleted universes");
        }
    })
    .catch((error) => console.log("error deleting Universes", error))
    .then(async () => {
        const UniverseMap = arrayUniverses.map((universe) => new Universe(universe));
        await Universe.insertMany(UniverseMap);
        console.log("Universes addins");
    })
    .catch((error) => console.log("error adding Universes", error))
    .finally(() => mongoose.disconnect());