import React, { useState } from 'react'
import { TPost } from 'types'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever'
import EditIcon from '@mui/icons-material/Edit'
import { IconButton } from '@mui/material'
import { DelateDialog } from './DelateDialog'

export type UserProps = {
  user: TPost
}
export const User: React.FC<UserProps> = ({ user }) => {
  const [openDelateDialog, setOpenDelateDialog] = useState(false)

  return (
    <div className="card text-dark bg-light m-4">
      <div className="card-header ">
        <div
          className="btn-toolbar justify-content-between"
          role="toolbar"
          aria-label="Toolbar with button groups"
        >
          {`${user.id} ${user.title}`}
          <div className="btn-group me-2" role="group" aria-label="First group">
            <IconButton>
              <EditIcon />
            </IconButton>
            <IconButton onClick={() => setOpenDelateDialog(true)}>
              <DeleteForeverIcon />
            </IconButton>
          </div>
        </div>
      </div>

      <div className="card-body">
        <h5 className="card-title">{user.body}</h5>
      </div>
      <DelateDialog
        openDialog={openDelateDialog}
        setOpenDialog={setOpenDelateDialog}
      />
    </div>
  )
}
