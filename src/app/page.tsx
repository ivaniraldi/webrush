import Header from '@/components/landing/header';
import Hero from '@/components/landing/hero';
import PaymentMethods from '@/components/landing/payment-methods';
import Plans from '@/components/landing/plans';
import HowItWorks from '@/components/landing/how-it-works';
import Faq from '@/components/landing/faq';
import Footer from '@/components/landing/footer';
import FloatingWhatsapp from '@/components/landing/floating-whatsapp';
 
export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Hero />
        <PaymentMethods />
        <Plans />
        <HowItWorks />
        <Faq />
      </main>
      <Footer />
      <FloatingWhatsapp />
    </div>
  );
}
