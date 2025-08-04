import React from 'react'
import Image from 'next/image'
import logoDark from '/public/dark.png'
import logo from '/public/light.png'

export default function Icon() {
  return (
    <div className="flex justify-center items-center">
      <Image src={logo} width={800} height={800} alt="TeaSpace logo" className="dark:hidden" />
      <Image
        src={logoDark}
        width={800}
        height={800}
        alt="TeaSpace logo"
        className="hidden dark:block"
      />
    </div>
  )
}
