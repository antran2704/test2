import content from "./index";
import "./Services.scss"
function Services() {
  return (
        <div className="flex items-center flex-wrap all:gap-y-[30px] justify-between all:justify-around mt-[60px]">
          {content.map((item, index) => (
            <div key={index} className="service__item max-w-[200px] max-h-[305px] flex flex-col gap-[10px] md:w-[40%] sm:w-[100%] all:max-w-none">
              <div className="service__item-img flex items-center justify-center">
                <img src={item.img} alt="" />
              </div>
              <h3 className="text-[24px] font-[600] mt-[20px] text-center">{item.title}</h3>
              <p className="services__desc text-center md:text-start md:line-clamp-2">
               {item.desc}
              </p>
            </div>
          ))}
        </div>
  );
}

export default Services;
