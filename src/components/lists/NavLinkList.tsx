import React from 'react'
import Link from 'next/link';
import { INavigationItem } from '@/models';
import { capitalizeFirstLetter } from '@/utils';

interface Props {
  data: INavigationItem[];
}

function NavLinkList({ data }: Props) {
  return (       
    <div className="mx-auto grid text-center lg:w-full lg:grid-cols-4 lg:text-left ">
      {data.map((item, index) => (
        <Link
          key={`${index} - ${item.name}`}
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
  )
}

export default NavLinkList;