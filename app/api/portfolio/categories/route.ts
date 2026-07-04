import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { getDrive } from "@/lib/google-drive";
import { supabaseAdmin } from "@/lib/supabase-admin";

export async function GET() {
  try {
    const session = await auth();

    if (!session?.accessToken) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      );
    }

    // Get Portfolio Folder ID from Settings

    const { data: settings, error } = await supabaseAdmin
      .from("settings")
      .select("portfolio_folder_id")
      .eq("id", 1)
      .single();

    if (error || !settings?.portfolio_folder_id) {
      return NextResponse.json(
        {
          error: "Portfolio folder not configured",
        },
        {
          status: 400,
        }
      );
    }

    const drive = getDrive(session.accessToken);

    const response = await drive.files.list({
      q: `'${settings.portfolio_folder_id}' in parents and mimeType='application/vnd.google-apps.folder' and trashed=false`,
      fields: "files(id,name)",
      orderBy: "name",
    });

    return NextResponse.json(response.data.files ?? []);

  } catch (error) {

    console.error(error);

    return NextResponse.json(
      {
        error: "Failed to load categories",
      },
      {
        status: 500,
      }
    );
  }
}