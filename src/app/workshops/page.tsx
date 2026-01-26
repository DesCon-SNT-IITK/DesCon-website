import Image from '@/components/ui/image';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, MapPin } from 'lucide-react';
import workshops from '@/data/workshops.json';
import { AnimatedSection } from '@/components/animated-section';

export default function AllWorkshopsPage() {
  return (
    <section className="w-full py-16 md:py-24 bg-transparent">
      <div className="container mx-auto px-4 md:px-6">
        <AnimatedSection id="all-workshops-header">
          <div className="flex flex-col items-center text-center space-y-6 mb-12">
            <h1 className="text-4xl md:text-6xl font-bold font-headline tracking-tighter">
              All Workshops
            </h1>
            <p className="max-w-3xl text-lg text-muted-foreground">
              Deep-dive studios, fast clinics, and build-alongs curated to help you learn by making.
            </p>
          </div>
        </AnimatedSection>
        <AnimatedSection id="all-workshops-grid">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {workshops.map((workshop) => (
              <Link key={workshop.id} href={`/workshops/${workshop.id}`} className="group">
                <Card className="overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-accent bg-card/80 backdrop-blur-sm h-full flex flex-col">
                  <div className="relative h-64 w-full">
                    <Image
                      src={workshop.image}
                      alt={workshop.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      data-ai-hint={workshop.aiHint}
                    />
                    <Badge
                      variant={workshop.status === 'Past' ? 'secondary' : 'default'}
                      className={`absolute top-4 right-4 ${workshop.status === 'Past' ? 'bg-accent text-accent-foreground' : 'bg-primary text-primary-foreground'}`}
                    >
                      {workshop.status}
                    </Badge>
                  </div>
                  <CardHeader>
                    <CardTitle className="font-headline text-2xl group-hover:text-primary transition-colors">
                      {workshop.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow space-y-3 text-muted-foreground">
                    <CardDescription>{workshop.description}</CardDescription>
                    <div className="flex flex-wrap gap-3 text-sm">
                      <span className="flex items-center gap-2"><Calendar className="h-4 w-4" />{workshop.date}</span>
                      <span className="flex items-center gap-2"><Clock className="h-4 w-4" />{workshop.duration}</span>
                      <span className="flex items-center gap-2"><MapPin className="h-4 w-4" />{workshop.mode}</span>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <div className="flex flex-wrap gap-2">
                      {workshop.tags.map((tag) => (
                        <Badge key={tag} variant="outline" className="border-primary/20 text-primary/70">
                          {tag}
                        </Badge>
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
  );
}
