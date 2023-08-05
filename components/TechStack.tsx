import Image from "next/image";

const icons = [
  {
    id: "HTML",
    image: "/icons/html.png",
  },
  {
    id: "CSS",
    image: "/icons/css.png",
  },
  {
    id: "JS",
    image: "/icons/js.png",
  },
  {
    id: "ts",
    image: "/icons/ts.png",
  },
  {
    id: "next.js",
    image: "/icons/next.js.png",
  },
  {
    id: "react",
    image: "/icons/react.png",
  },
  {
    id: "redux",
    image: "/icons/redux.png",
  },
  {
    id: "tailwind",
    image: "/icons/tailwind.png",
  },
  {
    id: "vite",
    image: "/icons/vite.png",
  },
  {
    id: "vscode",
    image: "/icons/vscode.png",
  },
  {
    id: "github",
    image: "/icons/github.png",
  },
  {
    id: "git",
    image: "/icons/git-icon.png",
  },
];

export default function TechStack() {
  return (
    <section id="tech-stack">
      <div className="text-center">
        <h2 className="text-4xl text-[#42446E] dark:text-[#CCCCCC] font-bold">
          My Tech Stack
        </h2>
        <p className="text-2xl text-[#666666] dark:text-[#A7A7A7] mt-6">
          Technologies I&apos;ve been working with recently
        </p>
      </div>
      <div className="grid grid-cols-4 sm:grid-cols-6 gap-4 sm:gap-12 mt-12 sm:mt-24">
        {icons.map((icon) =>
          icon.id === "next.js" || icon.id === "github" ? (
            <div
              className="flex justify-center items-center dark:invert hover:scale-125 transition"
              key={icon.id}
            >
              <Image src={icon.image} alt={icon.id} width={120} height={120} />
            </div>
          ) : (
            <div className="flex justify-center items-center hover:scale-125 transition" key={icon.id}>
              <Image src={icon.image} alt={icon.id} width={120} height={120} />
            </div>
          )
        )}
      </div>
    </section>
  );
}
