import { Landmark, CreditCard, Grid2x2 } from 'lucide-react';

export default function PaymentMethods() {
  return (
    <section className="border-y border-border/50 bg-background/20">
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-center">
          <h3 className="text-sm font-semibold text-muted-foreground tracking-wider uppercase">Pagamento facilitado</h3>
          <div className="flex items-center gap-6 text-muted-foreground">
            <div className="flex items-center gap-2" title="Pix">
              <Grid2x2 className="h-6 w-6 text-green-400 transform rotate-45" />
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