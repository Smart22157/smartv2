"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { supabase } from "@/lib/supabase";

type Gallery = {
  id: string;
  title: string;
  client_name: string;
  event_type: string;
  event_date: string;
  status: string;
  drive_folder_id: string;
  drive_folder_link: string;
};

type DriveFile = {
  id: string;
  name: string;
  mimeType: string;
  thumbnailLink?: string;
  webViewLink?: string;
  webContentLink?: string;
};

export default function GalleryDetailsPage() {
  const { id } = useParams();

  const [gallery, setGallery] = useState<Gallery | null>(null);
  const [files, setFiles] = useState<DriveFile[]>([]);
  const [uploading, setUploading] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      fetchGallery();
    }
  }, [id]);

  async function fetchGallery() {
    const { data, error } = await supabase
      .from("galleries")
      .select("*")
      .eq("id", id)
      .single();

    if (error) {
      console.error(error);
      return;
    }

    setGallery(data);

    if (data.drive_folder_id) {
      await loadFiles(data.drive_folder_id);
    }

    setLoading(false);
  }

  async function loadFiles(folderId: string) {
    try {
      const res = await fetch("/api/google/list-files", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          folderId,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error);
      }

      setFiles(data);
    } catch (err) {
      console.error(err);
    }
  }
async function uploadFiles(
  e: React.ChangeEvent<HTMLInputElement>
) {
  if (!gallery) return;

  const selectedFiles = e.target.files;

  if (!selectedFiles) return;

  setUploading(true);

  try {

    for (const file of Array.from(selectedFiles)) {

      const formData = new FormData();

      formData.append("file", file);
      formData.append("folderId", gallery.drive_folder_id);

      const res = await fetch("/api/google/upload", {
        method: "POST",
        body: formData,
      });

      if (!res.ok) {
        throw new Error("Upload failed");
      }

    }

    await loadFiles(gallery.drive_folder_id);

    alert("Upload completed!");

  } catch (err) {

    console.error(err);

    alert("Upload failed.");

  }

  setUploading(false);
}
  if (loading || !gallery) {
    return (
      <div className="p-10 text-white">
        Loading Gallery...
      </div>
    );
  }

  return (
    <div className="space-y-10">

      {/* Header */}

      {/* Header */}

<div className="rounded-3xl border border-white/10 bg-white/5 p-8">

  <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

    <div>

      <span className="rounded-full bg-red-600/20 px-4 py-1 text-sm font-semibold text-red-400">
        {gallery.event_type}
      </span>

      <h1 className="mt-4 text-5xl font-black">
        {gallery.title}
      </h1>

      <div className="mt-6 space-y-2 text-gray-400">

        <p>
          👤 <span className="text-white">{gallery.client_name}</span>
        </p>

        <p>
          📅 <span className="text-white">{gallery.event_date}</span>
        </p>

      </div>

    </div>

    <div className="flex flex-wrap gap-3">

      <a
        href={gallery.drive_folder_link}
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-full bg-blue-600 px-6 py-3 font-semibold transition hover:bg-blue-700"
      >
        📂 Open Drive
      </a>

      <Link
        href="/dashboard/galleries"
        className="rounded-full bg-white/10 px-6 py-3 font-semibold hover:bg-white/20"
      >
        ← Back
      </Link>

    </div>

  </div>

</div>
{/* Upload */}

<div className="rounded-3xl border border-white/10 bg-white/5 p-8">

  <h2 className="text-2xl font-bold">
    Upload Files
  </h2>

  <p className="mt-3 text-gray-400">
    Upload photos and videos directly to Google Drive.
  </p>

  <label className="mt-8 inline-flex cursor-pointer rounded-full bg-red-600 px-8 py-4 font-semibold hover:bg-red-700">

    {uploading ? "Uploading..." : "📤 Upload Files"}

    <input
      hidden
      multiple
      type="file"
      onChange={uploadFiles}
    />

  </label>

</div>
      {/* Status */}

   <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

  <div className="flex items-center justify-between">

    <div>

      <h2 className="text-2xl font-bold">
        Gallery Status
      </h2>

      <p className="mt-2 text-gray-400">
        Current visibility of this gallery.
      </p>

    </div>

    <span
      className={`rounded-full px-5 py-2 font-semibold ${
        gallery.status === "Published"
          ? "bg-green-500/20 text-green-400"
          : "bg-yellow-500/20 text-yellow-400"
      }`}
    >
      {gallery.status}
    </span>

  </div>

</div>

      {/* Files */}

      <div>

       <div className="mb-8 flex items-center justify-between">

  <h2 className="text-3xl font-bold">
    Gallery Files
  </h2>

  <span className="rounded-full bg-white/10 px-4 py-2 text-sm text-gray-300">
    {files.length} Files
  </span>

</div>
        {files.length === 0 ? (

          <div className="rounded-3xl border border-white/10 bg-white/5 p-12 text-center">

           <div className="flex flex-col items-center justify-center py-16">

  <div className="text-7xl">
    📸
  </div>

  <h3 className="mt-6 text-2xl font-bold">
    No Photos Yet
  </h3>

  <p className="mt-3 max-w-sm text-center text-gray-400">
    Upload photos into this gallery.
    They will automatically appear here.
  </p>

</div>

          </div>

        ) : (

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

            {files.map((file) => (

              <a
                key={file.id}
                href={`https://drive.google.com/file/d/${file.id}/view`}
                target="_blank"
                rel="noopener noreferrer"
                className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 transition hover:border-red-500/50"
              >

                {file.thumbnailLink ? (

<img
  src={file.thumbnailLink}
  alt={file.name}
  loading="lazy"
  decoding="async"
  className="aspect-square w-full object-cover transition duration-300 group-hover:scale-105"
/>

                ) : (

                  <div className="flex h-56 items-center justify-center bg-black text-6xl">
                    📄
                  </div>

                )}

                <div className="p-4">

                <div className="space-y-2 p-4">

  <p className="truncate font-semibold">
    {file.name}
  </p>

  <p className="text-sm text-gray-500">
    {file.mimeType.startsWith("image")
      ? "📷 Image"
      : "🎥 Video"}
  </p>

</div>

                </div>

              </a>

            ))}

          </div>

        )}

      </div>

    </div>
  );
}