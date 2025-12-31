"use client";
import axios from "axios";
import React, { ChangeEvent, FormEvent, useState } from "react";

interface Form {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}
interface Status {
  type: "success" | "error" | "sending";
  message?: string;
}
export default function Enquiry({ onSubmitUrl = "/api/contact" }) {
  const [form, setForm] = useState<Form>({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<Status>();

  function handleChange(
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus({ type: "sending" });

    // Basic client-side validation
    if (!form.name || !form.email || !form.message) {
      setStatus({
        type: "error",
        message: "Name, email and message are required.",
      });
      return;
    }

    axios
      .post("/api/contact", {
        name: form.name,
        email: form.email,
        phone: form.phone,
        subject: form.subject,
        message: form.message,
      })
      .then((res) => {
        console.log("Mail sent ", res.data);
        setStatus({ type: "success", message: "Message sent." });
        setForm({ name: "", email: "", phone: "", subject: "", message: "" });
      })
      .catch((err) => {
        console.log("Mail failed ", err);
        setStatus({ type: "error", message: "Failed to send message." });
      });
  }
  const sendMail = async () => {
    axios
      .post("/api/contact", {
        name: form.name,
        email: form.email,
        phone: form.phone,
        subject: form.subject,
        message: form.message,
      })
      .then((res) => {
        console.log("Mail sent ", res.data);
        setStatus({ type: "success", message: "Message sent." });
        setForm({ name: "", email: "", phone: "", subject: "", message: "" });
      })
      .catch((err) => {
        console.log("Mail failed ", err);
        setStatus({ type: "error", message: "Failed to send message." });
      });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-[30vw] p-6 bg-white rounded-2xl shadow"
    >
      <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>

      <label className="block mb-3">
        <span className="text-sm">Name*</span>
        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          required
          className="mt-1 block w-full rounded-md border px-3 py-2"
          placeholder="Your full name"
        />
      </label>

      <label className="block mb-3">
        <span className="text-sm">Email*</span>
        <input
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          required
          className="mt-1 block w-full rounded-md border px-3 py-2"
          placeholder="you@example.com"
        />
      </label>

      <label className="block mb-3">
        <span className="text-sm">Phone</span>
        <input
          name="phone"
          type="tel"
          value={form.phone}
          onChange={handleChange}
          pattern="[0-9+\-()\s]{6,20}"
          className="mt-1 block w-full rounded-md border px-3 py-2"
          placeholder="+91 98765 43210"
        />
      </label>

      <label className="block mb-3">
        <span className="text-sm">Subject</span>
        <input
          name="subject"
          value={form.subject}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border px-3 py-2"
          placeholder="Short summary"
        />
      </label>

      <label className="block mb-4">
        <span className="text-sm">Message*</span>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          required
          rows={5}
          className="mt-1 block w-full rounded-md border px-3 py-2"
          placeholder="Write your message..."
        />
      </label>

      <div className="flex items-center gap-3">
        <button
          type="submit"
          className="px-4 py-2 rounded-md bg-indigo-600 text-white hover:bg-indigo-700"
          disabled={status?.type === "sending"}
        >
          {status?.type === "sending" ? "Sending..." : "Send Message"}
        </button>

        {status && typeof status === "object" && (
          <p
            className={`text-sm ${
              status.type === "error" ? "text-red-600" : "text-green-600"
            }`}
          >
            {status.message}
          </p>
        )}
      </div>
    </form>
  );
}
