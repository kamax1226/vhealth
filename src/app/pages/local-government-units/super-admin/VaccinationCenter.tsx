/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
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

export const VaccinationCenter: React.FC<propTypes> = ({ match }) => {
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
      <PageTitle>Vaccination Center {id}</PageTitle>
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
                    <label className="form-label fs-6 fw-bolder text-label">Vaccination Center Name</label>
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
                    <label className="form-label fs-6 fw-bolder text-label">Barangay Name</label>
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
                    <label className="form-label fs-6 fw-bolder text-label">Street</label>
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

                <div>
                  <h3 className="text-button">Vaccination Data</h3>
                </div>

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
                  <div className="col-md-3 v-row mb-10 fv-plugins-icon-container">
                    <label className="form-label fs-6 fw-bolder text-label">Available Vaccine</label>
                    <select
                      className="form-select form-select-lg form-select-solid fw-bold h-45px fs-6 text-gray-600 bg-select border-0"
                      data-control="select2"
                      data-placeholder="Choose one"
                      data-hide-search="true"
                      onChange={(e) => setPageRows(parseInt(e.target.value))}
                      value={pageRows}
                    >
                      <option value={0}>Sinovac</option>
                      <option value={1}>Sinovac</option>
                      <option value={2}>Sinovac</option>
                      <option value={3}>Sinovac</option>
                      <option value={4}>Sinovac</option>
                    </select>
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
        </div>
      </div>
    </>
  );
};
