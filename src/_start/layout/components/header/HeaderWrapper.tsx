/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { IThemeCSSClasses, useTheme } from "../../core";
import { Header } from "./Header";

type Props = {
  classes: IThemeCSSClasses;
};

const HeaderDesktopFixedTabletFixed: React.FC<Props> = ({ classes }) => {
  return (
    <div
      id="hb_header"
      className={`header ${classes.header}`}
      data-hb-sticky="true"
      data-hb-sticky-name="header"
      data-hb-sticky-offset="{default: '200px', lg: '300px'}"
    >
      <Header></Header>
    </div>
  );
};

const HeaderDesktopFixedTabletFluid: React.FC<Props> = ({ classes }) => {
  return (
    <div
      id="hb_header"
      className={`header ${classes.header}`}
      data-hb-sticky="true"
      data-hb-sticky-name="header"
      data-hb-sticky-offset="{lg: '300px'}"
    >
      <Header></Header>
    </div>
  );
};

const HeaderDesktopFluidTabletFixed: React.FC<Props> = ({ classes }) => {
  return (
    <div
      id="hb_header"
      className={`header ${classes.header}`}
      data-hb-sticky="true"
      data-hb-sticky-name="header"
      data-hb-sticky-offset="{default: '200px', lg: false}"
    >
      <Header></Header>
    </div>
  );
};

export function HeaderWrapper() {
  const { config, classes } = useTheme();
  const { header } = config;
  return (
    <>
      {header.fixed.desktop && header.fixed.tabletAndMobile && (
        <HeaderDesktopFixedTabletFixed classes={classes} />
      )}

      {header.fixed.desktop && !header.fixed.tabletAndMobile && (
        <HeaderDesktopFixedTabletFluid classes={classes} />
      )}

      {!header.fixed.desktop && header.fixed.tabletAndMobile && (
        <HeaderDesktopFluidTabletFixed classes={classes} />
      )}

      {!header.fixed.desktop && !header.fixed.tabletAndMobile && (
        <div id="hb_header" className={`header ${classes.header}`}>
          <Header></Header>
        </div>
      )}
    </>
  );
}
