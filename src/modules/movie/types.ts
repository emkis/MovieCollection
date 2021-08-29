export interface MovieDetail {
  id: string
  slug: string
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

export type Movie = Pick<MovieDetail, 'id' | 'slug' | 'name' | 'category' | 'score' | 'year'>
