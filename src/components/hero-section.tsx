import { Button } from '@/components/ui/button'
import Logo from '@/components/logo'
import Image from 'next/image'
import { cn } from '@/lib/utils'

const heroImages = [
  { src: 'https://placehold.co/400x400.png', alt: 'Structural Design', aiHint: 'architectural blueprint', className: 'row-span-2' },
  { src: 'https://placehold.co/400x400.png', alt: 'Team Collaboration', aiHint: 'team meeting' },
  { src: 'https://placehold.co/400x400.png', alt: 'Construction Site', aiHint: 'construction site' },
]

export default function HeroSection() {
  return (
    <section id="home" className="relative w-full h-dvh flex items-center justify-center text-center overflow-hidden">
      <div className="absolute inset-0 bg-transparent" />

      <div className="container mx-auto px-4 md:px-6 z-10 grid md:grid-cols-2 items-center gap-8">
        <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-6 animate-fade-in-up">
          <Logo className="h-24 w-24 text-primary" />
          <h1 className="text-5xl md:text-7xl font-bold font-headline tracking-tighter text-foreground">
            DesCon IITK Hub
          </h1>
          <p className="max-w-xl text-lg md:text-xl text-muted-foreground font-body">
            The official hub for the Design & Construction Society of IIT Kanpur. Explore our projects, join our community, and build the future with us.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
            <Button size="lg" className="uppercase font-headline" asChild>
              <a href="#projects">Explore Projects</a>
            </Button>
            <Button size="lg" variant="outline" className="uppercase font-headline" asChild>
              <a href="#contact">Join Us</a>
            </Button>
          </div>
        </div>
        <div className="hidden md:flex justify-center items-center">
           <div className="grid grid-cols-2 grid-rows-2 gap-4 w-full max-w-md aspect-square">
            {heroImages.map((image, index) => (
                <div key={index} className={cn("relative overflow-hidden rounded-lg group animate-fade-in-up", image.className)} style={{animationDelay: `${100 * (index + 1)}ms`}}>
                    <Image 
                        src={image.src}
                        alt={image.alt}
                        fill
                        data-ai-hint={image.aiHint}
                        className="object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                     <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors" />
                </div>
            ))}
           </div>
        </div>
      </div>
    </section>
  )
}
