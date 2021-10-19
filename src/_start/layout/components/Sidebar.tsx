import React, { useRef, useEffect } from "react";
import { SidebarGeneral, SidebarShop, SidebarUser } from "../../partials";
import { useTheme } from "../core";

const BG_COLORS = ['bg-white' , 'bg-info'];

export function Sidebar() {
  const { config, classes } = useTheme();
  const sidebarCSSClass = classes.sidebar;
  const sideBarRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!sidebarCSSClass) {
      return;
    }

    BG_COLORS.forEach(cssClass => {
      sideBarRef.current?.classList.remove(cssClass);
    })

    sidebarCSSClass.forEach(cssClass => {
      sideBarRef.current?.classList.add(cssClass);
    })

  }, [sidebarCSSClass]);

  return (
    <>
      {config.sidebar.display && (
        <div
          ref={sideBarRef}
          id="hb_sidebar"
          className="sidebar"
          data-hb-drawer="true"
          data-hb-drawer-name="sidebar"
          data-hb-drawer-activate="{default: true, lg: false}"
          data-hb-drawer-overlay="true"
          data-hb-drawer-width="{default:'200px', '350px': '300px'}"
          data-hb-drawer-direction="end"
          data-hb-drawer-toggle="#hb_sidebar_toggler"
        >
          {/* begin::Sidebar Content */}
          <div className="d-flex flex-column sidebar-body">
            {config.sidebar.content === "general" && <SidebarGeneral />}
            {config.sidebar.content === "shop" && (
              <SidebarShop sidebarRef={sideBarRef} />
            )}
            {config.sidebar.content === "user" && <SidebarUser />}
          </div>
          {/* end::Sidebar Content */}
        </div>
      )}
    </>
  );
}
