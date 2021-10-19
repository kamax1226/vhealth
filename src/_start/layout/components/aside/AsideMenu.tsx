import React, { useRef, useEffect } from "react";
import { AsideMenuDocs } from "./AsideMenuDocs";
import { AsideMenuMain } from "./AsideMenuMain";

type Props = {
  menuType: "main" | "documentation";
  asidePrimaryDisplay: boolean;
};

const AsideMenu: React.FC<Props> = ({ menuType, asidePrimaryDisplay }) => {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    if (!scrollRef.current) {
      return;
    }

    if (!asidePrimaryDisplay){
      scrollRef.current.setAttribute('data-hb-scroll-dependencies', '#hb_aside_logo')
    } else {
      scrollRef.current.removeAttribute('data-hb-scroll-dependencies');
    }

  }, [asidePrimaryDisplay]);
  return (
    <div
      className="menu menu-column menu-rounded menu-title-gray-700 menu-state-title-primary menu-state-icon-primary menu-state-bullet-primary menu-arrow-gray-500 fw-bold fs-6 menu-state-custom"
      data-hb-menu="true"
    >
      <div
        ref={scrollRef}
        className="hover-scroll-y"
        id="hb_aside_menu_scroll"
        data-hb-scroll="true"
        data-hb-scroll-height="auto"
        data-hb-scroll-wrappers="#hb_aside_wordspace"
        data-hb-scroll-offset="10px"
      >
        <div className="menu-wrapper menu-column menu-fit">
          {menuType === "main" && <AsideMenuMain />}
          {menuType === "documentation" && <AsideMenuDocs />}
        </div>
      </div>
    </div>
  );
};

export { AsideMenu };
