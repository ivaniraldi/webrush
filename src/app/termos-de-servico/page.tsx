import Header from "@/components/landing/header";
import Footer from "@/components/landing/footer";

export default function TermosDeServico() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold font-headline mb-8">Termos de Serviço</h1>
          <div className="prose prose-invert max-w-none text-muted-foreground space-y-6">
            <p>Bem-vindo à WebRush! Estes termos e condições descrevem as regras e regulamentos para o uso do site da WebRush, localizado em [URL do seu site].</p>

            <h2 className="text-2xl font-bold font-headline mt-8 mb-4 text-foreground">1. Termos</h2>
            <p>Ao acessar este site, presumimos que você aceita estes termos e condições. Não continue a usar o WebRush se não concordar com todos os termos e condições declarados nesta página.</p>

            <h2 className="text-2xl font-bold font-headline mt-8 mb-4 text-foreground">2. Uso de Licença</h2>
            <p>A permissão é concedida para baixar temporariamente uma cópia dos materiais (informações ou software) no site da WebRush, apenas para visualização transitória pessoal e não comercial. Esta é a concessão de uma licença, não uma transferência de título, e sob esta licença você não pode:</p>
            <ul className="list-disc list-inside space-y-2">
              <li>modificar ou copiar os materiais;</li>
              <li>usar os materiais para qualquer finalidade comercial ou para exibição pública (comercial ou não comercial);</li>
              <li>tentar descompilar ou fazer engenharia reversa de qualquer software contido no site da WebRush;</li>
              <li>remover quaisquer direitos autorais или outras notações de propriedade dos materiais; ou</li>
              <li>transferir os materiais para outra pessoa ou 'espelhar' os materiais em qualquer outro servidor.</li>
            </ul>

            <h2 className="text-2xl font-bold font-headline mt-8 mb-4 text-foreground">3. Isenção de responsabilidade</h2>
            <p>Os materiais no site da WebRush são fornecidos 'como estão'. A WebRush не oferece garantias, expressas ou implícitas, e por este meio isenta e nega todas as outras garantias, incluindo, sem limitação, garantias implícitas ou condições de comercialização, adequação a um fim específico ou não violação de propriedade intelectual ou outra violação de direitos.</p>

            <h2 className="text-2xl font-bold font-headline mt-8 mb-4 text-foreground">4. Limitações</h2>
            <p>Em nenhum caso a WebRush ou seus fornecedores serão responsáveis por quaisquer danos (incluindo, sem limitação, danos por perda de dados ou lucro, ou devido a interrupção dos negócios) decorrentes do uso ou da incapacidade de usar os materiais no site da WebRush.</p>

            <h2 className="text-2xl font-bold font-headline mt-8 mb-4 text-foreground">5. Lei Aplicável</h2>
            <p>Qualquer reclamação relacionada ao site da WebRush será regida pelas leis do Brasil, sem levar em conta o conflito de disposições legais.</p>

            <p className="mt-8">Última atualização: [Data de hoje]</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
