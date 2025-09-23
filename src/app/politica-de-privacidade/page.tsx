import Header from "@/components/landing/header";
import Footer from "@/components/landing/footer";

export default function PoliticaDePrivacidade() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold font-headline mb-8">Política de Privacidade</h1>
          <div className="prose prose-invert max-w-none text-muted-foreground space-y-6">
            <p>A sua privacidade é importante para nós. É política do WebRush respeitar a sua privacidade em relação a qualquer informação sua que possamos coletar no site WebRush, e outros sites que possuímos e operamos.</p>
            
            <h2 className="text-2xl font-bold font-headline mt-8 mb-4 text-foreground">1. Informações que coletamos</h2>
            <p>Solicitamos informações pessoais apenas quando realmente precisamos delas para lhe fornecer um serviço. Fazemo-lo por meios justos e legais, com o seu conhecimento e consentimento. Também informamos por que estamos coletando e como será usado.</p>
            
            <h2 className="text-2xl font-bold font-headline mt-8 mb-4 text-foreground">2. Uso de dados</h2>
            <p>Apenas retemos as informações coletadas pelo tempo necessário para fornecer o serviço solicitado. Quando armazenamos dados, protegemos dentro de meios comercialmente aceitáveis para evitar perdas e roubos, bem como acesso, divulgação, cópia, uso ou modificação não autorizados.</p>
            
            <h2 className="text-2xl font-bold font-headline mt-8 mb-4 text-foreground">3. Cookies</h2>
            <p>O nosso site pode ter links para sites externos que não são operados por nós. Esteja ciente de que não temos controle sobre o conteúdo e práticas desses sites e не podemos aceitar responsabilidade por suas respectivas políticas de privacidade.</p>
            
            <h2 className="text-2xl font-bold font-headline mt-8 mb-4 text-foreground">4. Consentimento</h2>
            <p>Você é livre para recusar a nossa solicitação de informações pessoais, entendendo que talvez não possamos fornecer alguns dos serviços desejados.</p>
            <p>O uso continuado de nosso site será considerado como aceitação de nossas práticas em torno de privacidade e informações pessoais. Se você tiver alguma dúvida sobre como lidamos com dados do usuário e informações pessoais, entre em contato conosco.</p>

            <h2 className="text-2xl font-bold font-headline mt-8 mb-4 text-foreground">5. Mais informações</h2>
            <p>Esperemos que esteja esclarecido e, como mencionado anteriormente, se houver algo que você não tem certeza se precisa ou não, geralmente é mais seguro deixar os cookies ativados, caso interaja com um dos recursos que você usa em nosso site.</p>
            
            <p className="mt-8">Esta política é efetiva a partir de [Data de hoje].</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
