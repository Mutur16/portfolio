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

import Portfolio from '../assets/2.png'
import Booki from '../assets/aw-creative.jpg'
import Events from '../assets/headway-F2KRf_QfCqw-unsplash.png'
import ArgentBank from '../assets/bank-tree.webp'
import Kasa from '../assets/kasa.png'
import SophieBluel from '../assets/structures-thermopolis.png'
import Ohmyfood from '../assets/toa-heftiba-DQKerTsQwi0-unsplash.jpg'
import NinaCarducci from '../assets/aaron-paul-wnX-fXzB6Cw-unsplash-mobile.webp'

export const projects: Array<projectType> = [
  {
    icons: [React, TypeScript, Tailwind],
    title: 'Portfolio',
    content: 'Création de mon site Portfolio avec React, TypeScript et Tailwind CSS.',
    backgroundImage: Portfolio,
  },
  {
    icons: [React, TypeScript, SASS],
    title: 'ArgentBank',
    content: "Implémentation du front-end avec React et rédaction de routes à créer pour l'API.",
    backgroundImage: ArgentBank,
  },
  {
    icons: [React, SASS],
    title: 'Kasa',
    content: 'Refonte totale du site Kasa pour passer à une stack React côté front-end.',
    backgroundImage: Kasa,
  },
  {
    icons: [JS, CSS],
    title: 'Sophie Bluel',
    content: "Création d'une page web dynamique en JavaScript.",
    backgroundImage: SophieBluel,
  },
  {
    icons: [HTML, SASS],
    title: 'Ohmyfood',
    content: "Amélioration de l'interface du site Ohmyfood avec des animations.",
    backgroundImage: Ohmyfood,
  },
  {
    icons: [HTML, CSS],
    title: 'Booki',
    content: "Intégration statique d'une maquette en HTML et CSS.",
    backgroundImage: Booki,
  },
  {
    icons: [Debug],
    title: '724 Events',
    content: 'Débuggage du site 724 Events et rédaction de tests unitaires.',
    backgroundImage: Events,
  },
  {
    icons: [SEO, Accessibility],
    title: 'Nina Carducci',
    content: "Amélioration du score de l'audit Lighthouse et de l'accessibilité.",
    backgroundImage: NinaCarducci,
  },
]

type projectType = {
  icons: Array<string>
  title: string
  content: string
  backgroundImage: string
}
