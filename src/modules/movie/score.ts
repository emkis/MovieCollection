const AVERAGE_MOVIE_SCORE = 55
const MAX_HEART_SCORE = 5

export function isGoodMovieScore(score: number): boolean {
  return score > AVERAGE_MOVIE_SCORE
}

export function getMovieScore(score: number): string {
  const calculatedScore = (MAX_HEART_SCORE * score) / 100
  return calculatedScore.toFixed(2)
}
