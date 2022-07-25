import content, { buttons } from "./index";

function Portfolio() {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex items-center flex-wrap justify-center gap-[10px] my-[30px]">
        {buttons.map((button, index) => (
          <a key={index} href="/">
            <button
              style={{ backgroundColor: `${button.background}` }}
              className="px-[20px] py-[6px] rounded-md"
            >
              {button.content}
            </button>
          </a>
        ))}
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-1 items-center gap-x-[20px] gap-y-[60px] my-[60px]">
        {content.map((item, index) => (
          <div key={index} className="">
            <div className="">
              <img src={item.img} className="" alt="" />
            </div>
            <h3 className="text-[24px] mt-[10px] font-[200] text-center md:text-[20px] sm:text-[18px]">
              {item.name}
            </h3>
          </div>
        ))}
      </div>

      <a href="/">
        <button className="px-[60px] py-[20px] bg-[#17C2A4] text-white font-[600] rounded-md">
          LOAD MORE PROJECTS
        </button>
      </a>
    </div>
  );
}

export default Portfolio;
