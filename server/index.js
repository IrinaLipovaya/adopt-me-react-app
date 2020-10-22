import express from "express";
import React from "react";
import { renderToString } from "react-dom/server";
import { ServerLocation } from "@reach/router";
import fs from "fs";
import App from "../src/App";

const PORT = process.env.PORT || 3000;

const html = fs.readFileSync("dist/index.html").toString();

const parts = html.split("Not rendered");

const app = express();

app.use("/dist", express.static("dist"));
// middleware to run every time when there is a request
app.use((req, res) => {
  const reactMarkup = (
    // server side rendering
    <ServerLocation url={req.url}>
      <App />
    </ServerLocation>
  );

  res.send(parts[0] + renderToString(reactMarkup) + parts[1]);
  res.end();
});

app.listen(PORT);
