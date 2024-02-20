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

import PortfolioDialog from '../assets/portfolio_dialog.png'
import BookiDialog from '../assets/booki_dialog.png'
import EventsDialog from '../assets/724events_dialog.png'
import ArgentBankDialog from '../assets/argentbank_dialog.png'
import KasaDialog from '../assets/kasa_dialog.png'
import SophieBluelDialog from '../assets/sophiebluel_dialog.png'
import OhmyfoodDialog from '../assets/ohmyfood_dialog.png'
import NinaCarducciDialog from '../assets/ninacarducci_dialog.png'

export const emptyDialog: ProjectDialogType = {
  title: '',
  github: '',
  subtitle: '',
  content: '',
  img: '',
}

export const projects: Array<ProjectType> = [
  {
    icons: [React, TypeScript, Tailwind],
    title: 'Portfolio',
    content:
      'Création de mon site Portfolio avec React, TypeScript et Tailwind CSS.',
    backgroundImage: Portfolio,
    dialog: {
      title: 'Portfolio',
      github: 'https://github.com/Mutur16/portfolio',
      subtitle:
        'Ce site permet de me présenter et de répertorier une partie de mon travail.',
      content:
        "Mon portfolio est responsive et a été développé en React. Afin de continuer à m'exercer à TypeScript je l'ai utilisé ici. J'ai également décidé de me familiariser avec Tailwind CSS en l'utilisant pour la première fois dans ce projet.",
      img: PortfolioDialog,
    },
  },
  {
    icons: [React, TypeScript, SASS],
    title: 'ArgentBank',
    content:
      "Implémentation du front-end avec React et rédaction de routes à créer pour l'API.",
    backgroundImage: ArgentBank,
    dialog: {
      title: 'ArgentBank [Projet OpenClassroom]',
      github: 'https://github.com/Mutur16/oc-project11',
      subtitle: 'Argent Bank est une nouvelle banque en ligne.',
      content:
        "Je me suis occupée de la mise en place du tableau de bord des utilisateurs de la banque avec React et Redux. J'ai également utilisé TypeScript pour une meilleure documentation du code. J'ai aussi eu l'occasion d'écrire de la documentaion OpenAPI et de déterminer de nouveaux endpoints.",
      img: ArgentBankDialog,
    },
  },
  {
    icons: [React, SASS],
    title: 'Kasa',
    content:
      'Refonte totale du site Kasa pour passer à une stack React côté front-end.',
    backgroundImage: Kasa,
    dialog: {
      title: 'Kasa [Projet OpenClassroom]',
      github: 'https://github.com/Mutur16/oc-project8',
      subtitle:
        "Kasa est une platforme web qui permet la location d'appartements entre particuliers.",
      content:
        "Sur ce projet j'ai pu m'initier à React et aux composants réutilasables. Je me suis également assurée que le site était responsive et que l'intégration respectée bien la maquette.",
      img: KasaDialog,
    },
  },
  {
    icons: [JS, CSS],
    title: 'Portfolio de Sophie Bluel',
    content: "Création d'une page web dynamique en JavaScript.",
    backgroundImage: SophieBluel,
    dialog: {
      title: 'Portfolio de Sophie Bluel [Projet OpenClassroom]',
      github: 'https://github.com/Mutur16/oc-project6',
      subtitle:
        "Sophie Bluel est une architecte d'intérieur qui partage son travail sur son site portfolio.",
      content:
        "J'ai réalisé l'intégration de la maquette avec HTML et CSS. Afin que la cliente puisse mettre à jour elle-même ses travaux j'ai utilisé JavaScript.",
      img: SophieBluelDialog,
    },
  },
  {
    icons: [HTML, SASS],
    title: 'Ohmyfood',
    content:
      "Amélioration de l'interface du site Ohmyfood avec des animations.",
    backgroundImage: Ohmyfood,
    dialog: {
      title: 'Ohmyfood [Projet OpenClassroom]',
      github: 'https://github.com/Mutur16/oc-project4',
      subtitle:
        'Ohmyfood est un site qui répertorie les menus de restaurants gastronomiques et qui permettra par la suite la réservation de son menu. ',
      content:
        "J'ai réalisé l'intégration de la maquette ainsi que les animations qui étaient souhaitées avec SASS uniquement. Ce site est responsive et a été développé en mobile first.",
      img: OhmyfoodDialog,
    },
  },
  {
    icons: [HTML, CSS],
    title: 'Booki',
    content: "Intégration statique d'une maquette en HTML et CSS.",
    backgroundImage: Booki,
    dialog: {
      title: 'Booki [Projet OpenClassroom]',
      github: 'https://github.com/Mutur16/oc-projet3',
      subtitle:
        'Booki est une agence de voyage et son site permet aux usagers de trouver des hébergements et des activités dans la ville de leur choix.',
      content:
        "Je me suis occupée de faire l'intégration en HTML et CSS de la maquette communiquée. Le site Booki est responsive.",
      img: BookiDialog,
    },
  },
  {
    icons: [Debug],
    title: '724 Events',
    content: 'Déboggage du site 724 Events et rédaction de tests unitaires.',
    backgroundImage: Events,
    dialog: {
      title: '724 Events [Projet OpenClassroom]',
      github: 'https://github.com/Mutur16/oc-project10',
      subtitle:
        "724 Events est une agence d'événementiel possédant un site vitrine.",
      content:
        "Le premier développeur à avoir travaillé sur le projet a du abandonner le projet de ce fait quelques bugs étaient présent. Mon rôle a été de corrigé les bugs majeurs. J'ai également corrigé des bugs mineurs qui rendaient l'expérience utilisateur moins agréables. J'ai pu mettre en place des tests unitaires et en coriger certains sur ce projet.",
      img: EventsDialog,
    },
  },
  {
    icons: [SEO, Accessibility],
    title: 'Nina Carducci',
    content:
      "Amélioration du score de l'audit Lighthouse et de l'accessibilité.",
    backgroundImage: NinaCarducci,
    dialog: {
      title: 'Portfolio de Nina Carducci [Projet OpenClassroom]',
      github: 'https://github.com/Mutur16/oc-project9',
      subtitle:
        "Sophie Bluel est une architecte d'intérieur qui partage son travail sur son site portfolio.",
      content:
        "Mon rôle a été d'optimiser le site et de le rendre plus accessible. Pour l'optimisation j'ai notamment modifié les images et minifié le code. Pour l'accessibilité j'ai entre autre fait des modifications sur la sémantique HTML, le contraste des couleurs, ajouté l'attribut alt. J'ai pu m'aider des outils comme Wave ou Lighthouse.",
      img: NinaCarducciDialog,
    },
  },
]

export type ProjectType = {
  icons: Array<string>
  title: string
  content: string
  backgroundImage: string
  dialog?: ProjectDialogType
}

export type ProjectDialogType = {
  title: string
  github: string
  subtitle: string
  content: string
  img: string
}
