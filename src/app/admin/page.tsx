import React, { type ReactElement } from 'react'
import { adminLinks } from '../constants';
import { H1 } from '@/components/ui';
import { NavLinkList } from '@/components/lists';

function AdminPage(): ReactElement {
  return (
    <>
      <H1>🔑 Admin</H1>
      <NavLinkList data={adminLinks} />
    </>
  )
}

export default AdminPage;