"use client";

import Link from "next/link";
import { MessageCircle } from "lucide-react";

export default function FloatingWhatsapp() {
  const whatsappNumber = "5548992084572";
  const message = encodeURIComponent("Olá, SykoTech! Tenho interesse nos serviços da WebRush e gostaria de mais informações.");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;

  return (
    <Link
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors flex items-center justify-center"
      aria-label="Contato via WhatsApp"
    >
      <MessageCircle className="h-8 w-8" />
    </Link>
  );
}
