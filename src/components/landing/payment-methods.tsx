import { Landmark, CreditCard } from 'lucide-react';

const PixIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M11.9992 2.00002C5.92482 2.00002 1.99919 5.92565 1.99919 12C1.99919 18.0744 5.92482 22 11.9992 22C18.0736 22 21.9992 18.0744 21.9992 12C21.9992 5.92565 18.0736 2.00002 11.9992 2.00002ZM11.154 13.9235L7.79633 11.9864L11.154 10.0485V6.17294L16.4866 9.08823L13.129 11.0261L16.4866 12.964L11.154 15.827V13.9235ZM11.154 12.5588V11.3981L9.75624 12.2222L11.154 13.0463V12.5588Z"
      fill="currentColor"
    />
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
              <PixIcon className="h-6 w-6" />
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
