import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { createFolder, searchFolder } from "@/lib/google-drive";

export async function POST(req: Request) {
  try {
    const session = await auth();

    if (!session?.accessToken) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      );
    }

    const { title, eventType } = await req.json();

    if (!title || !eventType) {
      return NextResponse.json(
        {
          error: "Missing title or event type",
        },
        {
          status: 400,
        }
      );
    }

    // Root Folder
    let root = await searchFolder(
      session.accessToken,
      "SmartLens Media"
    );

    if (!root) {
      root = await createFolder(
        session.accessToken,
        "SmartLens Media"
      );
    }

    // Event Folder
    let eventFolder = await searchFolder(
      session.accessToken,
      eventType,
      root.id!
    );

    if (!eventFolder) {
      eventFolder = await createFolder(
        session.accessToken,
        eventType,
        root.id!
      );
    }

    // Gallery Folder
    const galleryFolder = await createFolder(
      session.accessToken,
      title,
      eventFolder.id!
    );

    return NextResponse.json({
      folderId: galleryFolder.id,
      folderLink: galleryFolder.webViewLink,
    });

  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        error: "Failed to create folder",
      },
      {
        status: 500,
      }
    );
  }
}