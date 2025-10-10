import { google } from "googleapis"

const CLIENT_ID = process.env.GOOGLE_CLIENT_ID!
const CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET!
const REDIRECT_URI = process.env.GOOGLE_REDIRECT_URI!

const oAuth2Client = new google.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI)

export function setCredentials(token: string) {
  oAuth2Client.setCredentials({ access_token: token })
}

export function getCalendarClient() {
  return google.calendar({ version: "v3", auth: oAuth2Client })
}
