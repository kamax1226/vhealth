import * as envDev from "./dev";
import * as envProduction from "./production";

const getConfigs = () => {
  switch (process.env.REACT_APP_ENVIRONMENT) {
    case "production":
      return envProduction;
    default:
      return envDev;
  }
};

export default getConfigs();