import content from "./index"

function Skills() {
    return ( 
        <div className="flex items-center flex-wrap justify-between my-[60px] all:gap-y-[30px]">
          {content.map((item, index) => (
            <div key={index} className="service__item max-w-[200px] all:max-w-none md:w-[40%] sm:w-[100%] max-h-[305px] flex flex-col items-center">
              <div className="service__item-img w-[200px] h-[200px] flex items-center justify-center">
                <img src={item.img} className = "rounded-[50%]" alt="" />
              </div>
              <h3 className="text-[24px] font-[600] text-center">{item.name}</h3>
            </div>
          ))}
        </div>
     );
}

export default Skills;