import Header from '@/components/landing/header';
import Hero from '@/components/landing/hero';
import Plans from '@/components/landing/plans';
import HowItWorks from '@/components/landing/how-it-works';
import Faq from '@/components/landing/faq';
import Footer from '@/components/landing/footer';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Plans />
        <HowItWorks />
        <Faq />
      </main>
      <Footer />
    </div>
  );
}
