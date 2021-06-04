export function uuid() {
  return Math.random().toString(16).slice(2)
}

export function asyncDelay(ms = 1000) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}
