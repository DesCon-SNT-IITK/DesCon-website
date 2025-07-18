import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Card, CardContent, CardDescription, CardTitle } from "./ui/card"
import Image from "next/image"
import { Building, Wrench, DraftingCompass } from "lucide-react"

const highlights = [
  {
    title: "Annual Bridge Design Competition",
    description: "Our flagship event testing the limits of structural engineering and design.",
    image: "https://placehold.co/600x400.png",
    aiHint: "bridge competition"
  },
  {
    title: "Workshop on Sustainable Architecture",
    description: "Exploring green building materials and eco-friendly construction techniques.",
    image: "https://placehold.co/600x400.png",
    aiHint: "sustainable architecture"
  },
  {
    title: "Campus Infrastructure Project",
    description: "Collaborated with the institute to propose and design a new student recreation area.",
    image: "https://placehold.co/600x400.png",
    aiHint: "campus infrastructure"
  },
  {
    title: "3D-Printed Model Exhibition",
    description: "Showcasing intricate architectural and structural models created using 3D printing.",
    image: "https://placehold.co/600x400.png",
    aiHint: "3d model"
  },
]

const features = [
  {
    icon: <DraftingCompass className="h-10 w-10 text-primary" />,
    title: "Innovative Design",
    description: "We foster creativity and cutting-edge design principles in all our projects, from conceptual sketches to detailed blueprints.",
  },
  {
    icon: <Building className="h-10 w-10 text-primary" />,
    title: "Structural Excellence",
    description: "Our members gain hands-on experience in structural analysis and construction, ensuring stability and durability in every build.",
  },
  {
    icon: <Wrench className="h-10 w-10 text-primary" />,
    title: "Practical Skills",
    description: "Through workshops and real-world projects, we equip students with the practical skills needed in the civil engineering industry.",
  },
]

export default function AboutSection() {
  return (
    <section className="w-full py-16 md:py-24 bg-transparent">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-6 mb-12">
          <h2 className="text-3xl md:text-5xl font-bold font-headline tracking-tighter">
            Pioneering Design and Construction
          </h2>
          <p className="max-w-3xl text-lg text-muted-foreground">
            The Design & Construction Society (DesCon) at IIT Kanpur is a hub for students passionate about civil engineering, architecture, and project management. We bridge theory with practice, turning ambitious ideas into tangible realities.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center p-6 rounded-lg transition-all hover:bg-card/50 hover:shadow-lg">
              {feature.icon}
              <h3 className="mt-4 mb-2 text-xl font-bold font-headline">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
        
        <div className="flex flex-col items-center text-center space-y-4 mb-12">
            <h3 className="text-2xl md:text-4xl font-bold font-headline tracking-tighter">Latest Highlights</h3>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent>
            {highlights.map((highlight, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Card className="h-full overflow-hidden group bg-card/80 backdrop-blur-sm">
                    <CardContent className="p-0 flex flex-col h-full">
                      <div className="relative h-56 w-full">
                         <Image src={highlight.image} alt={highlight.title} fill className="object-cover transition-transform duration-300 group-hover:scale-105" data-ai-hint={highlight.aiHint} />
                      </div>
                      <div className="p-6 flex-grow">
                        <CardTitle className="font-headline text-xl mb-2">{highlight.title}</CardTitle>
                        <CardDescription>{highlight.description}</CardDescription>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute left-[-20px] top-1/2 -translate-y-1/2" />
          <CarouselNext className="absolute right-[-20px] top-1/2 -translate-y-1/2" />
        </Carousel>
      </div>
    </section>
  )
}
