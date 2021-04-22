import React from 'react';
import express from 'express';
import {buildAppContainer, buildCss, buildJs} from "./builder";
const app = express();
const publicFolder = process.env.RAZZLE_PUBLIC_DIR || "/public";

// set the view engine to ejs
app.set('view engine', 'ejs');
app.use(express.static(publicFolder));

app.get('/api/health', (req, res) => {
    res.status(200).json({
        status: "UP",
        version: "todo",
        hash: "todo",
        deploymentTime: "todo"
    });
});

app.get('/', (req, res) => {
    res.render('pages/app', {
        title: "test",
        language: "en",
        container: buildAppContainer(),
        overrideCss: buildCss("client"),
        overrideJs: buildJs("client")
    });
});

export default app;
