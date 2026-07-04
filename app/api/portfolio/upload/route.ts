import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import {
  getDrive,
  publishFile
} from "@/lib/google-drive";
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

    const formData = await req.formData();

    const file = formData.get("file") as File;
    const title = formData.get("title") as string;
    const category = formData.get("category") as string;

    if (!file || !title || !category) {
      return NextResponse.json(
        { error: "Missing fields" },
        { status: 400 }
      );
    }

    // Load settings
    const { data: settings, error: settingsError } =
      await supabaseAdmin
        .from("settings")
        .select("*")
        .eq("id", 1)
        .single();

    console.log("Settings:", settings);
    console.log("Settings Error:", settingsError);

    if (settingsError || !settings) {
      return NextResponse.json(
        { error: "Settings not found" },
        { status: 500 }
      );
    }

    let folderId = "";

    switch (category) {
      case "Weddings":
        folderId = settings.weddings_folder_id;
        break;

      case "Graduations":
        folderId = settings.graduations_folder_id;
        break;

      case "Corporate":
        folderId = settings.corporate_folder_id;
        break;

      case "Portraits":
        folderId = settings.portraits_folder_id;
        break;

      case "Drone":
        folderId = settings.drone_folder_id;
        break;

      case "Livestream":
        folderId = settings.livestream_folder_id;
        break;

      default:
        return NextResponse.json(
          { error: "Invalid category" },
          { status: 400 }
        );
    }

    const drive = getDrive(session.accessToken);

    const bytes = await file.arrayBuffer();

    const buffer = Buffer.from(bytes);

    const { Readable } = await import("stream");

    const stream = Readable.from(buffer);

    // Upload to Google Drive
    const uploaded = await drive.files.create({
      requestBody: {
        name: file.name,
        parents: [folderId],
      },
      media: {
        mimeType: file.type,
        body: stream,
      },
      fields: "id,name,webViewLink",
    });
await publishFile(
  session.accessToken,
  uploaded.data.id!
);
    console.log("Google Upload:", uploaded.data);

    // Save to portfolio table
    const {
      data: portfolioData,
      error: portfolioError,
    } = await supabaseAdmin
      .from("portfolio")
      .insert({
        title,
        category,
        drive_file_id: uploaded.data.id,
        drive_link: uploaded.data.webViewLink,
      })
      .select();

    console.log("Portfolio Data:", portfolioData);
    console.log("Portfolio Error:", portfolioError);

    if (portfolioError) {
      return NextResponse.json(
        {
          error: portfolioError.message,
        },
        {
          status: 500,
        }
      );
    }

    return NextResponse.json({
      success: true,
      portfolio: portfolioData,
    });

  } catch (error) {

    console.error("Upload Error:", error);

    return NextResponse.json(
      {
        error: "Upload failed",
      },
      {
        status: 500,
      }
    );
  }
}