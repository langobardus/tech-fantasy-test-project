import React, { useEffect, useState } from 'react'
import Masonry from '@mui/lab/Masonry'
import { TPost } from 'types'
import PersonAddIcon from '@mui/icons-material/PersonAdd'
import { Box, Container, Fab } from '@mui/material'
import { NUM_ITEMS_ON_PAGE } from '../../../constants'
import { PaginationMenu } from './PaginationMenu'
import { User } from './User'
import { FormDialog } from './FormDialog'
import { UserCard } from './UserCard'
import { DelateDialog } from './User/DelateDialog'

export type UsersProps = {
  getUsersHandler: () => void
  users: TPost[]
  pageCountSelect: number
  setPageCountSelectHandler: (pageCountSelect: number) => void
}
export const Users: React.FC<UsersProps> = ({
  getUsersHandler,
  users,
  pageCountSelect,
  setPageCountSelectHandler,
}) => {
  useEffect(() => {
    getUsersHandler()
  }, [getUsersHandler])

  const [openDialog, setOpenDialog] = useState(false)
  const [openDelateDialog, setOpenDelateDialog] = useState(false)

  const usersMap = []
  const startItem = pageCountSelect * NUM_ITEMS_ON_PAGE
  const stopItem =
    startItem + NUM_ITEMS_ON_PAGE < users.length
      ? startItem + NUM_ITEMS_ON_PAGE
      : users.length
  for (let i = startItem; i < stopItem; i += 1) {
    usersMap.push(
      <UserCard
        key={`user-${users[i].id}`}
        user={users[i]}
        setOpenDelateDialog={setOpenDelateDialog}
      />
    )
  }

  return (
    <>
      <Container maxWidth="lg">
        <Box sx={{ width: '100%', minHeight: 693 }}>
          <Masonry columns={{ xs: 1, sm: 2 }} spacing={3}>
            {usersMap}
          </Masonry>
        </Box>
      </Container>
      <Fab
        variant="extended"
        color="primary"
        aria-label="add"
        style={{ position: 'absolute', bottom: 20, right: 40 }}
        onClick={() => setOpenDialog(true)}
      >
        <PersonAddIcon />
      </Fab>
      <PaginationMenu
        setPageCountSelectHandler={setPageCountSelectHandler}
        pageCountSelect={pageCountSelect}
        itemsTotalCount={8}
      />
      <FormDialog openDialog={openDialog} setOpenDialog={setOpenDialog} />
      <DelateDialog
        openDialog={openDelateDialog}
        setOpenDialog={setOpenDelateDialog}
      />
    </>
  )
}
