"use client";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { useForm } from "react-hook-form";
import axios from "axios";
import { toast } from "react-toastify";
import { useState } from "react";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data: any) => {
    setIsLoading(true);
    try {
      await axios.post("/api/email", data);
      reset();
      toast.success("Email sent successfully");
    } catch (error) {
      console.error("Error sending email:", error);
      toast.error("Failed to send email");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div id="contact" className="max-w-[1200px]  mx-auto p-8">
      <div className="text-center mb-8">
        <h2 className="text-white text-3xl md:text-5xl mb-4 font-bold">
          {"Let's Connect"}
        </h2>
        <p className="text-white text-xl">
          and start working on amazing things.
        </p>
      </div>

      <div className="flex flex-col  items-center">
        <div className="bg-glass border border-glassBorder backdrop-blur-xs p-8 rounded-xl shadow-lg max-w-[600px] w-full">
          <h2 className="text-center text-white text-3xl mb-6">
            Ready to get Started?
          </h2>
          <form  onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <input
                type="text"
                className="w-full py-2 px-4 border-none rounded-lg bg-glass backdrop-blur-xs text-gray-800 placeholder-gray-500 focus:ring-2 focus:ring-blue-500 outline-none"
                placeholder="Enter your name"
                aria-label="Enter your name"
                {...register("name", { required: "Name is required" })}
              />
              {errors.name && (
                <span className="text-red-500">{errors.name.message}</span>
              )}
            </div>
            <div>
              <input
                type="email"
                className="w-full py-2 px-4 border-none rounded-lg bg-glass backdrop-blur-xs text-gray-800 placeholder-gray-500 focus:ring-2 focus:ring-blue-500 outline-none"
                placeholder="Enter your email"
                aria-label="Enter your email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: "Enter a valid email address",
                  },
                })}
              />
              {errors.email && (
                <span className="text-red-500">{errors.email.message}</span>
              )}
            </div>
            <div>
              <textarea
                cols={30}
                rows={3}
                className="w-full py-2 px-4 border-none rounded-lg bg-glass backdrop-blur-xs text-gray-800 placeholder-gray-500 focus:ring-2 focus:ring-blue-500 outline-none"
                placeholder="Enter your message"
                aria-label="Enter your message"
                {...register("message", { required: "Message is required" })}
              />
              {errors.message && (
                <span className="text-red-500">{errors.message.message}</span>
              )}
            </div>
            <div className="text-center">
            </div>
          </form>
          <div className="text-center mt-8">
              <button
                className="rounded-lg bg-blue-700 px-6 py-2 text-white hover:bg-red-500"
                type="submit"
              >
                {isLoading ? (
                  <span className="flex items-center justify-center">
                    <svg
                      className="w-5 h-5 mr-3 -ml-1 text-white animate-spin"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8v4a4 4 0 000 8V4a8 8 0 010 16z"
                      />
                    </svg>
                    Sending...
                  </span>
                ) : (
                  "Send Message"
                )}
              </button>
          <div className="mt-8 flex justify-center space-x-6">
            <a
              href="https://www.linkedin.com/in/kartik-malik-3543b2251"
              aria-label="LinkedIn"
              className="text-5xl text-blue-700 hover:transition ease-in-out delay-150  hover:-translate-y-1 duration-300 "
            >
              <AiFillLinkedin />
            </a>
            <a 
              href="https://github.com/kartikmalik0"
              aria-label="GitHub"
              className="text-5xl text-blue-800 hover:transition ease-in-out delay-150  hover:-translate-y-1 duration-300 "
            >
              <AiFillGithub />
            </a>
          </div>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
