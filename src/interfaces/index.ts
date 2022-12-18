export interface ILanguage {
  value: string
  label: string
  icon: string
}

export interface ILanguageTranslation {
  value: string
  labelKey: string
  icon: string
}

export interface IMenuItem {
  label: string
  link?: string
}

export interface IMenuItemTranslation {
  labelKey: string
  link?: string
}

export interface IDate {
  seconds: number
  minutes: number
  hours: number
  days: number
}

export type Nullable<T> = T | null
