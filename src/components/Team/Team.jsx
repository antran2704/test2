import content from "./index";
function Team() {
    return ( 
        <div className="flex items-center flex-wrap justify-between my-[60px] all:gap-y-[100px]">
          {content.map((item, index) => (
            <div key={index} className="service__item max-w-[200px] max-h-[305px] all:max-w-none md:w-[40%] sm:w-[100%] flex flex-col items-center">
              <div className="service__item-img w-[200px] h-[200px] flex items-center justify-center">
                <img src={item.img} className = "rounded-[50%]" alt="" />
              </div>
              <h3 className="text-[24px] font-[600] mt-[10px] text-center">{item.name}</h3>
              <p className="text-center text-[#30BAE7] mb-[10px]">{item.position}</p>
              <p className="text-center all:text-start">
               {item.desc}
              </p>
            </div>
          ))}
        </div>
     );
}

export default Team;