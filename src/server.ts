import errorHandler from "errorhandler";
import mongoose from "mongoose";

import bluebird from "bluebird";
import app from "./app";
import { MONGODB_URI, SESSION_SECRET } from "./util/secrets";
const mongoUrl = MONGODB_URI;

mongoose.Promise = bluebird;
mongoose
    .connect(mongoUrl, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        /** ready to use. The `mongoose.connect()` promise resolves to undefined. */
        console.log("MongoDB connection. ");
    })
    .catch((err: Error) => {
        console.log(
            "MongoDB connection error. Please make sure MongoDB is running. " +
                err
        );
        process.exit(1);
    });

/**
 * Error Handler. Provides full stack - remove for production
 */
app.use(errorHandler());

/**
 * Start Express server.
 */
const server = app.listen(app.get("port"), () => {
    console.log(
        "  App is running at http://localhost:%d in %s mode",
        app.get("port"),
        app.get("env")
    );
    console.log("  Press CTRL-C to stop\n");
});

export default server;
