import React, { useState } from 'react'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import { TUser } from 'types'

export type AddUserDialogProps = {
  openDialog: boolean
  setOpenDialog: (openDialog: boolean) => void
  setSelectUserDataHandler: (selectUserData: TUser) => void
  addUserHandler: () => void
}
export const AddUserDialog: React.FC<AddUserDialogProps> = ({
  openDialog,
  setOpenDialog,
  setSelectUserDataHandler,
  addUserHandler,
}) => {
  const [buttonSend, setButtonSend] = useState(false)

  const [desc, setDesc] = useState('')
  const [descValidated, setDescValidated] = useState(false)
  const descValidateHandler = (val: string) => {
    setDescValidated(val.length > 1 && val.length < 50)
  }
  const setDescHandler = (val: string) => {
    setDesc(val)
    descValidateHandler(val)
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

  const [surname, setSurname] = useState('')
  const [surnameValidated, setSurnameValidated] = useState(false)
  const surnameValidateHandler = (val: string) => {
    setSurnameValidated(val.length > 1 && val.length < 50)
  }
  const setSurnameHandler = (val: string) => {
    setSurname(val)
    surnameValidateHandler(val)
  }

  const resetFormHandler = () => {
    setOpenDialog(false)

    setDesc('')
    setName('')
    setSurname('')

    setDescValidated(false)
    setNameValidated(false)
    setSurnameValidated(false)

    setButtonSend(false)
  }

  const formValidate = () => {
    setButtonSend(true)
    descValidateHandler(desc)
    nameValidateHandler(name)
    setSurnameHandler(surname)
    if (descValidated && nameValidated && surnameValidated) {
      setSelectUserDataHandler({
        name,
        surname,
        desc,
      })
      addUserHandler()
      resetFormHandler()
    }
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
            id="name"
            error={!nameValidated && buttonSend}
            margin="dense"
            label="Имя"
            type="text"
            fullWidth
            variant="standard"
            value={name}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setNameHandler(e.target.value)
            }
          />
          <TextField
            id="lastname"
            error={!surnameValidated && buttonSend}
            margin="dense"
            label="Фамилия"
            type="text"
            fullWidth
            variant="standard"
            value={surname}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setSurnameHandler(e.target.value)
            }
          />
          <TextField
            autoFocus
            margin="dense"
            id="desc"
            error={!descValidated && buttonSend}
            label="Описание"
            type="desc"
            fullWidth
            variant="standard"
            value={desc}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setDescHandler(e.target.value)
            }}
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
