import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Application from "./Application";

<<<<<<< HEAD
// link from backend to frontend
import Amplify from "aws-amplify";
import configuration from "./aws-exports";

const appSyncConfig = {
  aws_appsync_graphqlEndpoint:
    "https://acgf73nhkzatji3jf5j277vx7u.appsync-api.us-east-2.amazonaws.com/graphql",
  aws_appsync_region: "us-east-2",
  aws_appsync_authenticationType: "API_KEY",
  aws_appsync_apiKey: "da2-qflxtcbl2bcndmve2ia23uixje"
=======
import Amplify from 'aws-amplify';
import configuration from './aws-exports';

const appSyncConfig = {
  aws_appsync_graphqlEndpoint:
    'https://hudgahnbufbvvb7lano5lvg6wy.appsync-api.us-east-1.amazonaws.com/graphql',
  aws_appsync_region: 'us-east-1',
  aws_appsync_authenticationType: 'API_KEY',
  aws_appsync_apiKey: 'da2-w2ipm2v44rbsba736c3oqse2nm',
>>>>>>> 2deb9c1abfc4f227f293d398c10f1572d46700ca
};

Amplify.configure({ ...configuration, ...appSyncConfig });

<<<<<<< HEAD
ReactDOM.render(<Application />, document.getElementById("root"));
=======
ReactDOM.render(<Application />, document.getElementById('root'));
>>>>>>> 2deb9c1abfc4f227f293d398c10f1572d46700ca
