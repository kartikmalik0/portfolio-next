import Image from "next/image"
// import proj1 from "/proj1.png"
// import proj2 from "/proj2.png"
// import proj3 from "/proj3.png"
// import proj4 from "/proj4.png"
// import proj5 from "/proj5.png"
// import proj6 from "/proj6.png"

const projects  = [
  {id:1,img: "/proj1.png", title : "Project 1" , liveUrl:"/"},
  {id:2,img:"/proj2.png", title : "Project 2" , liveUrl:"/"},
  {id:3,img:"/proj3.png", title : "Project 3" , liveUrl:"/"},
  {id:4,img:"/proj4.png", title : "Project 4" , liveUrl:"/"},
  {id:5,img:"/proj5.png", title : "Project 5" , liveUrl:"/"},
  {id:6,img:"/proj6.png", title : "Project 6" , liveUrl:"/"},
]
const Work = () => {
  return (
    <div className="max-w-[1200px] mx-auto grid grid-cols-2 gap-4 glass p-6" >
      <div className=" col-span-2 my-4">
        <h1 className=" text-4xl mb-4  text-gray-300 ">My work</h1>
      </div>
      {
        projects.map((project)=>(
          <div key={project.id} className=" glass transform transition-transform overflow-hidden hover:scale-105 duration-300 shadow-lg group h-[300px] relative ">
            <img src={project.img} alt=""  className=" w-full h-full object-cover" />
            <div className=" rounded-sm group-hover:opacity-90 opacity-0 bg-[#232323] absolute transition-opacity  duration-300 inset-0 flex flex-col justify-center items-center ">
              <span className=" text-2xl font-bold text-white mb-4 ">{project.title}</span>
              <div>
                <a className=" bg-white px-5 py-2 rounded-xl font-bold" href={project.liveUrl}>
                  Live
                </a>
              </div>
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default Work
