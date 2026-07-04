import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { getDrive, publishFile } from "@/lib/google-drive";
import { supabaseAdmin } from "@/lib/supabase-admin";

export async function POST(req: Request) {
  try {
    const session = await auth();

    if (!session?.accessToken) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      );
    }

    const { galleryId, folderId } = await req.json();

    if (!galleryId || !folderId) {
      return NextResponse.json(
        {
          error: "Gallery ID and Folder ID are required",
        },
        {
          status: 400,
        }
      );
    }

    const drive = getDrive(session.accessToken);

    const response = await drive.files.list({
      q: `'${folderId}' in parents and trashed=false`,
      fields: "files(id,name)",
    });

    const files = response.data.files ?? [];

    for (const file of files) {
      if (file.id) {
        await publishFile(session.accessToken, file.id);
      }
    }

    const { error } = await supabaseAdmin
      .from("galleries")
      .update({
        status: "Published",
        is_published: true,
      })
      .eq("id", galleryId);

    if (error) {
      throw error;
    }

    return NextResponse.json({
      success: true,
      publishedFiles: files.length,
    });

  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        error: "Failed to publish gallery",
      },
      {
        status: 500,
      }
    );
  }
}