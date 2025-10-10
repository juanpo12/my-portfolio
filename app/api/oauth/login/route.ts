import { google } from "googleapis"
import { NextRequest, NextResponse } from "next/server"

export async function GET(req: NextRequest) {
  const url = new URL(req.url)
  const code = url.searchParams.get("code")

  if (!code) {
    return NextResponse.json({ error: "Missing code" }, { status: 400 })
  }

  const oauth2Client = new google.auth.OAuth2(
    process.env.GOOGLE_CLIENT_ID,
    process.env.GOOGLE_CLIENT_SECRET,
    process.env.GOOGLE_REDIRECT_URI // Debe ser exactamente igual al configurado en Google Console
  )

  try {
    const { tokens } = await oauth2Client.getToken(code)
    oauth2Client.setCredentials(tokens)

    // Podés guardar los tokens si querés persistencia
    console.log("Tokens:", tokens)

    // Redirigís al frontend (ej: dashboard)
    return NextResponse.redirect("http://localhost:3000/dashboard")
  } catch (err) {
    console.error("Error al intercambiar code por token:", err)
    return NextResponse.json({ error: "Token exchange failed" }, { status: 500 })
  }
}
