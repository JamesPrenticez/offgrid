import { IPlant } from '@/models';
import React from 'react'

interface Props {
  title: string;
  data: IPlant[];
}
const PlantList = ({title, data}: Props) => {
  return (
    <div>
      <h2 className="text-3xl font-bold">{title}</h2>
      <ul>
        {data.map((item) => (
          <li key={item.id}>
            {item.common_name} ({item.botanical_name}) - {item.species} [{item.category}]
            <br />
            {item.image && <img src={item.image} alt={item.common_name} width="100" />} 
          </li>
        ))}
      </ul>
    </div>
  )
}

export default PlantList;