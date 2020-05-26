import nextConnect from "next-connect"
import ironSession from '../lib/session'

export default nextConnect()
  .use(ironSession)