import { google } from "googleapis";
import { NextRequest, NextResponse } from "next/server";
import { DateTime } from "luxon";

type RequestBody = {
  date: string;
  description: string;
  requester: {
    name: string;
    email: string;
  };
  time: string;
};

export async function POST(req: NextRequest) {
  const { date, description, requester, time }: RequestBody = await req.json();

  if (!date) {
    return NextResponse.json({ error: "Missing date" }, { status: 400 });
  }

  try {
    const oAuth2Client = new google.auth.OAuth2(
      process.env.GOOGLE_CLIENT_ID,
      process.env.GOOGLE_CLIENT_SECRET,
      process.env.GOOGLE_REDIRECT_URI
    );

    oAuth2Client.setCredentials({
      refresh_token: process.env.GOOGLE_REFRESH_TOKEN,
    });

    const calendar = google.calendar({ version: "v3", auth: oAuth2Client });

    const timeMatch = time.match(/^(\d{1,2}):(\d{2})\s?(AM|PM)$/i);
    if (!timeMatch) {
      throw new Error("Invalid time format. Expected format HH:MM AM/PM");
    }

    let hours = parseInt(timeMatch[1], 10);
    const minutes = parseInt(timeMatch[2], 10);
    const meridian = timeMatch[3].toUpperCase();

    if (meridian === "PM" && hours < 12) hours += 12;
    if (meridian === "AM" && hours === 12) hours = 0;

    const startDateTime = DateTime.fromISO(date, { zone: "America/Argentina/Buenos_Aires" })
      .set({ hour: hours, minute: minutes, second: 0 });

    const endDateTime = startDateTime.plus({ minutes: 30 });

    const response = await calendar.events.insert({
      calendarId: "primary",
      conferenceDataVersion: 1,
      sendUpdates: "all", // Envía invitaciones a todos los asistentes
      requestBody: {
        summary: `Reunión con ${requester.name}`,
        description: description || "No description provided",
        attendees: [
          { email: requester.email, displayName: requester.name }
        ],
        conferenceData: {
          createRequest: {
            requestId: `sample-request-${Date.now()}`,
            conferenceSolutionKey: {
              type: "hangoutsMeet",
            },
          },
        },
        start: {
          dateTime: startDateTime.toISO(),
          timeZone: "America/Argentina/Buenos_Aires",
        },
        end: {
          dateTime: endDateTime.toISO(),
          timeZone: "America/Argentina/Buenos_Aires",
        },
      },
    });

    if (response.status === 200) {
      return NextResponse.json({ message: "Event scheduled successfully!" }, { status: 200 });
    } else {
      return NextResponse.json({ error: "Failed to schedule event" }, { status: 500 });
    }

  } catch (error) {
    console.error("Error processing request:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
