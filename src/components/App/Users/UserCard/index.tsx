import React, { useState } from 'react'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { TPost } from 'types'
import { IconButton, Paper, Stack } from '@mui/material'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever'
import EditIcon from '@mui/icons-material/Edit'
import { DelateDialog } from '../User/DelateDialog'

export type UserCardProps = {
  user: TPost
  setOpenDelateDialog: (openDelateDialog: boolean) => void
}
export const UserCard: React.FC<UserCardProps> = ({
  user,
  setOpenDelateDialog,
}) => {
  return (
    <Card
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <CardContent>
        <Typography
          sx={{
            fontSize: 14,
            display: 'flex',
            justifyContent: 'space-between',
          }}
          color="text.secondary"
          gutterBottom
        >
          {`${user.id}`}
          <Stack direction="row" spacing={1}>
            <IconButton>
              <EditIcon />
            </IconButton>
            <IconButton onClick={() => setOpenDelateDialog(true)}>
              <DeleteForeverIcon />
            </IconButton>
          </Stack>
        </Typography>
        <Typography variant="h5" component="div">
          {user.title}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {user.body}
        </Typography>
        <Typography variant="body2">
          well meaning and kindly. a benevolent smile
        </Typography>
      </CardContent>
    </Card>
  )
}
