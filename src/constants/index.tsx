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
import Booki from '../assets/bg-booki.webp'
import Events from '../assets/bg-events.webp'
import ArgentBank from '../assets/bg-argentbank.webp'
import Kasa from '../assets/bg-kasa.webp'
import SophieBluel from '../assets/bg-sophiebluel.webp'
import Ohmyfood from '../assets/bg-ohmyfood.webp'
import NinaCarducci from '../assets/bg-ninacarducci.webp'

import PortfolioDialog from '../assets/dialog/portfolio.png'
import BookiDialog from '../assets/dialog/booki.png'
import EventsDialog from '../assets/dialog/724events.png'
import ArgentBankDialog from '../assets/dialog/argentbank.png'
import KasaDialog from '../assets/dialog/kasa.png'
import SophieBluelDialog from '../assets/dialog/sophiebluel.png'
import OhmyfoodDialog from '../assets/dialog/ohmyfood.png'
import NinaCarducciDialog from '../assets/dialog/ninacarducci.png'

export const emptyDialog: ProjectDialogType = {
  name: '',
  github: '',
  img: '',
}

export const projects: Array<ProjectType> = [
  {
    icons: [{img: React, alt: 'project.icons.react'}, {img: TypeScript, alt: 'project.icons.ts'}, {img: Tailwind, alt: 'project.icons.tailwind'}],
    name: 'portfolio',
    backgroundImage: Portfolio,
    dialog: {
      name: "portfolio.dialog",
      github: 'https://github.com/Mutur16/portfolio',
      img: PortfolioDialog,
    },
  },
  {
    icons: [{img: React, alt: 'project.icons.react'}, {img: TypeScript, alt: 'project.icons.ts'}, {img: SASS, alt: 'project.icons.sass'}],
    name: 'argentbank',
    backgroundImage: ArgentBank,
    dialog: {
      name: "argentbank.dialog",
      github: 'https://github.com/Mutur16/oc-project11',
      img: ArgentBankDialog,
    },
  },
  {
    icons: [{img: React, alt: 'project.icons.react'}, {img: SASS, alt: 'project.icons.sass'}],
    name: 'kasa',
    backgroundImage: Kasa,
    dialog: {
      name: "kasa.dialog",
      github: 'https://github.com/Mutur16/oc-project8',
      img: KasaDialog,
    },
  },
  {
    icons: [{img: JS, alt: 'project.icons.js'}, {img: CSS, alt: 'project.icons.css'}],
    name: 'sophiebluel',
    backgroundImage: SophieBluel,
    dialog: {
      name: "sophiebluel.dialog",
      github: 'https://github.com/Mutur16/oc-project6',
      img: SophieBluelDialog,
    },
  },
  {
    icons: [{img: HTML, alt: 'project.icons.html'}, {img: SASS, alt: 'project.icons.sass'}],
    name: 'ohmyfood',
    backgroundImage: Ohmyfood,
    dialog: {
      name: "ohmyfood.dialog",
      github: 'https://github.com/Mutur16/oc-project4',
      img: OhmyfoodDialog,
    },
  },
  {
    icons: [{img: HTML, alt: 'project.icons.html'}, {img: CSS, alt: 'project.icons.css'}],
    name: 'booki',
    backgroundImage: Booki,
    dialog: {
      name: "booki.dialog",
      github: 'https://github.com/Mutur16/oc-projet3',
      img: BookiDialog,
    },
  },
  {
    icons: [{img: Debug, alt: 'project.icons.debug'}],
    name: 'events',
    backgroundImage: Events,
    dialog: {
      name: "events.dialog",
      github: 'https://github.com/Mutur16/oc-project10',
      img: EventsDialog,
    },
  },
  {
    icons: [{img: SEO, alt: 'project.icons.seo'}, {img: Accessibility, alt: 'project.icons.accessibility'}],
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
  icons: Array<ProjectIcon>
  name: string
  backgroundImage: string
  dialog?: ProjectDialogType
}

type ProjectIcon = {
  img: string
  alt: string
}

export type ProjectDialogType = {
  name: string
  github: string
  img: string
}
