const AVERAGE_MOVIE_SCORE = 55

export function isGoodReviewScore(score: number): boolean {
  return score > AVERAGE_MOVIE_SCORE
}

export function isGoodMovieScore(score: number): boolean {
  return score > AVERAGE_MOVIE_SCORE
}
