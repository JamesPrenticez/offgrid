import Link from 'next/link';
import React from 'react'

const plantLinks = [
  { 
    icon: "🌱",
    name: "Trees",
    url: "plants/trees",
    desc: "View our database of Trees",
    img: ""
  }
]

const PlantsPage = () => {
  return (
    <div>
      <h1 className='text-7xl'>🌱 Plants</h1>

      {plantLinks.map((item) => (
          <Link
            href={`/${item.url}`}
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            rel="noopener noreferrer"
          >
            <h2 className="mb-3 text-2xl font-semibold">
              {item.icon}&nbsp;{item.name}&nbsp;
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className="m-0 max-w-[30ch] text-sm opacity-50">
              {item.desc}
            </p>
          </Link>

        ))}
    </div>
  )
}

export default PlantsPage;