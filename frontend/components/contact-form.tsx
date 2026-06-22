"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { cn } from "@/lib/utils"

export default function ContactForm({ className }: { className?: string }) {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [error, setError] = useState("")
  const [showModal, setShowModal] = useState(false)
  const router = useRouter()

  function validate() {
    if (!email || !message) return "Email and message are required"
    const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRe.test(email)) return "Please enter a valid email"
    return ""
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const v = validate()
    if (v) {
      setError(v)
      setStatus("error")
      return
    }

    setStatus("loading")
    setError("")
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      })
      const data = await res.json()
      if (res.ok && data.success) {
        setStatus("success")
        setShowModal(true)
        setName("")
        setEmail("")
        setMessage("")
        setTimeout(() => {
          setShowModal(false)
          router.push("/")
        }, 2500)
      } else {
        setStatus("error")
        setError(data.error || "Submission failed")
      }
    } catch (e) {
      setStatus("error")
      setError(String(e))
    }
  }

  const inputClass =
    "mt-2 w-full rounded-xl border border-cdsa-border bg-white px-4 py-3 text-sm text-cdsa-foreground outline-none transition-colors focus:border-cdsa-green"

  return (
    <>
      <form onSubmit={handleSubmit} className={cn("grid gap-5", className)} noValidate>
        <label className="block">
          <span className="text-xs font-bold uppercase tracking-wider text-cdsa-foreground-muted">
            Full Name
          </span>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            name="name"
            className={inputClass}
          />
        </label>

        <label className="block">
          <span className="text-xs font-bold uppercase tracking-wider text-cdsa-foreground-muted">
            Email Address
          </span>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            name="email"
            type="email"
            className={inputClass}
          />
        </label>

        <label className="block">
          <span className="text-xs font-bold uppercase tracking-wider text-cdsa-foreground-muted">
            Message
          </span>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            name="message"
            rows={5}
            className={inputClass}
          />
        </label>

        {status === "error" && error && <p className="text-sm text-red-600">{error}</p>}

        <button
          type="submit"
          disabled={status === "loading"}
          className="mt-2 w-full rounded-full bg-cdsa-green py-3.5 text-sm font-bold uppercase tracking-wide text-white transition-opacity hover:opacity-90 disabled:opacity-60 dark:bg-cdsa-lime dark:text-[#1a1e00]"
        >
          {status === "loading" ? "Sending…" : "Send Message"}
        </button>
      </form>

      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="absolute inset-0 bg-black/40" />
          <div className="relative rounded-2xl bg-white p-6 shadow-lg">
            <h3 className="text-lg font-semibold">Message sent</h3>
            <p className="mt-2 text-sm text-cdsa-foreground-muted">
              Thanks — we&apos;ll get back to you shortly.
            </p>
          </div>
        </div>
      )}
    </>
  )
}
