import {
  AiFillGithub,
  AiFillTwitterCircle,
  AiFillLinkedin,
} from "react-icons/ai";

const links = [
  {
    label: "Home",
    id: "#home",
  },
  {
    label: "About",
    id: "#about",
  },
  {
    label: "Tech Stack",
    id: "#tech-stack",
  },
  {
    label: "Projects",
    id: "#projects",
  },
  {
    label: "Contact",
    id: "#contact",
  },
];

const iconLinks = [
  {
    label: "Github",
    icon: AiFillGithub,
    href: "https://github.com/itexpert120",
  },
  {
    label: "Twitter",
    icon: AiFillTwitterCircle,
    href: "https://twitter.com/itexpert120",
  },
  {
    label: "LinkedIn",
    icon: AiFillLinkedin,
    href: "https://www.linkedin.com/in/itexpert120",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="mt-52">
      <div className="flex flex-col sm:flex-row justify-start sm:justify-between items-start">
        <div>
          <span className="font-extrabold text-2xl text-[#42446E] dark:text-[#A7A7A7]">
            @itexpert120
          </span>
        </div>
        <div className="text-[#42446E] dark:text-[#A7A7A7] flex flex-col sm:flex-row gap-6 mt-5 sm:mt-0 sm:gap-16 sm:items-center">
          <p>+92 344 6321002</p>
          <a href="mailto:itexpert120@gmail.com">itexpert120@gmail.com</a>
          <div className="flex gap-5 items-center">
            {iconLinks.map((item) => (
              <div key={item.label}>
                <a href={item.href} target="_blank">
                  <item.icon
                    size={30}
                    color="#666666"
                    className="hover:fill-black transition dark:hover:fill-white dark:text-[#A7A7A7]"
                  />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
      <hr className="mt-11 mb-16 border-[1px]" />
      <div className="flex flex-col sm:flex-row justify-between gap-16 items-start sm:items-center text-[#666666] #666666 mb-11">
        <div className="flex flex-col sm:flex-row gap-6 sm:gap-16 items-start sm:items-center">
          {links.map((item) => (
            <div
              key={item.id}
              className="hover:underline hover:text-black dark:hover:text-white dark:text-[#A7A7A7] text-lg transition"
            >
              <a href={item.id}>{item.label}</a>
            </div>
          ))}
        </div>
        <p className="dark:text-[#A7A7A7]">
          Built by{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-sky-500 to-purple-500">
            Zeeshan
          </span>{" "}
          with{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-sky-500 to-purple-500">
            Love{" "}
          </span>
          &{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-sky-500 to-purple-500">
            Coffee
          </span>
        </p>
      </div>
    </section>
  );
}
