export function minutesInMilliseconds(wantedMinutes: number): number {
  const oneSecond = 1000
  const oneMinute = oneSecond * 60
  return oneMinute * wantedMinutes
}
