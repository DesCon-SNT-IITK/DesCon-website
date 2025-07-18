import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "./ui/card"
import { Calendar, Users, Mic } from "lucide-react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "next/image"

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
    title: "Guest Lecture: Modern Construction Tech",
    description: "Industry expert talk on the latest trends and technologies shaping the construction world.",
    image: "https://placehold.co/600x400.png",
    aiHint: "construction lecture"
  },
  {
    title: "Workshop: Introduction to AutoCAD",
    description: "A hands-on session for beginners to learn the fundamentals of computer-aided design with AutoCAD.",
    image: "https://placehold.co/600x400.png",
    aiHint: "autocad workshop"
  },
]


const events = [
  {
    date: "October 14, 2024",
    title: "Annual General Meeting",
    description: "Kickstarting the new academic year with an overview of our plans, projects, and an open forum for new ideas.",
    icon: <Users className="h-8 w-8 text-primary" />,
    status: "Upcoming",
  },
  {
    date: "September 5, 2024",
    title: "Workshop: Introduction to AutoCAD",
    description: "A hands-on session for beginners to learn the fundamentals of computer-aided design with AutoCAD.",
    icon: <Mic className="h-8 w-8 text-primary" />,
    status: "Upcoming",
  },
  {
    date: "April 22, 2024",
    title: "DesCon Project Expo",
    description: "Showcasing the innovative projects completed by our members throughout the semester.",
    icon: <Calendar className="h-8 w-8 text-primary" />,
    status: "Past",
  },
  {
    date: "March 15, 2024",
    title: "Guest Lecture: Modern Construction Tech",
    description: "Industry expert talk on the latest trends and technologies shaping the construction world.",
    icon: <Mic className="h-8 w-8 text-primary" />,
    status: "Past",
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
      </div>
    </section>
  )
}
