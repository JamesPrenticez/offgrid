// app/api/trees/route.ts

import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import { File } from 'buffer';

const dataFilePath = path.join(process.cwd(), 'src/data', 'plants/trees.json');
const uploadDir = path.join(process.cwd(), 'public', 'uploads');

const getTrees = () => {
  if (!fs.existsSync(dataFilePath)) {
    return [];
  }
  const fileContent = fs.readFileSync(dataFilePath, 'utf8');
  if(fileContent === "") return [];
  return JSON.parse(fileContent);
};

const saveTrees = (trees: any) => {
  fs.writeFileSync(dataFilePath, JSON.stringify(trees, null, 2));
};

export async function GET() {
  const trees = getTrees();
  return NextResponse.json(trees);
}

export async function POST(request: NextRequest) {
  const formData = await request.formData();

  // Extract fields from formData
  const common_name = formData.get('common_name') as string;
  const botanical_name = formData.get('botanical_name') as string;
  const species = formData.get('species') as string;
  const category = formData.get('category') as string;

  let imagePath = "";
  const imageFile = formData.get('image') as string | File;
  
  if (imageFile instanceof File) {
    const filename = botanical_name; // Use a suitable filename here // TODO change to common name - trim, underscore and sanatise
    const extension = path.extname(imageFile.name); // Extract the file extension from the original file name
    const filePath = path.join(uploadDir, filename + extension); // Append the extension to the file path
    const buffer = Buffer.from(await imageFile.arrayBuffer());
    await fs.promises.writeFile(filePath, buffer);
    imagePath = `/uploads/${filename}${extension}`; // Update imagePath to include the extension
  }

  const trees = getTrees();

  const newTree = {
    id: trees.length ? trees[trees.length - 1].id + 1 : 1,
    common_name: common_name || '',
    botanical_name: botanical_name || '',
    species: species || '',
    category: category || '',
    image: imagePath,
  };

  trees.push(newTree);
  saveTrees(trees);
  return NextResponse.json(newTree);
}