import Image from 'next/image'
import DesktopNav from './DesktopNav'
import Link from 'next/link'
import { ModeToggle } from '../mode-toggle'

export type NavbarProps = {
  title: string
  link: string
}


export default function Navbar() {

  const links: NavbarProps[] = [
    {
      title: "Council",
      link: "/council",
    },
    {
      title: "Executive",
      link: "/executive",
    },
    {
      title: "Administrative",
      link: "/administrative",
    },
    {
      title: "Tourism",
      link: "/tourism",
    },
  ]


  return (
    <header className="flex items-center justify-between p-3 gap-6">
      <Link href="/">
        <Image src="/img/core/logo-1.webp" alt="logo" width={80} height={80} />
      </Link>
      <DesktopNav links={links} />
      <ModeToggle />
    </header>
  )
}
