import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { MousePointerClick, Construction, Rocket } from 'lucide-react';

const steps = [
  {
    icon: <MousePointerClick className="h-10 w-10 text-primary" />,
    title: "1. Escolha seu Plano",
    description: "Selecione o plano que melhor se adapta às suas necessidades e orçamento. Temos opções para todos os tipos de negócio."
  },
  {
    icon: <Construction className="h-10 w-10 text-primary" />,
    title: "2. Nós Construímos",
    description: "Nossa equipe de especialistas entra em ação para construir um site profissional, rápido e seguro, seguindo suas especificações."
  },
  {
    icon: <Rocket className="h-10 w-10 text-primary" />,
    title: "3. Lançamento Rápido",
    description: "Em tempo recorde, seu site está no ar, pronto para atrair clientes e impulsionar seu negócio em todo o Brasil."
  }
];

export default function HowItWorks() {
  return (
    <section id="como-funciona" className="py-20 md:py-32 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-headline mb-4">Como Funciona</h2>
          <p className="text-muted-foreground mb-12">
            Em três passos simples, colocamos seu negócio online com a agilidade que você precisa.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <Card key={index} className="bg-background/50 border-border/50 text-center transition-all duration-300 hover:border-primary hover:shadow-lg hover:shadow-primary/10">
              <CardHeader className="items-center">
                <div className="p-4 bg-primary/10 rounded-full mb-4">
                  {step.icon}
                </div>
                <CardTitle className="font-headline text-2xl mb-2">{step.title}</CardTitle>
                <CardDescription className="text-base">{step.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
