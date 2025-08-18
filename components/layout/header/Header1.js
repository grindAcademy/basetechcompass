import Link from "next/link"
import Menu from "../Menu"
import MobileMenu from "../MobileMenu"
import LogoPink from "@/public/images/logo-pink.png";
import LogoWhite from "@/public/images/logo-white.png";
import LogoPinkWhite from "@/public/images/logo-pink-white.png";
import Image from "next/image";


export default function Header1({ scroll, isMobileMenu, handleMobileMenu, headerCls }) {
    return (
      <>
        <header
          id="header"
          className={`tra-menu white-scroll ${headerCls ? headerCls : ""}`}
        >
          <div className="header-wrapper">
            {/* MOBILE HEADER */}
            <div className="wsmobileheader clearfix">
              <span className="smllogo">
                {" "}
                <Image src={LogoPink} alt="brand-logo" />
              </span>
              <a
                id="wsnavtoggle"
                className="wsanimated-arrow"
                onClick={handleMobileMenu}
              >
                <span />
              </a>
            </div>
            {/* NAVIGATION MENU */}
            <div
              className={`wsmainfull menu clearfix ${scroll ? "scroll" : ""}`}
            >
              <div className="wsmainwp clearfix">
                {/* HEADER BLACK LOGO */}
                <div className="desktoplogo">
                  <Link href="#hero-1" className="logo-black">
                    <Image src={LogoPink} alt="brand-logo" />
                    <Image src={LogoPinkWhite} alt="brand-logo" />
                  </Link>
                </div>
                {/* HEADER WHITE LOGO */}
                <div className="desktoplogo">
                  <Link href="#hero-1" className="logo-white">
                    <Image src={LogoWhite} alt="brand-logo" />
                  </Link>
                </div>
                {/* MAIN MENU */}
                <nav
                  className="wsmenu clearfix"
                  style={{ height: `${isMobileMenu ? "100vh" : ""}` }}
                >
                  {isMobileMenu ? <MobileMenu /> : <Menu />}
                </nav>{" "}
                {/* END MAIN MENU */}
              </div>
            </div>{" "}
            {/* END NAVIGATION MENU */}
          </div>{" "}
          {/* End header-wrapper */}
        </header>
      </>
    );
}
