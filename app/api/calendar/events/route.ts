import { google } from "googleapis"
import { NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest) {
  try {
    const { date } = await req.json()

    if (!date) return NextResponse.json({ error: "Missing date" }, { status: 400 })

    const oAuth2Client = new google.auth.OAuth2(
      process.env.CLIENT_ID,
      process.env.CLIENT_SECRET,
      process.env.REDIRECT_URI
    )

    oAuth2Client.setCredentials({
      refresh_token: process.env.REFRESH_TOKEN,
    })

    const calendar = google.calendar({ version: "v3", auth: oAuth2Client })

   const startOfDay = new Date(`${date}T08:00:00-03:00`)
    const endOfDay = new Date(`${date}T20:00:00-03:00`)

    console.log("Checking availability from", startOfDay.toISOString(), "to", endOfDay.toISOString())

    const response = await calendar.freebusy.query({
      requestBody: {
        timeMin: startOfDay.toISOString(),
        timeMax: endOfDay.toISOString(),
        timeZone: "America/Argentina/Buenos_Aires",
        items: [{ id: "primary" }]
      }
    })

    const busyTimes = response.data.calendars?.primary.busy || []
    console.log("Busy blocks:", busyTimes)

    const availableSlots: { time: string; available: boolean }[] = []
    const current = new Date(startOfDay)
    const currentDay = new Date()

    while (current < endOfDay) {
      const slotStart = new Date(current)
      const slotEnd = new Date(current)
      slotEnd.setMinutes(slotEnd.getMinutes() + 30)

      const isBusy = busyTimes.some(busy => {
        const busyStart = new Date(busy.start!)
        const busyEnd = new Date(busy.end!)
        return slotStart < busyEnd && slotEnd > busyStart
      })

      if (!isBusy) {
        availableSlots.push({
          time: slotStart.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
          available: currentDay.getTime() <= slotStart.getTime() && slotStart.getTime() < endOfDay.getTime() 
        })
      } else {
        availableSlots.push({
          time: slotStart.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
          available: false
        })
      }

      current.setMinutes(current.getMinutes() + 30)
    }

    return NextResponse.json(availableSlots)
  } catch (error) {
    console.error("Error fetching calendar events:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
