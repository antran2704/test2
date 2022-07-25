function FeedBack() {
  return (
    <div className="w-[60%] all:w-[100%] my-0 mx-auto flex flex-col items-center gap-[20px] mt-[40px]">
      <div className="w-full flex sm:flex-col items-center justify-center gap-[20px]">
        <input
          className="px-[16px] py-[6px] w-full border-solid border-black bg-[#273A71] rounded-sm"
          required
          type="text"
          placeholder="Your Name"
        />
        <input
          className="px-[16px] py-[6px] w-full border-solid border-black bg-[#273A71] rounded-sm"
          required
          type="text"
          placeholder="Your Email"
        />
      </div>
      <div className="w-full">
        <textarea className="bg-[#273A71] p-[10px] w-full rounded-sm"></textarea>
      </div>
      <a href="/">
        <button className="px-[40px] py-[16px] bg-[#30BAE7] rounded-sm">
          SEND MESSAGE
        </button>
      </a>
    </div>
  );
}

export default FeedBack;
