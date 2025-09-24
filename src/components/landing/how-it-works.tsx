import { Lightbulb, DraftingCompass, Rocket } from 'lucide-react';

const steps = [
  {
    icon: <Lightbulb className="h-10 w-10 text-primary" />,
    title: "1. Defina Sua Visão",
    description: "Converse conosco sobre suas metas. Juntos, escolheremos o plano ideal e a estratégia perfeita para lançar sua presença digital no cenário global."
  },
  {
    icon: <DraftingCompass className="h-10 w-10 text-primary" />,
    title: "2. Design e Construção",
    description: "Nossa equipe de especialistas cria um design único e desenvolve um site de alta performance, totalmente otimizado e focado na experiência do usuário."
  },
  {
    icon: <Rocket className="h-10 w-10 text-primary" />,
    title: "3. Lançamento Global",
    description: "Em tempo recorde, seu site está no ar. Com nossa infraestrutura robusta, ele estará pronto para alcançar clientes e escalar seu negócio em qualquer lugar do mundo."
  }
];

export default function HowItWorks() {
  return (
    <section id="como-funciona" className="py-20 md:py-32 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-headline mb-4">Seu Lançamento em 3 Etapas</h2>
          <p className="text-muted-foreground">
            Do conceito à realidade global, nosso processo é desenhado para ser ágil e transparente.
          </p>
        </div>
        
        <div className="relative">
          {/* A linha que conecta as etapas */}
          <div className="absolute left-1/2 top-12 bottom-12 w-0.5 bg-border hidden md:block" aria-hidden="true"></div>

          <div className="space-y-16 md:space-y-0 md:grid md:grid-cols-1">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className={`md:flex ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} items-center`}>
                  
                  {/* Conteúdo de Texto */}
                  <div className={`md:w-5/12 text-center md:text-left ${index % 2 === 0 ? 'md:pl-16' : 'md:pr-16'}`}>
                    <div className="mb-4 inline-flex items-center justify-center w-24 h-24 rounded-full bg-background/50 border border-border/50 shadow-md">
                      {step.icon}
                    </div>
                    <h3 className="font-headline text-2xl font-bold mb-2">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>

                  {/* Ponto na linha do tempo (Desktop) */}
                  <div className="hidden md:block md:w-2/12">
                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                      <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary border-4 border-card shadow-lg">
                        <span className="text-primary-foreground font-bold">{index + 1}</span>
                      </div>
                    </div>
                  </div>

                   {/* Vazio para espaçamento */}
                  <div className="hidden md:block md:w-5/12"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
