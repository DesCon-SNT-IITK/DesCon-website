// import Header from '@/components/header';
// import HeroSection from '@/components/hero-section';
// import AboutSection from '@/components/about-section';
// import ProjectsSection from '@/components/projects-section';
// import TeamSection from '@/components/team-section';
// import EventsSection from '@/components/events-section';
// import ContactSection from '@/components/contact-section';
// import Footer from '@/components/footer';
// import { AnimatedSection } from '@/components/animated-section';

// export default function Home() {
//   return (
//     <>
//       <Header />
//       <main className="flex-1 bg-background/30 backdrop-blur-sm">
//         <HeroSection />
//         <AnimatedSection id="about">
//           <AboutSection />
//         </AnimatedSection>
//         <AnimatedSection id="projects">
//           <ProjectsSection />
//         </AnimatedSection>
//         <AnimatedSection id="team">
//           <TeamSection />
//         </AnimatedSection>
//         <AnimatedSection id="events">
//           <EventsSection />
//         </AnimatedSection>
//         <AnimatedSection id="contact">
//           <ContactSection />
//         </AnimatedSection>
//       </main>
//       <Footer />
//     </>
//   );
// }
import Header from '@/components/header';
import HeroSection from '@/components/hero-section';
import AboutSection from '@/components/about-section';
import ProjectsSection from '@/components/projects-section';
import TeamSection from '@/components/team-section';
import EventsSection from '@/components/events-section';
import ContactSection from '@/components/contact-section';
import Footer from '@/components/footer';
import { AnimatedSection } from '@/components/animated-section';

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1 bg-background/30 backdrop-blur-sm">
        <HeroSection />
        <AnimatedSection id="about">
          <AboutSection />
        </AnimatedSection>
        <AnimatedSection id="projects">
          <ProjectsSection />
        </AnimatedSection>
        <AnimatedSection id="team">
          <TeamSection />
        </AnimatedSection>
        <AnimatedSection id="events">
          <EventsSection />
        </AnimatedSection>
        <AnimatedSection id="contact">
          <ContactSection />
        </AnimatedSection>
      </main>
      <Footer />
    </>
  );
}
