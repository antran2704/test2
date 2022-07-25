function Header() {
  return (
    <div className="bg-[#87509C] flex items-center min-h-[600px]">
      <div className="container h-full flex flex-col items-center justify-center">
        <h1 className="text-[40px] font-[700] text-center text-white sm:text-[30px]">
          Hi there! We are the new kids on the block and we build awesome
          websites and mobile apps.
        </h1>

        <a href="/" className="bg-[#EB7D4B] mt-[20px] rounded-lg">
          <button className="text-white font-[600] py-[16px] px-[30px]">
            WORK WITH US!
          </button>
        </a>
      </div>
    </div>
  );
}

export default Header;
