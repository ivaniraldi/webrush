import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, Star } from "lucide-react";

const plans = [
  {
    name: "Rush Presença",
    price: "49",
    description: "Para quem precisa de uma presença online básica e profissional.",
    features: [
      "Página Única (Landing Page)",
      "Domínio grátis por 1 ano",
      "Certificado de Segurança SSL",
      "Design Responsivo",
    ],
    cta: "Começar Agora",
    popular: false,
  },
  {
    name: "Rush Contato",
    price: "99",
    description: "Ideal para capturar leads e facilitar o contato com clientes.",
    features: [
      "Todas as features do Presença",
      "Até 5 páginas",
      "Formulário de Contato",
      "Integração com WhatsApp",
    ],
    cta: "Escolher Plano",
    popular: true,
  },
  {
    name: "Rush Loja Start",
    price: "199",
    description: "Para quem quer começar a vender produtos online.",
    features: [
      "Todas as features do Contato",
      "Cadastro de até 50 produtos",
      "Integração com Pagamentos",
      "Carrinho de Compras",
    ],
    cta: "Escolher Plano",
    popular: false,
  },
  {
    name: "Rush Sob Medida",
    price: "Consulte",
    description: "Uma solução completa e personalizada para seu negócio.",
    features: [
      "Funcionalidades personalizadas",
      "Design exclusivo",
      "Painel de Gerenciamento",
      "Suporte Prioritário",
    ],
    cta: "Fale Conosco",
    popular: false,
  },
]

export default function Plans() {
  const whatsappNumber = "5548992084572";
  const getWhatsappLink = (planName: string) => {
    const message = encodeURIComponent(`Olá! Tenho interesse no plano ${planName}.`);
    return `https://wa.me/${whatsappNumber}?text=${message}`;
  }

  return (
    <section id="planos" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-headline mb-4">Planos Flexíveis para seu Negócio</h2>
          <p className="text-muted-foreground mb-12">
            Escolha o plano perfeito para lançar seu site profissional. Todos os planos são sem fidelidade.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-start">
          {plans.map((plan) => (
            <Card key={plan.name} className={`flex flex-col h-full ${plan.popular ? 'border-primary shadow-lg shadow-primary/10' : ''} transition-all duration-300 hover:scale-[1.02] hover:border-primary`}>
              {plan.popular && (
                <div className="bg-primary text-primary-foreground text-xs font-bold uppercase tracking-wider py-1 px-4 rounded-t-lg flex items-center justify-center gap-1">
                  <Star className="h-4 w-4" />
                  Mais Popular
                </div>
              )}
              <CardHeader className="text-center">
                <CardTitle className="font-headline text-2xl">{plan.name}</CardTitle>
                <CardDescription>{plan.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="text-center mb-6">
                  {plan.price !== "Consulte" ? (
                    <>
                      <span className="text-sm align-top">R$</span>
                      <span className="text-5xl font-bold font-headline">{plan.price}</span>
                      <span className="text-muted-foreground">/mês</span>
                    </>
                  ) : (
                    <span className="text-3xl font-bold font-headline">Consulte</span>
                  )}
                </div>
                <ul className="space-y-3 text-sm">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full" variant={plan.popular ? "default" : "outline"}>
                  <Link href={getWhatsappLink(plan.name)} target="_blank">{plan.cta}</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
