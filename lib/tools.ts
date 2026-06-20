export type ToolStatus = "live" | "in_progress" | "private_beta";

export type Tool = {
  slug: string;
  name: string;
  oneLiner: string;
  description: string;
  stack: string[];
  status: ToolStatus;
  demoUrl?: string | null;
  repoUrl?: string | null;
  featured?: boolean;
};

export const tools: Tool[] = [
  {
    slug: "biomatch",
    name: "Biomatch",
    oneLiner: "A digital trust standard for scientific credibility.",
    description:
      "Talent Passport. A web platform that audits scientific credibility through a weighted scoring algorithm (60/40 across scientific accuracy, narrative synthesis and risk handling) and real-time integrity checks using MediaPipe FaceMesh computer vision.",
    stack: ["Next.js", "React", "Tailwind CSS", "MediaPipe", "Computer Vision"],
    status: "in_progress",
    featured: true,
    demoUrl: null, // TODO: add Biomatch live URL
    repoUrl: null, // TODO: add Biomatch repo URL (if public)
  },
  {
    slug: "sequence-analyzer",
    name: "Sequence Analyzer",
    oneLiner: "DNA, RNA and protein analysis, 100% in your browser.",
    description:
      "A privacy-first tool to analyze biological sequences. Computes composition, GC content, melting temperature, translation across the six reading frames, ORF detection, and a full protein property profile (MW, pI, GRAVY, ε280, net charge).",
    stack: ["Next.js", "TypeScript", "Tailwind CSS"],
    status: "in_progress",
    demoUrl: null, // TODO
    repoUrl: null, // TODO
  },
  {
    slug: "primer-designer",
    name: "Primer Designer",
    oneLiner: "Educational PCR primer design with nearest-neighbor thermodynamics.",
    description:
      "Generates, filters and scores PCR primer pairs over a target sequence using SantaLucia 1998 thermodynamics, GC clamp checks, hairpin and dimer detection. Honest about its scope: for critical experiments, validate with Primer3 or PrimerBLAST.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS"],
    status: "in_progress",
    demoUrl: null, // TODO
    repoUrl: null, // TODO
  },
  {
    slug: "msms-viewer",
    name: "MS/MS Spectrum Viewer",
    oneLiner: "Educational tandem mass spectrometry viewer and annotator.",
    description:
      "Loads .mgf, .mzML, JSON and CSV spectra, visualizes them interactively with Plotly, calculates mass differences against a neutral-loss table, and matches theoretical b/y ions against a user-provided peptide sequence.",
    stack: ["Next.js", "TypeScript", "Plotly.js"],
    status: "in_progress",
    demoUrl: null, // TODO
    repoUrl: null, // TODO
  },
];
