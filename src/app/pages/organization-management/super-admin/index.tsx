/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import OrganizationTable from "./OrganizationTable";
import { PageTitle } from "_start/layout/core";

export const OrganizationManagement: React.FC = () => {
  
  return (
    <>
      <PageTitle>Organization Management</PageTitle>
      
      <div className="row g-0 g-xl-5 g-xxl-8">
        <div className="col-xl-12">
          <OrganizationTable className="" />
        </div>
      </div>
    </>
  );
};
