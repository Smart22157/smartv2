import { google } from "googleapis";

export function getDrive(accessToken: string) {
  const auth = new google.auth.OAuth2();

  auth.setCredentials({
    access_token: accessToken,
  });

  return google.drive({
    version: "v3",
    auth,
  });
}

export async function createFolder(
  accessToken: string,
  name: string,
  parentId?: string
) {
  const drive = getDrive(accessToken);

  const response = await drive.files.create({
    requestBody: {
      name,
      mimeType: "application/vnd.google-apps.folder",
      parents: parentId ? [parentId] : undefined,
    },
    fields: "id,name,webViewLink",
  });

  return response.data;
}

export async function searchFolder(
  accessToken: string,
  name: string,
  parentId?: string
) {
  const drive = getDrive(accessToken);

  let query = `mimeType='application/vnd.google-apps.folder' and trashed=false and name='${name}'`;

  if (parentId) {
    query += ` and '${parentId}' in parents`;
  }

  const result = await drive.files.list({
    q: query,
    fields: "files(id,name,webViewLink)",
  });

  return result.data.files?.[0] ?? null;
}
export async function publishFile(
  accessToken: string,
  fileId: string
) {
  const drive = getDrive(accessToken);

  await drive.permissions.create({
    fileId,
    requestBody: {
      role: "reader",
      type: "anyone",
    },
  });

  return true;
}