import Image from 'next/image';
import { notFound } from 'next/navigation';
import projects from '@/data/projects.json';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, Users } from 'lucide-react';
import { AnimatedSection } from '@/components/animated-section';

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.id,
  }));
}

function getProjectData(slug: string) {
  const project = projects.find((p) => p.id === slug);
  return project;
}

type Project = ReturnType<typeof getProjectData>;

export default async function ProjectPage({ params }: { params: { slug: string } }) {
  const project = getProjectData(params.slug) as Project;

  if (!project) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 md:px-6 py-12 md:py-20">
      <AnimatedSection id="project-header" className="mb-12">
        <div className="flex flex-col items-center text-center space-y-4">
          <Badge
            variant={project.status === 'Completed' ? 'default' : 'secondary'}
            className={`text-sm ${project.status === 'Completed' ? 'bg-primary text-primary-foreground' : 'bg-accent text-accent-foreground'}`}
          >
            {project.status}
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold font-headline tracking-tighter text-foreground">
            {project.title}
          </h1>
          <div className="flex flex-wrap justify-center gap-2">
            {project.tags.map((tag) => (
              <Badge key={tag} variant="outline" className="border-primary/20 text-primary/70">
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection id="project-image" className="mb-12">
        <div className="relative h-64 md:h-96 w-full overflow-hidden rounded-lg shadow-2xl">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
            data-ai-hint={project.aiHint}
          />
        </div>
      </AnimatedSection>

      <div className="grid md:grid-cols-3 gap-12">
        <div className="md:col-span-2 space-y-8">
          <AnimatedSection id="project-overview">
            <div className="p-6 rounded-lg bg-card/50">
                <h2 className="text-2xl md:text-3xl font-bold font-headline mb-4">Project Overview</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                {project.overview}
                </p>
            </div>
          </AnimatedSection>

          <AnimatedSection id="project-steps">
             <div className="p-6 rounded-lg bg-card/50">
                <h2 className="text-2xl md:text-3xl font-bold font-headline mb-6">Project Steps</h2>
                <ul className="space-y-4">
                {project.steps.map((step, index) => (
                    <li key={index} className="flex items-start gap-4">
                    <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">{step}</span>
                    </li>
                ))}
                </ul>
            </div>
          </AnimatedSection>
        </div>

        <div className="space-y-8">
            <AnimatedSection id="project-info">
                 <div className="p-6 rounded-lg bg-card/50">
                    <h3 className="text-xl font-bold font-headline mb-4">Project Details</h3>
                    <div className="space-y-3 text-muted-foreground">
                        <div className="flex justify-between">
                            <strong>Status:</strong>
                            <span>{project.status}</span>
                        </div>
                         <div className="flex justify-between">
                            <strong>Category:</strong>
                            <span>{project.tags[0]}</span>
                        </div>
                        <div className="flex justify-between">
                            <strong>Resources:</strong>
                            <span> <a href={project.link}>Click Here</a> </span>
                        </div>
                    </div>
                </div>
            </AnimatedSection>
            {project.mentors && project.mentors.length > 0 && (
                <AnimatedSection id="project-mentors">
                    <div className="p-6 rounded-lg bg-card/50">
                        <h3 className="text-xl font-bold font-headline mb-4">Mentors</h3>
                        <ul className="space-y-3">
                            {project.mentors.map((mentor, index) => (
                                <li key={index} className="flex items-center gap-3 text-muted-foreground">
                                    <Users className="h-5 w-5 text-primary" />
                                    <span>{mentor}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </AnimatedSection>
            )}
        </div>
      </div>
    </div>
  );
}
