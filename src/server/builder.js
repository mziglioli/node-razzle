import React from 'react';
import { App } from "../components";
import { renderToString } from "react-dom/server";

const assets = require(process.env.RAZZLE_ASSETS_MANIFEST);

export const buildCss = (entrypoint) => {
    return assets[entrypoint].css;
};

export const buildJs = (entrypoint) => {
    return assets[entrypoint].js;
};

export const buildAppContainer = () => {
    return renderToString(<App />);
};