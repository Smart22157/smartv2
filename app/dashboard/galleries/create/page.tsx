"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";

export default function CreateGalleryPage() {
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    title: "",
    client_name: "",
    event_type: "",
    event_date: "",
  });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  function slugify(text: string) {
    return text
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");
  }

  async function handleSubmit(
    e: React.FormEvent<HTMLFormElement>
  ) {
    e.preventDefault();

    setLoading(true);

    try {
      const slug = slugify(formData.title);

      // STEP 1
      // Create Google Drive Folder
      const folderResponse = await fetch(
        "/api/google/create-gallery-folder",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            title: formData.title,
            eventType: formData.event_type,
          }),
        }
      );

      const folder = await folderResponse.json();

      if (!folderResponse.ok) {
        throw new Error(folder.error);
      }

      // STEP 2
      // Save Gallery
      const { error } = await supabase
        .from("galleries")
        .insert([
          {
            title: formData.title,
            slug,
            client_name: formData.client_name,
            event_type: formData.event_type,
            event_date: formData.event_date,
            status: "Draft",

            drive_folder_id: folder.folderId,
            drive_folder_link: folder.folderLink,
          },
        ]);

      if (error) {
        throw error;
      }

      alert("Gallery created successfully!");

      router.push("/dashboard/galleries");

    } catch (err: any) {
      alert(err.message);
    }

    setLoading(false);
  }

  return (
    <div className="mx-auto max-w-3xl">

      <h1 className="text-5xl font-black">
        Create Gallery
      </h1>

      <p className="mt-3 text-gray-400">
        Create a new gallery and Google Drive folder.
      </p>

      <form
        onSubmit={handleSubmit}
        className="mt-10 space-y-6 rounded-3xl border border-white/10 bg-white/5 p-8"
      >

        <input
          type="text"
          name="title"
          required
          placeholder="Gallery Title"
          value={formData.title}
          onChange={handleChange}
          className="w-full rounded-xl border border-white/10 bg-black px-5 py-4 outline-none focus:border-red-500"
        />

        <input
          type="text"
          name="client_name"
          required
          placeholder="Client Name"
          value={formData.client_name}
          onChange={handleChange}
          className="w-full rounded-xl border border-white/10 bg-black px-5 py-4 outline-none focus:border-red-500"
        />

        <select
          name="event_type"
          required
          value={formData.event_type}
          onChange={handleChange}
          className="w-full rounded-xl border border-white/10 bg-black px-5 py-4 outline-none focus:border-red-500"
        >
          <option value="">Select Event</option>
          <option>Wedding</option>
          <option>Birthday</option>
          <option>Graduation</option>
          <option>Corporate</option>
          <option>Livestream</option>
          <option>Photography</option>
          <option>Videography</option>
        </select>

        <input
          type="date"
          name="event_date"
          required
          value={formData.event_date}
          onChange={handleChange}
          className="w-full rounded-xl border border-white/10 bg-black px-5 py-4 outline-none focus:border-red-500"
        />

        <button
          disabled={loading}
          className="rounded-full bg-red-600 px-8 py-4 font-semibold transition hover:bg-red-700 disabled:opacity-50"
        >
          {loading
            ? "Creating Gallery..."
            : "Create Gallery"}
        </button>

      </form>

    </div>
  );
}