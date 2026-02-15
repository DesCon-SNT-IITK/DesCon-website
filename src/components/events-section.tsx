"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "./ui/card"

import { Calendar, Users, Mic, Link as LinkIcon, Rocket, Globe, BookOpen, Brain, Award, Layers, Cpu, Compass, Wrench, Trophy } from "lucide-react"


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

interface EventResource {
  name: string
  href: string
}

interface Event {
  date: string
  title: string
  description: string
  icon: JSX.Element
  status: string
  resources: EventResource[]
}


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


const events: Event[] = [
  {
    date: "Upcoming",
    title: "Ideal Room Layout Design Competition",
    description: "Apply principles of spatial planning, ergonomics, and aesthetics to design the layout of an ideal room.",
    icon: <Trophy className="h-8 w-8 text-primary" />,
    status: "Upcoming",
    resources: [{ name: "View Details", href: "/workshops/ideal-room-layout-competition" }],
  },
  {
    date: "Upcoming",
    title: "Techkriti Competition Preparation",
    description: "Actively preparing for AutoCAD and Bridge Design challenges through intensive internal workshops and optimization strategies.",
    icon: <Cpu className="h-8 w-8 text-primary" />,
    status: "Upcoming",
    resources: [],
  },
  {
    date: "Feb 14, 2026",
    title: "Blender Workshop",
    description: "Practical exposure to 3D modeling, texturing, and rendering workflows using industry-leading visualization tools.",
    icon: <Wrench className="h-8 w-8 text-primary" />,
    status: "Past",
    resources: [{ name: "View Details", href: "/workshops/blender-workshop-descon" }],
  },
  {
    date: "Feb 2026",
    title: "Spark x DesCon Collaboration",
    description: "A joint series with Spark IITK uncovering the architectural stories and evolution behind the buildings of our campus.",
    icon: <Compass className="h-8 w-8 text-primary" />,
    status: "Past",
    resources: [],
  },
  {
    date: "Feb 2026",
    title: "Winter Projects Launch",
    description: "Launch of four interdisciplinary projects: SMARTPATH, Sustainable Building, AI Design Optimization, and IITK-EcoConstruct.",
    icon: <Rocket className="h-8 w-8 text-primary" />,
    status: "Current",
    resources: [],
  },
  {
    date: "Jan 29, 2026",
    title: "MasterPlanned Series Launch",
    description: "Initiated an educational content series exploring urban architecture, planning principles, and structural philosophies of global cities.",
    icon: <Globe className="h-8 w-8 text-primary" />,
    status: "Past",
    resources: [],
  },
  {
    date: "Jan 24, 2026",
    title: "MATLAB Workshop",
    description: "Hands-on session covering basic scripting, data handling, and visualization for computational modeling.",
    icon: <Wrench className="h-8 w-8 text-primary" />,
    status: "Past",
    resources: [{ name: "View Details", href: "/workshops/matlab-workshop-descon" }],
  },
  {
    date: "Jan 15, 2026",
    title: "AutoCAD Basics Workshop",
    description: "Introductory session on 2D drafting and modeling concepts, focusing on essential tools for infrastructure projects.",
    icon: <Wrench className="h-8 w-8 text-primary" />,
    status: "Past",
    resources: [{ name: "View Details", href: "/workshops/autocad-101-descon" }],
  },
  {
    date: "Jan 14–20, 2026",
    title: "Model Mania – Character to Life",
    description: "A week-long 3D modeling competition challenging participants to bring original characters to life using Blender.",
    icon: <Trophy className="h-8 w-8 text-primary" />,
    status: "Past",
    resources: [{ name: "View Details", href: "/workshops/model-mania-descon" }],
  },
  {
    date: "Post-Summer 2025",
    title: "TwinKampus Extension",
    description: "Continued mapping of campus infrastructure as a long-term academic and planning asset for the institute.",
    icon: <Layers className="h-8 w-8 text-primary" />,
    status: "Past",
    resources: [],
  },
  {
    date: "Summer 2025",
    title: "Official Website Launch",
    description: "Established our professional digital presence to centralize project showcases, resources, and outreach.",
    icon: <Globe className="h-8 w-8 text-primary" />,
    status: "Past",
    resources: [],
  },
  {
    date: "Summer 2025",
    title: "Secretaries Training Workshop",
    description: "Capacity-building session for incoming secretaries focusing on project management and society documentation.",
    icon: <BookOpen className="h-8 w-8 text-primary" />,
    status: "Past",
    resources: [],
  },
  {
    date: "Summer 2025",
    title: "Summer Projects Launch",
    description: "Kickstarted Twinkampus, BlueprintX, InfraScan, and MetaStructure projects for hands-on interdisciplinary learning.",
    icon: <Rocket className="h-8 w-8 text-primary" />,
    status: "Past",
    resources: [],
  },
  {
    date: "July 26-28, 2024",
    title: "SnT Pavilion",
    description: "A major showcase of technical clubs. We participated to invite new members into the world of design and construction.",
    icon: <Users className="h-8 w-8 text-primary" />,
    status: "Past",
    resources: [],
  },
  {
    date: "Summer 2024",
    title: "Secretary Recruitment",
    description: "Selection process for the previous academic year's leadership, testing design thinking and technical proficiency.",
    icon: <Users className="h-8 w-8 text-primary" />,
    status: "Past",
    resources: [],
  },
  {
    date: "March 2024",
    title: "Techkriti '24 Bridge Design",
    description: "Our team secured 3rd place by building a miniature truss bridge bearing over 70 kgs of load.",
    icon: <Award className="h-8 w-8 text-primary" />,
    status: "Past",
    resources: [],
  },
]




export default function EventsSection() {
  const [showAll, setShowAll] = useState(false)
  const initialCount = 4
  const visibleEvents = showAll ? events : events.slice(0, initialCount)

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
          {/* Snaked Timeline Path */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-border/30 -translate-x-1/2 hidden md:block rounded-full" />

          <div className="space-y-24 relative">
            {visibleEvents.map((event, index) => (
              <div key={index} className="relative group">
                {/* Connecting Curve for 'Snake' feel */}
                {index < visibleEvents.length - 1 && (
                  <div className={`absolute top-full left-1/2 -translate-x-1/2 w-48 h-24 hidden md:block border-t-2 border-primary/20 transition-all duration-500
                    ${index % 2 === 0 ? 'rounded-tr-[60px] border-r-2 -ml-1' : 'rounded-tl-[60px] border-l-2 ml-1'}
                  `} />
                )}

                <div className="md:flex md:items-center md:justify-center">
                  <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-20 md:text-right' : 'md:pl-20 md:text-left md:flex-row-reverse'} flex justify-center w-full px-4`}>
                    <Card className={`w-full max-w-md transition-all duration-500 hover:shadow-2xl hover:scale-[1.03] ${event.status === 'Past' ? 'opacity-90' : 'ring-2 ring-primary/30'} bg-card/90 backdrop-blur-xl border-primary/10 overflow-hidden relative`}>
                      {/* Animated Gradient Border for 'Current' events */}
                      {event.status === 'Current' && (
                        <div className="absolute inset-0 p-[2px] bg-gradient-to-r from-primary via-accent to-primary animate-gradient-xy -z-10 rounded-xl" />
                      )}

                      <CardHeader className="pb-3">
                        <div className={`flex items-center gap-4 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                          <div className="p-4 rounded-2xl bg-primary/10 text-primary shadow-inner group-hover:bg-primary group-hover:text-white transition-all duration-500 rotate-3 group-hover:rotate-0">
                            {event.icon}
                          </div>
                          <div className="flex-1">
                            <CardTitle className="font-headline text-2xl leading-tight group-hover:text-primary transition-colors">{event.title}</CardTitle>
                            <div className={`flex items-center gap-2 mt-2 text-xs font-bold uppercase tracking-[0.2em] text-primary/70 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                              <Calendar className="h-3.5 w-3.5" />
                              {event.date}
                            </div>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm leading-relaxed text-muted-foreground group-hover:text-foreground transition-all duration-300">
                          {event.description}
                        </p>
                        {event.resources && event.resources.length > 0 && (
                          <div className={`mt-5 flex flex-wrap gap-2 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                            {event.resources.map((resource) => (
                              <Button key={resource.name} variant="secondary" size="sm" className="h-9 text-xs gap-2 font-semibold hover:bg-primary hover:text-white transition-all shadow-sm" asChild>
                                <Link href={resource.href}>
                                  <LinkIcon className="h-3.5 w-3.5" />
                                  {resource.name}
                                </Link>
                              </Button>
                            ))}
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-20 relative z-30">
            <Button
              onClick={() => setShowAll(!showAll)}
              variant="outline"
              className="px-8 py-6 rounded-full border-primary/30 hover:bg-primary/5 hover:border-primary transition-all text-lg font-headline"
            >
              {showAll ? "Show Less" : "View More Events"}
            </Button>
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
