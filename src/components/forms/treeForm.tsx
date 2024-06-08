"use client"

import React, { useEffect, useState } from 'react';
import { Button, Input } from "@/components/ui"

interface Tree {
  id: number;
  common_name: string;
  botanical_name: string;
  species: string;
  category: string;
  image: string;
}

const TreeForm: React.FC = () => {
  const [trees, setTrees] = useState<Tree[]>([]);

  // const [formData, setFormData] = useState<Omit<Tree, 'id'>>({
  const [formData, setFormData] = useState<Partial<Tree & { imageFile: File | null }>>({
    common_name: '',
    botanical_name: '',
    species: '',
    category: '',
    imageFile: null,
  });

  useEffect(() => {
    const fetchTrees = async () => {
      const response = await fetch('/api/plants/trees');
      const data = await response.json();
      setTrees(data);
    };

    fetchTrees();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFormData({
        ...formData,
        imageFile: e.target.files[0],
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
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

    const response = await fetch('/api/plants/trees', {
      method: 'POST',
      body: formDataToSend,
    });

    const newTree: Tree = await response.json();

    setTrees([...trees, newTree]);

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

      <div>
        <h2 className="text-3xl font-bold">Tree List</h2>
        <ul>
          {trees.map((tree) => (
            <li key={tree.id}>
              {tree.common_name} ({tree.botanical_name}) - {tree.species} [{tree.category}]
              <br />
              {tree.image && <img src={tree.image} alt={tree.common_name} width="100" />} 
            </li>
          ))}
        </ul>
      </div>

    </div>
  );
};

export default TreeForm;
