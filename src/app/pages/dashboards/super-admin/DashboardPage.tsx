/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Widget1, Widget2, Widget3, Widget4, Widget5, Widget6, Widget7, Widget8, Widget9 } from "_start/partials/custom";

export const DashboardPage: React.FC = () => {
  
  return (
    <>
      {/* begin::Row */}
      <div className="row g-0 g-xl-5 g-xxl-8">
        <div className="col-xl-3">
          <Widget1 className="card-stretch mb-5 mb-xxl-8" />
        </div>

        <div className="col-xl-6 overflow-hidden">
          <div className="row gx-5">
            <Widget2 className="col card-stretch mb-5 mb-xxl-8 me-5" />
            <Widget3 className="col card-stretch mb-5 mb-xxl-8 ml-5" />
            <div className="w-100 d-none d-md-block"></div>
            <Widget4 className="col card-stretch mb-5 mb-xxl-8 me-5" />
            <Widget5 className="col card-stretch mb-5 mb-xxl-8 ml-5" />
          </div>
        </div>

        <div className="col-xl-3">
        <Widget6 className="card-stretch mb-5 mb-xxl-8" />
        </div>
      </div>
      {/* end::Row */}

      {/* begin::Row */}
      <div className="row g-0 g-xl-5 g-xxl-8">
        <div className="col-xxl-9 gy-0 gy-xxl-8">
          <Widget7 className="card-stretch mb-5  mb-xxl-8" />
        </div>

        <div className="col-xxl-3">
          <Widget8 className="card-stretch mb-5  mb-xxl-8" />
        </div>
      </div>
      {/* end::Row */}

      {/* begin::Row */}
      <div className="row g-0 g-xl-5 g-xxl-8">
        <div className="col-xl-12">
          <Widget9 className="card-stretch mb-5 mb-xxl-8" />
        </div>
      </div>
      {/* end::Row */}
    </>
  );
};
