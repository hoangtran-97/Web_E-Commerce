import passport from "passport";
import passportLocal from "passport-local";
import passportFacebook from "passport-facebook";
// eslint-disable-next-line @typescript-eslint/no-var-requires
const GoogleTokenStrategy = require("passport-google-id-token");
import { Request, Response, NextFunction } from "express";

const LocalStrategy = passportLocal.Strategy;
const FacebookStrategy = passportFacebook.Strategy;
