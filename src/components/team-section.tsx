import Image from 'next/image';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Linkedin, Github, Twitter, Mail, Instagram } from 'lucide-react';

const leaders = [
  {
    name: "Aarav Sharma",
    role: "Overall Coordinator",
    avatar: "https://placehold.co/100x100.png",
    aiHint: "indian man portrait",
    socials: { linkedin: "#", mail: "#" , instagram: "#" }
  },
  {
    name: "Priya Singh",
    role: "Overall Coordinator",
    avatar: "https://placehold.co/100x100.png",
    aiHint: "indian woman portrait",
    socials: { linkedin: "#", mail: "#", instagram: "#" }
  }
];

const secretaries = [
  { name: "Rohan Verma", role: "Secretary", avatar: "https://placehold.co/100x100.png", aiHint: "smiling man portrait", socials: { linkedin: "#", mail: "#" , instagram: "#"}},
  { name: "Sneha Reddy", role: "Secretary", avatar: "https://placehold.co/100x100.png", aiHint: "smiling woman portrait", socials: { linkedin: "#", mail: "#" , instagram: "#"}},
  { name: "Vikram Kumar", role: "Secretary", avatar: "https://placehold.co/100x100.png", aiHint: "indian man portrait", socials: { linkedin: "#", mail: "#", instagram: "#" }},
  { name: "Anjali Gupta", role: "Secretary", avatar: "https://placehold.co/100x100.png", aiHint: "indian woman portrait", socials: { linkedin: "#", mail: "#" , instagram: "#"}},
  { name: "Suresh Patel", role: "Secretary", avatar: "https://placehold.co/100x100.png", aiHint: "smiling man portrait", socials: { linkedin: "#", mail: "#" , instagram: "#"}},
  { name: "Meera Desai", role: "Secretary", avatar: "https://placehold.co/100x100.png", aiHint: "smiling woman portrait", socials: { linkedin: "#", mail: "#", instagram: "#" }},
  { name: "Arjun Mehta", role: "Secretary", avatar: "https://placehold.co/100x100.png", aiHint: "indian man portrait", socials: { linkedin: "#", mail: "#" , instagram: "#"}},
  { name: "Kavita Iyer", role: "Secretary", avatar: "https://placehold.co/100x100.png", aiHint: "indian woman portrait", socials: { linkedin: "#", mail: "#" , instagram: "#"}},
  { name: "Harish Nair", role: "Secretary", avatar: "https://placehold.co/100x100.png", aiHint: "smiling man portrait", socials: { linkedin: "#", mail: "#", instagram: "#" }},
  { name: "Divya Chauhan", role: "Secretary", avatar: "https://placehold.co/100x100.png", aiHint: "smiling woman portrait", socials: { linkedin: "#", mail: "#", instagram: "#" }},
  { name: "Nikhil Joshi", role: "Secretary", avatar: "https://placehold.co/100x100.png", aiHint: "indian man portrait", socials: { linkedin: "#", mail: "#", instagram: "#" }},
  { name: "Pooja Malhotra", role: "Secretary", avatar: "https://placehold.co/100x100.png", aiHint: "indian woman portrait", socials: { linkedin: "#", mail: "#" , instagram: "#"}},
  { name: "Sandeep Rao", role: "Secretary", avatar: "https://placehold.co/100x100.png", aiHint: "smiling man portrait", socials: { linkedin: "#", mail: "#", instagram: "#" }},
  { name: "Sunita Menon", role: "Secretary", avatar: "https://placehold.co/100x100.png", aiHint: "smiling woman portrait", socials: { linkedin: "#", mail: "#", instagram: "#" }},
  { name: "Amit Kumar", role: "Secretary", avatar: "https://placehold.co/100x100.png", aiHint: "indian man portrait", socials: { linkedin: "#", mail: "#", instagram: "#" }},
  { name: "Geeta Pillai", role: "Secretary", avatar: "https://placehold.co/100x100.png", aiHint: "indian woman portrait", socials: { linkedin: "#", mail: "#" , instagram: "#"}},
  { name: "Manoj Tiwari", role: "Secretary", avatar: "https://placehold.co/100x100.png", aiHint: "smiling man portrait", socials: { linkedin: "#", mail: "#" , instagram: "#"}},
  { name: "Rina Shah", role: "Secretary", avatar: "https://placehold.co/100x100.png", aiHint: "smiling woman portrait", socials: { linkedin: "#", mail: "#", instagram: "#" }},
  { name: "Rajesh Kannan", role: "Secretary", avatar: "https://placehold.co/100x100.png", aiHint: "indian man portrait", socials: { linkedin: "#", mail: "#", instagram: "#" }},
  { name: "Anita Krishnan", role: "Secretary", avatar: "https://placehold.co/100x100.png", aiHint: "indian woman portrait", socials: { linkedin: "#", mail: "#", instagram: "#" }},
];

export default function TeamSection() {
  return (
    <section className="w-full py-16 md:py-24 bg-transparent">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-6 mb-12">
          <h2 className="text-3xl md:text-5xl font-bold font-headline tracking-tighter">
            Meet the Team
          </h2>
          <p className="max-w-3xl text-lg text-muted-foreground">
            The driving force behind DesCon is our dedicated team of students, passionate about shaping the future of design and construction.
          </p>
        </div>
        
        {/* Leaders */}
        <div className="mb-16">
            <h3 className="text-2xl md:text-4xl font-bold font-headline text-center mb-8">Overall Coordinators</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:w-1/2 mx-auto">
              {leaders.map((member, index) => (
                <div key={index} className="flex flex-col items-center text-center group">
                  <Avatar className="w-32 h-32 mb-4 border-4 border-transparent group-hover:border-primary transition-all duration-300">
                    <AvatarImage src={member.avatar} alt={member.name} data-ai-hint={member.aiHint}/>
                    <AvatarFallback>{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <h3 className="text-xl font-bold font-headline">{member.name}</h3>
                  <p className="text-primary font-medium">{member.role}</p>
                  <div className="flex gap-4 mt-4">
                    <a href={member.socials.linkedin} className="text-muted-foreground hover:text-primary transition-colors"><Linkedin className="h-5 w-5" /></a>
                    <a href={`mailto:${member.socials.mail}`} className="text-muted-foreground hover:text-primary transition-colors"><Mail className="h-5 w-5" /></a>
                    <a href={member.socials.instagram} className="text-muted-foreground hover:text-primary transition-colors"><Instagram className="h-5 w-5" /></a>
                  </div>
                </div>
              ))}
            </div>
        </div>
        
        {/* Secretaries */}
        <div>
            <h3 className="text-2xl md:text-4xl font-bold font-headline text-center mb-8">Secretaries</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
              {secretaries.map((member, index) => (
                <div key={index} className="flex flex-col items-center text-center group">
                  <Avatar className="w-24 h-24 mb-4 border-4 border-transparent group-hover:border-accent transition-all duration-300">
                    <AvatarImage src={member.avatar} alt={member.name} data-ai-hint={member.aiHint}/>
                    <AvatarFallback>{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <h3 className="text-lg font-bold font-headline">{member.name}</h3>
                   <div className="flex gap-3 mt-3">
                    <a href={member.socials.linkedin} className="text-muted-foreground hover:text-primary transition-colors"><Linkedin className="h-4 w-4" /></a>
                    <a href={`mailto:${member.socials.mail}`} className="text-muted-foreground hover:text-primary transition-colors"><Mail className="h-4 w-4" /></a>
                    <a href={member.socials.instagram} className="text-muted-foreground hover:text-primary transition-colors"><Instagram className="h-5 w-5" /></a>
                  </div>
                </div>
              ))}
            </div>
        </div>
      </div>
    </section>
  );
}
