import Link from "next/link";
import Logo from "@/components/logo";
import { Separator } from "@/components/ui/separator";

export default function Footer() {
  return (
    <footer id="contact" className="bg-gray-900 text-gray-400">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 text-center md:text-left">
          <div className="flex flex-col items-center md:items-start">
            <Logo className="h-8 w-auto text-white mb-4" />
            <p className="max-w-xs text-sm">
              Agilidade e profissionalismo para seu negócio decolar no Brasil.
            </p>
          </div>
          <div>
            <h3 className="font-bold font-headline text-white mb-4">Contato</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="mailto:contato@webrush.com.br" className="hover:text-primary transition-colors">contato@webrush.com.br</a></li>
              <li><a href="tel:+5511999998888" className="hover:text-primary transition-colors">+55 (11) 99999-8888</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold font-headline text-white mb-4">Links Rápidos</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="#inicio" className="hover:text-primary transition-colors">Início</Link></li>
              <li><Link href="#planos" className="hover:text-primary transition-colors">Planos</Link></li>
              <li><Link href="#como-funciona" className="hover:text-primary transition-colors">Como Funciona</Link></li>
              <li><Link href="#faq" className="hover:text-primary transition-colors">Dúvidas Frequentes</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold font-headline text-white mb-4">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="#" className="hover:text-primary transition-colors">Termos de Serviço</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Política de Privacidade</Link></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4">
        <Separator className="bg-gray-700" />
        <div className="py-8 text-center text-sm text-gray-500">
          <p>&copy; 2025 SykoTech LTDA. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
