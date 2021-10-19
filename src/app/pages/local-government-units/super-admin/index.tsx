/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { PageTitle } from "_start/layout/core";
import VaccinationRecords from "./VaccinationRecords";

export const LocalGovernmentUnits: React.FC = () => {

  return (
    <>
      <PageTitle>Local Government Units</PageTitle>

      <div className="">
        <ul className="nav nav-light">
          <li className="nav-item lgu-item">
            <a
              className="nav-link btn btn-lgu py-2 px-4 fw-bolder me-2 active"
              data-bs-toggle="tab"
              href="#hb_tab_pane_1_1"
            >
              VACCINATION CENTER
            </a>
          </li>
          <li className="nav-item lgu-item">
            <a
              className="nav-link btn btn-lgu py-2 px-4 fw-bolder me-2"
              data-bs-toggle="tab"
              href="#hb_tab_pane_1_2"
            >
              VACCINATION SCHEDULING
            </a>
          </li>
          <li className="nav-item lgu-item">
            <a
              className="nav-link btn btn-lgu py-2 px-4 fw-bolder me-2"
              data-bs-toggle="tab"
              href="#hb_tab_pane_1_3"
            >
              VACCINATION RECORDS
            </a>
          </li>
          <li className="nav-item lgu-item">
            <a
              className="nav-link btn btn-lgu py-2 px-4 fw-bolder me-2"
              data-bs-toggle="tab"
              href="#hb_tab_pane_1_4"
            >
              SUMMARY/STATISTICS
            </a>
          </li>
        </ul>
      </div>

      <div className="tab-content mt-5" id="myTabTables1">
        <div
          className="tab-pane fade active show"
          id="hb_tab_pane_1_1"
          role="tabpanel"
          aria-labelledby="hb_tab_pane_1_1"
        >
          <VaccinationRecords />
        </div>

        <div
          className="tab-pane fade"
          id="hb_tab_pane_1_2"
          role="tabpanel"
          aria-labelledby="hb_tab_pane_1_1"
        >
          <VaccinationRecords />
        </div>

        <div
          className="tab-pane fade"
          id="hb_tab_pane_1_3"
          role="tabpanel"
          aria-labelledby="hb_tab_pane_1_1"
        >
          <VaccinationRecords />
        </div>

        <div
          className="tab-pane fade"
          id="hb_tab_pane_1_4"
          role="tabpanel"
          aria-labelledby="hb_tab_pane_1_1"
        >
          <VaccinationRecords />
        </div>
      </div>
    </>
  );
};
