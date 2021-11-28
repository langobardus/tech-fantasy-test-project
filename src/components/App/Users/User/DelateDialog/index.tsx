import React, { useState } from 'react'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import { Alert } from '@mui/material'

export type FormDialogProps = {
  openDialog: boolean
  setOpenDialog: (openDialog: boolean) => void
}
export const DelateDialog: React.FC<FormDialogProps> = ({
  openDialog,
  setOpenDialog,
}) => {
  return (
    <div>
      <Dialog open={openDialog} onClose={() => setOpenDialog(true)}>
        <DialogTitle>Удаление пользователя</DialogTitle>
        <DialogContent>
          <DialogContentText>
            <Alert severity="error">
              Вы действительно хотите удалить пользователя?
            </Alert>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenDialog(false)}>Отмена</Button>
          <Button onClick={() => setOpenDialog(false)}>Удалить</Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}
