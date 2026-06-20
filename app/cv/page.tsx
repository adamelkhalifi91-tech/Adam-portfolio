import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { Identity } from "@/components/cv/Identity";
import { Logistics } from "@/components/cv/Logistics";
import { Education } from "@/components/cv/Education";
import { Research } from "@/components/cv/Research";
import { Projects } from "@/components/cv/Projects";
import { Skills } from "@/components/cv/Skills";
import { Languages } from "@/components/cv/Languages";

export const metadata: Metadata = {
  title: "CV",
  description:
    "Curriculum vitae of Adam El Khalifi Tagzouti, biotechnologist (BSc), wet-lab and computational, graduating May 2026.",
};

export default function CvPage() {
  return (
    <main>
      <Container className="space-y-24 py-20 md:space-y-32 md:py-28">
        <Identity />
        <Logistics />
        <Education />
        <Research />
        <Projects />
        <Skills />
        <Languages />
      </Container>
    </main>
  );
}
