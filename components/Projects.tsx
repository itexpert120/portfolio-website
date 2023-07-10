import ProjectItem from "./projects/ProjectItem";

type Project = {
  id: number;
  title?: string;
  imgSrc?: string;
  description?: string;
  techstack?: string;
  liveLink?: string;
  codeLink?: string;
};

const projects: Project[] = [
  {
    id: 1,
    title: "Twitter Clone",
    imgSrc: "/projects/twitter-clone.jpg",
    description:
      "Full stack Twitter clone made with React.js and Next.js with App Router. Styled using TailwindCSS.",
    techstack: "React.js, Next.js, TailwindCSS, MongoDB, Prisma",
    liveLink: "https://twitter-clone-delta-one.vercel.app/",
    codeLink: "https://github.com/itexpert120/twitter-clone",
  },
  {
    id: 2,
    title: "E-Commerce Admin Dashboard",
    imgSrc: "/projects/ecommerce.jpg",
    description:
      "A full stack E Commerce Admin Dashboard to manage and organize your products, categories and more.",
    techstack: "React.js, Next.js, TailwindCSS, Zustand, MySQL, Prisma",
  },
  {
    id: 3,
    title: "AI Article Summarizer",
    imgSrc: "/projects/summarizer.jpg",
    description:
      "AI Article Summarizer using RapidAPI, beautiful frontend using TailwindCSS.",
    techstack: "React.js, Vite.js, TailwindCSS, Redux Toolkit",
    liveLink: "https://ai-summarizer-kappa.vercel.app/",
    codeLink: "https://github.com/itexpert120/article-summarizer",
  },
  {
    id: 4,
  },
  {
    id: 5,
  },
  {
    id: 6,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="mt-32">
      <div className="text-center">
        <h2 className="text-4xl text-[#42446E] dark:text-[#CCCCCC] font-bold">
          Projects
        </h2>
        <p className="text-2xl text-[#666666] dark:text-[#A7A7A7] mt-6">
          Things I&apos;ve built so far
        </p>
        <div className="mt-24 mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {projects.map((item) =>
              item?.title ? (
                <div key={item.id} className="flex items-center justify-center">
                  <ProjectItem {...item} />
                </div>
              ) : null
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
