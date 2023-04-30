/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import { styles } from "../styles/styles";
import Link from "next/link";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";
import Image from "next/image";
type navLinksPropsType = {
  active: string;
  setActive: (arg: string) => void;
  hiddenOrNot:boolean;
  setToggle?: React.Dispatch<React.SetStateAction<boolean>>;
  toggle?:boolean
};
const NavLinks = ({ active, setActive,hiddenOrNot,setToggle,toggle }: navLinksPropsType) => (
  <ul className={`list-none ${hiddenOrNot ? 'hidden sm:flex flex-row gap-10' :'flex flex-col justify-end items-start gap-4'} `}>
    {navLinks.map((link) => (
      <li key={link.id} className={`${link.title === active ? "text-white" : "text-secondary" }  ${hiddenOrNot?'hover:text-white text-[18px] font-medium cursor-pointer':'font-poppins font-medium cursor-pointer tex-[16px]'}`}>
        <a href={`#${link.id}`} type={link.id} aria-label={link.id} onClick={() =>{setActive(link.title);(setToggle && setToggle(!toggle))}}>
          {link.title}
        </a>
      </li>
    ))}
  </ul>
);
const Navbar = () => {
  const [active, setActive] = useState<string>("");
  const [toggle, setToggle] = useState<boolean>(true);
  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}>
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto px-5">
        <Link href={"/"} className="flex items-center gap-2" onClick={() => {setActive("");window.scrollTo(0, 0); }}>
          <Image src={logo} alt="logo" className="w-9 h-9 object-contain" />
          <p className="text-white text-[18px] font-bold cursor-pointer flex">
            Adrian&nbsp;<span className="sm:block hidden">|&nbsp;JS Mastery</span> {/*For add space -> &nbsp;*/}
          </p>
        </Link>
        <NavLinks active={active} setActive={setActive} hiddenOrNot={true}/>
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <Image src={toggle ? menu : close} alt="menu" width={30} height={30} className="cursor-pointer w-[28px] h-auto object-contain" onClick={() => setToggle(!toggle)}/>
          <div className={`${toggle ? "hidden" : "flex" } black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl p-2`}> {/*black-gradient -> is a custom class(css)*/}
            <NavLinks active={active} setActive={setActive} hiddenOrNot={false} setToggle={setToggle} toggle={toggle}/>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
