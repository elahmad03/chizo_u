import {
    type RouteConfig,
    route,
  } from "@react-router/dev/routes";
  import { flatRoutes } from "@react-router/fs-routes";
  
  export default [
    route("/", "./src/App.tsx"),
  
    ...(await flatRoutes()),
  ] satisfies RouteConfig;
  