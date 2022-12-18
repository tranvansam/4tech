import { ONE_DAY, ONE_HOUR, ONE_MINUTE, ONE_SECOND } from '~/constants'
import { IDate } from '~/interfaces'

export const durationToObject = (duration: number): IDate => {
  const days = Math.floor(duration / ONE_DAY)
  duration -= days * ONE_DAY
  const hours = Math.floor(duration / ONE_HOUR)
  duration -= hours * ONE_HOUR
  const minutes = Math.floor(duration / ONE_MINUTE)
  duration -= minutes * ONE_MINUTE
  const seconds = Math.floor(duration / ONE_SECOND)

  return { days, hours, minutes, seconds }
}

export const to2Digits = (number: number) => {
  return `00${number}`.slice(-2)
}
