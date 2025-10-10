// app/api/oauth/redirect/route.ts

import { google } from "googleapis";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const code = req.nextUrl.searchParams.get("code");

  if (!code) {
    return NextResponse.json({ error: "Missing code" }, { status: 400 });
  }

  const oauth2Client = new google.auth.OAuth2(
    process.env.GOOGLE_CLIENT_ID,
    process.env.GOOGLE_CLIENT_SECRET,
    process.env.GOOGLE_REDIRECT_URI
  );

  try {
    const { tokens } = await oauth2Client.getToken(code);
    oauth2Client.setCredentials(tokens);

    console.log("✅ Tokens:", tokens); // debug

    // Opcional: podés redirigir a un dashboard o guardar en sesión
    return NextResponse.json({ success: true, tokens });
  } catch (err) {
    console.error("❌ Error getting token:", err);
    return NextResponse.json({ error: "Failed to get token" }, { status: 500 });
  }
}
