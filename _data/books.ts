// TODO: Get absolute imports to work for Genre declaration
import Book from '_types/Book';
import Genre from '../_declarations/Genre';

type Data = {
  [key: string]: Book[];
};

const data: Data = {
  '2020': [
    {
      title: 'Lost at Sea',
      slug: 'lost-at-sea',
      author: 'Jon Ronson',
      imageSrc:
        'https://images-na.ssl-images-amazon.com/images/I/51E7fps2uYL.jpg',
      favorite: false,
      stroopwafel: false,
      reread: false,
      genre: Genre.nonFiction,
      note:
        'This book ressurects decades-old secrets to frame a complex, morally ambiguous conflict that Ireland is still reckoning with today.',
    },
    {
      title: 'A Gentleman in Moscow',
      slug: 'a-gentleman-in-moscow',
      author: 'Amor Towles',
      imageSrc:
        'https://images-na.ssl-images-amazon.com/images/I/913q5f7nocL.jpg',
      favorite: true,
      stroopwafel: true,
      reread: false,
      genre: Genre.fiction,
      note:
        'This book, apparently, has one of the longest sentences in English literature, and it completely pays off in every imaginable way.',
    },
    {
      title: 'In the Distance',
      slug: 'in-the-distance',
      author: 'Hernan Diaz',
      imageSrc:
        'https://images-na.ssl-images-amazon.com/images/I/81NEKx2OCeL.jpg',
      favorite: true,
      stroopwafel: false,
      reread: false,
      genre: Genre.fiction,
      note:
        'This book ressurects decades-old secrets to frame a complex, morally ambiguous conflict that Ireland is still reckoning with today.',
    },
    {
      title: 'Where the Crawdads Sing',
      slug: 'where-the-crawdads-sing',
      author: 'Delia Owens',
      imageSrc:
        'https://images-na.ssl-images-amazon.com/images/I/81-349iYbfL.jpg',
      favorite: false,
      stroopwafel: false,
      reread: false,
      genre: Genre.fiction,
      note: 'Lorem ipsum',
    },
    {
      title: 'Lost City of the Monkey God',
      slug: 'lost-city-of-the-monkey-god',
      author: 'Douglas Preston',
      imageSrc:
        'https://images-na.ssl-images-amazon.com/images/I/61w6kK12tdL.jpg',
      favorite: false,
      stroopwafel: false,
      reread: false,
      genre: Genre.nonFiction,
      note: 'Lorem ipsum',
    },
    {
      title: 'Snow Crash',
      slug: 'snow-crash',
      author: 'Neal Stephenson',
      imageSrc:
        'https://images-na.ssl-images-amazon.com/images/I/91NrsGzBjUL.jpg',
      favorite: false,
      stroopwafel: false,
      reread: false,
      genre: Genre.fiction,
      note: 'Lorem ipsum',
    },
    {
      shortTitle: 'Midnight in Chernobyl',
      title:
        "Midnight in Chernobyl: The Untold Story of the World's Greatest Nuclear Disaster",
      slug: 'midnight-in-chernobyl',
      author: 'Adam Higginbotham',
      imageSrc:
        'https://images-na.ssl-images-amazon.com/images/I/71o4QsiHr1L.jpg',
      favorite: true,
      stroopwafel: false,
      reread: false,
      genre: Genre.nonFiction,
      note: 'Lorem ipsum',
    },
    {
      title: "The Rotters' Club",
      slug: 'the-rotters-club',
      author: 'Jonathan Coe',
      imageSrc:
        'https://images-na.ssl-images-amazon.com/images/I/71pI-a2rSjL.jpg',
      favorite: true,
      stroopwafel: true,
      reread: false,
      genre: Genre.fiction,
      note:
        'This book, apparently, has one of the longest sentences in English literature, and it completely pays off in every imaginable way.',
    },
    {
      title: 'Classic Krakauer: Essays on Wilderness and Risk',
      shortTitle: 'Jon Krakauer',
      slug: 'classic-krakauer',
      author: 'Jon Krakauer',
      imageSrc:
        'https://images-na.ssl-images-amazon.com/images/I/816BdaJml3L.jpg',
      favorite: false,
      stroopwafel: false,
      reread: false,
      genre: Genre.nonFiction,
      note: 'Lorem ipsum',
    },
    {
      title:
        'Say Nothing: A True Story of Murder and Memory in Northern Ireland',
      shortTitle: 'Say Nothing',
      slug: 'say-nothing',
      author: 'Patrick Radden Keefe',
      imageSrc:
        'https://images-na.ssl-images-amazon.com/images/I/91JjvRkb8eL.jpg',
      favorite: true,
      stroopwafel: false,
      reread: false,
      genre: Genre.nonFiction,
      note:
        'This book ressurects decades-old secrets to frame a complex, morally ambiguous conflict that Ireland is still reckoning with today.',
    },
    {
      title: 'The Stranger',
      slug: 'the-stranger',
      author: 'Albert Camus',
      imageSrc:
        'https://images-na.ssl-images-amazon.com/images/I/510OfVuXxSL._SX322_BO1,204,203,200_.jpg',
      favorite: false,
      stroopwafel: false,
      reread: true,
      genre: Genre.fiction,
      note: 'Lorem ipsum',
    },
    {
      title: 'The Book of Joe',
      slug: 'the-book-of-joe',
      author: 'Jonathan Tropper',
      imageSrc:
        'https://images-na.ssl-images-amazon.com/images/I/81AIFdqZt0L.jpg',
      favorite: false,
      stroopwafel: false,
      reread: true,
      genre: Genre.fiction,
      note: 'Lorem ipsum',
    },
    {
      title:
        'Fear and Loathing in Las Vegas: A Savage Journey to the Heart of the American Dream',
      shortTitle: 'Fear and Loathing in Las Vegas',
      slug: 'fear-and-loathing-in-las-vegas',
      author: 'Hunter S. Thompson',
      imageSrc:
        'https://images-na.ssl-images-amazon.com/images/I/81mLq4eut8L.jpg',
      favorite: false,
      stroopwafel: false,
      reread: true,
      genre: Genre.fiction,
      note: 'Lorem ipsum',
    },
    {
      title: 'The Flamethrowers',
      slug: 'the-flamethrowers',
      author: 'Rachel Kushner',
      imageSrc:
        'https://images-na.ssl-images-amazon.com/images/I/51L8o0tITzL.jpg',
      favorite: true,
      stroopwafel: false,
      reread: false,
      genre: Genre.fiction,
      note: 'Lorem ipsum',
    },
    {
      title: 'Round Ireland with a Fridge',
      slug: 'round-ireland-with-a-fridge',
      author: 'Tony Hawks',
      imageSrc:
        'https://images-na.ssl-images-amazon.com/images/I/81CWBfpK+BL.jpg',
      favorite: true,
      stroopwafel: true,
      reread: true,
      genre: Genre.nonFiction,
      note:
        'This book ressurects decades-old secrets to frame a complex, morally ambiguous conflict that Ireland is still reckoning with today.',
    },
  ],
  '2019': [
    {
      title: 'Farewell, My Lovely',
      slug: 'farewell-my-lovely',
      author: 'Raymond Chandler',
      imageSrc:
        'https://images-na.ssl-images-amazon.com/images/I/71t7DpIMe8L.jpg',
      favorite: false,
      stroopwafel: false,
      reread: false,
      genre: Genre.fiction,
      note: 'Lorem ipsum',
    },
    {
      title: 'In Patagonia',
      slug: 'in-patagonia',
      author: 'Bruce Chatwin',
      imageSrc:
        'https://images-na.ssl-images-amazon.com/images/I/91TxoMoUZhL.jpg',
      favorite: true,
      stroopwafel: false,
      reread: false,
      genre: Genre.nonFiction,
      note: 'Lorem ipsum',
    },
    {
      title: 'Spaceman of Bohemia',
      slug: 'spaceman-of-bohemia',
      author: 'Jaroslav Kalfar',
      imageSrc:
        'https://images-na.ssl-images-amazon.com/images/I/51CFZ+0O7sL.jpg',
      favorite: true,
      stroopwafel: true,
      reread: false,
      genre: Genre.fiction,
      note: 'Lorem ipsum',
    },
    {
      title: 'Kafka on the Shore',
      slug: 'kafka-on-the-shore',
      author: 'Haruki Murakami',
      imageSrc:
        'https://images-na.ssl-images-amazon.com/images/I/81zvseHim4L.jpg',
      favorite: true,
      stroopwafel: false,
      reread: true,
      genre: Genre.fiction,
      note: 'Lorem ipsum',
    },
    {
      title: "So You've Been Publicly Shamed",
      slug: 'so-youve-been-publically-shamed',
      author: 'Jon Ronson',
      imageSrc:
        'https://images-na.ssl-images-amazon.com/images/I/A1IWiZNj6PL.jpg',
      favorite: false,
      stroopwafel: false,
      reread: false,
      genre: Genre.nonFiction,
      note: 'Lorem ipsum',
    },
    {
      title: 'Player Piano',
      slug: 'player-piano',
      author: 'Kurt Vonnegut',
      imageSrc:
        'https://images-na.ssl-images-amazon.com/images/I/71xlumdwPwL.jpg',
      favorite: false,
      stroopwafel: false,
      reread: false,
      genre: Genre.fiction,
      note: 'Lorem ipsum',
    },
    {
      title: 'H is for Hawk',
      slug: 'h-is-for-hawk',
      author: 'Helen Macdonald',
      imageSrc:
        'https://images-na.ssl-images-amazon.com/images/I/51FJFqMnaBL.jpg',
      favorite: false,
      stroopwafel: false,
      reread: false,
      genre: Genre.nonFiction,
      note: 'Lorem ipsum',
    },
    {
      title: 'Zone One',
      slug: 'zone-one',
      author: 'Colson Whitehead',
      imageSrc:
        'https://images-na.ssl-images-amazon.com/images/I/81KTN2667KL.jpg',
      favorite: false,
      stroopwafel: false,
      reread: false,
      genre: Genre.fiction,
      note: 'Lorem ipsum',
    },
    {
      title: 'Going Clear: Scientology, Hollywood, and the Prison of Belief',
      shortTitle: 'Going Clear',
      slug: 'going-clear',
      author: 'Lawrence Wright',
      imageSrc:
        'https://images-na.ssl-images-amazon.com/images/I/91c0BoaCmJL.jpg',
      favorite: true,
      stroopwafel: false,
      reread: false,
      genre: Genre.fiction,
      note: 'Lorem ipsum',
    },
    {
      title: 'The Art of Fielding',
      slug: 'the-art-of-fielding',
      author: 'Chad Harbach',
      imageSrc:
        'https://images-na.ssl-images-amazon.com/images/I/51u6m5UwKOL.jpg',
      favorite: true,
      stroopwafel: false,
      reread: false,
      genre: Genre.fiction,
      note: 'Lorem ipsum',
    },
    {
      title: 'The High Window',
      slug: 'the-high-window',
      author: 'Raymond Chandler',
      imageSrc:
        'https://images-na.ssl-images-amazon.com/images/I/6159xmWxk7L.jpg',
      favorite: true,
      stroopwafel: false,
      reread: false,
      genre: Genre.fiction,
      note: 'Lorem ipsum',
    },
    {
      title: 'Off to Be the Wizard',
      slug: 'off-to-be-the-wizard',
      author: 'Scott Meyer',
      imageSrc:
        'https://images-na.ssl-images-amazon.com/images/I/41R1EExl7HL.jpg',
      favorite: false,
      stroopwafel: false,
      reread: false,
      genre: Genre.fiction,
      note: 'Lorem ipsum',
    },
    {
      title: '1Q84',
      slug: '1Q84',
      author: 'Haruki Murakami',
      imageSrc:
        'https://images-na.ssl-images-amazon.com/images/I/41FdmYnaNuL.jpg',
      favorite: false,
      stroopwafel: false,
      reread: false,
      genre: Genre.fiction,
      note: 'Lorem ipsum',
    },
    {
      title: 'Recursion',
      slug: 'recursion',
      author: 'Blake Crouch',
      imageSrc:
        'https://images-na.ssl-images-amazon.com/images/I/81E0o11MkdL.jpg',
      favorite: false,
      stroopwafel: false,
      reread: false,
      genre: Genre.fiction,
      note: 'Lorem ipsum',
    },
    {
      title:
        'Hunting LeRoux: The Inside Story of the DEA Takedown of a Criminal Genius and His Empire',
      shortTitle: 'Hunting LeRoux',
      slug: 'hunting-leroux',
      author: 'Chad Harbach',
      imageSrc:
        'https://images-na.ssl-images-amazon.com/images/I/81e6AM8uJBL.jpg',
      favorite: false,
      stroopwafel: false,
      reread: false,
      genre: Genre.nonFiction,
      note: 'Lorem ipsum',
    },
    {
      title: 'High-Rise',
      slug: 'high-rise',
      author: 'J.G. Ballard',
      imageSrc:
        'https://images-na.ssl-images-amazon.com/images/I/613Nm5UGCGL.jpg',
      favorite: false,
      stroopwafel: false,
      reread: true,
      genre: Genre.fiction,
      note: 'Lorem ipsum',
    },
    {
      title:
        'Boom Town: The Fantastical Saga of Oklahoma City, Its Chaotic Founding... Its Purloined Basketball Team, and the Dream of Becoming a World-class Metropolis',
      shortTitle: 'Boom Town',
      slug: 'boom-town',
      author: 'Sam Anderson',
      imageSrc:
        'https://images-na.ssl-images-amazon.com/images/I/91qSHtG5QsL.jpg',
      favorite: true,
      stroopwafel: false,
      reread: false,
      genre: Genre.nonFiction,
      note: 'Lorem ipsum',
    },
    {
      title: 'Crazy Rich Asians',
      slug: 'crazy-rich-asians',
      author: 'Kevin Kwan',
      imageSrc:
        'https://images-na.ssl-images-amazon.com/images/I/71QkzTrrLTL.jpg',
      favorite: false,
      stroopwafel: false,
      reread: false,
      genre: Genre.fiction,
      note: 'Lorem ipsum',
    },
    {
      title: 'Into the Wild',
      slug: 'into-the-wild',
      author: 'Jon Krakauer',
      imageSrc:
        'https://images-na.ssl-images-amazon.com/images/I/811k9HNhaiL.jpg',
      favorite: false,
      stroopwafel: false,
      reread: true,
      genre: Genre.nonFiction,
      note: 'Lorem ipsum',
    },
    {
      title: 'The Saturday Night Ghost Club',
      slug: 'the-saturday-night-ghost-club',
      author: 'Craig Davidson',
      imageSrc:
        'https://images-na.ssl-images-amazon.com/images/I/A1MnhV2nHiL.jpg',
      favorite: false,
      stroopwafel: false,
      reread: false,
      genre: Genre.fiction,
      note: 'Lorem ipsum',
    },
    {
      title: 'A Man Called Ove',
      slug: 'a-man-called-ove',
      author: 'Fredrik Backman',
      imageSrc:
        'https://images-na.ssl-images-amazon.com/images/I/71V1wGMTtzL.jpg',
      favorite: true,
      stroopwafel: false,
      reread: false,
      genre: Genre.fiction,
      note: 'Lorem ipsum',
    },
    {
      title: 'The Lost City of Z: A Tale of Deadly Obsession in the Amazon',
      shortTitle: 'The Lost City of Z',
      slug: 'the-lost-city-of-z',
      author: 'David Grann',
      imageSrc:
        'https://images-na.ssl-images-amazon.com/images/I/91Wd8XnlyCL.jpg',
      favorite: false,
      stroopwafel: false,
      reread: false,
      genre: Genre.nonFiction,
      note: 'Lorem ipsum',
    },
    {
      title: 'Normal People',
      slug: 'normal-people',
      author: 'Sally Rooney',
      imageSrc:
        'https://images-na.ssl-images-amazon.com/images/I/81KwRUWFYlL.jpg',
      favorite: true,
      stroopwafel: true,
      reread: false,
      genre: Genre.fiction,
      note: 'Lorem ipsum',
    },
    {
      title: 'Bright Lights, Big City',
      slug: 'bright-lights-big-city',
      author: 'Jay McInerney',
      imageSrc:
        'https://images-na.ssl-images-amazon.com/images/I/91ktfUWD+pL.jpg',
      favorite: true,
      stroopwafel: false,
      reread: false,
      genre: Genre.nonFiction,
      note: 'Lorem ipsum',
    },
  ],
  '2018': [
    {
      title: 'Barbarian Days: A Surfing Life',
      shortTitle: 'Barbarian Days',
      slug: 'barbarian-days',
      author: 'William Finnegan',
      imageSrc:
        'https://images-na.ssl-images-amazon.com/images/I/91VUNuVD5KL.jpg',
      favorite: true,
      stroopwafel: false,
      reread: false,
      genre: Genre.nonFiction,
      note: 'Lorem ipsum',
    },
  ],
};

export default data;
