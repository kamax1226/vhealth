import React, { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import {
  ScrollComponent,
  ScrollTopComponent,
  MenuComponent,
  DrawerComponent,
  ToggleComponent,
  StickyComponent,
} from "../../assets/ts/components";
import { VCSVG } from "../../helpers";

export function ScrollTop() {
  const { pathname } = useLocation();
  const isFirstRun = useRef(true);

  const pluginsReinitialization = () => {
    setTimeout(() => {
      ScrollTopComponent.reinitialization();
      MenuComponent.reinitialization();
      StickyComponent.reInitialization();
      setTimeout(() => {
        ToggleComponent.reinitialization();
        DrawerComponent.reinitialization();
        ScrollComponent.reinitialization();
      }, 70);
    }, 140);
  };

  const scrollTop = () => {
    ScrollTopComponent.goTop();
  };

  const updateHeaderSticky = () => {
    const stickyHeader = document.body.querySelectorAll(
      `[data-hb-sticky-name="header"]`
    );
    if (stickyHeader && stickyHeader.length > 0) {
      const sticky = StickyComponent.getInstance(
        stickyHeader[0] as HTMLElement
      );
      if (sticky) {
        sticky.update();
      }
    }
  };

  useEffect(() => {
    if (isFirstRun.current) {
      isFirstRun.current = false;
    } else {
      pluginsReinitialization();
    }

    updateHeaderSticky();
    setTimeout(() => {
      scrollTop();
    }, 0);
  }, [pathname]);

  return (
    <div id="hb_scrolltop" className="scrolltop" data-hb-scrolltop="true">
      <VCSVG path="/media/icons/duotone/Navigation/Up-2.svg" />
    </div>
  );
}
