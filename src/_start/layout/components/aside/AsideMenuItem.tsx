/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import clsx from "clsx";
import { Link } from "react-router-dom";
import { useLocation } from "react-router";
import { VCSVG, checkIsActive } from "_start/helpers";

type Props = {
  to: string;
  title: string;
  svg?: string;
  hasBullet?: boolean;
  free?: boolean;
  exclusive?: boolean;
};

const AsideMenuItem: React.FC<Props> = ({
  children,
  to,
  title,
  svg,
  hasBullet = false,
  free = false,
  exclusive = false,
}) => {
  const { pathname } = useLocation();
  return (
    <div
      className={clsx("menu-item mt-4 ps-5 pe-4 ps-lg-10 pe-lg-6", {
        here: checkIsActive(pathname, to),
      })}
    >
      {free ? (
        <a data-hb-page="pro" className="menu-link py-2">
          {svg && (
            <span className="menu-bullet">
              {/* <span className="bullet bullet-dot"></span> */}
              <VCSVG
                className="svg-icon-2 svg-icon-lg-1"
                path={`/media/svg/pages/sidebar/${svg}.svg`}
              />
            </span>
          )}
          <span className="menu-title">
            {title}
            <span className="badge badge-pro badge-light-danger fw-bold fs-9 px-2 py-1 ms-1">
              Pro
            </span>
          </span>
        </a>
      ) : (
        <Link className="menu-link py-2" to={to}>
          {svg && (
            <span className="menu-bullet">
              {/* <span className="bullet bullet-dot"></span> */}
              <VCSVG
                className="svg-icon"
                path={`/media/svg/pages/sidebar/${svg}.svg`}
              />
            </span>
          )}
          <span className="menu-title">{title}</span>
          {exclusive && (
            <span className="badge badge-exclusive badge-light-success fw-bold fs-9 px-2 py-1 ms-1">
              Exclusive
            </span>
          )}
        </Link>
      )}
      {children}
    </div>
  );
};

export { AsideMenuItem };
