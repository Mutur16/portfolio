import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from '@material-tailwind/react'
import { ProjectDialogType } from '../constants'
import { IconButton } from '@material-tailwind/react'

export default function DialogProject({
  open,
  handleOpen,
  data,
}: DialogProjectType) {

  return (
    <Dialog open={open} handler={handleOpen} className="p-5 dark:bg-tertiary">
      <DialogHeader className="flex justify-between text-lg md:text-body font-body text-tertiary-light dark:text-primary">
        {data?.title}
        <a href={data?.github} target="_blank">
          <IconButton className="rounded-full bg-tertiary-light">
            <i className="fab fa-github text-lg" />
          </IconButton>
        </a>
      </DialogHeader>
      <DialogBody className="flex flex-col font-body text-primary-light dark:text-primary">
        <p>{data?.subtitle}</p>
        <p>{data?.content}</p>
        <img src={data?.img} />
      </DialogBody>
      <DialogFooter>
        <Button variant="gradient" color="gray" onClick={handleOpen}>
          <span>Fermer</span>
        </Button>
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
