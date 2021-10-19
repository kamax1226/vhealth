// import React, { useState } from "react";
import { VCSVG } from "../../../helpers";
import {
  HeaderNotificationsMenu,
  // SearchModal,
  HeaderUserMenu,
  // InboxCompose,
} from "../../../partials";
import { useTheme } from "../../core";

export function Topbar() {
  const { config } = useTheme();
  // const [showSearchModal, setShowSearchModal] = useState(false);
  // const [showInboxComposeModal, setShowInboxComposeModal] = useState(false);
  // const [option, setOption] = useState("1");

  return (
    <>
      {/* <select className="top-select-box">
          <option>This Year</option>
          <option>Last Year</option>
      </select>

      <button className="top-nav-btn">
          <VCSVG
              path="/media/icons/duotone/General/Notifications1.svg"
              className="svg-icon-1 notification-icon"
          />
      </button>

      <button className="top-nav-btn">
          <img
              alt="flag"
              src="/media/icons/duotone/General/us.svg"
              className="flag-icon"
          />
      </button> */}

      {/* begin::Search */}
      {/* <div
        className="input-group input-group-solid h-35px w-200px ms-1 ms-lg-6"
        id="hb_chat_aside_search"
        onClick={() => setShowSearchModal(true)}
      >
        <input
          type="text"
          className="form-control ps-4 h-35px"
          placeholder="Search"
        />
        <span className="input-group-text h-35px" id="basic-addon1">
          <VCSVG
            className="svg-icon-1 svg-icon-dark"
            path="/media/icons/duotone/General/Search.svg"
          />
        </span>
      </div> */}
      {/* <button
        className="btn btn-icon btn-sm btn-active-bg-accent ms-1 ms-lg-6"
        onClick={() => setShowSearchModal(true)}
      >
        <VCSVG
          path="/media/icons/duotone/General/Search.svg"
          className="svg-icon-1 svg-icon-dark"
        />
      </button> */}
      {/* <SearchModal
        show={showSearchModal}
        handleClose={() => setShowSearchModal(false)}
      /> */}
      {/* end::Search */}

      {/* begin::Select */}
      {/* <select
        className="form-select form-select-lg form-select-solid fw-bold fs-6 text-gray-600 w-200px h-35px pt-2 ms-1 ms-lg-6"
        data-control="select2"
        data-placeholder="Choose one"
        data-hide-search="true"
        onChange={(e) => setOption(e.target.value)}
        value={option}
      >
        <option value="1">PASAY</option>
        <option value="2">PASAY</option>
        <option value="3">PASAY</option>
        <option value="4">PASAY</option>
        <option value="5">PASAY</option>
      </select> */}
      {/* end::Select */}

      {/* begin::Message */}
      {/* <button
        className="btn btn-icon btn-sm btn-active-bg-accent ms-1 ms-lg-6"
        onClick={() => setShowInboxComposeModal(true)}
      >
        <VCSVG
          path="/media/icons/duotone/Communication/Chat6.svg"
          className="svg-icon-1 svg-icon-dark"
        />
      </button>
      <InboxCompose
        show={showInboxComposeModal}
        handleClose={() => setShowInboxComposeModal(false)}
      /> */}
      {/* end::Message */}

      {/* begin::Notifications */}
      <div className="ms-1 ms-lg-6">
        {/* begin::Dropdown */}
        <button
          className="btn btn-icon btn-sm btn-light-danger fw-bolder pulse pulse-danger btn-component"
          data-hb-menu-trigger="click"
          data-hb-menu-placement="bottom-end"
        >
          <span className="position-absolute fs-6">3</span>
          <span className="pulse-ring"></span>
        </button>
        <HeaderNotificationsMenu />
        {/* end::Dropdown */}
      </div>
      {/* end::Notifications */}

      {/* begin::User */}
      <div className="ms-1 ms-lg-6">
        {/* begin::Toggle */}
        <div
          className="btn btn-icon btn-sm btn-active-bg-accent btn-component"
          data-hb-menu-trigger="click"
          data-hb-menu-placement="bottom-end"
        >
          <VCSVG
            path="/media/icons/duotone/General/User.svg"
            className="svg-icon-1 svg-icon-dark"
          />
        </div>
        <HeaderUserMenu />
        {/* end::Toggle */}
      </div>
      {/* end::User */}

      {/* begin::Aside Toggler */}
      {config.aside.display && (
        <button
          className="btn btn-icon btn-sm btn-active-bg-accent d-lg-none ms-1 ms-lg-6"
          id="hb_aside_toggler"
        >
          <VCSVG
            path="/media/icons/duotone/Text/Menu.svg"
            className="svg-icon-1 svg-icon-dark"
          />
        </button>
      )}
      {/* end::Aside Toggler */}

      {/* begin::Sidebar Toggler */}
      {config.sidebar.display && (
        <button
          className="btn btn-icon btn-sm btn-active-bg-accent d-lg-none ms-1 ms-lg-6"
          id="hb_sidebar_toggler"
        >
          <VCSVG
            path="/media/icons/duotone/Text/Menu.svg"
            className="svg-icon-1 svg-icon-dark"
          />
        </button>
      )}
      {/* end::Sidebar Toggler */}
    </>
  );
}
