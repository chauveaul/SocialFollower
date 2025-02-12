import DatabaseService from "@/lib/server/database/service";

export async function getDocument(
  databaseId: string,
  collectionId: string,
  documentId: string,
) {
  return DatabaseService.getDocument(databaseId, collectionId, documentId);
}

export async function createDocument(
  databaseId: string,
  collectionId: string,
  documentId: string,
  content: { accessToken?: string },
  permissions?: string[],
) {
  return DatabaseService.createDocument(
    databaseId,
    collectionId,
    documentId,
    content,
    permissions,
  );
}

export async function updateDocument(
  databaseId: string,
  collectionId: string,
  documentId: string,
  content: { accessToken?: string },
) {
  return DatabaseService.updateDocument(
    databaseId,
    collectionId,
    documentId,
    content,
  );
}
