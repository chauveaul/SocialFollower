import { Client, Functions, Permission, Role } from "appwrite";
import {
  getDocument,
  updateDocument,
  createDocument,
} from "@/lib/server/database/controller";
import { getUserInfo } from "@/lib/server/auth/controller";

export default class LinkedInService {
  static async LoginUser(code: string) {
    const client = new Client();
    const functions = new Functions(client);

    client.setProject("671d9734ace647d7440b");

    const account = await getUserInfo();
    const accountId = account.$id;

    const promise = functions.createExecution("67a64f59002be4d49e85", code);
    promise.then(async (res) => {
      if (res.status === "completed") {
        try {
          await getDocument("67a67744001f4587566f", "LinkedInAuth", accountId);

          //If no errors, it means the document exists
          await updateDocument(
            "67a67744001f4587566f",
            "LinkedInAuth",
            accountId,
            { accessToken: res.responseBody },
          );
        } catch (error) {
          //Otherwise, create the document since it does not exist
          await createDocument(
            "67a67744001f4587566f",
            "LinkedInAuth",
            accountId,
            { accessToken: res.responseBody },
            [
              Permission.write(Role.user(accountId)),
              Permission.read(Role.user(accountId)),
              Permission.update(Role.user(accountId)),
            ],
          );
        }
        window.location.href = "https://socialfollower.xyz/Dashboard";
      }
    });
  }
}
