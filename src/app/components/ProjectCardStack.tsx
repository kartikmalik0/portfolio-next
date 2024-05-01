"use client";
import { cn } from "../utils/cn";
import { PinContainer } from "./ui/3d-pin";
import { CardStack } from "./ui/card-stack";

const CARDS = [
  {
    id: 0,
    name: "Manu Arora",
    img: "/projD1.jpg"
  },
  {
    id: 1,
    name: "Elon Musk",
    img: "/projM1.jpg"

  },
  {
    id: 2,
    name: "Tyler Durden",
    img: "/projD1.jpg"

  },
];

const CARDS2 = [
  {
    id: 0,
    name: "Manu Arora",
    img: "/projects/ms1.jpg"
  },
  {
    id: 1,
    name: "Elon Musk",
    img: "/projects/ms2.jpg"

  },
  {
    id: 2,
    name: "Tyler Durden",
    img: "/projects/ms3.jpg"
  },
];

const CARDS3 = [
  {
    id: 0,
    name: "Manu Arora",
    img: "/projects/ad1.jpg"
  },
  {
    id: 1,
    name: "Elon Musk",
    img: "/projects/ad2.jpg"

  },
  {
    id: 2,
    name: "Tyler Durden",
    img: "/projects/ad3.jpg"

  },
];
export function ProjectCardStack() {
  return (
    <div id="work" className=" max-w-[1200px] mx-auto flex flex-col gap-4 glass p-6">
      <h1 className=" text-4xl mb-4  text-gray-300 ">My work</h1>
      <div className="flex flex-wrap">


        <PinContainer
          title="Vistit My Profile"
          href="/"
          containerClassName="md:w-[50%] "
        >
          <CardStack items={CARDS} />
        </PinContainer>

        <PinContainer
          title="Visit MsBurgers"
          href="https://msburgers.netlify.app"
          containerClassName="md:w-[50%] "
        >
          <CardStack items={CARDS2} />
        </PinContainer>

        <PinContainer
          title="Advanced Filter Component"
          href="/"
          containerClassName="md:w-[50%]"
        >
          <CardStack items={CARDS3} />
        </PinContainer>
      </div>
    </div>
  );
}

// Small utility to highlight the content of specific section of a testimonial content
export const Highlight = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <span
      className={cn(
        "font-bold bg-emerald-100 text-emerald-700 dark:bg-emerald-700/[0.2] dark:text-emerald-500 px-1 py-0.5",
        className
      )}
    >
      {children}
    </span>
  );
};

