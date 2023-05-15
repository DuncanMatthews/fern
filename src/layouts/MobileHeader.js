import Link from "next/link";
import { useState } from "react";

const MobileHeader = () => {
  const [activeMenu, setActiveMenu] = useState("");
  const activeMenuSet = (value) =>
      setActiveMenu(activeMenu === value ? "" : value),
    activeLi = (value) =>
      value === activeMenu ? { display: "block" } : { display: "none" };
  return (
    <nav className="main-menu d-block d-xl-none">
      <ul>
        <li>
          <a href="#" className="active">
            Home
          </a>
          <ul className="" style={activeLi("home")}>
          </ul>
          <span className="dd-trigger" onClick={() => activeMenuSet("home")}>
            
          </span>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>

        <li>
          <Link href="/book-your-wedding">Events</Link>
        </li>
        
        
        <li className="menu-item ">
          <Link href="#blog">Blog</Link>
         
        </li>
        
      </ul>
    </nav>
  );
};
export default MobileHeader;
