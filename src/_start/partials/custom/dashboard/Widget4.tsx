/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { VCSVG } from "_start/helpers";

type Props = {
  className: string;
  innerPadding?: string;
};

const Widget4: React.FC<Props> = ({
  className,
  innerPadding = "",
  children,
}) => {
  return (
    <div className={`card bg-component ${className}`}>
      <div
        className={`card-header align-items-center border-0 ${innerPadding}`}
      >
        <h3 className="card-title align-items-start flex-column">
          <span className="fw-bolder text-dark fs-3">Population Data</span>
        </h3>
        <button
          type="button"
          className="btn btn-sm btn-icon btn-color-primary btn-active-light-primary"
          data-hb-menu-trigger="click"
          data-hb-menu-placement="bottom-end"
          data-hb-menu-flip="top-end"
        >
          <VCSVG
            path="/media/icons/duotone/Layout/Layout-4-blocks-2.svg"
            className="svg-icon-1"
          />
        </button>
      </div>

      <div className={`card-body p-0 ${innerPadding}`}>
        <div className="d-flex flex-column">
          <h3 className="text-dark text-center fs-1 fw-bolder lh-lg">
            56,000
          </h3>
          <div className="w-150px text-center ms-auto mt-5">
            <h5 className="text-muted text-uppercase">% of population</h5>
            <h3 className="text-white">13.3%</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Widget4 };
