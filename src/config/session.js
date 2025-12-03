import session from "express-session";

const sessionMiddleware = session({
  secret: process.env.SESSION_SECRET || "dev-session-secret",
  resave: false,
  saveUninitialized: false,
  cookie: {
    secure: false,
  },
});

export default sessionMiddleware;

