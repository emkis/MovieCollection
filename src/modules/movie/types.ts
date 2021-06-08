export interface MovieDetail {
  id: string
  name: string
  description: string
  category: string[]
  score: number
  year: number
  duration: string
}

export interface MovieReview {
  id: string
  score: number
  comment: string
  author: string
  authorCompany: string
}

export type MovieCard = Pick<MovieDetail, 'id' | 'name' | 'category' | 'score' | 'year'>

export type FullMovieData = MovieDetail & {
  reviews: MovieReview[]
}
