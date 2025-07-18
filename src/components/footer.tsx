import Logo from '@/components/logo';
import { Instagram, Linkedin, Facebook, Twitter, Mail } from 'lucide-react';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Team', href: '#team' },
  { name: 'Events', href: '#events' },
  { name: 'Contact', href: '#contact' },
];

const socialLinks = [
    { name: 'Instagram', href: '#', icon: <Instagram className="h-5 w-5" /> },
    { name: 'LinkedIn', href: '#', icon: <Linkedin className="h-5 w-5" /> },
    { name: 'Facebook', href: '#', icon: <Facebook className="h-5 w-5" /> },
    { name: 'Twitter', href: '#', icon: <Twitter className="h-5 w-5" /> },
    { name: 'Mail', href: 'mailto:descon.iitk@gmail.com', icon: <Mail className="h-5 w-5" /> },
];

export default function Footer() {
  return (
    <footer className="bg-black/50 backdrop-blur-sm text-primary-foreground">
      <div className="container mx-auto px-4 md:px-6 py-8">
        <div className="grid gap-8 md:grid-cols-3">
            <div className="flex flex-col items-start space-y-4">
                <div className="flex items-center gap-2">
                    <Logo className="h-8 w-8 text-primary" />
                    <span className="text-lg font-bold font-headline text-foreground">DesCon IITK Hub</span>
                </div>
                <p className="text-sm text-muted-foreground">Design & Construction Society, IIT Kanpur</p>
            </div>
            
            <div className="md:justify-self-center">
                <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
                <ul className="space-y-2">
                    {navLinks.map((link) => (
                        <li key={link.name}>
                            <a href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                                {link.name}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="md:justify-self-end">
                <h4 className="font-semibold text-foreground mb-4">Connect With Us</h4>
                <div className="flex space-x-4">
                    {socialLinks.map((social) => (
                        <a key={social.name} href={social.href} className="text-muted-foreground hover:text-primary transition-colors">
                            {social.icon}
                            <span className="sr-only">{social.name}</span>
                        </a>
                    ))}
                </div>
            </div>

        </div>
        <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} DesCon IITK. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
