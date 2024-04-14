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
    designation: "Senior Software Engineer",
    content: (
      <p>
        These cards are amazing, <Highlight>I want to use them</Highlight> in my
        project. Framer motion is a godsend ngl tbh fam 🙏
      </p>
    ),
  },
  {
    id: 1,
    name: "Elon Musk",
    designation: "Senior Shitposter",
    content: (
      <p>
        I dont like this Twitter thing,{" "}
        <Highlight>deleting it right away</Highlight> because yolo. Instead, I
        would like to call it <Highlight>X.com</Highlight> so that it can easily
        be confused with adult sites.
      </p>
    ),
  },
  {
    id: 2,
    name: "Tyler Durden",
    designation: "Manager Project Mayhem",
    content: (
      <p>
        The first rule of
        <Highlight>Fight Club</Highlight> is that you do not talk about fight
        club. The second rule of
        <Highlight>Fight club</Highlight> is that you DO NOT TALK about fight
        club.
      </p>
    ),
  },
];
