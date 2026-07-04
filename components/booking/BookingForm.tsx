"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {supabase} from "@/lib/supabase";
type BookingFormProps = {
  admin?: boolean;
};

export default function BookingForm({
  admin = false,
}: BookingFormProps) {

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
const [errorMessage, setErrorMessage] = useState("");

const [formData, setFormData] = useState({
  full_name: "",
  email: "",
  phone: "",
  event_type: "",
  event_date: "",
  event_location: "",
  guests: "",
  budget: "",
  message: "",
});

const handleChange = (
  e: React.ChangeEvent<
    HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
  >
) => {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value,
  });
};

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  setLoading(true);

  const { error } = await supabase
    .from("bookings")
    .insert([
      {
        full_name: formData.full_name,
        email: formData.email,
        phone: formData.phone,
        event_type: formData.event_type,
        event_date: formData.event_date || null,
        event_location: formData.event_location,
        guests: formData.guests
          ? Number(formData.guests)
          : null,
        budget: formData.budget,
        message: formData.message,
      },
    ]);

setLoading(false);

if (error) {
  setErrorMessage(error.message);
  return;
}

// Send booking details to our email API
await fetch("/api/booking", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(formData),
});

setSuccess(true);

if (admin) {
  window.location.href = "/dashboard/bookings";
}
setErrorMessage("");
  setFormData({
    full_name: "",
    email: "",
    phone: "",
    event_type: "",
    event_date: "",
    event_location: "",
    guests: "",
    budget: "",
    message: "",
  });
};
  return (
    <section className="bg-[#050505] py-24">

      <div className="mx-auto max-w-5xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-[40px] border border-white/10 bg-white/5 p-10 backdrop-blur-xl"
        >

          <div className="mb-12 text-center">
<h2 className="text-4xl font-black">
  {admin ? "Create New Booking" : "Reserve Your Session"}
</h2>

        <p className="mt-4 text-gray-400">
  {admin
    ? "Create a booking manually for a client."
    : "Complete the form below and we'll contact you shortly."}
</p>

          </div>
{success && (
  <div className="mb-8 rounded-2xl border border-green-500/30 bg-green-500/10 p-6 text-center">
    <h3 className="text-2xl font-bold text-green-400">
      ✅ Booking Received!
    </h3>

    <p className="mt-2 text-gray-300">
      Thank you for choosing SmartLens Media.
      We'll contact you shortly.
    </p>
  </div>
)}

{errorMessage && (
  <div className="mb-8 rounded-2xl border border-red-500/30 bg-red-500/10 p-6 text-center">
    <p className="text-red-400">{errorMessage}</p>
  </div>
)}
       <form
  onSubmit={handleSubmit}
  className="grid gap-8 md:grid-cols-2"
>

       <input
  type="text"
  name="full_name"
  value={formData.full_name}
  onChange={handleChange}
  placeholder="Full Name"
  required
  className="rounded-xl border border-white/10 bg-black px-5 py-4 outline-none transition focus:border-red-500"
/>
<input
  type="email"
  name="email"
  value={formData.email}
  onChange={handleChange}
  placeholder="Email Address"
  required
  className="rounded-xl border border-white/10 bg-black px-5 py-4 outline-none transition focus:border-red-500"
/>

            <input
  type="tel"
  name="phone"
  value={formData.phone}
  onChange={handleChange}
  placeholder="Phone Number"
  required
  className="rounded-xl border border-white/10 bg-black px-5 py-4 outline-none transition focus:border-red-500"
/>
<select
  name="event_type"
  value={formData.event_type}
  onChange={handleChange}
  required
  className="rounded-xl border border-white/10 bg-black px-5 py-4 outline-none focus:border-red-500"
>
  <option value="">Choose Event</option>
  <option value="Wedding">Wedding</option>
  <option value="Graduation">Graduation</option>
  <option value="Corporate Event">Corporate Event</option>
  <option value="Birthday">Birthday</option>
  <option value="Church Event">Church Event</option>
  <option value="Photography">Photography</option>
  <option value="Videography">Videography</option>
  <option value="Livestream">Livestream</option>
  <option value="Drone Coverage">Drone Coverage</option>
  <option value="Other">Other</option>
</select>
    <input
  type="date"
  name="event_date"
  value={formData.event_date}
  onChange={handleChange}
  min={new Date().toISOString().split("T")[0]}
  required
  className="rounded-xl border border-white/10 bg-black px-5 py-4 outline-none focus:border-red-500"
/>

            <input
  type="text"
  name="event_location"
  value={formData.event_location}
  onChange={handleChange}
  placeholder="Event Location"
  className="rounded-xl border border-white/10 bg-black px-5 py-4 outline-none focus:border-red-500"
/>

      <input
  type="number"
  name="guests"
  value={formData.guests}
  onChange={handleChange}
  placeholder="Guests (Optional)"
  className="rounded-xl border border-white/10 bg-black px-5 py-4 outline-none focus:border-red-500"
/><input
  type="text"
  name="budget"
  value={formData.budget}
  onChange={handleChange}
  placeholder="Estimated Budget (Optional)"
  className="rounded-xl border border-white/10 bg-black px-5 py-4 outline-none focus:border-red-500"
/>
         <textarea
  name="message"
  value={formData.message}
  onChange={handleChange}
  placeholder="Tell us about your event..."
  rows={6}
  className="md:col-span-2 rounded-xl border border-white/10 bg-black px-5 py-4 outline-none focus:border-red-500"
/>
          <button
  type="submit"
  disabled={loading}
  className="md:col-span-2 rounded-full bg-red-600 px-10 py-5 text-lg font-semibold transition hover:bg-red-700 disabled:cursor-not-allowed disabled:opacity-50"
>
  {loading ? "Submitting..." : "Book My Session"}

</button>

          </form>

        </motion.div>

      </div>

    </section>
  );
}