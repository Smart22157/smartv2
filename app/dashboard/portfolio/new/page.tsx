"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function NewPortfolioPhoto() {
  const router = useRouter();

  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("Weddings");
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!file) {
      alert("Please choose a photo.");
      return;
    }

    setLoading(true);

    const formData = new FormData();

    formData.append("title", title);
    formData.append("category", category);
    formData.append("file", file);

    try {
      const res = await fetch("/api/portfolio/upload", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();

      if (!res.ok) {
        alert(data.error || "Upload failed.");
        setLoading(false);
        return;
      }

      alert("Portfolio photo uploaded successfully!");

      router.push("/dashboard/portfolio");
      router.refresh();

    } catch (error) {
      console.error(error);
      alert("Something went wrong.");
    }

    setLoading(false);
  }

  return (
    <div className="mx-auto max-w-3xl">

      <h1 className="text-5xl font-black">
        Add Portfolio Photo
      </h1>

      <p className="mt-3 text-gray-400">
        Upload a photo to your public SmartLens portfolio.
      </p>

      <form
        onSubmit={handleSubmit}
        className="mt-10 space-y-6 rounded-3xl border border-white/10 bg-white/5 p-8"
      >

        <input
          type="text"
          placeholder="Photo Title"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full rounded-xl border border-white/10 bg-black px-5 py-4 outline-none focus:border-red-500"
        />

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full rounded-xl border border-white/10 bg-black px-5 py-4 outline-none focus:border-red-500"
        >
          <option>Weddings</option>
          <option>Graduations</option>
          <option>Corporate</option>
          <option>Portraits</option>
          <option>Drone</option>
          <option>Livestream</option>
        </select>

        <input
          type="file"
          accept="image/*"
          required
          onChange={(e) => setFile(e.target.files?.[0] || null)}
          className="w-full rounded-xl border border-white/10 bg-black px-5 py-4"
        />

        <button
          disabled={loading}
          className="rounded-full bg-red-600 px-8 py-4 font-semibold transition hover:bg-red-700 disabled:opacity-50"
        >
          {loading ? "Uploading..." : "Upload Photo"}
        </button>

      </form>

    </div>
  );
}