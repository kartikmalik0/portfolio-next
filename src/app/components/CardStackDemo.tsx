"use client";
import { cn } from "../utils/cn";
import { PinContainer } from "./ui/3d-pin";
import { CardStack } from "./ui/card-stack";
export function CardStackDemo() {
  return (
    <div className=" max-w-[1200px] mx-auto flex flex-col gap-4 glass p-6">
      <div className="">
        <h1 className=" text-4xl mb-4  text-gray-300 ">My work</h1>
      </div>
       <div className="flex flex-wrap">
       <PinContainer
        title="/ui.aceternity.com"
        href="https://msburgers.netlify.app/" 
        containerClassName="md:w-[50%] w-full"        
        >
      <CardStack items={CARDS} />
        </PinContainer>

        <PinContainer
        title="/ui.aceternity.com"
        href="/card"    
        containerClassName="md:w-[50%] w-full"        
     
        >
      <CardStack items={CARDS} />
        </PinContainer>

        <PinContainer
        title="/ui.aceternity.com"
        href="/card"      
        containerClassName="md:w-[50%] w-full"        
   
        >
      <CardStack items={CARDS} />
        </PinContainer>

        <PinContainer
        title="/ui.aceternity.com"
        href="/card"     
        containerClassName="md:w-[50%] w-full"        
    
        >
      <CardStack items={CARDS} />
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

const CARDS = [
  {
    id: 0,
    name: "Manu Arora",
    img:"/projD1.jpg"
  },
  {
    id: 1,
    name: "Elon Musk",
    img:"/projM1.jpg"

  },
  {
    id: 2,
    name: "Tyler Durden",
        img:"/projD1.jpg"

  },
];
