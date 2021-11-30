import React, { useEffect, useState } from 'react'
import Masonry from '@mui/lab/Masonry'
import { TUser } from 'types'
import PersonAddIcon from '@mui/icons-material/PersonAdd'
import { Box, Container, Fab } from '@mui/material'
import { NUM_ITEMS_ON_PAGE } from '../../../constants'
import { PaginationMenu } from './PaginationMenu'
import { AddUserDialog } from './AddUserDialog'
import { UserCard } from './UserCard'
import { DelateUserDialog } from './DelateUserDialog'
import { EditUserDialog } from './EditUserDialog'

export type UsersProps = {
  getUsersHandler: () => void
  users: TUser[]
  pageCountSelect: number
  setPageCountSelectHandler: (pageCountSelect: number) => void
  fetchDeleteUserHandler: () => void
  fetchEditUserHandler: () => void
  fetchAddUserHandler: () => void
  setSelectUserDataHandler: (selectUserData: TUser) => void
  selectUserData: TUser
}
export const Users: React.FC<UsersProps> = ({
  getUsersHandler,
  users,
  pageCountSelect,
  setPageCountSelectHandler,
  fetchDeleteUserHandler,
  fetchEditUserHandler,
  fetchAddUserHandler,
  setSelectUserDataHandler,
  selectUserData,
}) => {
  useEffect(() => {
    getUsersHandler()
  }, [getUsersHandler])

  const [openAddUserDialog, setOpenAddUserDialog] = useState(false)
  const [openDelateDialog, setOpenDelateDialog] = useState(false)
  const [openEditDialog, setOpenEditDialog] = useState(false)

  const userDataEmpty: TUser = {
    desc: '',
    name: '',
    surname: '',
  }
  // const [selectUserData, setSelectUserData] = useState(userDataEmpty)

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
        setOpenEditDialog={setOpenEditDialog}
        setSelectUserData={setSelectUserDataHandler}
      />
    )
  }

  return (
    <>
      <Container maxWidth="lg">
        <Box
          sx={{ width: '100%', minHeight: 600, marginTop: 3, marginLeft: 1 }}
        >
          <Masonry columns={{ xs: 1, sm: 2, lg: 3 }} spacing={2}>
            {usersMap}
          </Masonry>
        </Box>
      </Container>
      <Fab
        variant="extended"
        color="primary"
        aria-label="add"
        style={{ position: 'absolute', bottom: 20, right: 40 }}
        onClick={() => {
          setOpenAddUserDialog(true)
        }}
      >
        <PersonAddIcon />
      </Fab>
      <PaginationMenu
        setPageCountSelectHandler={setPageCountSelectHandler}
        pageCountSelect={pageCountSelect}
        itemsTotalCount={users.length}
      />
      <AddUserDialog
        openDialog={openAddUserDialog}
        setOpenDialog={setOpenAddUserDialog}
        setSelectUserDataHandler={setSelectUserDataHandler}
        addUserHandler={fetchAddUserHandler}
      />
      <EditUserDialog
        openDialog={openEditDialog}
        setOpenDialog={setOpenEditDialog}
        userData={selectUserData}
        setSelectUserDataHandler={setSelectUserDataHandler}
        editHandler={fetchEditUserHandler}
      />

      <DelateUserDialog
        openDialog={openDelateDialog}
        setOpenDialog={setOpenDelateDialog}
        deleteHandler={fetchDeleteUserHandler}
      />
    </>
  )
}
