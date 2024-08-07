import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from '@material-tailwind/react'
import { ProjectDialogType } from '../constants'
import { IconButton } from '@material-tailwind/react'
import { useTranslation } from 'react-i18next'

export default function DialogProject({
  open,
  handleOpen,
  data,
}: DialogProjectType) {
  const { t } = useTranslation()

  const handleRedirect = () => {
    window.open(data?.site, '_blank')
  }

  return (
    <Dialog open={open} handler={handleOpen} className="p-5 dark:bg-tertiary">
      <DialogHeader className="flex justify-between text-lg md:text-body font-body text-primary-light dark:text-primary">
        {t(`project.${data.name}.title`)}
        <a href={data?.github} target="_blank">
          <IconButton className="rounded-full bg-primary-light">
            <i className="fab fa-github text-lg" />
            <span className="sr-only">Github link</span>
          </IconButton>
        </a>
      </DialogHeader>
      <DialogBody className="flex flex-col font-body text-primary-light dark:text-primary h-[20rem] md:h-auto overflow-scroll md:overflow-hidden">
        <p>{t(`project.${data.name}.subtitle`)}</p>
        <p>{t(`project.${data.name}.content`)}</p>
        <img src={data?.img} alt={t(`project.${data.name}.imgAlt`)} />
      </DialogBody>
      <DialogFooter className="flex flex-row-reverse justify-between">
        <Button variant="gradient" color="gray" onClick={handleOpen}>
          <span>{t(`project.dialog.close`)}</span>
        </Button>
        {data?.site ? (
          <Button variant="gradient" color="gray" onClick={handleRedirect}>
            <span>{t(`project.dialog.visit`)}</span>
          </Button>
        ) : null}
      </DialogFooter>
    </Dialog>
  )
}

type DialogProjectType = {
  open: boolean
  handleOpen: HandleOpen
  data: ProjectDialogType
}

type HandleOpen = {
  (): void
}
