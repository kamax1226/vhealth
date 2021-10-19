/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useRef, useState } from "react";
import { toAbsoluteUrl } from "_start/helpers";
import { VCSVG } from "_start/helpers";
import { Link } from "react-router-dom";
import request from "setup/request/vr.request";

const VaccinationRecords: React.FC = () => {
  const fileInput = useRef<null | HTMLInputElement>(null);
  const [pageRows, setPageRows] = useState<number>(10);

  const id = "DILG-NCR";

  const handleClick = () => {
    if (fileInput !== null) {
      fileInput.current?.click();
    }
  }

  const onFileChange = (e: React.FormEvent<HTMLInputElement>) => {
    if (e.currentTarget.files !== null) {
      onFileUpload(e.currentTarget.files[0]);
    }
  }

  // On file upload (click the upload button)
  const onFileUpload = async (selectedFile: File) => {

    const formData = new FormData();

    if (selectedFile) {
      formData.append(
        "myFile",
        selectedFile,
        selectedFile.name
      );
    }

    // Details of the uploaded file
    console.log("selectedFile", selectedFile);

    await request.uploadRecords(id, "e44928e3-efdd-4797-94f0-8a74a351149d", formData);
  };

  useEffect(() => {

  }, [])

  return (
    <div className="card bg-component mt-5">
      <div className="card-header border-0 pt-5">
        <div className="card-toolbar">
          <div
            className="input-group input-group-solid h-35px w-200px bg-search"
            id="hb_chat_aside_search"
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
          </div>
          <select
            className="form-select form-select-lg form-select-solid fw-bold fs-6 text-gray-600 w-100px h-35px pt-2 ms-1 ms-lg-6 bg-select border-0"
            data-control="select2"
            data-placeholder="Choose one"
            data-hide-search="true"
            onChange={(e) => setPageRows(parseInt(e.target.value))}
            value={pageRows}
          >
            <option value={5}>5</option>
            <option value={10}>10</option>
            <option value={20}>20</option>
            <option value={50}>50</option>
            <option value={100}>100</option>
          </select>
        </div>
        <div className="card-toolbar">
          <input type="file" className="d-none" onChange={onFileChange} ref={fileInput} />
          <a href="#" className="btn btn-success bg-button h-35px pt-2 me-5" onClick={handleClick}>+ Upload CSV file</a>
          {/* <button onClick={onFileUpload}>
            Upload!
          </button> */}
          <a href="#" className="btn btn-success bg-button h-35px pt-2">
            <VCSVG
              className="svg-icon-4"
              path="/media/svg/pages/om/download-report.svg"/>
            Generate Report
          </a>
        </div>
      </div>

      <div className="card-body pt-2 pb-0 mt-n3">
        <div className="mt-4" id="omTable">
          <div className="table-responsive">
            <table className="table table-borderless align-middle">
              <thead>
                <tr className="text-button border-bottom-1 border-border pb-5">
                  <th className="pb-5 min-w-150px">Vaccination Center</th>
                  <th className="pb-5 min-w-150px">Barangay Name</th>
                  <th className="pb-5 min-w-120px">Population</th>
                  <th className="pb-5 min-w-70px">Vaccinated %</th>
                  <th className="pb-5 min-w-70px">Planned to Date</th>
                  <th className="pb-5 min-w-50px">Variance</th>
                  <th className="pb-5 min-w-50px">Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="px-0 py-3">
                    <div className="symbol symbol-55px mt-1 me-5">
                      <span className="symbol-label bg-light-primary align-items-end">
                        <img
                          alt="Logo"
                          src={toAbsoluteUrl(
                            "/media/svg/avatars/001-boy.svg"
                          )}
                          className="mh-40px"
                        />
                      </span>
                    </div>
                  </td>
                  <td className="px-0">
                    <a className="text-gray-800 fw-bolder text-hover-primary fs-6">
                      Brad Simmons
                    </a>
                    <span className="text-muted fw-bold d-block mt-1">
                      HTML, CSS Coding
                    </span>
                  </td>
                  <td></td>
                  <td className="">
                    <span className="text-gray-800 fw-bolder d-block fs-6">
                      $1,200,000
                    </span>
                    <span className="text-muted fw-bold d-block mt-1 fs-7">
                      Paid
                    </span>
                  </td>
                  <td className="">
                    <span className="fw-bolder text-primary">+28%</span>
                  </td>
                  <td className="pe-0">
                    <span className="badge badge-primary">Active</span>
                  </td>
                  <td className="">
                    <Link to={`/lgu/${id}`} className="btn btn-icon btn-active-color-primary btn-sm">
                      <VCSVG
                        className="svg-icon-4"
                        path="/media/svg/pages/om/button-edit.svg"
                      />
                    </Link>
                    <a className="btn btn-icon btn-active-color-danger btn-sm">
                      <VCSVG
                        className="svg-icon-4"
                        path="/media/svg/pages/om/button-trash.svg"
                      />
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="px-0 py-3">
                    <div className="symbol symbol-55px mt-1">
                      <span className="symbol-label bg-light-danger align-items-end">
                        <img
                          alt="Logo"
                          src={toAbsoluteUrl(
                            "/media/svg/avatars/018-girl-9.svg"
                          )}
                          className="mh-40px"
                        />
                      </span>
                    </div>
                  </td>
                  <td className="px-0">
                    <a className="text-gray-800 fw-bolder text-hover-primary fs-6">
                      Jessie Clarcson
                    </a>
                    <span className="text-muted fw-bold d-block mt-1">
                      Most Successful
                    </span>
                  </td>
                  <td></td>
                  <td className="text-end">
                    <span className="text-gray-800 fw-bolder d-block fs-6">
                      $1,200,000
                    </span>
                    <span className="text-muted fw-bold d-block mt-1 fs-7">
                      Paid
                    </span>
                  </td>
                  <td className="">
                    <span className="fw-bolder text-danger">+52%</span>
                  </td>
                  <td className="pe-0">
                    <span className="badge badge-primary">Active</span>
                  </td>
                  <td className="">
                    <Link to={`/lgu/${id}`} className="btn btn-icon btn-active-color-primary btn-sm">
                      <VCSVG
                        className="svg-icon-4"
                        path="/media/svg/pages/om/button-edit.svg"
                      />
                    </Link>
                    <a className="btn btn-icon btn-active-color-danger btn-sm">
                      <VCSVG
                        className="svg-icon-4"
                        path="/media/svg/pages/om/button-trash.svg"
                      />
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="px-0 py-3">
                    <div className="symbol symbol-55px mt-1">
                      <span className="symbol-label bg-light-warning align-items-end">
                        <img
                          alt="Logo"
                          src={toAbsoluteUrl(
                            "/media/svg/avatars/047-girl-25.svg"
                          )}
                          className="mh-40px"
                        />
                      </span>
                    </div>
                  </td>
                  <td className="px-0">
                    <a className="text-gray-800 fw-bolder text-hover-primary fs-6">
                      Lebron Wayde
                    </a>
                    <span className="text-muted fw-bold d-block mt-1">
                      Awesome Users
                    </span>
                  </td>
                  <td></td>
                  <td className="">
                    <span className="text-gray-800 fw-bolder d-block fs-6">
                      $3,400,000
                    </span>
                    <span className="text-muted fw-bold d-block mt-1 fs-7">
                      Paid
                    </span>
                  </td>
                  <td className="">
                    <span className="fw-bolder text-warning">+34%</span>
                  </td>
                  <td className="pe-0">
                    <span className="badge badge-primary">Active</span>
                  </td>
                  <td className="">
                    <Link to={`/lgu/${id}`} className="btn btn-icon btn-active-color-primary btn-sm">
                      <VCSVG
                        className="svg-icon-4"
                        path="/media/svg/pages/om/button-edit.svg"
                      />
                    </Link>
                    <a className="btn btn-icon btn-active-color-danger btn-sm">
                      <VCSVG
                        className="svg-icon-4"
                        path="/media/svg/pages/om/button-trash.svg"
                      />
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="px-0 py-3">
                    <div className="symbol symbol-55px mt-1">
                      <span className="symbol-label bg-light-success align-items-end">
                        <img
                          alt="Logo"
                          src={toAbsoluteUrl(
                            "/media/svg/avatars/043-boy-18.svg"
                          )}
                          className="mh-40px"
                        />
                      </span>
                    </div>
                  </td>
                  <td className="px-0">
                    <a className="text-gray-800 fw-bolder text-hover-primary fs-6">
                      Kevin Leonard
                    </a>
                    <span className="text-muted fw-bold d-block mt-1">
                      Awesome Userss
                    </span>
                  </td>
                  <td></td>
                  <td className="">
                    <span className="text-gray-800 fw-bolder d-block fs-6">
                      $35,600,000
                    </span>
                    <span className="text-muted fw-bold d-block mt-1 fs-7">
                      Paid
                    </span>
                  </td>
                  <td className="">
                    <span className="fw-bolder text-success">+230%</span>
                  </td>
                  <td className="pe-0">
                    <span className="badge badge-primary">Active</span>
                  </td>
                  <td className="">
                    <Link to={`/lgu/${id}`} className="btn btn-icon btn-active-color-primary btn-sm">
                      <VCSVG
                        className="svg-icon-4"
                        path="/media/svg/pages/om/button-edit.svg"
                      />
                    </Link>
                    <a className="btn btn-icon btn-active-color-danger btn-sm">
                      <VCSVG
                        className="svg-icon-4"
                        path="/media/svg/pages/om/button-trash.svg"
                      />
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="px-0 py-3">
                    <div className="symbol symbol-55px mt-1">
                      <span className="symbol-label bg-light-info align-items-end">
                        <img
                          alt="Logo"
                          src={toAbsoluteUrl(
                            "/media/svg/avatars/024-boy-9.svg"
                          )}
                          className="mh-40px"
                        />
                      </span>
                    </div>
                  </td>
                  <td className="px-0">
                    <a className="text-gray-800 fw-bolder text-hover-primary fs-6">
                      Randy Trent
                    </a>
                    <span className="text-muted fw-bold d-block mt-1">
                      Business Analyst
                    </span>
                  </td>
                  <td></td>
                  <td className="">
                    <span className="text-gray-800 fw-bolder d-block fs-6">
                      $45,200,000
                    </span>
                    <span className="text-muted fw-bold d-block mt-1 fs-7">
                      Paid
                    </span>
                  </td>
                  <td className="">
                    <span className="fw-bolder text-success">+340%</span>
                  </td>
                  <td className="pe-0">
                    <span className="badge badge-primary">Active</span>
                  </td>
                  <td className="">
                    <Link to={`/lgu/${id}`} className="btn btn-icon btn-active-color-primary btn-sm">
                      <VCSVG
                        className="svg-icon-4"
                        path="/media/svg/pages/om/button-edit.svg"
                      />
                    </Link>
                    <a className="btn btn-icon btn-active-color-danger btn-sm">
                      <VCSVG
                        className="svg-icon-4"
                        path="/media/svg/pages/om/button-trash.svg"
                      />
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="border-top-1 border-border pb-10">
            <hr className="bg-border h-2px" />
            <div className="d-flex justify-content-between">
              <h6 className="text-white pt-3">Showing 1 to 10 of 57 entries</h6>
              <ul className="pagination">
                <li className="page-item previous disabled">
                  <a href="#" className="page-link">
                    <i className="previous"></i>
                  </a>
                </li>
                <li className="page-item">
                  <a href="#" className="page-link">
                    1
                  </a>
                </li>
                <li className="page-item active">
                  <a href="#" className="page-link">
                    2
                  </a>
                </li>
                <li className="page-item">
                  <a href="#" className="page-link">
                    3
                  </a>
                </li>
                <li className="page-item">
                  <a href="#" className="page-link">
                    4
                  </a>
                </li>
                <li className="page-item">
                  <a href="#" className="page-link">
                    5
                  </a>
                </li>
                <li className="page-item">
                  <a href="#" className="page-link">
                    6
                  </a>
                </li>
                <li className="page-item next">
                  <a href="#" className="page-link">
                    <i className="next"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VaccinationRecords;
