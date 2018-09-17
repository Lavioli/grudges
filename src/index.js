import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Application from "./Application";

// link from backend to frontend
import Amplify from "aws-amplify";
import configuration from "./aws-exports";

const appSyncConfig = {
  aws_appsync_graphqlEndpoint:
    "https://acgf73nhkzatji3jf5j277vx7u.appsync-api.us-east-2.amazonaws.com/graphql",
  aws_appsync_region: "us-east-2",
  aws_appsync_authenticationType: "API_KEY",
  aws_appsync_apiKey: "da2-qflxtcbl2bcndmve2ia23uixje"
};

Amplify.configure({ ...configuration, ...appSyncConfig });

ReactDOM.render(<Application />, document.getElementById("root"));
