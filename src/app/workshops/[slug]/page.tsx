import Image from '@/components/ui/image';
import { notFound } from 'next/navigation';
import workshops from '@/data/workshops.json';
import { Badge } from '@/components/ui/badge';
import { AnimatedSection } from '@/components/animated-section';
import { Calendar, Clock, MapPin, CheckCircle, Link as LinkIcon, Users } from 'lucide-react';

export async function generateStaticParams() {
  return workshops.map((workshop) => ({
    slug: workshop.id,
  }));
}

function getWorkshopData(slug: string) {
  return workshops.find((workshop) => workshop.id === slug);
}

type Workshop = ReturnType<typeof getWorkshopData>;

export default async function WorkshopPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const workshop = getWorkshopData(slug) as Workshop;

  if (!workshop) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 md:px-6 py-12 md:py-20">
      <AnimatedSection id="workshop-header" className="mb-12">
        <div className="flex flex-col items-center text-center space-y-4">
          <Badge
            variant={workshop.status === 'Past' ? 'secondary' : 'default'}
            className={`text-sm ${workshop.status === 'Past' ? 'bg-accent text-accent-foreground' : 'bg-primary text-primary-foreground'}`}
          >
            {workshop.status}
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold font-headline tracking-tighter text-foreground">
            {workshop.title}
          </h1>
          <p className="max-w-3xl text-lg text-muted-foreground">{workshop.description}</p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-2"><Calendar className="h-4 w-4" />{workshop.date}</span>
            <span className="flex items-center gap-2"><Clock className="h-4 w-4" />{workshop.duration}</span>
            <span className="flex items-center gap-2"><MapPin className="h-4 w-4" />{workshop.mode}</span>
          </div>
          <div className="flex flex-wrap justify-center gap-2">
            {workshop.tags.map((tag) => (
              <Badge key={tag} variant="outline" className="border-primary/20 text-primary/70">
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection id="workshop-image" className="mb-12">
        <div className="relative h-64 md:h-96 w-full overflow-hidden rounded-lg shadow-2xl">
          <Image
            src={workshop.image}
            alt={workshop.title}
            fill
            className="object-cover"
            data-ai-hint={workshop.aiHint}
          />
        </div>
      </AnimatedSection>

      <div className="grid md:grid-cols-3 gap-12">
        <div className="md:col-span-2 space-y-8">
          <AnimatedSection id="workshop-overview">
            <div className="p-6 rounded-lg bg-card/50">
              <h2 className="text-2xl md:text-3xl font-bold font-headline mb-4">Workshop Overview</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {workshop.overview}
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection id="workshop-agenda">
            <div className="p-6 rounded-lg bg-card/50">
              <h2 className="text-2xl md:text-3xl font-bold font-headline mb-6">Agenda</h2>
              <ul className="space-y-4">
                {workshop.agenda.map((item, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedSection>

          <AnimatedSection id="workshop-takeaways">
            <div className="p-6 rounded-lg bg-card/50">
              <h2 className="text-2xl md:text-3xl font-bold font-headline mb-6">What You&apos;ll Take Away</h2>
              <ul className="space-y-3 list-disc list-inside text-muted-foreground">
                {workshop.takeaways.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </AnimatedSection>
        </div>

        <div className="space-y-8">
          <AnimatedSection id="workshop-details">
            <div className="p-6 rounded-lg bg-card/50">
              <h3 className="text-xl font-bold font-headline mb-4">Workshop Details</h3>
              <div className="space-y-3 text-muted-foreground">
                <div className="flex justify-between">
                  <strong>Status:</strong>
                  <span>{workshop.status}</span>
                </div>
                <div className="flex justify-between">
                  <strong>Date:</strong>
                  <span>{workshop.date}</span>
                </div>
                <div className="flex justify-between">
                  <strong>Duration:</strong>
                  <span>{workshop.duration}</span>
                </div>
                <div className="flex justify-between">
                  <strong>Mode:</strong>
                  <span>{workshop.mode}</span>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {workshop.resources && workshop.resources.length > 0 && (
            <AnimatedSection id="workshop-resources">
              <div className="p-6 rounded-lg bg-card/50">
                <h3 className="text-xl font-bold font-headline mb-4">Resources</h3>
                <ul className="space-y-3 text-muted-foreground">
                  {workshop.resources.map((resource, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <LinkIcon className="h-4 w-4 text-primary" />
                      <a href={resource.href} target="_blank" rel="noopener noreferrer" className="underline">
                        {resource.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
          )}

          {workshop.mentors && workshop.mentors.length > 0 && (
            <AnimatedSection id="workshop-mentors">
              <div className="p-6 rounded-lg bg-card/50">
                <h3 className="text-xl font-bold font-headline mb-4">Mentors</h3>
                <ul className="space-y-3">
                  {workshop.mentors.map((mentor, index) => (
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
