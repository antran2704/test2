import { useViewport } from "../hooks/inde";
import links from "./index";

function Footer() {
  const width = useViewport()
  return (
    <div className="text-white flex items-center justify-center gap-[30px] sm:justify-between sm:gap-0 sm:px-[20px] relative bottom-0 left-0 right-0 h-[60px] bg-[#344B8E]">
      {links.map((item, index) => (
        <a key={index} className="hover:text-[#30BAE7] sm:text-[20px]" href="/">{width > 600 ? item.name : item.icon}</a>
      ))}
    </div>
  );
}

export default Footer;
