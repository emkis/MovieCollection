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

export type Movie = Pick<MovieDetail, 'id' | 'name' | 'category' | 'score' | 'year'>
