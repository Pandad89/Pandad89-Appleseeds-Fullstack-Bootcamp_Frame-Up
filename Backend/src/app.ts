import "dotenv/config";
import express from "express";
import cors from "cors";

import { kidsRouter } from "./routers/kids.routers";
import { moviesRouter } from "./routers/movies.routers";
import { seriesRouter } from "./routers/series.routers";
const app = express();

app.use(cors());

app.use(express.json({}));

app.use(express.urlencoded({ extended: false }));
app.use("/movies", moviesRouter);
app.use("/series", seriesRouter);
app.use("/kids", kidsRouter);

app.use("*", ((err, req, res, next) => {
  res.status(500).send("Server Error");
}) as express.ErrorRequestHandler);

export { app };
