/* eslint-disable @next/next/no-img-element */

const Skills = () => {
  const style = {
    '--time': '20s'
  } as React.CSSProperties;
  const style2 = {
    '--time': '40s'
  } as React.CSSProperties;
  const style3 = {
    '--time': '25s'
  } as React.CSSProperties;
  const style4 = {
    '--time': '30s'
  } as React.CSSProperties;
  return (
    <div id="skills" className=" overflow-hidden flex justify-center flex-col items-center  max-w-[1200px]    mx-auto mt-8  gap-4 glass p-6" >
      <div className="  w-full my-4">
        <h1 className=" text-4xl mb-4  text-gray-300 ">Skills</h1>
      </div>

      <div className="scroll" style={style}>
        <div>
          <span>HTML</span>
          <span>CSS</span>
          <span>JavaScript</span>
          <span>React Js</span>
          <span>Next Js</span>
          <span>Prisma</span>
          <span>Firebase</span>
          <span>Docker</span>
          <span>Angular</span>
          <span>Tailwind</span>
          <span>React Ecosysystem</span>
          <span>Bootstrap</span>
          <span>Git</span>
        </div>
        <div>
          <span>HTML</span>
          <span>CSS</span>
          <span>JavaScript</span>
          <span>React Js</span>
          <span>Next Js</span>
          <span>Prisma</span>
          <span>Firebase</span>
          <span>Docker</span>
          <span>Angular</span>
          <span>Tailwind</span>
          <span>React Ecosysystem</span>
          <span>Bootstrap</span>
          <span>Git</span>

        </div>

      </div>
      <div className="scroll" style={style2}>
        <div>
          <span>HTML</span>
          <span>CSS</span>
          <span>JavaScript</span>
          <span>React Js</span>
          <span>Next Js</span>
          <span>Prisma</span>
          <span>Firebase</span>
          <span>Docker</span>
          <span>Angular</span>
          <span>Tailwind</span>
          <span>React Ecosysystem</span>
          <span>Bootstrap</span>
          <span>Git</span>

        </div>
        <div>
          <span>HTML</span>
          <span>CSS</span>
          <span>JavaScript</span>
          <span>React Js</span>
          <span>Next Js</span>
          <span>Prisma</span>
          <span>Firebase</span>
          <span>Docker</span>
          <span>Angular</span>
          <span>Tailwind</span>
          <span>React Ecosysystem</span>
          <span>Bootstrap</span>
        </div>

      </div>
      <div className="scroll" style={style3}>
        <div>
          <span>HTML</span>
          <span>CSS</span>
          <span>JavaScript</span>
          <span>React Js</span>
          <span>Next Js</span>
          <span>Prisma</span>
          <span>Firebase</span>
          <span>Docker</span>
          <span>Angular</span>
          <span>Tailwind</span>
          <span>React Ecosysystem</span>
          <span>Bootstrap</span>
        </div>
        <div>
          <span>HTML</span>
          <span>CSS</span>
          <span>JavaScript</span>
          <span>React Js</span>
          <span>Next Js</span>
          <span>Prisma</span>
          <span>Firebase</span>
          <span>Docker</span>
          <span>Angular</span>
          <span>Tailwind</span>
          <span>React Ecosysystem</span>
          <span>Bootstrap</span>
        </div>

      </div>


      <div className="scroll imgBox " style={style2}>
        <div >
          <img src="./skills/html.png" alt="" className=" ml-12 " />
          <img src="./skills/css.png" alt="" />
          <img src="./skills/js.png" alt="" />
          <img src="./skills/React.png" alt="" />
          <img src="./skills/angular.png" alt="" />
          <img src="./skills/next.png" alt="" />
          <img src="./skills/firebase.svg" alt="" />
          <img src="./skills/tailwind.png" alt="" />
          <img src="./skills/prisma.svg" alt="" className=" mr-12" />
        </div>
        <div className="" >
          <img src="./skills/html.png" alt="" className=" ml-12" />
          <img src="./skills/css.png" alt="" />
          <img src="./skills/js.png" alt="" />
          <img src="./skills/React.png" alt="" />
          <img src="./skills/angular.png" alt="" />
          <img src="./skills/next.png" alt="" />
          <img src="./skills/firebase.svg" alt="" />
          <img src="./skills/tailwind.png" alt="" />
          <img src="./skills/prisma.svg" alt="" className=" mr-12" />
        </div>
      </div>
    </div>
  )
}

export default Skills
