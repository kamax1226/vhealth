import React from "react";
import { AsideMenuItem } from "./AsideMenuItem";

export function AsideMenuMain() {
  return (
    <>
      {" "}
      <>
        <>
          <AsideMenuItem to="/dashboard" title="Dashboard Overview" svg="dashboard" />
          <AsideMenuItem to="/om" title="Organization Management" svg="om" />
          <AsideMenuItem to="/ng" title="National Government" svg="ng" />
          <AsideMenuItem to="/lgu" title="Local Government Unit" svg="lgu" />
          <AsideMenuItem to="/ce" title="Commercial Establishment" svg="ce" />
          <AsideMenuItem to="/calendar" title="Calendar" svg="calendar" />
          {/* <AsideMenuItem to="/messages" title="Messages" free={true} /> */}
          <AsideMenuItem to="/account" title="Account" svg="account" />
          <AsideMenuItem to="/settings" title="Settings" svg="settings" />
          <AsideMenuItem to="/logout" title="Log out" svg="logout" />
        </>
      </>
    </>
  );
}
