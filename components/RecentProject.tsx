import { projects } from "@/data/index";
import React from "react";
import { PinContainer } from "./ui/3d-pin";

const RecentProject = () => {
  return (
    <div className="py-20">
      <h1 className="heading " >
        A Small Selection of {''}
        <span className="text-purple " >Recent Projects</span>
      </h1>
      <div className="flex flex-wrap items-centre justify-center p-4 gap-16 mt-10" >
        {projects.map(({id , title, des, iconLists, img , link})=>(
          <div key={id} className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw] ">
            <PinContainer title={title } href={link}  >
              <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh]" >
                <div  className="relative w-full h-full overflow-hidden lg:rounded-3xl bg-[#13162d] ">
                  <img src="/bg.png" alt="backPNG" />
                </div>
                <img src={img} alt={title}
                className="z-10 absolute bottom-0 " />
              </div>
              <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1" >
                {title}
              </h1>
              <p className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2 " />
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProject;
