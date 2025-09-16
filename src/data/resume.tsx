import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Zeeshan Ahmad",
  initials: "ZA",
  url: "https://itexpert120.vercel.app",
  location: "Multan, Pakistan",
  locationLink: "https://www.google.com/maps/place/Multan",
  description:
    "Frontend Developer specializing in React, Next.js, and Web3 applications. Passionate about building modern web experiences and contributing to the blockchain ecosystem.",
  summary:
    "Experienced Frontend Developer with expertise in React, Next.js, and TypeScript. Currently working as a freelance developer and contributing to the NEAR Protocol ecosystem. I have developed and maintained modern web applications for Web3, healthcare, and service industry clients, with a focus on responsive user interfaces and blockchain integration.",
  avatarUrl: "/me.jpeg",
  skills: [
    "JavaScript",
    "TypeScript",
    "Python",
    "HTML/CSS",
    "SQL",
    "React",
    "Next.js",
    "Bootstrap",
    "TailwindCSS",
    "shadcn/ui",
    "TanStack",
    "Git",
    "GitHub",
    "VS Code",
    "Cursor",
    "Vercel",
    "Netlify",
    "npm",
    "Webpack",
    "Figma",
    "Docker",
    "GitHub Actions",
    "Digital Ocean",
    "Railway",
    "VPS Hosting",
    "CI/CD Pipelines",
    "Jest",
    "Playwright",
    "End-to-End Testing",
    "Unit Testing",
    "RESTful APIs",
    "JSON",
    "Responsive Web Design",
    "Progressive Web Apps (PWA)",
    "MongoDB",
    "PostgreSQL",
    "Convex DB",
    "Web3",
    "NEAR Protocol",
    "Blockchain",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "itexpert120@outlook.com",
    tel: "+923004761002",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/itexpert120",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/itexpert120/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/itexpert120",
        icon: Icons.x,

        navbar: true,
      },
      Youtube: {
        name: "Youtube",
        url: "https://www.youtube.com/@itexpert120",
        icon: Icons.youtube,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:itexpert120@outlook.com",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Everything Labs LLC",
      href: "",
      badges: [],
      location: "Remote",
      title: "Frontend Developer",
      logoUrl: "/everything-labs.png",
      start: "2024",
      end: "Present",
      description:
        "Currently working as a Frontend Developer at Everything Labs LLC, focusing on modern web application development using React, Next.js, and TypeScript. Contributing to innovative projects in the Web3 and blockchain space with emphasis on user experience and performance optimization.",
    },
    {
      company: "Cooked Labs",
      badges: [],
      href: "",
      location: "Remote",
      title: "Frontend Developer (Part-time)",
      logoUrl: "/cooked-chicken.png",
      start: "2024",
      end: "Present",
      description:
        "Working part-time as a Frontend Developer at Cooked Labs, contributing to various web development projects. Focused on building responsive user interfaces and implementing modern frontend technologies to deliver high-quality user experiences.",
    },
    {
      company: "Build DAO",
      badges: [],
      href: "https://www.linkedin.com/company/nearbuilders",
      location: "Remote",
      title: "Frontend Developer",
      logoUrl: "/nearbuilders.jpg",
      start: "August 2023",
      end: "March 2025",
      description:
        "Worked as a Frontend Developer at Build DAO (NEAR Builders), contributing to the NEAR Protocol ecosystem development. Built and maintained modern web applications using React, Next.js, and TypeScript. Developed user interfaces for decentralized applications (dApps) with Web3 wallet integration. Participated in community-driven development processes and contributed to open-source projects within the NEAR blockchain ecosystem.",
    },
    {
      company: "Freelance",
      href: "",
      badges: [],
      location: "Remote",
      title: "Frontend Developer",
      logoUrl: "/freelance.png",
      start: "2023",
      end: "Present",
      description:
        "Developed and maintained modern web applications for Web3, healthcare, and service industry clients. Built responsive user interfaces using React, Next.js, and TypeScript for diverse client requirements. Conducted code reviews and provided technical guidance on React best practices and Web3 integration patterns. Made architectural decisions on state management, routing, and deployment strategies across 15+ projects. Implemented CI/CD pipelines using GitHub Actions and deployed applications across multiple platforms including Vercel, Digital Ocean, and Railway. Containerized applications using Docker for consistent development and production environments.",
    },
  ],
  education: [
    {
      school: "The Islamia University of Bahawalpur",
      href: "https://iub.edu.pk",
      degree: "Bachelor of Science in Computer Systems Engineering",
      logoUrl: "/iub.png",
      start: "2021",
      end: "2025",
      description: "3.72/4.00 CGPA",
    },
  ],
  projects: [
    {
      title: "GetCULTD Platform",
      href: "https://try.getcultd.com",
      dates: "2024 - Present",
      active: true,
      description:
        "Architected multi-application deployment strategy across main site, dashboard, and dApp with shared component libraries. Used TanStack Query for state management to reduce bundle size and improve data synchronization. Designed responsive interface architecture supporting both Web2 and Web3 authentication flows. Led technical discussions on API integration patterns for social media automation and payment processing. Improved Lighthouse performance scores from 65 to 90+ across all GetCULTD deployments.",
      technologies: [
        "React",
        "Next.js",
        "TypeScript",
        "TailwindCSS",
        "Web3 APIs",
        "TanStack Query",
      ],
      links: [
        {
          type: "Website",
          href: "https://try.getcultd.com",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "App",
          href: "https://app.getcultd.com",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "dApp",
          href: "https://dapp.getcultd.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/getcultd.png",
      video: "",
    },
    {
      title: "Curate.fun",
      href: "https://app.curate.fun",
      dates: "2024 - Present",
      active: true,
      description:
        "Built decentralized content curation platform optimized for large-scale data handling. Optimized large-scale content rendering by implementing TanStack Virtual, reducing initial load time for RSS feed. Designed component architecture for blockchain integration balancing performance with Web3 functionality. Contributed to open-source development following community-driven development practices. Reduced RSS feed rendering time from 3+ seconds to under 500ms using virtual scrolling.",
      technologies: [
        "React",
        "BOS Framework",
        "NEAR Blockchain",
        "Web3",
        "TanStack Virtual",
      ],
      links: [
        {
          type: "Website",
          href: "https://app.curate.fun",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/curate-fun.png",
      video: "",
    },
    {
      title: "NEAR Catalog",
      href: "https://dev.near.org/applications",
      dates: "2024",
      active: false,
      description:
        "Contributed to project discovery platform showcasing 350+ active NEAR ecosystem applications. Implemented end-to-end testing with Playwright ensuring robust user workflows and feature reliability. Developed dynamic project listing interfaces with advanced filtering and categorization features. Collaborated with NEAR community developers on open-source codebase improvements.",
      technologies: [
        "React",
        "Next.js",
        "NEAR Protocol",
        "Web3 Integration",
        "Playwright",
      ],
      links: [
        {
          type: "Website",
          href: "https://dev.near.org/applications",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/near-catalog.png",
      video: "",
    },
  ],
  hackathons: [
    {
      title: "REDACTED Hackathon",
      dates: "September 5 - October 31, 2024",
      location: "Remote",
      description:
        "Built a NEAR Social Profile Builder application using NEAR Protocol and Web3 technologies. Developed a comprehensive profile management system for the NEAR ecosystem with blockchain integration and social features. This was a submission for the [REDACTED] hackathon focused on reclaiming digital sovereignty.",
      image: "near.png",
      win: "Participant",
      links: [
        {
          title: "Hackathon",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://redacted.devpost.com/",
        },
        {
          title: "Project",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/NEARBuilders/builder-profile-maker",
        },
      ],
    },
    {
      title: "ETH Denver 2023",
      dates: "February 2023",
      location: "Denver, Colorado",
      description:
        "Built a calendar application on BOS (Blockchain Operating System) using NEAR Protocol. Developed a decentralized calendar system with blockchain-based scheduling and event management capabilities for the NEAR ecosystem.",
      image: "/ethdenver.png",
      win: "2nd Place Winner",
      links: [
        {
          title: "Project",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/NEARBuilders/events",
        },
      ],
    },
  ],
} as const;
