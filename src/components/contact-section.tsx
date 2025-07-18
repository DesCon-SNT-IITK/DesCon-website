import { Button } from "./ui/button"
import { Mail, Instagram, Linkedin, Facebook } from "lucide-react"
import Image from "next/image"

const socialLinks = [
  { icon: <Instagram className="h-6 w-6" />, name: "Instagram", href: "#" },
  { icon: <Linkedin className="h-6 w-6" />, name: "LinkedIn", href: "#" },
  { icon: <Facebook className="h-6 w-6" />, name: "Facebook", href: "#" },
]

const instagramPosts = [
  { src: "https://placehold.co/400x400.png", alt: "Instagram Post 1", aiHint: "construction site" },
  { src: "https://placehold.co/400x400.png", alt: "Instagram Post 2", aiHint: "architectural sketch" },
  { src: "https://placehold.co/400x400.png", alt: "Instagram Post 3", aiHint: "team meeting" },
  { src: "https://placehold.co/400x400.png", alt: "Instagram Post 4", aiHint: "3d model" },
  { src: "https://placehold.co/400x400.png", alt: "Instagram Post 5", aiHint: "bridge structure" },
  { src: "https://placehold.co/400x400.png", alt: "Instagram Post 6", aiHint: "campus building" },
]

export default function ContactSection() {
  return (
    <section className="w-full py-16 md:py-24 bg-transparent">
      <div className="container mx-auto px-4 md:px-6 grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h2 className="text-3xl md:text-5xl font-bold font-headline tracking-tighter">
            Get In Touch
          </h2>
          <p className="text-lg text-muted-foreground">
            Have a question, a project idea, or want to join our team? We'd love to hear from you. Reach out to us via email or connect with us on social media.
          </p>
          <div className="space-y-4">
            <a href="mailto:descon.iitk@gmail.com" className="flex items-center gap-4 group text-lg">
              <Mail className="h-6 w-6 text-primary" />
              <span className="group-hover:text-primary transition-colors">descon.iitk@gmail.com</span>
            </a>
            <div className="flex items-center gap-4 pt-4">
              {socialLinks.map((social) => (
                <a key={social.name} href={social.href} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                  {social.icon}
                  <span className="sr-only">{social.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="space-y-6">
          <h3 className="text-2xl font-bold font-headline text-center">Follow our Journey</h3>
          <div className="grid grid-cols-3 gap-2 md:gap-4">
            {instagramPosts.map((post, index) => (
              <div key={index} className="aspect-square relative overflow-hidden rounded-lg group">
                <Image src={post.src} alt={post.alt} fill className="object-cover transition-transform duration-300 group-hover:scale-110" data-ai-hint={post.aiHint} />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <Instagram className="h-8 w-8 text-white" />
                </div>
              </div>
            ))}
          </div>
           <Button variant="outline" className="w-full" asChild>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <Instagram className="mr-2 h-4 w-4" />
              Follow on Instagram
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
