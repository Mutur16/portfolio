import { ReactNode } from 'react'

import booki from '../assets/booki.png'

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from '@material-tailwind/react'

export default function PortfolioCard(): ReactNode {
  return (
    <Card className="mt-6 w-96">
      <CardHeader color="blue-gray" className="relative h-56">
        <img src={booki} alt="card-image" />
      </CardHeader>
      <CardBody>
        <Typography variant="h5" color="blue-gray" className="mb-2">
          Booki
        </Typography>
        <Typography>
          Intégration de l'interface en HTML et CSS
        </Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <Button>Lire Plus</Button>
      </CardFooter>
    </Card>
  )
}
