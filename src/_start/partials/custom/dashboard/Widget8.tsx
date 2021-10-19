/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
// import { VCSVG } from "../../../helpers";

type Props = {
  className: string;
  innerPadding?: string;
};

const Widget8: React.FC<Props> = ({ className, innerPadding = "" }) => {
  return (
    <div className={`card bg-component ${className}`}>
      {/* <!--begin::Header--> */}
      <div className={`card-header border-0 pt-5 ${innerPadding}`}>
        <h3 className="card-title align-items-start flex-column">
          <span className="card-label fw-bolder text-dark fs-3">
            LGU Vaccination
          </span>
          <span className="text-muted mt-2 fw-bold fs-6">890,344 Sales</span>
        </h3>
        <div className="card-toolbar">

        </div>
      </div>
      {/* <!--end::Header--> */}

      {/* <!--begin::Body--> */}
      <div className="card-body pt-2 pb-0 mt-n3">
        <div className="d-flex flex-column w-100 me-3">
          <div className="d-flex align-items-center justify-content-between mb-2">
            <span className="text-dark me-2 fs-6 fw-bolder">
            Progress
            </span>
          </div>
          <div className="d-flex align-items-center">
            <div className="progress h-6px  w-100 bg-light-primary">
              <div
                className="progress-bar bg-primary"
                role="progressbar"
                style={{ width: "46%" }}
                aria-valuenow={50}
                aria-valuemin={0}
                aria-valuemax={100}
              />
            </div>
            <span className="text-muted fs-7 fw-bold ps-3">
              46%
            </span>
          </div>
        </div>
        <div className="d-flex flex-column w-100 me-3">
          <div className="d-flex align-items-center justify-content-between mb-2">
            <span className="text-dark me-2 fs-6 fw-bolder">
              Progress
            </span>
          </div>
          <div className="d-flex align-items-center">
            <div className="progress h-6px  w-100 bg-light-warning">
              <div
                className="progress-bar bg-warning"
                role="progressbar"
                style={{ width: "87%" }}
                aria-valuenow={50}
                aria-valuemin={0}
                aria-valuemax={100}
              />
            </div>
            <span className="text-muted fs-7 fw-bold ps-3">
              87%
            </span>
          </div>
        </div>
        <div className="d-flex flex-column w-100 me-3">
          <div className="d-flex align-items-center justify-content-between mb-2">
            <span className="text-dark me-2 fs-6 fw-bolder">
              Progress
            </span>
          </div>
          <div className="d-flex align-items-center">
            <div className="progress h-6px  w-100 bg-light-success">
              <div
                className="progress-bar bg-success"
                role="progressbar"
                style={{ width: "53%" }}
                aria-valuenow={50}
                aria-valuemin={0}
                aria-valuemax={100}
              />
            </div>
            <span className="text-muted fs-7 fw-bold ps-3">
              53%
            </span>
          </div>
        </div>
        <div className="d-flex flex-column w-100 me-3">
          <div className="d-flex align-items-center justify-content-between mb-2">
            <span className="text-dark me-2 fs-6 fw-bolder">
              Progress
            </span>
          </div>
          <div className="d-flex align-items-center">
            <div className="progress h-6px  w-100 bg-light-danger">
              <div
                className="progress-bar bg-danger"
                role="progressbar"
                style={{ width: "92%" }}
                aria-valuenow={50}
                aria-valuemin={0}
                aria-valuemax={100}
              />
            </div>
            <span className="text-muted fs-7 fw-bold ps-3">
              92%
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Widget8 };
