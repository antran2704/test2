import "./Content.scss"

function Content({ children, title, desc, background, color }) {
  return (
    <div
      style={{ backgroundColor: `${background}` }}
      className={`content py-[100px] text-${color}`}
    >
      <div className="container">
        <div className="">
          <div className="flex flex-col items-center w-[60%] min-h-[130px] mx-auto my-0 all:w-[100%]">
            <h2 className="title text-[40px] font-[700] all:text-center sm:text-[24px]">
              {title}
            </h2>
            <p className="text-[18px] text-center mt-5 all:text-justify">{desc}</p>
          </div>
        </div>
        {children}
      </div>
    </div>
  );
}

export default Content;
