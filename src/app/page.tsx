// import Image from "next/image";
import Card from '@/components/card/Card';
import Header from '@/components/header/Header';
import HeroSection from '@/components/hero/Hero';

export default function Home() {
  return (
    <main>
      <Header />
      <HeroSection
        headline="Catchy headline"
        description="TestSenectus et netus et malesuada fames ac turpis egestas sed. Viverra tellus in hac habitasse platea dictumst vestibulum. Nibh cras pulvinar mattis nunc sed blandit libero volutpat sed."
        primaryCtaText='Call to action'
        secondaryCtaText='Call to action'
        imageUrl='https://cdn.builder.io/api/v1/image/assets/TEMP/93c8db556ebf509da56851f2d062d453768a49bac8d9bde4ed82f06b09d29521?apiKey=6930010e2b8842c4b058a931ee8137c8'
        imageAlt='alt'
      />
      <section className="py-12 bg-neutral-50">
        <div className="container flex gap-6">
          {[...Array(4)].map((_, i) =>
            <Card
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/93c8db556ebf509da56851f2d062d453768a49bac8d9bde4ed82f06b09d29521?apiKey=6930010e2b8842c4b058a931ee8137c8"
              alt="Descriptive alternate text"
              eyebrow="Eyebrow"
              headline="Catchy headline"
              description="Senectus et netus et malesuada fames ac turpis egestas sed."
              action="Call to Action"
              key={i}
            />
          )}

        </div>
      </section>
    </main>
  );
}
