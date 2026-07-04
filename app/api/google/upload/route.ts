import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { getDrive } from "@/lib/google-drive";

export async function POST(req: Request) {
  const session = await auth();

  if (!session?.accessToken) {
    return NextResponse.json(
      { error: "Unauthorized" },
      { status: 401 }
    );
  }

  const formData = await req.formData();

  const file = formData.get("file") as File;
  const folderId = formData.get("folderId") as string;

  if (!file || !folderId) {
    return NextResponse.json(
      { error: "Missing file or folderId" },
      { status: 400 }
    );
  }

  const drive = getDrive(session.accessToken);

  const bytes = await file.arrayBuffer();

  const buffer = Buffer.from(bytes);

  const { Readable } = await import("stream");

  const stream = Readable.from(buffer);

  try {
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

    return NextResponse.json(uploaded.data);
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        error: "Failed to upload file",
      },
      {
        status: 500,
      }
    );
  }
}