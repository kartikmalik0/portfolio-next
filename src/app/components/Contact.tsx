"use client"
import { AiFillLinkedin, AiFillGithub, AiFillInstagram } from "react-icons/ai"
import { useForm } from "react-hook-form"
import axios from "axios"
import { toast } from "react-toastify"
import { useState } from "react"

const Contact = () => {
  const [isLoading, setIsLoading] = useState(false); 
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()

  const onSubmit = async (data: any) => {
    setIsLoading(true);
    try {
      await axios.post('/api/email', data);
      toast.success('Email sent successfully');
    } catch (error) {
      console.error('Error sending email:', error);
      toast.error('Failed to send email');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div id="contact" className=" max-w-[1200px] glass mx-auto">
      <div className=" mx-auto max-w-[600px] text-center p-6">
        <h2 className=" text-gray-500 text-3xl md:text-5xl mb-4 font-bold">{"Let's connect"}</h2>
        <p className=" text-gray-500 text-xl">and start working on amazing things.</p>
      </div>

      <div className=" flex justify-center">
        <div className=" my-auto text-purple-900 flex flex-col ">
          <a href="https://www.linkedin.com/in/kartik-malik-3543b2251" className=" w-[100px] h-auto mb-8 flex justify-center items-center">
            <AiFillLinkedin className=" text-5xl" />
          </a>
          <a href="https://github.com/kartikmalik0" className=" w-[100px] h-auto mb-4 flex justify-center items-center">
            <AiFillGithub className=" text-5xl"  />
          </a>
          
        </div>
        <div className=" p-6 max-w-6xl ">
          <h2 className=" mb-4 text-2xl font-bold text-gray-400">Ready to get Started ?</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="space-y-4 mb-6">
              <input
                type="text"
                className="w-full border-gray-400 py-2 px-4 border rounded-md"
                placeholder="Enter your name"
                {...register("name", { required: true })}
              />
              {errors.name && <span className="text-red-500">Please enter a valid name</span>}

              <input
                type="email"
                className="w-full border-gray-400 py-2 px-4 border rounded-md"
                placeholder="Enter your email"
                {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
              />
              {errors.email && <span className="text-red-500">Please enter a valid email address</span>}

              <textarea
                id=""
                cols={30}
                rows={5}
                className="w-full border-gray-400 py-2 px-4 border rounded-md"
                placeholder="Enter the message"
                {...register("message", { required: true })}
              />
              {errors.message && <span className="text-red-500">Please enter a message</span>}
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="w-full bg-purple-700 max-w-md px-6 py-3 rounded-xl text-white"
              >
                {isLoading ? "Sending..." : "Send Message"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
