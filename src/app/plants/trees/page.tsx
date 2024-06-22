import React, { type ReactElement } from 'react'
import type { IPlant } from '@/models';
import { PlantList } from '@/components/lists';
import { axiosInstance } from "@/lib/axiosInstance";

export default async function Trees(): Promise<ReactElement> {
  const { data } = await axiosInstance.get<IPlant[]>("/plants/trees");
 
  return (
    <PlantList 
      title="Trees"
      data={data}
    />
  )
}