'use client'

import { useState } from 'react'
import Header from './Header'
import Backdrop from './Backdrop'
import { type Locale } from '@/dictionaries/locales'

interface NavDict {
  home: string
  about: string
  help: string
  contact: string
  download: string
}

interface NavbarProps {
  navDict: NavDict
  locale: Locale
}

function Navbar({ navDict, locale }: NavbarProps) {
  const [toggle, setToggle] = useState<boolean>(false)

  return (
    <>
      <Header
        view={toggle}
        click={() => setToggle(!toggle)}
        dict={navDict}
        locale={locale}
      />
      <Backdrop view={toggle} click={() => setToggle(false)} />
    </>
  )
}

export default Navbar
