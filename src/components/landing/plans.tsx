import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, Star } from "lucide-react";

const plans = [
  {
    name: "Rush Presença",
    idealFor: "Influenciadores, autônomos e freelancers que precisam de um \"cartão de visitas digital\".",
    price: "49",
    pricePeriod: "Pagamento único",
    priceDescription: "Válido para o primeiro ano",
    features: [
      "Domínio .shop grátis (1º ano)",
      "Site de Página Única (One-Page)",
      "Hospedagem de Alta Performance",
      "Certificado de Segurança SSL",
      "Design 100% Responsivo",
      "Suporte Técnico Inicial (45 dias)",
      "Entrega em até 3 dias úteis",
    ],
    transparency: "Renovação (domínio .shop + hospedagem): R$ 159/ano. Suporte contínuo opcional: R$ 14,99/mês.",
    cta: "Começar com R$49",
    popular: false,
    priceCta: "49",
  },
  {
    name: "Rush Contato",
    idealFor: "Pequenas empresas e prestadores de serviço que precisam gerar credibilidade e capturar clientes.",
    price: "249",
    pricePeriod: "/ano",
    priceDescription: "",
    features: [
      "Domínio .com.br ou .com grátis (1º ano)",
      "Site Institucional de até 3 páginas",
      "Formulário de Contato Profissional",
      "Botão Flutuante de WhatsApp",
      "Mapa de Localização (Google Maps)",
      "Suporte Contínuo (e-mail)",
      "Até 2 pequenas atualizações/mês",
      "Entrega em até 7 dias úteis",
    ],
    transparency: "E-mail profissional é um serviço adicional.",
    cta: "Escolher Plano",
    popular: true,
    priceCta: "249",
  },
  {
    name: "Rush Loja Start",
    idealFor: "Empreendedores que querem começar a vender online de forma rápida, segura e sem complexidade.",
    price: "99",
    pricePeriod: "/mês",
    priceDescription: "ou R$ 990/ano (2 meses de desconto)",
    features: [
      "Todas as features do Plano RUSH CONTATO",
      "Loja Virtual com até 20 produtos",
      "Integração com Mercado Pago e PagSeguro",
      "Gerenciamento de Pedidos Simplificado",
      "Cálculo de Frete Básico",
      "E-commerce Rápido (Headless)",
      "Suporte Prioritário (E-mail e WhatsApp)",
    ],
    transparency: "",
    cta: "Escolher Plano",
    popular: false,
    priceCta: "99",
  },
  {
    name: "Rush Sob Medida",
    idealFor: "Startups e empresas com necessidades específicas, projetos complexos ou e-commerces de grande porte.",
    price: "Consulte",
    pricePeriod: "",
    priceDescription: "",
    features: [
      "Desenvolvimento de Web Apps e Sistemas",
      "Criação de SaaS (Software como Serviço)",
      "Integrações via API (ERP, CRM, etc.)",
      "Áreas de Membros com login",
      "Desenvolvimento de Marketplaces",
      "Consultoria de tecnologia",
      "Equipe de desenvolvimento dedicada",
    ],
    transparency: "O processo começa com uma reunião de diagnóstico para entendermos seus objetivos.",
    cta: "Fale Conosco",
    popular: false,
  },
]

export default function Plans() {
  const whatsappNumber = "5548992084572";
  const getWhatsappLink = (planName: string) => {
    const message = encodeURIComponent(`Olá, SykoTech! Gostaria de saber mais sobre o plano ${planName} da WebRush. Poderiam me ajudar?`);
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
              <CardHeader className="pb-4">
                <CardTitle className="font-headline text-2xl">{plan.name}</CardTitle>
                <CardDescription className="text-sm h-14">{plan.idealFor}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow flex flex-col">
                <div className="text-center mb-6">
                  {plan.price !== "Consulte" ? (
                    <div>
                      <span className="text-sm align-top">R$</span>
                      <span className="text-5xl font-bold font-headline">{plan.price}</span>
                      <span className="text-muted-foreground">{plan.pricePeriod}</span>
                      {plan.priceDescription && <p className="text-xs text-muted-foreground mt-1">{plan.priceDescription}</p>}
                    </div>
                  ) : (
                    <span className="text-3xl font-bold font-headline block h-[76px] flex items-center justify-center">Consulte</span>
                  )}
                </div>
                <ul className="space-y-3 text-sm flex-grow">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                {plan.transparency && (
                    <p className="text-xs text-muted-foreground/80 mt-6 pt-4 border-t border-border/50">
                        <span className="font-semibold">Transparência WebRush:</span> {plan.transparency}
                    </p>
                )}
              </CardContent>
              <CardFooter className="mt-auto">
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
