import Image from "next/image";

export default function HeroSection() {
  return (
    <section id="about">
      <div className="flex flex-col sm:flex-row items-center justify-between my-16 sm:my-64">
        <h1 className="font-bold text-center sm:text-left text-4xl sm:text-5xl tracking-[-1px] text-[#42446E] dark:text-[#D9D9D9] leading-tight sm:leading-[70px]">
          Hi 👋,
          <br />
          My name is <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-sky-500 to-purple-500">
            Muhammad Zeeshan Ahmad
          </span>
          <br />I build things for web
        </h1>
        <div className="rounded-full h-64 w-64 sm:h-auto sm:w-auto bg-gradient-to-t from-sky-500 to-purple-500 my-6 p-2">
          <Image
            alt="Profile Photo"
            src="/images/pfp.jpg"
            width={350}
            height={350}
            className="rounded-full"
          />
        </div>
      </div>
    </section>
  );
}
