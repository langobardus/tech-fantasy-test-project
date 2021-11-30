import React from 'react'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import { Alert } from '@mui/material'

export type DelateUserDialogProps = {
  openDialog: boolean
  setOpenDialog: (openDialog: boolean) => void
  deleteHandler: () => void
}
export const DelateUserDialog: React.FC<DelateUserDialogProps> = ({
  openDialog,
  setOpenDialog,
  deleteHandler,
}) => {
  return (
    <div>
      <Dialog open={openDialog} onClose={() => setOpenDialog(true)}>
        <DialogTitle>Удалить пользователя</DialogTitle>
        <DialogContent>
          <DialogContentText>
            <Alert severity="error">
              Вы действительно хотите удалить пользователя?
            </Alert>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenDialog(false)}>Отмена</Button>
          <Button
            onClick={() => {
              setOpenDialog(false)
              deleteHandler()
            }}
          >
            Удалить
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}
