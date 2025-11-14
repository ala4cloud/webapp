import { ApplicationInsights } from "@microsoft/applicationinsights-web";

const appInsights = new ApplicationInsights({
  config: {
    instrumentationKey: import.meta.env.VITE_APP_INSIGHTS_KEY, // Vite style
    // or if using CRA: process.env.REACT_APP_APP_INSIGHTS_KEY
    enableAutoRouteTracking: true, // Tracks page changes automatically
  },
});

appInsights.loadAppInsights();
export default appInsights;
