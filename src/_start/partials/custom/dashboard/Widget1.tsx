/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from "react";
import { Chart, ChartConfiguration, DoughnutController, ArcElement } from "chart.js";
import { getCSSVariableValue } from "_start/assets/ts/_utils";
import { toAbsoluteUrl } from "_start/helpers";

type Props = {
  className: string;
  innerPadding?: string;
};

const Widget1: React.FC<Props> = ({ className, innerPadding = "" }) => {
  useEffect(() => {
    const element = document.getElementById(
      "hb_stats_widget_1_chart"
    ) as HTMLCanvasElement;
    if (!element) {
      return;
    }

    const options = getChartOptions();
    const ctx = element.getContext("2d");

    Chart.register(DoughnutController, ArcElement);

    let myDoughnut: Chart | null;
    if (ctx) {
      myDoughnut = new Chart(ctx, options);
    }
    return function cleanUp() {
      if (myDoughnut) {
        myDoughnut.destroy();
      }
    };
  }, []);

  return (
    <div className={`card bg-component ${className}`}>
      {/* begin::Header */}
      <div
        className={`card-header align-items-center border-0 mt-5 ${innerPadding}`}
      >
        <h3 className="card-title align-items-start flex-column">
          <span className="fw-bolder text-dark fs-3">Population Data</span>
          <span className="text-muted mt-2 fw-bold fs-6">You reached  115,090 / 200,000</span>
        </h3>
      </div>
      {/* end::Header */}

      {/* begin::Body */}
      <div className="card-body pt-12">
        {/* begin::Chart */}
        <div
          className="d-flex flex-center position-relative bgi-no-repeat bgi-size-contain bgi-position-x-center bgi-position-y-center h-175px"
          style={{
            backgroundImage: `url('${toAbsoluteUrl(
              "/media/svg/illustrations/bg-1.svg"
            )}')`,
          }}
        >
          <div className="fw-bolder fs-1 text-gray-800 position-absolute">
            68%
          </div>
          <canvas id="hb_stats_widget_1_chart"></canvas>
        </div>
        {/* end::Chart */}
      </div>
      {/* end: Card Body */}
    </div>
  );
};

export { Widget1 };

function getChartOptions() {
  // const tooltipBgColor = getCSSVariableValue("--bs-gray-200");
  // const tooltipColor = getCSSVariableValue("--bs-gray-800");

  const color1 = getCSSVariableValue("--bs-success");
  const color2 = getCSSVariableValue("--bs-warning");

  const options: ChartConfiguration = {
    type: "doughnut",
    data: {
      datasets: [
        {
          data: [32, 68],
          backgroundColor: [color1, color2],
        },
      ],
      labels: ["Angular", "CSS", "HTML"],
    },
    options: {
      // cutoutPercentage: 75,
      responsive: true,
      maintainAspectRatio: false,
      // legend: {
      //   display: false,
      //   position: "top",
      // },
      // title: {
      //   display: false,
      //   text: "Technology",
      // },
      animation: false,
      // animation: {
      //   animateScale: true,
      //   animateRotate: true,
      // },
      // tooltips: {
      //   enabled: true,
      //   intersect: false,
      //   mode: "nearest",
      //   bodySpacing: 5,
      //   yPadding: 10,
      //   xPadding: 10,
      //   caretPadding: 0,
      //   displayColors: false,
      //   backgroundColor: tooltipBgColor,
      //   bodyFontColor: tooltipColor,
      //   cornerRadius: 4,
      //   footerSpacing: 0,
      //   titleSpacing: 0,
      // },
    },
  };
  return options;
}

// function randomScalingFactor() {
//   return Math.round(Math.random() * 100);
// }
