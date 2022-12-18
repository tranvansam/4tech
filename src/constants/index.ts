import i18n from '~/i18n'
import theUSFlagImg from '~/assets/images/us_flag.png'
import vietnamFlagImg from '~/assets/images/vietnam_flag.png'
import CalendarTickIcon from '~/assets/images/calendar_tick.svg?component'
import PenToolIcon from '~/assets/images/pen_tool.svg?component'
import PeopleIcon from '~/assets/images/people.svg?component'
import game1Img from '~/assets/images/game1.png'
import game2Img from '~/assets/images/game2.png'
import game3Img from '~/assets/images/game3.png'
import game4Img from '~/assets/images/game4.png'
import game5Img from '~/assets/images/game5.png'
import game6Img from '~/assets/images/game6.png'
import game7Img from '~/assets/images/game7.png'
import game8Img from '~/assets/images/game8.png'
import game9Img from '~/assets/images/game9.png'
import game10Img from '~/assets/images/game10.png'
import game11Img from '~/assets/images/game11.png'
import game12Img from '~/assets/images/game12.png'
import TwitterIcon from '~/assets/images/twitter_logo.svg?component'
import FacebookIcon from '~/assets/images/facebook_logo.svg?component'
import LinkedinIcon from '~/assets/images/linkedin_logo.svg?component'
import { ILanguageTranslation, IMenuItemTranslation } from '~/interfaces'

export const menuItems: IMenuItemTranslation[] = [
  {
    labelKey: 'menu.about_us',
    link: '#about-us'
  },
  {
    labelKey: 'menu.games',
    link: '#games'
  },
  {
    labelKey: 'menu.partners',
    link: '#partners'
  },
  {
    labelKey: 'menu.contact_us',
    link: '#contact-us'
  }
]

export const languageValues = {
  VIETNAMESE: 'vi',
  ENGLISH: 'en'
}

export const DEFAULT_LANGUAGE = languageValues.ENGLISH

export const languages: ILanguageTranslation[] = [
  {
    value: languageValues.VIETNAMESE,
    labelKey: 'language.vietnamese',
    icon: vietnamFlagImg
  },
  {
    value: languageValues.ENGLISH,
    labelKey: 'language.english',
    icon: theUSFlagImg
  }
]

export const benefits = [
  {
    titleKey: 'about_us.benefits.benefit_1.title',
    descriptionKey: 'about_us.benefits.benefit_1.description',
    icon: CalendarTickIcon
  },
  {
    titleKey: 'about_us.benefits.benefit_2.title',
    descriptionKey: 'about_us.benefits.benefit_2.description',
    icon: PenToolIcon
  },
  {
    titleKey: 'about_us.benefits.benefit_3.title',
    descriptionKey: 'about_us.benefits.benefit_3.description',
    icon: PeopleIcon
  }
]

export const games = [
  {
    title: 'E-Space',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    backgroundImage: game1Img
  },
  {
    title: 'Pirates',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    backgroundImage: game2Img
  },
  {
    title: 'Magic tree',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    backgroundImage: game3Img
  },
  {
    title: 'Kingland',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    backgroundImage: game4Img
  },
  {
    title: 'Witch Party',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    backgroundImage: game5Img
  },
  {
    title: 'Aborigines',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    backgroundImage: game6Img
  },
  {
    title: 'The Last Game',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    backgroundImage: game7Img
  },
  {
    title: 'Rocky',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    backgroundImage: game8Img
  },
  {
    title: 'Cinderella',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    backgroundImage: game9Img
  },
  {
    title: 'G-Dragon',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    backgroundImage: game10Img
  },
  {
    title: 'Blue Fire',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    backgroundImage: game11Img
  },
  {
    title: 'Egypt Game',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    backgroundImage: game12Img
  }
]

export const socialMediaList = [
  { icon: TwitterIcon },
  { icon: FacebookIcon },
  { icon: LinkedinIcon }
]

export const addresses = ['address.address_1', 'address.address_2']

export const ONE_SECOND = 1_000 // ms
export const ONE_MINUTE = 60 * ONE_SECOND
export const ONE_HOUR = 60 * ONE_MINUTE
export const ONE_DAY = 24 * ONE_HOUR
