import { footerLinks } from "@/constants";
import Image from "next/image";

const FooterColumn = ({ links, title }) => {
  return (
    <div  className=" h-[300px]">
      <h2 className=" text-lg font-semibold">{title}</h2>
      <ul className=" flex flex-col gap-2">
        {links.map((link) => (
          <li key={link} className=" text-gray text-sm">
            {link}
          </li>
        ))}
      </ul>
    </div>
  );
};
const Footer = () => {
  return (
    <footer className=" bg-[#fbfbfb] py-2 ">
      <div className=" container mx-auto mt-6">
        <Image src="/logo-purple.svg" alt="logo" width={115} height={38} />
        <p className=" text-gray text-sm max-w-xs my-2">
          Flexibble is the world&apos;s leading community for creatives to
          share, grow, and get hired.
        </p>
        <div className=" flex justify-between  flex-wrap mt-4 gap-4">
          {footerLinks.map((link) => (
            <FooterColumn
              key={link.title}
              links={link.links}
              title={link.title}
            />
          ))}
        </div>
      <div className="flex justify-between items-center ">
            <p>@ 2023 Flexibble. All rights reserved</p>
            <p className="text-gray">
                <span className="text-black font-semibold">10,214</span> projects submitted
            </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
