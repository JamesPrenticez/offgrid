import React, { type ReactElement } from 'react';
import Link from 'next/link';
import { navigationItems } from './constants/project';
import { capitalizeFirstLetter } from '@/utils';
import { ExternalLinkIcon } from '@/components/icons';
import { Button } from '@/components/ui';
 
export default function Home(): ReactElement {
  return (
    <>

        <h1 className="text-5xl mb-2 font-semibold">
          Welcome
        </h1>
        <h2 className="text-3xl mb-2 ml-1">
          to the library of knowledge for those seeking to live off grid in Aotearoa
        </h2>

        <Hero />

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

        <div className='bg-gray-200 h-[30rem] my-4'>
        Photo of the day
        </div>

    </>
  );
}

function Hero() {
  return (
    <div className="grid grid-cols-2 h-[30rem] my-4 gap-4">
      <Featured />
      <LatestNews />
    </div>
  )
}

function Featured(){
  return (
    <div className="bg-green-100 border border-green-500 rounded-md p-4">
      <h1 className="bg-green-200 border border-green-500 rounded-md py-2 px-4 font-semibold text-lg">
        Featured
      </h1>
    </div>
  )
}

interface HeroCardItem {
  title: string;
  desc: string;
  path: string;
  img: string;
  link?: {title: string, url: string}[];
}

function LatestNews(){

  const items: HeroCardItem[] = [
    {
      title: "New proposal - no consents on granny flats upto 60m2",
      desc: "Dwellings built in rural and residential zones will not require a building or resource consent, so long as they meet certain criteria.",
      path: "",
      img: "https://media.istockphoto.com/id/1346766147/vector/granny-sits-in-a-chair-near-the-window-and-reads-a-book-an-old-woman-is-resting-a-floor-lamp.jpg?s=612x612&w=0&k=20&c=-EYO7LTIWSx0kD4aR8mhzTA97Xm0djmVl-eNjbLutRA=",
      link: [
        {title: "One News", url: "https://www.1news.co.nz/2024/06/17/govt-proposes-allowing-granny-flats-builds-without-resource-consent/"},
        {title: "MBIE", url: "https://www.mbie.govt.nz/have-your-say/grannyflats" },
      ]
    }
  ]


  return (
    <div className="bg-blue-100 border border-blue-500 rounded-md p-4">
      <h1 className="bg-blue-200 border border-blue-500 rounded-md py-2 px-4 font-semibold text-lg">
        In the news
      </h1>

      <div className="py-4">
        <HeroCard item={items[0]} />
      </div>

    </div>
  )
}

interface HeroCardProps {
  item: HeroCardItem;
}

function HeroCard({item}: HeroCardProps) {
  return (
<div className="flex gap-4 items-start">
  <div
    className="border border-gray-300 rounded-sm flex-shrink-0 h-24 w-24 bg-gray-400 bg-cover bg-center"
    style={{ backgroundImage: `url(${item.img})` }}
  />
  <div className="flex-grow overflow-hidden text-ellipsis">
    <h1 className="font-semibold ">{item.title}</h1>
    <h2>{item.desc}</h2>
    {item.link && 
    <div className="flex gap-2 items-center">
      <p className="text-gray-500 text-sm font-light">Source:</p>
      {item.link.map((link, index) => (
      <Button variant="link" className="p-0 h-6">
        <Link href={link.url} target="_blank" className="flex gap-2 items-center">
          {link.title} <ExternalLinkIcon width={18} height={18}/>
        </Link>
      </Button>
      ))}
    </div>
    } 
  </div>
</div>
  )
}

   