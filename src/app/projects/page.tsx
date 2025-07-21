import Image from '@/components/ui/image';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import projectsData from '@/data/projects.json';
import { AnimatedSection } from '@/components/animated-section';

export default function AllProjectsPage() {
  return (
    <section className="w-full py-16 md:py-24 bg-transparent">
      <div className="container mx-auto px-4 md:px-6">
        <AnimatedSection id="all-projects-header">
            <div className="flex flex-col items-center text-center space-y-6 mb-12">
            <h1 className="text-4xl md:text-6xl font-bold font-headline tracking-tighter">
                All Projects
            </h1>
            <p className="max-w-3xl text-lg text-muted-foreground">
                Browse through our entire portfolio of innovative designs and groundbreaking constructions.
            </p>
            </div>
        </AnimatedSection>
        <AnimatedSection id="all-projects-grid">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectsData.map((project) => (
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
        </AnimatedSection>
      </div>
    </section>
  )
}
