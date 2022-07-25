import content from "./index";

function AboutUs() {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="grid grid-cols-[repeat(2,360px)] all:grid-cols-[repeat(1,auto)] w-[80%] md:w-[60%] sm:w-[100%] items-center justify-between gap-y-[80px] my-[60px]">
        {content.map((item, index) => (
          <div key={index} className="flex gap-[20px]">
            <div className="">
              <img src={item.img} className="" alt="" />
            </div>
            <div className="flex flex-col justify-center gap-[20px]">
              <p className="italic all:text-justify max-w-[300px]">{item.desc}</p>
              <div className="">
                <h2 className="font-[600] ">{item.name}</h2>
                <p className="position text-[#FFDD99]">{item.position}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AboutUs;
