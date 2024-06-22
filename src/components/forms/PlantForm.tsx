"use client"

import React, { useState, type ReactElement, type ChangeEvent, type FormEvent } from 'react';
import { Button, Input } from "@/components/ui"
import { IPlant } from '@/models';

interface Props {
  slug: string;
}

function PlantForm({slug}: Props): ReactElement {
  const [plants, setPlants] = useState<IPlant[]>([]);

  const [formData, setFormData] = useState<Partial<IPlant & { imageFile: File | null }>>({
    common_name: '',
    botanical_name: '',
    species: '',
    category: '',
    imageFile: null,
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFormData({
        ...formData,
        imageFile: e.target.files[0],
      });
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const formDataToSend = new FormData();

    Object.keys(formData).forEach((key) => {
      const value = formData[key as keyof typeof formData];
      if (key === 'imageFile' && value instanceof File) {
        formDataToSend.append('image', value);
      } else if (typeof value === 'string') {
        formDataToSend.append(key, value);
      }
    });

    const response = await fetch(`'/api/plants/${slug}'}`, {
      method: 'POST',
      body: formDataToSend,
    });

    const newPlant: IPlant = await response.json();

    setPlants([...plants, newPlant]);

    setFormData({
      common_name: '',
      botanical_name: '',
      species: '',
      category: '',
      image: "",
      imageFile: null,
    });
    
  };

  return (
    <div>
      <h1>Tree Data Entry Form</h1>
      <form onSubmit={handleSubmit}>
        <Input 
          type="text"
          name="common_name"
          placeholder="Common Name"
          value={formData.common_name}
          onChange={handleChange}
          required
        />
        <Input 
          type="text"
          name="botanical_name"
          placeholder="Botanical Name"
          value={formData.botanical_name}
          onChange={handleChange}
          required
        />
        <Input 
          type="text"
          name="species"
          placeholder="Species"
          value={formData.species}
          onChange={handleChange}
          required
        />
        <Input 
          type="text"
          name="category"
          placeholder="Category"
          value={formData.category}
          onChange={handleChange}
          required
        />
        <Input 
          type="file"
          name="image"
          placeholder="Image"
          value={formData.image}
          onChange={handleFileChange}
          required
        />
        <Button type="submit">Add Tree</Button>
      </form>
    </div>
  );
};

export default PlantForm;
