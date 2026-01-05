"use client";
import React, { ChangeEvent, FormEvent, useState, useEffect } from "react";
import toast from "react-hot-toast";

interface Form {
  name: string;
  email: string;
  phone: string;
  subject: string;
  course: string;
  message: string;
}
interface Status {
  type: "success" | "error" | "sending";
  message?: string;
}

const COURSES = [
  "Fashion Design",
  "Interior Design",
  "Modeling",
  "Textile Design",
  "Beautician Course",
  "Boutique Management",
  "Tailoring",
];

export default function Enquiry() {
  const [form, setForm] = useState<Form>({
    name: "",
    email: "",
    phone: "",
    subject: "",
    course: "",
    message: "",
  });
  const [status, setStatus] = useState<Status>();

  const sendMail = async ({ form }: { form: Form }) => {
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: form.name,
        email: "gifdjsr@gmail.com",
        phone: form.phone,
        subject: form.subject,
        message: form.message,
      }),
    });
    return response.json();
  };
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
      toast.error("Name, email and message are required.");
      setStatus({
        type: "error",
        message: "Name, email and message are required.",
      });
      return;
    }

    const toastId = toast.loading("Sending message...");
    try {
      const response = await sendMail({ form });
      if (response.success) {
        toast.success("Message sent.");
        setStatus({ type: "success", message: "Message sent." });
      } else {
        toast.error("Failed to send message.");
        setStatus({ type: "error", message: "Failed to send message." });
      }
    } catch (error) {
      toast.error("Failed to send message.");
      setStatus({ type: "error", message: error as string });
    } finally {
      toast.dismiss(toastId);
    }
  }
  useEffect(() => {
    if (status?.type === "success") {
      setForm({
        name: "",
        email: "",
        phone: "",
        subject: "",
        course: "",
        message: "",
      });
    }
  }, [status]);

  return (
    <form
      onSubmit={handleSubmit}
      className="md:w-[30vw] p-6 bg-white rounded-2xl shadow"
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
      <div className="flex items-center gap-3">
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
          <span className="text-sm">Phone*</span>
          <input
            name="phone"
            type="tel"
            value={form.phone}
            onChange={handleChange}
            required
            pattern="\+?[0-9]{10,15}"
            className="mt-1 block w-full rounded-md border px-3 py-2"
            placeholder="+91 98765 43210"
          />
        </label>
      </div>

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
      <label className="block">
        <span className="mb-1 block text-sm font-medium">Course*</span>

        <select
          name="course"
          value={form.course}
          onChange={(e) => setForm({ ...form, course: e.target.value })}
          required
          className="w-full rounded-md border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-black"
        >
          <option value="">Select a course</option>

          {COURSES.map((course) => (
            <option key={course} value={course}>
              {course}
            </option>
          ))}
        </select>
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
            {/* {status.message} */}
          </p>
        )}
      </div>
    </form>
  );
}
