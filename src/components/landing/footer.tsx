import Link from "next/link";
import Logo from "@/components/logo";
import { Separator } from "@/components/ui/separator";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer id="contact" className="bg-[#111827] text-gray-400">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
          <div className="flex flex-col items-center md:items-start space-y-4">
            <Logo className="h-8 w-auto text-white" />
            <p className="text-sm">Um produto de SykoTech LTDA.</p>
            <ul className="space-y-2 text-sm text-left">
              <li className="flex items-center gap-2 justify-center md:justify-start">
                <Mail className="h-4 w-4" />
                <a href="mailto:contact@sykotech.com" className="hover:text-primary transition-colors">contact@sykotech.com</a>
              </li>
              <li className="flex items-center gap-2 justify-center md:justify-start">
                <Phone className="h-4 w-4" />
                <a href="tel:+5548992084572" className="hover:text-primary transition-colors">+55 (48) 99208-4572</a>
              </li>
              <li className="flex items-center gap-2 justify-center md:justify-start">
                <MapPin className="h-4 w-4" />
                <span>Santa Catarina, Brasil</span>
              </li>
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
              <li><a href="https://www.sykotech.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Site Empresarial</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4">
        <Separator className="bg-gray-700" />
        <div className="py-8 text-center text-sm text-gray-500">
          <p>&copy; 2025 SykoTech LTDA | CNPJ: 62.249.967/0001-69 | Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}