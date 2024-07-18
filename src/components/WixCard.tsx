import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from '@material-tailwind/react'
import { WixProjectType } from '../containers/WixProjects'
import { useTranslation } from 'react-i18next'

export function WixCard({ image, title, name, site }: WixProjectType) {
  const handleRedirect = () => {
    window.open(site, '_blank')
  }
  const { t } = useTranslation()

  return (
    <Card className="mt-6 w-full bg-primary dark:bg-tertiary">
      <CardHeader color="white" className="relative h-56">
        <img
          src={image}
          alt="card-image"
          className="object-cover h-full w-full"
        />
      </CardHeader>
      <CardBody>
        <Typography
          variant="h5"
          className="mb-2 text-primary-light dark:text-secondary-light"
        >
          {t(title)}
        </Typography>
        <Typography className="dark:text-tertiary-light">
          {t(name)}
        </Typography>
      </CardBody>
      <CardFooter className="pt-0 flex flex-row self-end">
        <Button variant="gradient" color="gray" onClick={handleRedirect}>
        {t('wix.portfolio.button')}


        </Button>
      </CardFooter>
    </Card>
  )
}
