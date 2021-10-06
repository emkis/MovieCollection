function isValidJSON(stringToTest: string): boolean {
  try {
    JSON.parse(stringToTest)
    return true
  } catch {
    return false
  }
}

export function validateStorageItem(key: string): boolean {
  const rawData = localStorage.getItem(key) as string
  const isParsable = isValidJSON(rawData)
  if (isParsable) return true

  localStorage.removeItem(key)
  return false
}
