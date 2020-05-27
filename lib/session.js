import { ironSession, applySession as applyIronSession } from "next-iron-session";

export const sessionConfig = {
  cookieName: "token",
  password: process.env.SECRET_COOKIE_PASSWORD,
  cookieOptions: {
    secure: false,
    httpOnly: false
    // secure: process.env.NODE_ENV === 'production',
    // httpOnly: process.env.NODE_ENV === 'production'
  }
}

export const applySession = (req, res) => applyIronSession(req, res, sessionConfig)

export default ironSession(sessionConfig)