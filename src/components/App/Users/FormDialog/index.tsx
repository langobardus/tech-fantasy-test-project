import React, { useState } from 'react'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'

export type FormDialogProps = {
  openDialog: boolean
  setOpenDialog: (openDialog: boolean) => void
}
export const FormDialog: React.FC<FormDialogProps> = ({
  openDialog,
  setOpenDialog,
}) => {
  const [buttonSend, setButtonSend] = useState(false)

  const [email, setEmail] = useState('')
  const [emailValidated, setEmailValidated] = useState(false)
  const emailValidateHandler = (val: string) => {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    setEmailValidated(re.test(val))
  }
  const setEmailHandler = (val: string) => {
    setEmail(val)
    emailValidateHandler(val)
  }

  const [name, setName] = useState('')
  const [nameValidated, setNameValidated] = useState(false)
  const nameValidateHandler = (val: string) => {
    setNameValidated(val.length > 1 && val.length < 50)
  }
  const setNameHandler = (val: string) => {
    setName(val)
    nameValidateHandler(val)
  }

  const [lastName, setLastName] = useState('')
  const [lastNameValidated, setLastNameValidated] = useState(false)
  const lastNameValidateHandler = (val: string) => {
    setLastNameValidated(val.length > 1 && val.length < 50)
  }
  const setLastNameHandler = (val: string) => {
    setLastName(val)
    lastNameValidateHandler(val)
  }

  const resetFormHandler = () => {
    setOpenDialog(false)

    setEmail('')
    setName('')
    setLastName('')

    setEmailValidated(false)
    setNameValidated(false)
    setLastNameValidated(false)

    setButtonSend(false)
  }

  const formValidate = () => {
    setButtonSend(true)
    emailValidateHandler(email)
    nameValidateHandler(name)
    setLastNameHandler(lastName)
    if (emailValidated && nameValidated && lastNameValidated) resetFormHandler()
  }

  return (
    <div>
      <Dialog open={openDialog} onClose={() => setOpenDialog(true)}>
        <DialogTitle>Добавить нового пользователя</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Чтобы добавить пользователя - заполните, пожалуйста, все поля
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="email"
            error={!emailValidated && buttonSend}
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setEmailHandler(e.target.value)
            }}
          />
          <TextField
            id="name"
            error={!nameValidated && buttonSend}
            margin="dense"
            label="Имя"
            type="text"
            fullWidth
            variant="standard"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setNameHandler(e.target.value)
            }
          />
          <TextField
            id="lastname"
            error={!lastNameValidated && buttonSend}
            margin="dense"
            label="Фамилия"
            type="text"
            fullWidth
            variant="standard"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setLastNameHandler(e.target.value)
            }
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={resetFormHandler}>Отмена</Button>
          <Button onClick={formValidate}>Добавить</Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}
