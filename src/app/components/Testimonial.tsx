 "use client"
 import Image from "next/image";
import { useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Testimonial = () => {
  const [data] = useState([
    {
      name: "Johnson",
      job: "Small Business Owner",
      text: "I have had the pleasure of collaborating with this team on multiple projects, and they have consistently delivered high-quality work. Their dedication to perfection and their willingness to go the extra mile have made a significant difference in our projects’ success.",
      image: "/boy.png",
    },
    {
      name: "John Doe",
      job: "Small Business Owner",
      text: "We highly recommend this team for any creative project. Their unique approach and commitment to excellence ensure that every project they work on is a success. They have a keen eye for detail and an innate ability to bring ideas to life.",
      image: "/boy1.png",
    },
    {
      name: "Jack",
      job: "Web Developer",
      text: "Working with this team has been a game-changer for our business. They exceeded all our expectations with their innovative ideas and flawless execution. Their passion for their work is evident in the quality of their results.",
      image: "/boy2.png",
    },
    {
      name: "Charlie",
      job: "Software Developer",
      text: "Their innovative approach and flawless execution have truly elevated our business. Working with them has been transformative.",
      image: "/boy.png",
    },
    {
      name: "David",
      job: "Software Developer",
      text: "Working with this team has been a game-changer for our business. They exceeded all our expectations with their innovative ideas and flawless execution. Their passion for their work is evident in the quality of their results.",
      image: "/boy1.png",
    },
  ]);

  return (
    <div id="testimonial" className="max-w-[1200px] mx-auto flex flex-col gap-4 glass p-6 mt-8">
      <div className="flex items-center justify-center">
        <h2 className="text-3xl font-semibold text-white">Testimonials</h2>
      </div>
      <div className="relative W-full p-10 h-auto">
        <Carousel className="w-full h-auto ">
          <CarouselContent className="flex w-full">
            {data.map((testimonial, index) => (
              <CarouselItem  className="basis-1/3" key={index}>
                <div className="p-1">
                  <div className="bg-zinc-800 glass h-80 text-white rounded-lg p-3">
                    <div className="flex items-center mb-4">
                      <div className="rounded-full shadow-sm overflow-hidden h-20 w-20">
                        <Image
                          src={testimonial.image}
                          alt={`${testimonial.name} photo`}
                          width={100}
                          height={100}
                          objectFit="cover"
                        />
                      </div>
                      <div className="ml-4">
                        <h3 className="font-bold text-[#FFFFFF]">{testimonial.name}</h3>
                        <h4 className="font-light">{testimonial.job}</h4>
                      </div>
                    </div>
                    <p className="mt-4 font-[Montserrat] text-[#FFFFFF]">{testimonial.text}</p>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="text-red-500"/>
          <CarouselNext className="text-red-500"/>
        </Carousel>
      </div>
    </div>
  );
};

export default Testimonial;
