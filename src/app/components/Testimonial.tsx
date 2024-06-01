// src/app/components/Testimonial.tsx
"use client";
import Image from "next/image";
import { useState } from "react";


const Testimonial = () => {
  // Using useState here is fine because this component is a client component
  const [data] = useState([
    {
      name: "Johnson",
      job: "small business owner",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, maxime?",
      image: "/boy.png"
    },
    {
      name: "John Doe",
      job: "small business owner",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, maxime?",
      image: "/boy1.png"
    },
    {
      name: "Jack",
      job: "Web developer",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, maxime?",
      image: "/boy2.png"
    }
  ]);

  return (
    <div className="max-w-[1200px] mx-auto flex flex-col gap-4 glass p-6 mt-8">
      <div className="flex items-center justify-center">
        <h1 className="text-3xl font-semibold text-white">Testimonials</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {data.map((testimonial, index) => (
          <div key={index} className="  bg-zinc-800 border-2 text-white rounded-lg p-6">
            <div className="rounded-full border-2 overflow-hidden h-20 w-20">
              <Image
                src={testimonial.image}
                alt={testimonial.name}
                width={100}
                height={100}
                objectFit="cover"
              />
            </div>
            <h1 className="font-bold">{testimonial.name}</h1>
            <h6 className="font-semibold">{testimonial.job}</h6>
            <p className="mt-4">{testimonial.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
