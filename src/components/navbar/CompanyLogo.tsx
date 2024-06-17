import React from 'react'
import Link from 'next/link';
// import Logo from '@components/common/Logo';

function CompanyLogo({onClick}: {onClick: () => void}){
  return (
    <Link href="/">
      <div className="flex items-center cursor-pointer">
        <svg width="32px" height="32px" viewBox="0 0 409 646" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#0c0a09">
          <path d=" M 203.40 4.86 C 243.70 72.82 283.77 140.91 323.96 208.94 C 300.29 208.93 276.62 208.93 252.96 208.94 C 286.97 270.36 321.04 331.75 355.05 393.17 C 331.48 389.49 307.89 385.82 284.31 382.23 C 322.43 438.22 360.20 494.46 398.14 550.57 C 341.29 537.40 284.43 524.25 227.56 511.19 C 234.15 552.43 240.79 593.67 247.35 634.92 C 217.33 634.98 187.32 635.09 157.30 635.20 C 161.57 594.04 165.88 552.88 170.17 511.72 C 114.73 532.33 59.32 553.01 3.85 573.55 C 49.12 509.74 94.39 445.93 139.65 382.12 C 103.04 387.11 66.43 392.05 29.81 396.97 C 68.78 331.09 107.77 265.22 146.73 199.34 C 122.81 205.68 98.92 212.15 74.97 218.40 C 117.77 147.21 160.63 76.06 203.40 4.86 Z" />
        </svg>
      </div>
    </Link>
  )
}

export default CompanyLogo;