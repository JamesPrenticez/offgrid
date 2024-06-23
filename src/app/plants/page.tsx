import React from 'react'
import { plantLinks } from '../constants';
import { H1 } from '@/components/ui';
import { NavLinkList } from '@/components/lists';

const PlantsPage = () => {
  return (
    <>
      <H1>🌱 Plants</H1>
      <NavLinkList data={plantLinks} />
    </>
  )
}

export default PlantsPage;