"use client";

import { useEffect, useState } from "react";
import BackToTop from "../elements/BackToTop";
import Breadcrumb from "./Breadcrumb";
import PageHead from "./PageHead";
import Footer1 from "./footer/Footer1";
import Footer2 from "./footer/Footer2";
import Footer3 from "./footer/Footer3";
import Header1 from "./header/Header1";
import Header2 from "./header/Header2";

export default function Layout({
  headerStyle,
  footerStyle,
  headTitle,
  breadcrumbTitle,
  children,
  headerCls,
}) {
  const [scroll, setScroll] = useState(false);
  const [isMobileMenu, setMobileMenu] = useState(false);

  const handleMobileMenu = () => {
    const next = !isMobileMenu;
    setMobileMenu(next);
    // Fix 1: Avoid unused expression by using a real statement
    document.body.classList.toggle("wsactive", next);
  };

  // WOW.js initialization (client-only)
  useEffect(() => {
    let disposed = false;

    (async () => {
      const mod = await import("wowjs");
      const { WOW } = mod; // Fix 2 & 3: dynamic import instead of require()

      if (disposed) return;

      // Initialize WOW.js for desktop
      // Note: attaching to window only if you truly need global access elsewhere
      window.wowDesktop = new WOW({
        boxClass: "wow",
        animateClass: "animated",
        offset: 0,
        mobile: false,
        live: true,
      });

      // Initialize WOW.js for mobile
      window.wowMobile = new WOW({
        boxClass: "wow",
        animateClass: "animated",
        offset: 100,
        mobile: true,
        live: true,
      });

      window.wowDesktop.init();
      window.wowMobile.init();
    })();

    return () => {
      disposed = true;
    };
  }, []);

  // Re-sync WOW on mobile menu toggle (safer than re-init)
  useEffect(() => {
    if (
      typeof window !== "undefined" &&
      window.wowMobile &&
      typeof window.wowMobile.sync === "function"
    ) {
      window.wowMobile.sync();
    }
  }, [isMobileMenu]);

  // Scroll listener (stable)
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 100;
      setScroll((prev) => (prev !== scrolled ? scrolled : prev));
    };

    document.addEventListener("scroll", handleScroll, { passive: true });
    // Run once to set initial state if the page loads scrolled
    handleScroll();

    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <PageHead headTitle={headTitle} />
      <div id="page" className="page font--jakarta">
        {!headerStyle && (
          <Header1
            scroll={scroll}
            isMobileMenu={isMobileMenu}
            handleMobileMenu={handleMobileMenu}
            headerCls={headerCls}
          />
        )}
        {headerStyle === 1 ? (
          <Header1
            scroll={scroll}
            isMobileMenu={isMobileMenu}
            handleMobileMenu={handleMobileMenu}
            headerCls={headerCls}
          />
        ) : null}
        {headerStyle === 2 ? (
          <Header2
            scroll={scroll}
            isMobileMenu={isMobileMenu}
            handleMobileMenu={handleMobileMenu}
            headerCls={headerCls}
          />
        ) : null}

        <main className="main">
          {breadcrumbTitle && <Breadcrumb breadcrumbTitle={breadcrumbTitle} />}
          {children}
        </main>

        {!footerStyle && <Footer1 />}
        {footerStyle === 1 ? <Footer1 /> : null}
        {footerStyle === 2 ? <Footer2 /> : null}
        {footerStyle === 3 ? <Footer3 /> : null}

        <BackToTop />
      </div>
    </>
  );
}
