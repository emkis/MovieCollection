export interface Movie {
  id: string
  name: string
  description: string
  category: string[]
  score: number
  year: number
  durationInMinutes: number
  reviews: Review[]
}

export interface Review {
  id: string
  score: number
  comment: string
  author: string
  authorCompany: string
}

export type MovieCard = Pick<Movie, 'id' | 'name' | 'category' | 'score' | 'year'>
