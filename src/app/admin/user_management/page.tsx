import React, { type ReactElement } from 'react'
import { IUser } from '@/models';

import { axiosInstance } from '@/lib/axiosInstance';

async function UserManagement(): Promise<ReactElement> {
  const { data } = await axiosInstance.get<IUser[]>("/admin/users");

  return (
    <div>
      {JSON.stringify(data, null, 2)}
    </div>
  )
}

export default UserManagement;