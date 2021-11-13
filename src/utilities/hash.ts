import hash from 'hash-string'

export function hashString(text: string): string {
  return hash(text)
}
