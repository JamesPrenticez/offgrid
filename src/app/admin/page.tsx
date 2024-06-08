import React, { type ReactElement } from 'react'
import Link from 'next/link';

const plantLinks = [
  {
    icon: "🌱",
    title: "Data Entry",
    url: "admin/data_entry",
    description: "Add to our database"
  }
]

function Admin(): ReactElement {
  return (
    <div>
      <h1 className='text-7xl'>🔑 Admin</h1>

      {plantLinks.map((item) => (
          <Link
            href={`/${item.url}`}
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            rel="noopener noreferrer"
          >
            <h2 className="mb-3 text-2xl font-semibold">
              {item.icon}&nbsp;{item.title}&nbsp;
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className="m-0 max-w-[30ch] text-sm opacity-50">
              {item.description}
            </p>
          </Link>

        ))}
    </div>
  )
}

export default Admin;