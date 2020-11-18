import express from "express";
import compression from "compression";
import bodyParser from "body-parser";
import lusca from "lusca";
import passport from "passport";

import cors from "cors";

import userRouter from "./routers/user";
import productRouter from "./routers/product";
import authRouter from "./routers/auth";

import apiErrorHandler from "./middlewares/apiErrorHandler";

import "./config/passport";

const app = express();
// Express configuration
app.set("port", process.env.PORT || 3001);

// Use common 3rd-party middlewares
app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(lusca.xframe("SAMEORIGIN"));
app.use(lusca.xssProtection(true));
app.use(passport.initialize());
app.use(passport.session());
app.use(cors());

app.use("/api/v1/users", userRouter);
app.use("/api/v1/products", productRouter);
app.use("/api/v1/auth", authRouter);

// Custom API error handler
app.use(apiErrorHandler);

export default app;
