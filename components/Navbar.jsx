import { NavLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import AuthProviders from "./AuthProviders";

const Navbar = () => {
  const session = {};
  return (
    <nav className=" flex justify-between items-center ">
      <div className=" flex items-center flex-1  justify-between gap-10 py-7  container mx-auto">
        <Link href={"/"}>
          <Image
            src="/logo.svg"
            alt="logo"
            width={145}
            height={43}
            className="cursor-pointer"
          />
        </Link>
        <ul className="xl:flex hidden  text-sm gap-7">
          {NavLinks.map((link) => (
            <li key={link.key}>
              <Link href={link.href}>{link.text}</Link>
            </li>
          ))}
        </ul>
      <div className=" flex items-center gap-4">
        {session ? (
          <>
            <div> User Photo</div>
            <Link href={"/create-project"}>Share Work</Link>
          </>
        ) : (
          <AuthProviders />
        )}
      </div>
      </div>
    </nav>
  );
};

export default Navbar;
