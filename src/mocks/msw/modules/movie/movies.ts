import { uniqueId, kebabCase } from 'lodash-es'
import type { MovieDetail, MovieReview } from '@/services/api/movie'

export type MovieComplete = MovieDetail & { reviews: MovieReview[] }
type MovieIdentifier = Pick<MovieDetail, 'id' | 'name' | 'slug'>

export const makeMovieIdentifier = (movieName: string): MovieIdentifier => ({
  id: uniqueId(),
  name: movieName,
  slug: kebabCase(movieName),
})

export const movies: MovieComplete[] = [
  {
    ...makeMovieIdentifier('Interstellar'),
    category: ['Action', 'Sci-fi'],
    description: `In Earth's future, a global crop blight and second Dust Bowl are slowly rendering the planet uninhabitable. Professor Brand (Michael Caine), a brilliant NASA physicist, is working on plans to save mankind by transporting Earth's population to a new home via a wormhole. But first, Brand must send former NASA pilot Cooper (Matthew McConaughey) and a team of researchers through the wormhole and across the galaxy to find out which of three planets could be mankind's new home.`,
    poster: 'https://www.themoviedb.org/t/p/original/rAiYTfKGqDCRIIqo664sY9XZIvQ.jpg',
    score: 72,
    year: 2014,
    duration: '2h 45min',
    reviews: [
      {
        id: uniqueId(),
        author: 'Dwight Brown',
        authorCompany: 'National Newspaper',
        score: 35,
        comment: `Interstellar, though ambitious and thrilling at points, is too complicated and doesn't reach its full potential.`,
      },
      {
        id: uniqueId(),
        author: 'Richard Roeper',
        authorCompany: 'Chicago Sun-Times',
        score: 100,
        comment: `This is one of the most beautiful films I have ever seen.`,
      },
      {
        id: uniqueId(),
        author: 'Scott Marks',
        authorCompany: 'San Diego Reader',
        score: 18,
        comment: `There are many words to describe Interstellar. Entertainment isn't one of them.`,
      },
      {
        id: uniqueId(),
        author: 'Stephen A. Russell',
        authorCompany: 'The New Daily (Australia)',
        score: 58,
        comment: `None of these characters feel fully-fledged... for a film so rife with schmaltzy musings on the meaning of life, it's alarming how lacking it is in this department.`,
      },
    ],
  },
  {
    ...makeMovieIdentifier('The Girl With the Dragon Tattoo'),
    description: `Disgraced financial reporter Mikael Blomkvist (Daniel Craig) finds a chance to redeem his honor after being hired by wealthy Swedish industrialist Henrik Vanger (Christopher Plummer) to solve the 40-year-old murder of Vanger's niece, Harriet. Vanger believes that Harriet was killed by a member of his own family. Eventually joining Blomkvist on his dangerous quest for the truth is Lisbeth Salander (Rooney Mara), an unusual but ingenious investigator whose fragile trust is not easily won.`,
    category: ['Mystery', 'Thriller', 'Crime'],
    poster: 'https://www.themoviedb.org/t/p/original/dNFbrnF0mIBm0rClbfEFWTtsgMP.jpg',
    score: 45,
    year: 2011,
    duration: '2h 38min',
    reviews: [
      {
        id: uniqueId(),
        author: 'Sara Michelle Fetters',
        authorCompany: 'MovieFreak.com',
        score: 68,
        comment: `I could not take my eyes off the film and never once wanted to exit the theatre, all of which are attributes I don't want to diminish or dispute in any way whatsoever.`,
      },
      {
        id: uniqueId(),
        author: 'Sam Adams',
        authorCompany: 'Philadelphia City Paper',
        score: 82,
        comment: `The movie feels like a cartoon, brilliantly achieved but utterly shallow.`,
      },
      {
        id: uniqueId(),
        author: 'Marianna Neal',
        authorCompany: 'Impression Blend',
        score: 96,
        comment: `For this particular story, Fincher's style is just too sleek.`,
      },
      {
        id: uniqueId(),
        author: 'Justin Harrison',
        authorCompany: 'The Spool',
        score: 81,
        comment: `An incredibly well done thriller.`,
      },
    ],
  },
  {
    ...makeMovieIdentifier('Incredibles 2'),
    description: `Telecommunications guru Winston Deavor enlists Elastigirl to fight crime and make the public fall in love with superheroes once again. That leaves Mr. Incredible with one of his greatest challenges ever -- staying home and taking care of three rambunctious children. As Violet, Dash and Jack-Jack offer him a new set of headaches, a cybercriminal named Screenslaver launches his dastardly plan -- hypnotizing the world through computer screens.`,
    category: ['Animation', 'Adventure'],
    poster: 'https://www.themoviedb.org/t/p/original/fWTZdK1hJnNklNWT0kzbYLiJgWv.jpg',
    score: 93,
    year: 2018,
    duration: '1h 58min',
    reviews: [
      {
        id: uniqueId(),
        author: 'Mark Kermode',
        authorCompany: 'Observer (UK)',
        score: 89,
        comment: `There's a serious movie lurking at the heart of all this hi-tech adventure that takes timely swipes at gender inequality, family stress and the modern triumph of salesmanship over substance.`,
      },
    ],
  },
  {
    ...makeMovieIdentifier('Kingsman: The Secret Service'),
    description: `Gary "Eggsy" Unwin (Taron Egerton), whose late father secretly worked for a spy organization, lives in a South London housing estate and seems headed for a life behind bars. However, dapper agent Harry Hart (Colin Firth) recognizes potential in the youth and recruits him to be a trainee in the secret service. Meanwhile, villainous Richmond Valentine (Samuel L. Jackson) launches a diabolical plan to solve the problem of climate change via a worldwide killing spree.`,
    category: ['Action', 'Comedy'],
    poster: 'https://www.themoviedb.org/t/p/original/1ZIeGwD2lMlLMr4u6IIR302jqhD.jpg',
    score: 49,
    year: 2014,
    duration: '2h 09min',
    reviews: [
      {
        id: uniqueId(),
        author: 'Nick Lemane',
        authorCompany: 'NME',
        score: 96,
        comment: `A witty, entertaining spy romp that also manages to sneak in a serious message.`,
      },
      {
        id: uniqueId(),
        author: 'Mike Massie',
        authorCompany: 'Gone With The Twins',
        score: 96,
        comment: `Everything from the visuals to the violence denotes a jumble of clashing ideas and styles.`,
      },
    ],
  },
  {
    ...makeMovieIdentifier('A Quiet Place'),
    description: `If they hear you, they hunt you. A family must live in silence to avoid mysterious creatures that hunt by sound. Knowing that even the slightest whisper or footstep can bring death, Evelyn and Lee are determined to find a way to protect their children while desperately searching for a way to fight back.`,
    category: ['Mystery', 'Thriller', 'Horror'],
    poster: 'https://www.themoviedb.org/t/p/original/roYyPiQDQKmIKUEhO912693tSja.jpg',
    score: 96,
    year: 2018,
    duration: '2h 10min',
    reviews: [
      {
        id: uniqueId(),
        author: 'Nick Garden',
        authorCompany: 'New UK',
        score: 87,
        comment: `I can't review it, i need to be quiet.`,
      },
      {
        id: uniqueId(),
        author: 'Lorem Ipsum',
        authorCompany: 'Lipsum DC',
        score: 90,
        comment: 'Perfect piece of art.',
      },
    ],
  },
  {
    ...makeMovieIdentifier('The Mitchells vs. the Machines'),
    description: `Young Katie Mitchell embarks on a road trip with her proud parents, younger brother and beloved dog to start her first year at film school. But their plans to bond as a family soon get interrupted when the world's electronic devices come to life to stage an uprising. With help from two friendly robots, the Mitchells must now come together to save one another -- and the planet -- from the new technological revolution.`,
    category: ['Kids & family', 'Animation'],
    poster: 'https://www.themoviedb.org/t/p/original/6ydGnzbo8s4yRNqQWPAvVSiNU8N.jpg',
    score: 98,
    year: 2021,
    duration: '1h 56min',
    reviews: [
      {
        id: uniqueId(),
        author: 'Jake Coyle',
        authorCompany: 'Associated Press',
        score: 85,
        comment: `In "The Mitchells vs. the Machines," family life is a brilliant, ever-changing collage.`,
      },
      {
        id: uniqueId(),
        author: 'Josh Spiegel',
        authorCompany: 'Slashfilm',
        score: 99,
        comment: `The Mitchells vs. the Machines is an unbeatable combination of humor and heart.`,
      },
      {
        id: uniqueId(),
        author: 'Rosa Para',
        authorCompany: 'Latinx Lens',
        score: 80,
        comment: `An emotionally moving, funny, visually appealing, and fun road trip movie. Loved the family dynamic and its relatability.`,
      },
    ],
  },
]
