import HTML from '../assets/icons/html.svg'
import CSS from '../assets/icons/css.svg'
import Tailwind from '../assets/icons/tailwind-css.svg'
import SASS from '../assets/icons/sass.svg'
import JS from '../assets/icons/javascript.svg'
import React from '../assets/icons/react-native.svg'
import TypeScript from '../assets/icons/typescript.svg'
import Debug from '../assets/icons/debug.png'
import SEO from '../assets/icons/seo.png'
import Accessibility from '../assets/icons/accessibility.png'

import Portfolio from '../assets/jour.png'
import Booki from '../assets/aw-creative.jpg'
import Events from '../assets/headway-F2KRf_QfCqw-unsplash.png'
import ArgentBank from '../assets/bank-tree.webp'
import Kasa from '../assets/kasa.png'
import SophieBluel from '../assets/structures-thermopolis.png'
import Ohmyfood from '../assets/toa-heftiba-DQKerTsQwi0-unsplash.jpg'
import NinaCarducci from '../assets/aaron-paul-wnX-fXzB6Cw-unsplash-mobile.webp'

import PortfolioDialog from '../assets/portfolio_dialog.png'
import BookiDialog from '../assets/booki_dialog.png'
import EventsDialog from '../assets/724events_dialog.png'
import ArgentBankDialog from '../assets/argentbank_dialog.png'
import KasaDialog from '../assets/kasa_dialog.png'
import SophieBluelDialog from '../assets/sophiebluel_dialog.png'
import OhmyfoodDialog from '../assets/ohmyfood_dialog.png'
import NinaCarducciDialog from '../assets/ninacarducci_dialog.png'

export const emptyDialog: ProjectDialogType = {
  name: '',
  github: '',
  img: '',
}

export const projects: Array<ProjectType> = [
  {
    icons: [React, TypeScript, Tailwind],
    name: 'portfolio',
    backgroundImage: Portfolio,
    dialog: {
      name: "portfolio.dialog",
      github: 'https://github.com/Mutur16/portfolio',
      img: PortfolioDialog,
    },
  },
  {
    icons: [React, TypeScript, SASS],
    name: 'argentbank',
    backgroundImage: ArgentBank,
    dialog: {
      name: "argentbank.dialog",
      github: 'https://github.com/Mutur16/oc-project11',
      img: ArgentBankDialog,
    },
  },
  {
    icons: [React, SASS],
    name: 'kasa',
    backgroundImage: Kasa,
    dialog: {
      name: "kasa.dialog",
      github: 'https://github.com/Mutur16/oc-project8',
      img: KasaDialog,
    },
  },
  {
    icons: [JS, CSS],
    name: 'sophiebluel',
    backgroundImage: SophieBluel,
    dialog: {
      name: "sophiebluel.dialog",
      github: 'https://github.com/Mutur16/oc-project6',
      img: SophieBluelDialog,
    },
  },
  {
    icons: [HTML, SASS],
    name: 'ohmyfood',
    backgroundImage: Ohmyfood,
    dialog: {
      name: "ohmyfood.dialog",
      github: 'https://github.com/Mutur16/oc-project4',
      img: OhmyfoodDialog,
    },
  },
  {
    icons: [HTML, CSS],
    name: 'booki',
    backgroundImage: Booki,
    dialog: {
      name: "booki.dialog",
      github: 'https://github.com/Mutur16/oc-projet3',
      img: BookiDialog,
    },
  },
  {
    icons: [Debug],
    name: 'events',
    backgroundImage: Events,
    dialog: {
      name: "events.dialog",
      github: 'https://github.com/Mutur16/oc-project10',
      img: EventsDialog,
    },
  },
  {
    icons: [SEO, Accessibility],
    name: 'ninacarducci',
    backgroundImage: NinaCarducci,
    dialog: {
      name: "ninacarducci.dialog",
      github: 'https://github.com/Mutur16/oc-project9',
      img: NinaCarducciDialog,
    },
  },
]

export type ProjectType = {
  icons: Array<string>
  name: string
  backgroundImage: string
  dialog?: ProjectDialogType
}

export type ProjectDialogType = {
  name: string
  github: string
  img: string
}
