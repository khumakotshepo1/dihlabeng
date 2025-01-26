import Link from "next/link";
import { Button } from "../ui/button";
import { NavbarProps } from "./Navbar";

export default function DesktopNav({ links }: { links: NavbarProps[] }) {
  return (
    <nav className="hidden lg:flex items-center gap-2">
      {links.map((link) => (
        <Link
          key={link.title}
          href={link.link}
        >
          <Button variant="outline" size="sm" className="w-28 transition-all transform hover:scale-110 active:scale-90">
            {link.title}
          </Button>
        </Link>
      ))}
    </nav>
  )
}
