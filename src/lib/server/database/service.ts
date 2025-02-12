import { Client, Databases } from "appwrite";

const client =
  process.env.NODE_ENV === "development"
    ? new Client()
        .setEndpoint("http://localhost/v1")
        .setProject("673e5e130010788ad4c9")
    : new Client()
        .setEndpoint("https://cloud.appwrite.io/v1")
        .setProject("671d9734ace647d7440b");

export default class DatabaseService {
  static async getDocument(
    databaseId: string,
    collectionId: string,
    documentId: string,
  ) {
    const databases = new Databases(client);

    try {
      const result = await databases.getDocument(
        databaseId,
        collectionId,
        documentId,
      );
      return result;
    } catch (error) {
      console.log(error);
    }
  }

  static async createDocument(
    databaseId: string,
    collectionId: string,
    documentId: string,
    content: { accessToken?: string },
    permissions?: string[],
  ) {
    const databases = new Databases(client);

    if (permissions) {
      databases.createDocument(
        databaseId,
        collectionId,
        documentId,
        content,
        permissions,
      );
      return 200;
    }
    databases.createDocument(databaseId, collectionId, documentId, content);
    return 200;
  }

  static async updateDocument(
    databaseId: string,
    collectionId: string,
    documentId: string,
    content: { accessToken?: string },
  ) {
    const databases = new Databases(client);

    databases.updateDocument(databaseId, collectionId, documentId, content);
    return 200;
  }
}
