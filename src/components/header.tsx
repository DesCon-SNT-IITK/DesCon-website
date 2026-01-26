"use client"

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet'
import { cn } from '@/lib/utils'
import Logo from '@/components/logo'

const navLinks = [
  { name: 'About', href: '/#about' },
  { name: 'Projects', href: '/projects' },
  // { name: 'All Projects', href: '/projects' },
  { name: 'Workshops and Competetion', href: '/workshops' },
  { name: 'Team', href: '/#team' },
  { name: 'Events', href: '/#events' },
  { name: 'Contact', href: '/#contact' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [activeLink, setActiveLink] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
      
      const sectionLinks = navLinks.filter((l) => l.href.startsWith('/#'));
      const sections = sectionLinks.map(link => document.querySelector(link.href.substring(2))); // remove leading /#
      let currentSectionId = '';
      for (const section of sections) {
        if (section && window.scrollY >= (section as HTMLElement).offsetTop - 100) {
          currentSectionId = section.id;
        }
      }
      
      const currentLink = sectionLinks.find(link => link.href.substring(2) === currentSectionId);
      if (currentLink) {
        setActiveLink(currentLink.href);
      } else {
        setActiveLink('');
      }
    }
    window.addEventListener('scroll', handleScroll)
    handleScroll(); // Set active link on initial load
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const getActiveLink = (href: string) => {
      if (typeof window !== 'undefined' && window.location.pathname !== '/') {
          return false;
      }
      return activeLink === href;
  }

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        'bg-black/50 backdrop-blur-sm shadow-md text-primary-foreground'
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex h-16 items-center justify-between">
          <Link href="/#home" className="flex items-center gap-2">
          <Logo width={42} height={42} />
            <span className="font-bold text-lg font-headline hidden sm:inline text-foreground">
              DesCon IITK
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "text-sm font-medium transition-colors",
                   getActiveLink(link.href) 
                     ? 'text-primary'
                     : 'text-foreground/80 hover:text-primary'
                )}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="md:hidden">
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className='hover:bg-foreground/10 text-foreground'>
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[280px] bg-card/95 text-foreground">
                <div className="flex flex-col h-full">
                  <div className="flex items-center justify-between p-4 border-b border-border">
                     <Link href="/#home" className="flex items-center gap-2" onClick={() => setOpen(false)}>
                        <Logo className="h-8 w-8 text-primary" />
                        <span className="font-bold text-lg font-headline">DesCon IITK</span>
                     </Link>
                     <SheetClose asChild>
                        <Button variant="ghost" size="icon" className="hover:bg-foreground/10">
                            <X className="h-6 w-6" />
                            <span className="sr-only">Close menu</span>
                        </Button>
                     </SheetClose>
                  </div>
                  <nav className="flex flex-col gap-4 p-4 flex-1">
                    {navLinks.map((link) => (
                      <SheetClose key={link.name} asChild>
                        <Link
                          href={link.href}
                          className={cn(
                            "text-lg font-medium transition-colors py-2",
                             getActiveLink(link.href) ? 'text-primary' : 'hover:text-primary'
                          )}
                        >
                          {link.name}
                        </Link>
                      </SheetClose>
                    ))}
                  </nav>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}
