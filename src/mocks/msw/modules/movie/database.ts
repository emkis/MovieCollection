import { movies, makeMovieIdentifier, MovieComplete } from './movies'

function createMovieDatabase() {
  function getAll(): MovieComplete[] {
    return movies
  }

  function create(movie: MovieComplete) {
    const completeMovie = {
      ...movie,
      ...makeMovieIdentifier(movie.name),
    }

    movies.push(completeMovie)
    return completeMovie
  }

  function getBySlug(movieSlug: string) {
    return movies.find((movie) => movie.slug === movieSlug)
  }

  return {
    getAll,
    getBySlug,
    create,
  }
}

export const movieDatabase = createMovieDatabase()
