import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, Star } from "lucide-react";

const plans = [
  {
    name: "Rush Presença",
    idealFor: "Influenciadores, autônomos, freelancers e profissionais que precisam de um \"cartão de visitas digital\" ou uma página de \"link na bio\" profissional e impactante.",
    price: "69",
    pricePeriod: "Pagamento único",
    priceDescription: "Válido para o primeiro ano",
    features: [
      "Domínio .shop grátis: Um endereço profissional na web (válido para o 1º ano).",
      "Site de Página Única (One-Page): Baseado em um de nossos 5 templates modernos à sua escolha.",
      "Hospedagem de Alta Performance: Seu site carregará rapidamente em qualquer lugar do mundo.",
      "Certificado de Segurança SSL: O \"cadeado verde\" que transmite confiança aos seus visitantes.",
      "Design 100% Responsivo: Perfeita visualização em celulares, tablets e computadores.",
      "Suporte Técnico Inicial: Ajuda e orientação gratuitas por 45 dias para garantir que tudo esteja perfeito.",
      "Entrega Expressa: Seu site no ar em até 3 dias úteis após o envio do material.",
    ],
    transparency: "A renovação do plano (incluindo domínio .shop e hospedagem) é de R$ 159/ano a partir do segundo ano. O suporte técnico contínuo após 45 dias é opcional, por R$ 14,99/mês.",
    cta: "Começar com R$69",
    popular: false,
    priceCta: "69",
  },
  {
    name: "Rush Contato",
    idealFor: "Pequenas empresas, consultórios, advogados, contadores e prestadores de serviço que precisam de um site institucional para gerar credibilidade, explicar seus serviços e capturar clientes.",
    price: "249",
    pricePeriod: "/ano",
    priceDescription: "",
    features: [
      "Domínio .com.br ou .com grátis: O endereço mais tradicional para negócios no Brasil (válido para o 1º ano).",
      "Site Institucional de até 3 páginas: Estrutura clássica (ex: Início, Sobre Nós, Serviços, Contato).",
      "Formulário de Contato Profissional: Receba os pedidos de orçamento e mensagens direto no seu e-mail.",
      "Botão Flutuante de WhatsApp: Facilite o contato imediato dos seus clientes.",
      "Mapa de Localização (Google Maps): Mostre onde sua empresa está localizada.",
      "Hospedagem de Alta Performance e Certificado SSL.",
      "Suporte Contínuo: Suporte técnico via e-mail durante toda a vigência do plano.",
      "Pequenas Atualizações Inclusas: Até 2 alterações de texto ou imagem por mês.",
    ],
    transparency: "A renovação do plano é de R$ 249/ano. A criação de e-mail profissional (ex: contato@seusite.com.br) é um serviço adicional.",
    cta: "Escolher Plano",
    popular: true,
    priceCta: "249",
  },
  {
    name: "Rush Loja Start",
    idealFor: "Empreendedores e pequenas empresas que querem começar a vender produtos (físicos ou digitais) online de forma rápida, segura e sem a complexidade de grandes plataformas.",
    price: "99",
    pricePeriod: "/mês",
    priceDescription: "ou R$ 990/ano (2 meses de desconto)",
    features: [
      "Inclui todas as funcionalidades do Plano RUSH CONTATO, mais:",
      "Loja Virtual Profissional: Integrada perfeitamente ao seu site institucional.",
      "Cadastro de até 20 produtos: Com fotos, descrição, preço e variações (cor, tamanho, etc.).",
      "Integração com Pagamentos Brasileiros: Venda via Pix, Boleto e Cartão de Crédito através dos melhores e mais seguros gateways (Mercado Pago, PagSeguro).",
      "Gerenciamento de Pedidos Simplificado: Um painel fácil de usar para controlar suas vendas.",
      "Cálculo de Frete Básico.",
      "Suporte Prioritário: Ajuda via e-mail e WhatsApp para garantir que sua loja esteja sempre vendendo.",
      "Diferencial deste plano: Usamos tecnologia de e-commerce \"headless\", que torna sua loja extremamente rápida, melhorando a experiência de compra do cliente e aumentando suas chances de venda.",
    ],
    transparency: "",
    cta: "Escolher Plano",
    popular: false,
    priceCta: "99",
  },
  {
    name: "Rush Sob Medida",
    idealFor: "Startups, empresas com necessidades específicas, projetos complexos, e-commerces de grande porte ou quem precisa de integrações e funcionalidades que vão além dos planos padrão.",
    price: "Consulte",
    pricePeriod: "",
    priceDescription: "",
    features: [
      "Desenvolvimento de Web Apps e Sistemas complexos.",
      "Criação do seu próprio SaaS (Software como Serviço).",
      "Integrações via API com seus sistemas de ERP, CRM, etc.",
      "Áreas de Membros e portais de cliente com login e senha.",
      "Desenvolvimento de Marketplaces.",
      "Consultoria de tecnologia e arquitetura de sistemas.",
      "Alocação de uma equipe de desenvolvimento dedicada ao seu projeto.",
    ],
    transparency: "Como funciona: O processo começa com uma reunião de diagnóstico para entendermos profundamente seus objetivos e desenharmos uma solução tecnológica exclusiva para o seu negócio. Entre em contato para agendar uma conversa.",
    cta: "Fale Conosco",
    popular: false,
  },
]

export default function Plans() {
  const whatsappNumber = "5548992084572";
  const getWhatsappLink = (planName: string) => {
    const message = encodeURIComponent(`Olá, SykoTech! Tenho interesse no plano ${planName} da WebRush e gostaria de mais informações.`);
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
                <CardDescription className="text-sm h-24">{plan.idealFor}</CardDescription>
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
