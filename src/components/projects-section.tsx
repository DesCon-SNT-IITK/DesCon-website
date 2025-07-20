// import Image from 'next/image';
// import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
// import { Badge } from '@/components/ui/badge';

// const projects = [
//   {
//     title: 'Seismic-Resistant Structure Design',
//     description: 'A comprehensive study and design of a multi-story building capable of withstanding high-magnitude seismic activity.',
//     image: 'https://placehold.co/600x400.png',
//     tags: ['Structural', 'Analysis', 'AutoCAD'],
//     status: 'Completed',
//     aiHint: 'earthquake resistant building'
//   },
//   {
//     title: 'Eco-Friendly Housing Initiative',
//     description: 'Developing sustainable and affordable housing solutions using locally sourced, recycled materials.',
//     image: 'https://placehold.co/600x400.png',
//     tags: ['Sustainability', 'Materials', 'Green Building'],
//     status: 'In Progress',
//     aiHint: 'eco friendly house'
//   },
//   {
//     title: 'IITK Metro Station Redesign',
//     description: 'A proposal for the aesthetic and functional redesign of the upcoming IIT Kanpur metro station.',
//     image: 'https://placehold.co/600x400.png',
//     tags: ['Urban Planning', 'Architecture', '3D Modeling'],
//     status: 'Proposed',
//     aiHint: 'metro station design'
//   },
//   {
//     title: 'Smart Water Management System',
//     description: 'Implementing IoT sensors and data analysis for efficient water distribution and conservation on campus.',
//     image: 'https://placehold.co/600x400.png',
//     tags: ['IoT', 'Hydraulics', 'Project Management'],
//     status: 'In Progress',
//     aiHint: 'water management'
//   },
//   {
//     title: 'IITK Metro Station Redesign',
//     description: 'A proposal for the aesthetic and functional redesign of the upcoming IIT Kanpur metro station.',
//     image: 'https://placehold.co/600x400.png',
//     tags: ['Urban Planning', 'Architecture', '3D Modeling'],
//     status: 'Proposed',
//     aiHint: 'metro station design'
//   },
//   {
//     title: 'Smart Water Management System',
//     description: 'Implementing IoT sensors and data analysis for efficient water distribution and conservation on campus.',
//     image: 'https://placehold.co/600x400.png',
//     tags: ['IoT', 'Hydraulics', 'Project Management'],
//     status: 'In Progress',
//     aiHint: 'water management'
//   },
// ];

// export default function ProjectsSection() {
//   return (
//     <section className="w-full py-16 md:py-24 bg-transparent">
//       <div className="container mx-auto px-4 md:px-6">
//         <div className="flex flex-col items-center text-center space-y-6 mb-12">
//           <h2 className="text-3xl md:text-5xl font-bold font-headline tracking-tighter">
//             Our Projects
//           </h2>
//           <p className="max-w-3xl text-lg text-muted-foreground">
//             From theoretical designs to on-ground implementation, our projects challenge students to innovate and apply their knowledge.
//           </p>
//         </div>
//         <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
//           {projects.map((project, index) => (
//             <Card key={index} className="overflow-hidden group transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-accent bg-card/80 backdrop-blur-sm">
//                 <div className="relative h-64 w-full">
//                     <Image src={project.image} alt={project.title} fill className="object-cover transition-transform duration-300 group-hover:scale-105" data-ai-hint={project.aiHint} />
//                      <Badge 
//                         variant={project.status === 'Completed' ? 'default' : 'secondary'} 
//                         className={`absolute top-4 right-4 ${project.status === 'Completed' ? 'bg-primary text-primary-foreground' : 'bg-accent text-accent-foreground'}`}>
//                         {project.status}
//                     </Badge>
//                 </div>
//               <CardHeader>
//                 <CardTitle className="font-headline text-2xl group-hover:text-primary transition-colors">{project.title}</CardTitle>
//               </CardHeader>
//               <CardContent>
//                 <CardDescription>{project.description}</CardDescription>
//               </CardContent>
//               <CardFooter>
//                 <div className="flex flex-wrap gap-2">
//                     {project.tags.map((tag) => (
//                         <Badge key={tag} variant="outline" className="border-primary/20 text-primary/70">{tag}</Badge>
//                     ))}
//                 </div>
//               </CardFooter>
//             </Card>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }
import Image from '@/components/ui/image';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import projectsData from '@/data/projects.json';
import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';

const projects = projectsData.slice(0, 4);

export default function ProjectsSection() {
  return (
    <section className="w-full py-16 md:py-24 bg-transparent">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-6 mb-12">
          <h2 className="text-3xl md:text-5xl font-bold font-headline tracking-tighter">
            Our Projects
          </h2>
          <p className="max-w-3xl text-lg text-muted-foreground">
            From theoretical designs to on-ground implementation, our projects challenge students to innovate and apply their knowledge.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <Link key={project.id} href={`/projects/${project.id}`} className="group">
              <Card className="overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-accent bg-card/80 backdrop-blur-sm h-full flex flex-col">
                  <div className="relative h-64 w-full">
                      <Image src={project.image} alt={project.title} fill className="object-cover transition-transform duration-300 group-hover:scale-105" data-ai-hint={project.aiHint} />
                       <Badge 
                          variant={project.status === 'Completed' ? 'default' : 'secondary'} 
                          className={`absolute top-4 right-4 ${project.status === 'Completed' ? 'bg-primary text-primary-foreground' : 'bg-accent text-accent-foreground'}`}>
                          {project.status}
                      </Badge>
                  </div>
                <CardHeader>
                  <CardTitle className="font-headline text-2xl group-hover:text-primary transition-colors">{project.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <CardDescription>{project.description}</CardDescription>
                </CardContent>
                <CardFooter>
                  <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                          <Badge key={tag} variant="outline" className="border-primary/20 text-primary/70">{tag}</Badge>
                      ))}
                  </div>
                </CardFooter>
              </Card>
            </Link>
          ))}
        </div>
        <div className="text-center mt-12">
            <Button asChild variant="outline">
                <Link href="/projects">
                    View All Projects <ArrowRight className="ml-2 h-4 w-4"/>
                </Link>
            </Button>
        </div>
      </div>
    </section>
  )
}
