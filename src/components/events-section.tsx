
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "./ui/card"
import { Calendar, Users, Mic, Link as LinkIcon } from "lucide-react"
import { BookOpen, Brain, Award } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "@/components/ui/image"
import { Button } from "./ui/button"
import Link from "next/link"

const highlights = [
  {
    title: "Project: TwinKampus",
    description: "Built a digital twin of the IIT Kanpur campus using interactive, simplified 3D models to enable virtual exploration.",
    image: "/twinkampus.png",
    aiHint: "digital twin campus",
    resources: [
      { name: "Read Roadmap", href: "https://docs.google.com/document/d/1yKe-Uwmc1ziIZW2X9Kwi8swJu8jjHxMmWwn7zBYOjvY/edit?usp=sharing" },
    ]
  },
  {
    title: "Project: BluePrintX",
    description: "Converted hand-drawn floor plans into professional digital versions through automation, along with a dedicated app.",
    image: "/blueprint.png",
    aiHint: "floor plan automation",
    resources: [
      { name: "Read Roadmap", href: "https://docs.google.com/document/d/1FZOIlz9pE8XnDIDRyntsAbuiliw_xKdaHooE2YfGpAs/edit?usp=sharing" },
    ]
  },
  {
    title: "Project: InfraScan",
    description: "Created an AI-powered structural health monitoring system using infrared imaging and MATLAB to detect structural defects in real-time.",
    image: "/infra.png",
    aiHint: "infrared structural health monitoring",
    resources: [
      { name: "Read Roadmap", href: "https://docs.google.com/document/d/1kq-gdgZTJCHCBev5ezjR_ezx5OWKPHyU9E3iHWqujro/edit?usp=sharing" },
    ]
  },
  {
    title: "Project: MetaStructure",
    description: "Designed a detailed digital model of a heritage monument using Blender to improve digital modeling skills and capture architectural intricacy.",
    image: "/meta.png",
    aiHint: "heritage monument modeling",
    resources: [
      { name: "Read RoadMap", href: "#" },
    ]
  }
]


const events = [
  {
    date: "July 26-28, 2024",
    title: "SnT Pavilion",
    description: "A dynamic event featuring all the major tech and innovation-focused clubs of the college. If you're looking to learn, build, and belong — the Science and Technology Pavilion is where your journey begins!",
    icon: <Users className="h-8 w-8 text-primary" />,
    status: "Upcoming",
    resources: [],
  },
  {
    date: "Summer 2024",
    title: "Summer Project Mentee Recruitment",
    description: "A mentor-guided summer program for hands-on experience in real-world projects, requiring only enthusiasm and a weekly commitment of 8–10 hours.",
    icon: <Brain className="h-8 w-8 text-primary" />,
    status: "Past",
    resources: [
      { name: "Instagram Post", href: "https://www.instagram.com/p/DIJZRGKT87k/?igsh=MXd5cGFyMjdvc293NA==" }
    ],
  },
  {
    date: "Summer 2024",
    title: "Secretary Recruitment",
    description: "Multi-step selection process for the post of Secretary at DesCon Society, testing technical skills, design thinking, and leadership through various tasks.",
    icon: <Users className="h-8 w-8 text-primary" />,
    status: "Past",
    resources: [],
  },
  {
    date: "March 2024",
    title: "Techkriti Bridge Design Competition",
    description: "Our team secured 3rd place in Techkriti's Bridge Design Challenge by crafting a miniature truss bridge that held up to 70 kgs.",
    icon: <Award className="h-8 w-8 text-primary" />,
    status: "Past",
    resources: [],
  },
]

export default function EventsSection() {
  return (
    <section className="w-full py-16 md:py-24 bg-transparent">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-6 mb-12">
          <h2 className="text-3xl md:text-5xl font-bold font-headline tracking-tighter">
            Workshops & Events
          </h2>
          <p className="max-w-3xl text-lg text-muted-foreground">
            From expert lectures to hands-on workshops and competitions, we host a variety of events to foster learning and collaboration.
          </p>
        </div>

        <div className="mb-16">
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
                          <div className="p-6 flex-grow flex flex-col">
                            <div className="flex-grow">
                                <CardTitle className="font-headline text-xl mb-2">{highlight.title}</CardTitle>
                                <CardDescription>{highlight.description}</CardDescription>
                            </div>
                            {highlight.resources && highlight.resources.length > 0 && (
                              <div className="mt-4 flex flex-wrap gap-2">
                                {highlight.resources.map((resource) => (
                                  <Button key={resource.name} variant="outline" size="sm" asChild>
                                    <Link href={resource.href}>
                                      <LinkIcon className="mr-2 h-4 w-4" />
                                      {resource.name}
                                    </Link>
                                  </Button>
                                ))}
                              </div>
                            )}
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


        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2 hidden md:block" />
          
          <div className="space-y-12">
            {events.map((event, index) => (
              <div key={index} className="relative">
                <div className="md:flex md:items-center md:justify-center">
                  <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8 md:text-left md:flex-row-reverse'} flex justify-center`}>
                    <Card className={`w-full max-w-md transition-all hover:shadow-xl hover:scale-105 ${event.status === 'Past' ? 'opacity-70' : ''} bg-card/80 backdrop-blur-sm`}>
                      <CardHeader>
                        <div className="flex items-center gap-4">
                           <div className="hidden md:block">
                            {event.icon}
                           </div>
                           <div>
                            <CardTitle className="font-headline text-xl">{event.title}</CardTitle>
                            <p className="text-sm text-muted-foreground flex items-center gap-2 mt-1">
                              <Calendar className="h-4 w-4" />
                              {event.date}
                            </p>
                           </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p>{event.description}</p>
                         {event.resources && event.resources.length > 0 && (
                          <div className="mt-4 flex flex-wrap gap-2">
                            {event.resources.map((resource) => (
                              <Button key={resource.name} variant="outline" size="sm" asChild>
                                <Link href={resource.href}>
                                  <LinkIcon className="mr-2 h-4 w-4" />
                                  {resource.name}
                                </Link>
                              </Button>
                            ))}
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  </div>
                  {/* Timeline dot */}
                  <div className="absolute left-1/2 top-1/2 w-4 h-4 bg-primary rounded-full -translate-x-1/2 -translate-y-1/2 border-4 border-card hidden md:block" />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-16">
          <Button asChild variant="outline">
            <Link href="/workshops">
              View All Workshops
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
