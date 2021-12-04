import React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import { TUser } from 'types'
import { Avatar, IconButton, Stack } from '@mui/material'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever'
import EditIcon from '@mui/icons-material/Edit'

export type UserCardProps = {
  user: TUser
  setOpenDelateDialog: (openDelateDialog: boolean) => void
  setOpenEditDialog: (openEditDialog: boolean) => void
  setSelectUserData: (userData: TUser) => void
}
export const UserCard: React.FC<UserCardProps> = ({
  user,
  setOpenDelateDialog,
  setOpenEditDialog,
  setSelectUserData,
}) => {
  return (
    <Card
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <CardContent
        sx={{
          width: '100%',
        }}
      >
        <Typography
          component="div"
          sx={{
            fontSize: 14,
            display: 'flex',
            justifyContent: 'space-between',
            width: '100%',
          }}
          gutterBottom
        >
          <Avatar src={user.avatar} sx={{ backgroundColor: '#7ea5d6' }}>
            {`${user.name.charAt(0)}${user.surname.charAt(0)}`}
          </Avatar>
          <Stack direction="row" spacing={1}>
            <IconButton
              onClick={() => {
                setOpenEditDialog(true)
                setSelectUserData(user)
              }}
            >
              <EditIcon />
            </IconButton>
            <IconButton
              onClick={() => {
                setOpenDelateDialog(true)
                setSelectUserData(user)
              }}
            >
              <DeleteForeverIcon />
            </IconButton>
          </Stack>
        </Typography>
        <Typography variant="h5" component="div">
          {`${user.name} ${user.surname}`}
        </Typography>
        <Typography component="div" sx={{ mb: 1.5 }} color="text.secondary">
          {user.desc}
        </Typography>
        <Typography component="div" variant="body2">
          {`id: ${user.id}`}
        </Typography>
      </CardContent>
    </Card>
  )
}
