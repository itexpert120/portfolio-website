import ProjectItem from "./projects/ProjectItem";

const projects = [
  {
    id: "1",
    title: "Twitter Clone",
    imgSrc: "/projects/twitter-clone.jpg",
    description:
      "Full stack Twitter clone made with React.js and Next.js with App Router. Styled using TailwindCSS. Backend with REST API made with Next.js App Router.",
    techstack: "React.js, Next.js, TailwindCSS, MongoDB, Prisma",
    liveLink: "https://twitter-clone-delta-one.vercel.app/",
    codeLink: "https://github.com/itexpert120/twitter-clone",
  },
  {
    id: "2",
  },
  {
    id: "3",
  },
  {
    id: "4",
  },
  {
    id: "5",
  },
  {
    id: "6",
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
            {projects.map((item) => (
              <div key={item.id} className="flex items-center justify-center">
                <ProjectItem {...item} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
