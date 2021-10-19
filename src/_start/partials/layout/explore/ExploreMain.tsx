/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Toggle } from "./Toggle";
import { Free } from "./Free";
import { FreeRelatedProducts } from "./FreeRelatedProducts";
import { VCSVG } from "../../../helpers";

export function ExploreMain() {
  return (
    <>
      <Toggle />
      {/* begin::Exolore drawer */}
      <div
        id="hb_explore"
        className="explore bg-white"
        data-hb-drawer="true"
        data-hb-drawer-name="explore"
        data-hb-drawer-activate="true"
        data-hb-drawer-overlay="true"
        data-hb-drawer-width="{default:'300px', 'lg': '440px'}"
        data-hb-drawer-direction="end"
        data-hb-drawer-toggle="#hb_explore_toggle"
        data-hb-drawer-close="#hb_explore_close"
      >
        {/* begin::Card  */}
        <div className="card shadow-none w-100">
          {/* begin::Header */}
          <div className="card-header" id="hb_explore_header">
            <h5 className="card-title fw-bold text-gray-600">Upgrade to Pro</h5>

            <div className="card-toolbar">
              <button
                type="button"
                className="btn btn-sm btn-icon explore-btn-dismiss me-n5"
                id="hb_explore_close"
              >
                <VCSVG
                  path="/media/icons/duotone/Navigation/Close.svg"
                  className="svg-icon-2"
                />
              </button>
            </div>
          </div>
          {/* end::Header */}
          {/* begin::Body */}
          <div className="card-body" id="hb_explore_body">
            {/* begin::Content */}
            <div
              id="hb_explore_scroll"
              className="scroll-y me-n5 pe-5"
              data-hb-scroll="true"
              data-hb-scroll-height="auto"
              data-hb-scroll-wrappers="#hb_explore_body"
              data-hb-scroll-dependencies="#hb_explore_header, #hb_explore_footer"
              data-hb-scroll-offset="5px"
            >
              <Free />
              <FreeRelatedProducts />
            </div>
            {/* end::Content */}
          </div>
          {/* end::Body */}
          {/* begin::Footer */}
          <div className="card-footer py-5 text-center" id="hb_explore_footer">
            <a
              className="btn btn-lg explore-btn-secondary w-100"
            >
              Download
              <span className="fw-bolder ms-1">Start React Free</span>
            </a>
          </div>
          {/* end::Footer */}
        </div>
        {/* begin::Card */}
      </div>
      {/* end::Exolore drawer */}
    </>
  );
}
