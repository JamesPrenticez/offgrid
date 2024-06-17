import React from 'react'
import Link from 'next/link';
import { Path } from '@/models';

const CompanyName = () => {
  return (
    <Link href={Path.HOME} className="relative">
      <h1 className="cursor-pointer text-[26px] ml-1 text-foreground font-[600]">
        OFF<span className="font-[200]">GRID</span>
      </h1>
      <h2 className="text-[10px] absolute top-[-10px] right-[-70px] text-white font-semibold bg-green-600 px-[0.30rem] py-[0.10rem] rounded-md">
        New Zealand
      </h2>
    </Link>
  )
}

export default CompanyName;