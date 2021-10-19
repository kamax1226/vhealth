/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { VCSVG } from "_start/helpers";
import { useFormik } from "formik";
import { toAbsoluteUrl } from "_start/helpers";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import clsx from "clsx";
import { PageTitle } from "_start/layout/core";

interface propTypes {
  match: {
    params: {
      id: string
    }
  }
}

const schema = Yup.object().shape({

});

const initialValues = {
  name: "DILG-NCR",
  password: "demo",
};

export const DetailPage: React.FC<propTypes> = ({ match }) => {
  const {
    params: { id },
  } = match;

  const [loading, setLoading] = useState<boolean>(false);
  const [pageRows, setPageRows] = useState<number>(10);

  const formik = useFormik({
    initialValues,
    validationSchema: schema,
    onSubmit: (values, { setStatus, setSubmitting }) => {
      setLoading(true);
      setTimeout(() => {
        // Requests
      }, 1000);
    }
  })

  return (
    <>
      <PageTitle>Organization Management</PageTitle>
      <div className="row g-0 g-xl-5 g-xxl-8">
        <div className="col-xl-12">
          <div className="card bg-component">
            <div className="card-header border-0 pt-10">
              <div>
                <h3 className="text-button">Information & Details</h3>
              </div>
            </div>

            <div className="card-body pt-3 pb-3 mt-n3">
              <form
                className="form w-100"
                onSubmit={formik.handleSubmit}
                noValidate
                id="kt_om_edit_form"
              >
                {formik.status ? (
                  <div className="mb-lg-15 alert alert-danger">
                    <div className="alert-text font-weight-bold">{formik.status}</div>
                  </div>
                ) : (
                  //
                  <></>
                )}

                {/* begin::Form group */}
                <div className="row">
                  <div className="col-md-6 v-row mb-10 fv-plugins-icon-container">
                    <label className="form-label fs-6 fw-bolder text-label">Type of Organization</label>
                    <select
                      className="form-select form-select-lg form-select-solid fw-bold h-45px fs-6 text-gray-600 bg-select border-0"
                      data-control="select2"
                      data-placeholder="Choose one"
                      data-hide-search="true"
                      onChange={(e) => setPageRows(parseInt(e.target.value))}
                      value={pageRows}
                    >
                      <option value={0}>Local Government Unit</option>
                      <option value={1}>Local Government Unit</option>
                      <option value={2}>Local Government Unit</option>
                      <option value={3}>Local Government Unit</option>
                      <option value={4}>Local Government Unit</option>
                    </select>
                    {formik.touched.name && formik.errors.name && (
                      <div className="fv-plugins-message-container">
                        <div className="fv-help-block">{formik.errors.name}</div>
                      </div>
                    )}
                  </div>
                  <div className="col-md-6 v-row mb-10 fv-plugins-icon-container">
                    <label className="form-label fs-6 fw-bolder text-label">Name</label>
                    <input
                      placeholder="Name"
                      {...formik.getFieldProps("name")}
                      className={clsx(
                        "form-control form-control-lg form-control-solid bg-select border-0",
                        { "is-invalid": formik.touched.name && formik.errors.name },
                        {
                          "is-valid": formik.touched.name && !formik.errors.name,
                        }
                      )}
                      type="email"
                      name="email"
                      autoComplete="off"
                    />
                    {formik.touched.name && formik.errors.name && (
                      <div className="fv-plugins-message-container">
                        <div className="fv-help-block">{formik.errors.name}</div>
                      </div>
                    )}
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-3 v-row mb-10 fv-plugins-icon-container">
                    <label className="form-label fs-6 fw-bolder text-label">Date Joined</label>
                    <input
                      placeholder="Email"
                      {...formik.getFieldProps("email")}
                      className={clsx(
                        "form-control form-control-lg form-control-solid bg-select border-0",
                        { "is-invalid": formik.touched.name && formik.errors.name },
                        {
                          "is-valid": formik.touched.name && !formik.errors.name,
                        }
                      )}
                      type="email"
                      name="email"
                      autoComplete="off"
                    />
                    {formik.touched.name && formik.errors.name && (
                      <div className="fv-plugins-message-container">
                        <div className="fv-help-block">{formik.errors.name}</div>
                      </div>
                    )}
                  </div>
                  <div className="col-md-3 v-row mb-10 fv-plugins-icon-container">
                    <label className="form-label fs-6 fw-bolder text-label">City</label>
                    <input
                      placeholder="Email"
                      {...formik.getFieldProps("email")}
                      className={clsx(
                        "form-control form-control-lg form-control-solid bg-select border-0",
                        { "is-invalid": formik.touched.name && formik.errors.name },
                        {
                          "is-valid": formik.touched.name && !formik.errors.name,
                        }
                      )}
                      type="email"
                      name="email"
                      autoComplete="off"
                    />
                    {formik.touched.name && formik.errors.name && (
                      <div className="fv-plugins-message-container">
                        <div className="fv-help-block">{formik.errors.name}</div>
                      </div>
                    )}
                  </div>
                  <div className="col-md-3 v-row mb-10 fv-plugins-icon-container">
                    <label className="form-label fs-6 fw-bolder text-label">Municipality</label>
                    <input
                      placeholder="Email"
                      {...formik.getFieldProps("email")}
                      className={clsx(
                        "form-control form-control-lg form-control-solid bg-select border-0",
                        { "is-invalid": formik.touched.name && formik.errors.name },
                        {
                          "is-valid": formik.touched.name && !formik.errors.name,
                        }
                      )}
                      type="email"
                      name="email"
                      autoComplete="off"
                    />
                    {formik.touched.name && formik.errors.name && (
                      <div className="fv-plugins-message-container">
                        <div className="fv-help-block">{formik.errors.name}</div>
                      </div>
                    )}
                  </div>
                  <div className="col-md-3 v-row mb-10 fv-plugins-icon-container">
                    <label className="form-label fs-6 fw-bolder text-label">Region</label>
                    <input
                      placeholder="Email"
                      {...formik.getFieldProps("email")}
                      className={clsx(
                        "form-control form-control-lg form-control-solid bg-select border-0",
                        { "is-invalid": formik.touched.name && formik.errors.name },
                        {
                          "is-valid": formik.touched.name && !formik.errors.name,
                        }
                      )}
                      type="email"
                      name="email"
                      autoComplete="off"
                    />
                    {formik.touched.name && formik.errors.name && (
                      <div className="fv-plugins-message-container">
                        <div className="fv-help-block">{formik.errors.name}</div>
                      </div>
                    )}
                  </div>
                </div>
                {/* end::Form group */}

                {/* begin::Action */}
                <div className="pb-lg-0 pb-5">
                  <button
                    type="submit"
                    id="kt_login_signin_form_submit_button"
                    className="btn btn-primary fw-bolder fs-6 px-8 py-4 my-3 me-3 float-end w-150px h-45px"
                    disabled={formik.isSubmitting || !formik.isValid}
                  >
                    {!loading && <span className="indicator-label">Save</span>}
                    {loading && (
                      <span className="indicator-progress" style={{ display: "block" }}>
                        Please wait...{" "}
                        <span className="spinner-border spinner-border-sm align-middle ms-2"></span>
                      </span>
                    )}
                  </button>
                  <button
                    type="submit"
                    id="kt_login_signin_form_submit_button"
                    className="btn btn-active-danger fw-bolder fs-6 px-8 py-4 my-3 me-3 float-end w-150px h-45px"
                    disabled={formik.isSubmitting || !formik.isValid}
                  >
                    {!loading && <span className="indicator-label text-white">Cancel</span>}
                    {loading && (
                      <span className="indicator-progress" style={{ display: "block" }}>
                        Please wait...{" "}
                        <span className="spinner-border spinner-border-sm align-middle ms-2"></span>
                      </span>
                    )}
                  </button>
                </div>
                {/* end::Action */}
              </form>
            </div>
          </div>

          <div className="card bg-component mt-10">
            {/* begin::Header */}
            <div className="card-header border-0 pt-10">
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
                <a href="#" className="btn btn-success bg-button h-35px pt-2 me-5">+ Add Member</a>
                {/* <a href="#" className="btn btn-success bg-button h-35px pt-2">
                  <VCSVG
                    className="svg-icon-4"
                    path="/media/svg/pages/om/download-report.svg"/>
                  Generate Report
                </a> */}
              </div>
            </div>
            {/* end::Header */}

            {/* begin::Body */}
            <div className="card-body pt-3 pb-3 mt-n3">
              <div className="mt-4" id="omTable">
                {/* begin::Table */}
                <div className="table-responsive">
                  <table className="table table-borderless align-middle">
                    <thead>
                      <tr className="text-button border-bottom-1 border-border pb-5">
                        <th className="pb-5 min-w-150px">Photo</th>
                        <th className="pb-5 min-w-150px">Name</th>
                        <th className="pb-5 min-w-120px">Email Address</th>
                        <th className="pb-5 min-w-70px">Province</th>
                        <th className="pb-5 min-w-70px">Region</th>
                        <th className="pb-5 min-w-50px">Status</th>
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
                          <Link to={`/om/${id}`} className="btn btn-icon btn-active-color-primary btn-sm">
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
                          <Link to={`/om/${id}`} className="btn btn-icon btn-active-color-primary btn-sm">
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
                          <Link to={`/om/${id}`} className="btn btn-icon btn-active-color-primary btn-sm">
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
                          <Link to={`/om/${id}`} className="btn btn-icon btn-active-color-primary btn-sm">
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
                          <Link to={`/om/${id}`} className="btn btn-icon btn-active-color-primary btn-sm">
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
                {/* end::Table */}
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
            {/* end::Body */}
          </div>

        </div>
      </div>
    </>
  );
};
