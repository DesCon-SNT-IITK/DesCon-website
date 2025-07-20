import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Card, CardContent, CardDescription, CardTitle } from "./ui/card"
import Image from "@/components/ui/image"
import {
  DraftingCompass,
  Building,
  Wrench,
  Printer,
  BrainCircuit,
  Puzzle,
} from "lucide-react";


const highlights = [
  {
    title: "Techkriti Bridge Design Competition",
    description: "Our club secured 3rd place in the Techkriti Bridge Design Challenge. In this challenge, participants showcase their skills in crafting a miniature truss bridge using nothing but popsicle sticks and glue.",
    image: "/bdc.jpg",
    aiHint: "bridge competition"
  },
  {
    title: "SnT Pavilion",
    description: "Conducted by the Science and Technology Council of the Students’ Gymkhana, IIT Kanpur, SnT Pavilion is a fresher’s first interaction with the core team members of the clubs, teams, and societies under the SnT Council.",
    image: "/pavallion.webp",
    aiHint: "student council event"
  },
  {
    title: "Secretary Recruitment",
    description: "The club successfully conducted its annual Secretary Recruitment Drive to welcome enthusiastic and capable students into its core team. The process focused on evaluating creativity, technical understanding, and initiative, resulting in the selection of individuals dedicated to driving the club’s vision forward.",
    image: "/mentee.jpeg",
    aiHint: "team recruitment"
  },
  {
    title: "Summer Projects",
    description: "This summer, the club undertook four innovative projects: TwinKampus created a digital twin of the IITK campus for virtual exploration; BluePrintX automated the conversion of hand-drawn floor plans into digital versions; InfraScan developed an AI-based system using infrared imaging and MATLAB to detect structural defects; and MetaStructure built a detailed 3D model of a monument using Blender to enhance digital modeling skills.",
    image: "/summer.png",
    aiHint: "digital twin campus"
  },
]

const features = [
  {
    icon: <DraftingCompass className="h-10 w-10 text-primary" />,
    title: "Innovative Design",
    description: "We foster creativity and cutting-edge design principles in all our projects, from conceptual sketches to detailed blueprints. \n Our team leverages modern tools such as CAD, BIM, and simulation software to bring ideas to life. \n We encourage interdisciplinary thinking, combining architecture, civil engineering, and sustainability to create functional yet imaginative solutions.",
  },
  {
    icon: <Building className="h-10 w-10 text-primary" />,
    title: "Structural Excellence",
    description: "Our members gain hands-on experience in structural analysis and construction, ensuring stability and durability in every build. We simulate real-world engineering challenges to strengthen our understanding of mechanics, materials, and loads. We push the boundaries of our knowledge by engaging in real-time simulations, load-testing mini models, and participating in student-led workshops. This approach helps us connect theory with application, fostering a strong foundation in structural thinking.",
  },
  {
    icon: <Wrench className="h-10 w-10 text-primary" />,
    title: "Practical Skills",
    description: "Workshops, industrial visits, and real-world projects form the backbone of our learning approach. We equip students with essential skills in surveying, estimation, project planning, and execution. Our focus is on making members industry-ready by giving them exposure to modern construction practices, teamwork, and communication—skills that are vital in the professional world of civil engineering.",
  },
  {
    icon: <Printer className="h-10 w-10 text-primary" />,
    title: "3D Printing & Prototyping",
    description: "We embrace additive manufacturing to quickly prototype structures and models. \n Our members learn how to design for 3D printing and use it to test architectural forms, structural elements, and material behavior. This hands-on approach makes innovation accessible and visual, bridging the gap between design and reality.",
  },
  {
    icon: <BrainCircuit className="h-10 w-10 text-primary" />,
    title: "AI in Design & Construction",
    description: "We explore how artificial intelligence can transform the future of civil engineering. From optimizing structural designs to predictive maintenance and generative architecture, we integrate machine learning and AI tools to enhance precision, efficiency, and sustainability in our projects.",
  },
  {
    icon: <Puzzle className="h-10 w-10 text-primary" />,
    title: "Miscellaneous Innovations",
    description: "Our society promotes experimentation beyond the conventional. We dive into niche topics like earthquake-resistant design, smart materials, geotechnical modeling, and sustainable urban planning. These explorations broaden our perspectives and prepare us for future challenges in design and construction.",
  },
];


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
