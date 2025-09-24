"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export default function Hero() {
  const laptopImage = PlaceHolderImages.find(p => p.id === "hero-laptop");
  const phoneImage = PlaceHolderImages.find(p => p.id === "hero-phone");

  const whatsappNumber = "5548992084572";
  const message = encodeURIComponent("Olá! Tenho interesse nos serviços da WebRush e gostaria de mais informações.");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;

  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      <div className="container mx-auto px-4 text-center relative z-10">
        <h1 className="font-headline text-4xl md:text-6xl font-extrabold tracking-tight mb-6 max-w-4xl mx-auto">
          Seu site profissional no ar em tempo recorde.
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
          Crie seu site com domínio incluso a partir de R$69. Rápido, seguro e com a agilidade que seu negócio precisa para o mercado global.
        </p>
        <Button size="lg" asChild className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-lg">
          <Link href={whatsappUrl} target="_blank">Comece com R$69</Link>
        </Button>
      </div>

      <div className="relative mt-16 md:mt-24 max-w-6xl mx-auto px-4">
        <div className="relative">
          {laptopImage && (
            <Image
              src={laptopImage.imageUrl}
              alt={laptopImage.description}
              width={1024}
              height={640}
              priority
              data-ai-hint={laptopImage.imageHint}
              className="rounded-lg shadow-2xl shadow-primary/10 mx-auto"
            />
          )}
          {phoneImage && (
             <div className="absolute -bottom-8 md:-bottom-16 right-0 md:right-8 w-1/4 max-w-[200px]">
                <Image
                    src={phoneImage.imageUrl}
                    alt={phoneImage.description}
                    width={300}
                    height={600}
                    data-ai-hint={phoneImage.imageHint}
                    className="rounded-lg shadow-2xl shadow-primary/20"
                />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
