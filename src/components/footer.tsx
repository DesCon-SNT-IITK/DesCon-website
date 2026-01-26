import Logo from '@/components/logo';
import { Instagram, Linkedin, Facebook, Twitter, Mail } from 'lucide-react';

const navLinks = [
  { name: 'About', href: '/#about' },
//   { name: 'Projects', href: '/#projects' },
  { name: 'All Projects', href: '/projects' },
  { name: 'Workshops and Competetion', href: '/workshops' },
  { name: 'Team', href: '/#team' },
  { name: 'Events', href: '/#events' },
  { name: 'Contact', href: '/#contact' },
];

const socialLinks = [
    { name: 'Instagram', href: 'https://www.instagram.com/desconiitk/', icon: <Instagram className="h-5 w-5" /> },
    { name: 'LinkedIn', href: 'https://www.linkedin.com/company/descon-society-iit-kanpur/posts/?feedView=all', icon: <Linkedin className="h-5 w-5" /> },
    { name: 'Facebook', href: 'https://www.facebook.com/DesConIITK/', icon: <Facebook className="h-5 w-5" /> },
    { name: 'Github', href: 'https://github.com/DesCon-SNT-IITK', icon: <Twitter className="h-5 w-5" /> },
    { name: 'Mail', href: 'mailto:desconsntiitk@gmail.com', icon: <Mail className="h-5 w-5" /> },
];
const iitkLinks = [
    { name: 'IITK Home Page', href: 'https://www.iitk.ac.in/', icon: <Instagram className="h-5 w-5" /> },
    { name: 'Students Gymkhana', href: 'https://itsgyanendra.github.io/website/', icon: <Linkedin className="h-5 w-5" /> },
    { name: 'Science and Technology Council', href: 'https://www.sntiitk.com/', icon: <Facebook className="h-5 w-5" /> },
];

export default function Footer() {
  return (
    <footer className="bg-black/50 backdrop-blur-sm text-primary-foreground">
      <div className="container mx-auto px-4 md:px-6 py-8">
        <div className="grid gap-8 md:grid-cols-4">
            <div className="flex flex-col items-start space-y-4">
                <div className="flex items-center gap-2">
                <Logo width={32} height={32} className="text-primary" />
                    <span className="text-lg font-bold font-headline text-foreground">DesCon IITK Hub</span>
                </div>
                <p className="text-sm text-muted-foreground">DesCon is a student-run club that focuses on structural design, 3D modeling, and model construction.
                We create detailed miniature models of buildings and structures, turning ideas into physical prototypes.</p>
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
            <div className="md:justify-self-center">
                <h4 className="font-semibold text-foreground mb-4">Others Links</h4>
                <ul className="space-y-2">
                    {iitkLinks.map((link) => (
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
            <p>Developed By <strong><a href='https://www.linkedin.com/in/pushpender-371176287/'> Pushpender</a> </strong></p>
        </div>
      </div>
    </footer>
  );
}
