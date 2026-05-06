import { ImageResponse } from "next/og"

export const runtime = "edge"
export const alt = "Juan José Díaz - Full Stack Developer"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #0a0a0f 0%, #0f172a 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(59,130,246,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.06) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 24, zIndex: 1 }}>
          <div
            style={{
              width: 110,
              height: 110,
              borderRadius: "50%",
              background: "linear-gradient(135deg, rgba(59,130,246,0.25), rgba(59,130,246,0.5))",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              border: "2px solid rgba(59,130,246,0.5)",
              fontSize: 42,
              fontWeight: 700,
              color: "white",
            }}
          >
            JD
          </div>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 10 }}>
            <div style={{ color: "white", fontSize: 62, fontWeight: 700, letterSpacing: "-2px", lineHeight: 1 }}>
              Juan José Díaz
            </div>
            <div style={{ color: "rgba(96,165,250,1)", fontSize: 26, fontWeight: 500 }}>
              Full Stack Developer · AI · SaaS
            </div>
            <div style={{ color: "rgba(255,255,255,0.45)", fontSize: 18 }}>
              Buenos Aires, Argentina
            </div>
          </div>
          <div style={{ display: "flex", gap: 10, marginTop: 4 }}>
            {["Next.js", "TypeScript", "React", "Node.js", "AI"].map((tech) => (
              <div
                key={tech}
                style={{
                  background: "rgba(59,130,246,0.12)",
                  border: "1px solid rgba(59,130,246,0.35)",
                  color: "rgba(96,165,250,0.95)",
                  padding: "6px 18px",
                  borderRadius: 999,
                  fontSize: 17,
                }}
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
        <div
          style={{
            position: "absolute",
            bottom: 32,
            color: "rgba(255,255,255,0.2)",
            fontSize: 15,
          }}
        >
          juanjosediazarmada.vercel.app
        </div>
      </div>
    ),
    { ...size }
  )
}
