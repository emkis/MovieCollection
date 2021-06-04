import { asyncDelay } from './utilities'
import type { Movie } from './types'

export async function fetchMovieList(delay = 1500) {
  await asyncDelay(delay)
  return movies.map((movie) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { reviews, ...movieData } = movie

    return { ...movieData }
  })
}

export async function fetchMovieDetail(targetMovieId: string, delay = 1500) {
  await asyncDelay(delay)
  return movies.find((movie) => movie.id === targetMovieId)
}

const movies: Movie[] = [
  {
    id: 'nf9rn',
    name: 'Interstellar',
    category: ['Action', 'Sci-fi'],
    description: `In Earth's future, a global crop blight and second Dust Bowl are slowly rendering the planet uninhabitable. Professor Brand (Michael Caine), a brilliant NASA physicist, is working on plans to save mankind by transporting Earth's population to a new home via a wormhole. But first, Brand must send former NASA pilot Cooper (Matthew McConaughey) and a team of researchers through the wormhole and across the galaxy to find out which of three planets could be mankind's new home.`,
    score: 72,
    year: 2014,
    durationInMinutes: 165,
    reviews: [
      `Interstellar, though ambitious and thrilling at points, is too complicated and doesn't reach its full potential.`,
      `This is one of the most beautiful films I have ever seen.`,
      `There are many words to describe Interstellar. Entertainment isn't one of them.`,
      `None of these characters feel fully-fledged... for a film so rife with schmaltzy musings on the meaning of life, it's alarming how lacking it is in this department.`,
    ],
  },
  {
    id: 'os03j',
    name: 'The Girl With the Dragon Tattoo',
    score: 87,
    year: 2011,
    durationInMinutes: 158,
    reviews: [
      `I could not take my eyes off the film and never once wanted to exit the theatre, all of which are attributes I don't want to diminish or dispute in any way whatsoever.`,
      `The movie feels like a cartoon, brilliantly achieved but utterly shallow.`,
      `For this particular story, Fincher's style is just too sleek.`,
      `An incredibly well done thriller.`,
      `For the most part, David Fincher's new adaptation is identical to the original film.`,
    ],
  },
  {
    id: '39cns',
    name: 'Incredibles 2',
    score: 93,
    year: 2018,
    durationInMinutes: 118,
    reviews: [],
  },
  {
    id: '03qjf',
    name: 'Kingsman: The Secret Service',
    score: 75,
    year: 2014,
    durationInMinutes: 129,
    reviews: ['Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, id?'],
  },
  {
    id: 'kd03l',
    name: 'A Quiet Place',
    score: 96,
    year: 2018,
    durationInMinutes: 130,
    reviews: [`I can't review it, i need to be quiet.`, 'Perfect piece of art.'],
  },
  {
    id: 'l40sk',
    name: 'How to Train Your Dragon',
    score: 99,
    year: 2010,
    durationInMinutes: 138,
    reviews: [
      `It's a foolproof scheme for picture making: take the plot elements of favorite movies, paint the concoction with bright colors so it looks like the zazziest customized car, set it running at NASCAR speed, and you have How to Train Your Dragon.`,
      `Three cheers to DreamWorks for zipping it, at long last: in laying aside the post-modern quips, they've rediscovered an airborne sense of joy.`,
      `Has all the ingredients of a blockbuster action film - yet it's a family-friendly computer-animated movie.`,
      `You can see that the animators who worked on How to Train Your Dragon loved every minute of making it.`,
    ],
  },
  {
    id: '03m8d',
    name: 'The Mitchells vs. the Machines',
    score: 98,
    year: 2021,
    durationInMinutes: 116,
    reviews: [
      `In "The Mitchells vs. the Machines," family life is a brilliant, ever-changing collage.`,
      `The Mitchells vs. the Machines is an unbeatable combination of humor and heart.`,
      `An emotionally moving, funny, visually appealing, and fun road trip movie. Loved the family dynamic and its relatability.`,
    ],
  },
]
