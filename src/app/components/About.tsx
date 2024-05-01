
const About = () => {
  return (
    <div className=" text-white gap-4 max-w-[1200px] mx-auto my-12 grid sm:grid-cols-3 ">
      <div className=" sm:col-span-2 glass sm:py-16 my-auto text-center p-4 ">
        <div className=" sm:max-w-full md:max-w-[80%] lg:max-w-[80%] xl:max-w-[80%] font-bold mb-4 ">
          <h2 className=" text-3xl font-bold mb-4 " >Enhance User Experience</h2>
          <p className=" text-gray-300"> Let me optimize your website for smoother navigation and faster loading times.</p>
        </div>
      </div>

      <div className=" hidden md:block sm:col-span-1 glass overflow-hidden">
        <img className=" w-[200px] md:w-[500px] absolute" src={"/notebookM.png"} alt="" />
      </div>

      <div className=" hidden md:block sm:col-span-1 glass overflow-hidden">
        <img className=" w-[200px] md:w-[500px] absolute" src={"/mobileR.png"} alt="" />
      </div>
      {/* for mobile */}
      <div className=" md:hidden relative overflow-hidden h-[200px] glass">
      <img className=" w-[400px]  absolute" src={"/notebookM.png"} alt="" />
      <img className=" w-[200px] right-0 absolute" src={"/mobileR.png"} alt="" />
      </div>
      <div className=" sm:col-span-2 glass sm:py-16 my-auto text-center p-4 ">
        <div className=" sm:max-w-full md:max-w-[80%] lg:max-w-[80%] xl:max-w-[80%] font-bold mb-4 ">
          <h2 className=" text-3xl font-bold mb-4  " >Boost Performance</h2>
          <p className=" text-gray-300">{"Allow me to fine-tune your website's code for improved speed and responsiveness."}</p>
        </div>
      </div>
    </div>
  )
}

export default About
