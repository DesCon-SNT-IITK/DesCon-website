import Header from '@/components/header';
import Footer from '@/components/footer';

export default function ProjectLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <main className="flex-1 bg-background/30 backdrop-blur-sm pt-16">
        {children}
      </main>
      <Footer />
    </>
  );
}
