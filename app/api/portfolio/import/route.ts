import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { getDrive } from "@/lib/google-drive";
import { supabaseAdmin } from "@/lib/supabase-admin";

export async function POST() {
  try {
    const session = await auth();

    if (!session?.accessToken) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      );
    }

    const { data: settings, error } = await supabaseAdmin
      .from("settings")
      .select("*")
      .eq("id", 1)
      .single();

    if (error || !settings) {
      return NextResponse.json(
        { error: "Settings not found" },
        { status: 500 }
      );
    }

    const drive = getDrive(session.accessToken);

    const folders = [
  {
    category: "Weddings",
    id: settings.weddings_folder_id,
  },
  {
    category: "Graduations",
    id: settings.graduations_folder_id,
  },
  {
    category: "Corporate",
    id: settings.corporate_folder_id,
  },
  {
    category: "Portraits",
    id: settings.portraits_folder_id,
  },
  {
    category: "Drone",
    id: settings.drone_folder_id,
  },
  {
    category: "Livestream",
    id: settings.livestream_folder_id,
  },
];

const allFiles = [];

for (const folder of folders) {

  const result = await drive.files.list({
    q: `'${folder.id}' in parents and mimeType contains 'image/' and trashed=false`,
    fields:
      "files(id,name,mimeType,webViewLink)",
    pageSize: 1000,
  });

  const files = result.data.files || [];

  console.log(folder.category, files.length);

  allFiles.push(
    ...files.map(file => ({
      ...file,
      category: folder.category,
    }))
  );
}

let imported = 0;
let skipped = 0;

for (const file of allFiles) {

  const { data: existing } = await supabaseAdmin
    .from("portfolio")
    .select("id")
    .eq("drive_file_id", file.id)
    .maybeSingle();

  if (existing) {
    skipped++;
    continue;
  }

  const title = file.name
    ?.replace(/\.[^/.]+$/, "")
    .replace(/[-_]/g, " ");

  const { error } = await supabaseAdmin
    .from("portfolio")
    .insert({
      title,
      category: file.category,
      drive_file_id: file.id,
      drive_link: file.webViewLink,
    });

  if (!error) {
    imported++;
  } else {
    console.error(error);
  }
}

return NextResponse.json({
  success: true,
  imported,
  skipped,
  total: allFiles.length,
});

  } catch (err) {
    console.error(err);

    return NextResponse.json(
      { error: "Import failed" },
      { status: 500 }
    );
  }
}