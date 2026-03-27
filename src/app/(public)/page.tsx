import { AgendaSection } from "@/components/landing/AgendaSection";
import { ContactSection } from "@/components/landing/ContactSection";
import { ConvocatoriasSection } from "@/components/landing/ConvocatoriasSection";
import { GallerySection } from "@/components/landing/GallerySection";
import { Hero } from "@/components/landing/Hero";
import { MapSection } from "@/components/landing/MapSection";
import { MenuPreviewSection } from "@/components/landing/MenuPreviewSection";
import { SystemPreviewSection } from "@/components/landing/SystemPreviewSection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <AgendaSection />
      <ConvocatoriasSection />
      <MenuPreviewSection />
      <SystemPreviewSection />
      <GallerySection />
      <MapSection />
      <ContactSection />
    </>
  );
}
