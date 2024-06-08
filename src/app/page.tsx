import React, { type ReactElement } from 'react';
import Link from 'next/link';
 

const nav = [
{
  icon: "🏠",
  title: "Building",
  url: "building",
  description: "Find in-depth information about acceptable building methods"
},
{
  icon: "⚡",
  title: "Power",
  url: "power",
  description: "Learn about different ways to generate electricity"
},
{
  icon: "💧",
  title: "Water",
  url: "water",
  description: "Collecting drinking water and handling your sewer"
},
{
  icon: "🌱",
  title: "Plants",
  url: "plants",
  description: "Explore plants from food to shelter belts"
},

]

export default function Home(): ReactElement {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <h1>
          Welcome
        </h1>

        <Link
            href='/admin'
            className="group rounded-lg border border-transparent px-5 py-4 hover:underline "
            rel="noopener noreferrer"
          >
          <h2 className="mb-3 text-sm font-semibold text-red-500">
            🔑 &nbsp;Admin&nbsp;
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
        </Link>
      </div>

      <div className="flex relative">
        <span>
        <h1 className="text-7xl font-bold">
          Off Grid
        </h1>
        <h2 className="text-xs absolute top-[-20px] right-[-75px] text-gray-300">
          New Zealand
        </h2>
        </span>
      </div>

      <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left">


        {nav.map((item) => (
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
    </main>
  );
}
