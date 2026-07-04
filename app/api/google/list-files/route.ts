import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { getDrive } from "@/lib/google-drive";

export async function POST(req: Request) {
  try {
    const session = await auth();

    if (!session?.accessToken) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      );
    }

    const { folderId } = await req.json();

    if (!folderId) {
      return NextResponse.json(
        { error: "Folder ID is required" },
        { status: 400 }
      );
    }

    const drive = getDrive(session.accessToken);

    const response = await drive.files.list({
      q: `'${folderId}' in parents and trashed=false`,
      fields:
        "files(id,name,mimeType,thumbnailLink,webViewLink,webContentLink,size,createdTime)",
      orderBy: "createdTime desc",
    });

    return NextResponse.json(response.data.files ?? []);
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        error: "Failed to fetch files",
      },
      {
        status: 500,
      }
    );
  }
}