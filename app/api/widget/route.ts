export async function GET() {
  const res = await fetch('https://votive-profligately-jerri.ngrok-free.dev/widget.js', {
    headers: { 'ngrok-skip-browser-warning': 'true' },
  })
  const script = await res.text()
  return new Response(script, {
    headers: { 'Content-Type': 'application/javascript; charset=utf-8' },
  })
}
