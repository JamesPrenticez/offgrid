import React, { type ReactElement } from 'react'
import { IPlant } from '@/models';
import { PlantList } from '@/components/lists';
import PlantForm from '@/components/forms/PlantForm';
import { axiosInstance } from '@/lib/axiosInstance';

async function DataEntry(): Promise<ReactElement> {
  const { data } = await axiosInstance.get<IPlant[]>("/plants/trees");

  return (
    <div>
      <PlantForm slug="trees"/>
      <PlantList title="Trees" data={data} />
    </div>
  )
}

export default DataEntry;