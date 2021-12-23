export const movieKeys = {
  all: ['movie'] as const,

  allDetails: () => [...movieKeys.all, 'detail'] as const,
  detailWithSlug: (slug: string) => [...movieKeys.allDetails(), slug] as const,

  allReviews: () => [...movieKeys.all, 'review'] as const,
  reviewWithSlug: (slug: string) => [...movieKeys.allReviews(), slug] as const,
}
