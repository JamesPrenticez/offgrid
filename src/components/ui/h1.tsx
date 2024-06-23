import React, { type ReactNode } from 'react'

interface Props {
  children: ReactNode;
}
function H1({children}: Props) {
  return (
    <h1 className="text-5xl font-semibold mt-6 mb-12">
      {children}
    </h1>
  )
}

export { H1 }