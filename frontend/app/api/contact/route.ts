import { NextResponse } from "next/server"
import fs from "fs"
import path from "path"

async function sendWithSendGrid(to: string, from: string, subject: string, content: string) {
  const key = process.env.SENDGRID_API_KEY
  if (!key) return { ok: false, error: "No SENDGRID_API_KEY" }

  const body = {
    personalizations: [{ to: [{ email: to }] }],
    from: { email: from },
    subject,
    content: [{ type: "text/plain", value: content }],
  }

  const res = await fetch("https://api.sendgrid.com/v3/mail/send", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${key}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  })

  if (!res.ok) {
    const text = await res.text()
    return { ok: false, error: text }
  }
  return { ok: true }
}

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { name, email, message } = body as { name?: string; email?: string; message?: string }
    if (!email || !message) {
      return NextResponse.json({ success: false, error: "Missing required fields" }, { status: 400 })
    }

    const dataDir = path.join(process.cwd(), "data")
    if (!fs.existsSync(dataDir)) fs.mkdirSync(dataDir)
    const file = path.join(dataDir, "messages.json")

    let arr: any[] = []
    if (fs.existsSync(file)) {
      try {
        arr = JSON.parse(fs.readFileSync(file, "utf8") || "[]")
      } catch (e) {
        arr = []
      }
    }

    const entry = { name: name || "", email, message, date: new Date().toISOString() }
    arr.push(entry)
    fs.writeFileSync(file, JSON.stringify(arr, null, 2), "utf8")

    // Attempt to send an email via SendGrid if configured
    const recipient = process.env.CONTACT_RECIPIENT || "hello@thesuitesliberia.com"
    const sender = process.env.CONTACT_SENDER || recipient
    if (process.env.SENDGRID_API_KEY) {
      try {
        const sendRes = await sendWithSendGrid(
          recipient,
          sender,
          `New contact from ${name || email}`,
          `Name: ${name || "(not provided)"}\nEmail: ${email}\n\nMessage:\n${message}`
        )
        if (!sendRes.ok) {
          // Log the error server-side but still return success to the client
          console.error("SendGrid error:", sendRes.error)
        }
      } catch (e) {
        console.error("SendGrid exception:", e)
      }
    }

    return NextResponse.json({ success: true })
  } catch (err) {
    return NextResponse.json({ success: false, error: String(err) }, { status: 500 })
  }
}
