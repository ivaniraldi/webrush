import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "O que está incluso no valor do plano?",
    answer: "Todos os nossos planos incluem registro de domínio por 1 ano, certificado de segurança SSL, hospedagem e um site profissional construído pela nossa equipe. Os detalhes específicos de cada plano estão listados na seção de planos."
  },
  {
    question: "Em quanto tempo meu site fica pronto?",
    answer: "O prazo varia conforme a complexidade do plano escolhido. Para o plano 'Rush Presença', o prazo médio é de 3 a 5 dias úteis após o envio de todo o material necessário por você."
  },
  {
    question: "Eu mesmo posso atualizar o conteúdo do site?",
    answer: "Depende do plano. Planos que incluem um painel de gerenciamento (CMS) permitem que você faça atualizações de conteúdo, como textos e imagens em blogs ou produtos em lojas. Para alterações estruturais, nossa equipe de suporte está à disposição."
  },
  {
    question: "E se eu precisar de uma função que não está listada?",
    answer: "Para necessidades específicas, o plano 'Rush Sob Medida' é ideal. Entraremos em contato para entender seus requisitos e criar uma proposta personalizada que atenda perfeitamente ao seu negócio."
  },
  {
    question: "Como funciona o suporte técnico?",
    answer: "Oferecemos suporte técnico via e-mail e WhatsApp para todos os planos. O tempo de resposta e o escopo do suporte podem variar, com planos superiores oferecendo atendimento prioritário."
  }
];

export default function Faq() {
  return (
    <section id="faq" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-headline mb-4">Dúvidas Frequentes</h2>
          <p className="text-muted-foreground mb-12">
            Encontre respostas para as perguntas mais comuns sobre nossos serviços.
          </p>
        </div>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left font-semibold text-lg hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
