import { Landmark, CreditCard } from 'lucide-react';

const PixIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg width="24" height="24" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M43.311 93.4335L7.15197 57.2735C-2.38399 47.7375 -2.38399 32.2625 7.15197 22.7265L43.311 6.5665C52.848 -2.96946 68.152 -2.96946 77.689 6.5665L93.433 22.3115C102.969 31.8475 102.969 47.3115 93.433 56.8485L57.274 93.0085C47.737 102.544 32.262 102.544 22.726 93.0085" fill="currentColor" transform="translate(-15, -15) scale(1.3) rotate(45, 50, 50)"></path>
        <path d="M49.814 69.186L26.34 57.45L49.814 45.713V30.814L73.287 42.55L49.814 54.287L73.287 66.023L49.814 77.76V69.186Z" fill="#111827"></path>
    </svg>
);


export default function PaymentMethods() {
  return (
    <section className="border-y border-border/50 bg-background/20">
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-center">
          <h3 className="text-sm font-semibold text-muted-foreground tracking-wider uppercase">Pagamento facilitado</h3>
          <div className="flex items-center gap-6 text-muted-foreground">
            <div className="flex items-center gap-2" title="Pix">
              <PixIcon className="h-6 w-6 text-green-400" />
              <span className="text-xs font-medium">Pix</span>
            </div>
            <div className="flex items-center gap-2" title="Transferência Bancária">
              <Landmark className="h-6 w-6" />
              <span className="text-xs font-medium">Transferência</span>
            </div>
            <div className="flex items-center gap-2" title="Cartão de Crédito e Débito">
              <CreditCard className="h-6 w-6" />
              <span className="text-xs font-medium">Cartão</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
