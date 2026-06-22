export type Language = { name: string; level: string };

export type EducationEntry = {
  degree: string;
  institution: string;
  location: string;
  period: string;
  status: string;
  highlights: string[];
};

export type ResearchEntry = {
  title: string;
  institution: string;
  location: string;
  period: string;
  bullets: string[];
};

export type Skills = {
  laboratory: string[];
  computational: string[];
  business: string[];
};

export type CvData = {
  identity: {
    name: string;
    headline: string;
    subhead: string;
    location: string;
    email: string;
    linkedin: string | null;
    github: string | null;
  };
  logistics: {
    citizenship: string;
    mobility: string;
    workingLanguage: string;
  };
  education: EducationEntry[];
  research: ResearchEntry[];
  skills: Skills;
  languages: Language[];
};

export const cvData: CvData = {
  identity: {
    name: "Adam El Khalifi Tagzouti",
    headline: "Biotechnologist · Wet-Lab & Computational (Tech-Bio)",
    subhead:
      "Biotechnologist with a hybrid profile bridging molecular wet-lab research and computational data architecture. Experienced in molecular workflows: DNA extraction, PCR amplification, sequence analysis, across international laboratory settings. Builds independent Tech-Bio platforms that combine weighted algorithms and biometrics to validate scientific data. Seeking to transition applied molecular research into scalable therapeutic and industrial bioprocesses.",
    location: "Canary Islands, Spain",
    email: "adamelkhalifi91@gmail.com",
    linkedin: null, // TODO: add LinkedIn URL once available
    github: null, // TODO: add GitHub URL once available
  },
  logistics: {
    citizenship: "EU citizen (Spain). No visa sponsorship required.",
    mobility: "Immediately relocatable across Europe.",
    workingLanguage: "English.",
  },
  education: [
    {
      degree: "BSc in Biotechnology (240 ECTS)",
      institution: "Universidad Miguel Hernández de Elche (UMH)",
      location: "Spain",
      period: "2022 to 2026",
      status: "Graduating May 2026",
      highlights: [
        "Academic Excellence Track (ARA). Laboratory sessions, technical reporting and scientific seminars conducted exclusively in English.",
        "International Research Stay (6 months) at Universidad Autónoma de Baja California (UABC), Mexico (Feb 2026 to Jun 2026).",
      ],
    },
  ],
  research: [
    {
      title: "Undergraduate Research Project (Final Degree Project)",
      institution: "Universidad Autónoma de Baja California (UABC)",
      location: "Mexico",
      period: "Feb 2026 to Jun 2026",
      bullets: [
        "Isolated and molecularly identified Bacillus cereus strains from complex matrices (heavy-metal mining waste), combining environmental microbiology with molecular identification techniques.",
        "Performed cell culture, analytical extraction and sample preparation under research-laboratory conditions.",
        "Integrated into a new international laboratory, team and workflow quickly, working independently across a six-month placement.",
        "Participated in applied laboratory placements focused on the extraction and analytical evaluation of cyanotoxins.",
        "Processed cyanobacteria cultures and maintained stringent quality control and safety protocols following internal laboratory Standard Operating Procedures (SOPs).",
      ],
    },
  ],
  skills: {
    laboratory: [
      "DNA/RNA extraction",
      "PCR / qPCR",
      "Molecular cloning",
      "Microbial isolation and molecular identification",
      "Microbial culturing",
      "Strain isolation",
      "Cell culture",
      "Chromatography",
      "Biomolecule purification",
      "Analytical extraction",
      "Sample preparation",
      "Aseptic laboratory technique",
      "Environmental biotechnology",
    ],
    computational: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Web app deployment",
      "Computer Vision (MediaPipe FaceMesh)",
      "Algorithm design",
      "UI/UX design",
    ],
    business: [
      "Market analysis",
      "SEO",
      "Product strategy",
      "Monetization",
      "Scientific communication and outreach",
    ],
  },
  languages: [
    { name: "Spanish", level: "Native" },
    { name: "English", level: "Fluent, certified" },
    { name: "French", level: "Intermediate" },
  ],
};
