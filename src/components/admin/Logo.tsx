import React from 'react'
import Image from 'next/image'
import logoDark from 'public/dark.png'
import logo from 'public/light.png'

export default function Logo() {
  return (
    <div>
      <Image src={logo} alt="psmedia.ke logo" className="h-20 object-contain dark:hidden" />
      <Image
        src={logoDark}
        alt="psmedia.ke logo"
        className="h-20 object-contain hidden dark:block"
      />
    </div>
  )
}
