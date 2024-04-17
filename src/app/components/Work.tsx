

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
    <div className="max-w-[1200px] mx-auto grid grid-cols-1  gap-4 glass p-6" >
      <div className=" col-span-2 my-4">
        <h1 className=" text-4xl mb-4  text-gray-300 ">My work</h1>
      </div>
    </div>
  )
}

export default Work
