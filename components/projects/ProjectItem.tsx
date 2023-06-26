import Image from "next/image";

import { AiOutlineLink, AiFillGithub } from "react-icons/ai";

interface ProjectItemProps {
  title?: string;
  imgSrc?: string;
  description?: string;
  techstack?: string;
  liveLink?: string;
  codeLink?: string;
}

export default function ProjectItem({
  title,
  imgSrc,
  description,
  techstack,
  liveLink,
  codeLink,
}: ProjectItemProps) {
  return (
    <div className="text-left flex flex-col gap-4 items-center w-[335px] h-[530px] shadow-2xl rounded-3xl dark:bg-[#363636]">
      <Image
        src={imgSrc ? imgSrc : "/projects/placeholder.png"}
        alt="placeholder"
        height={260}
        width={375}
        style={{ objectFit: "cover" }}
        className="rounded-t-3xl"
      />
      <div className="max-w-[305px]">
        <h3 className="text-black dark:text-[#CCCCCC] font-medium text-xl">
          {title ? title : "Project Title Goes Here"}
        </h3>
        <p className="text-[#666666] dark:text-[#CCCCCC] mt-4">
          {description
            ? description
            : "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"}
        </p>
        <p className="text-[#42446E] dark:text-[#CCCCCC] mt-4">
          <span className="font-medium">Tech stack: </span>
          {techstack ? techstack : "HTML, JavaScript, CSS, React"}
        </p>
        <div className="mt-4 text-sm flex flex-row justify-between text-black underline dark:decoration-white cursor-pointer">
          <a href={`${liveLink ? liveLink : "#"}`} target="_blank">
            <div className="flex flex-row items-center dark:text-white">
              <AiOutlineLink size="20" className="mr-2 dark:text-[#FCFCFC]" />{" "}
              Live Preview
            </div>
          </a>
          <a href={`${codeLink ? codeLink : "#"}`} target="_blank">
            <div className="flex flex-row items-center dark:text-white">
              <AiFillGithub size="20" className="mr-2 dark:text-[#FCFCFC]" />{" "}
              View Code
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
