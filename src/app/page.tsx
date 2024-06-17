import React, { type ReactElement } from 'react';
import Link from 'next/link';
import { navigationItems } from './constants/project';
import { capitalizeFirstLetter } from '@/utils';
 


export default function Home(): ReactElement {
  return (
    <>

        <h1 className="text-5xl mb-2">
          Welcome
        </h1>
        <h2 className="text-3xl mb-2 ml-1">
          to the library of secret knowledge for those that seeking to live off grid in Aotearoa
        </h2>

        <div className='bg-gray-200 h-[30rem] my-8'>
        Placeholder 1
        </div>

        <div className="mx-auto grid text-center lg:w-full lg:grid-cols-4 lg:text-left ">
          {navigationItems.map((item) => (
            <Link
              href={item.path}
              className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
              rel="noopener noreferrer"
            >
              <h2 className="mb-3 text-2xl font-semibold">
                {item.icon}&nbsp;{capitalizeFirstLetter(item.name)}&nbsp;
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

        <div className='bg-gray-200 h-[30rem] my-8'>
        Placeholder 1
        </div>

    </>
  );
}
