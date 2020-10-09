/* eslint-disable @typescript-eslint/camelcase */
import passport from "passport";

import User from "../models/User";

import logger from "../util/logger";

// eslint-disable-next-line @typescript-eslint/no-var-requires
const GoogleTokenStrategy = require("passport-google-id-token");
const GOOGLE_CLIENT_ID =
    "676751270206-bih2psso6vca65bg6ecicj7i4o42h940.apps.googleusercontent.com";
passport.serializeUser<any, any>((user, done) => {
    done(null, user.id);
});

passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
        done(err, user);
    });
});

passport.use(
    new GoogleTokenStrategy(
        {
            clientID: GOOGLE_CLIENT_ID,
        },
        function(parsedToken: any, googleId: string, done: any) {
            const {
                email,
                name,
                given_name,
                family_name,
            } = parsedToken.payload;

            User.findOne({ googleId: googleId }).then(currentUSer => {
                if (currentUSer) {
                    done(null, currentUSer);
                } else {
                    new User({
                        googleId: googleId,
                        email: email,
                        userName: name,
                        firstName: given_name,
                        lastName: family_name,
                        isAdmin:
                            email === "hoang.tran@integrify.io" ? true : false,
                    })
                        .save()
                        .then(newUser => {
                            console.log(newUser);
                            done(null, newUser);
                        });
                }
            });
        }
    )
);
