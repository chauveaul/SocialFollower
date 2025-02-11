import { Client, Functions, Databases, Permission, Role } from "appwrite";
import { getUserInfo } from "@/lib/server/auth/controller";

export default class LinkedInService {
  static async LoginUser(code: string) {
    const client = new Client();
    const functions = new Functions(client);
    const databases = new Databases(client);

    client.setProject("671d9734ace647d7440b");

    const account = await getUserInfo();
    console.log("issue getting account id");
    const accountId = account.$id;

    console.log("Issue creating document");

    const promise = functions.createExecution("67a64f59002be4d49e85", code);
    promise.then(
      async (res) => {
        if (res.status === "completed") {
          //TODO: check if document exists
          if (
            await databases.getDocument(
              "67a67744001f4587566f",
              "LinkedInAuth",
              accountId,
            )
          ) {
            await databases.updateDocument(
              "67a67744001f4587566f",
              "LinkedInAuth",
              accountId,
              { accessToken: res.responseBody },
            );
          } else {
            await databases.createDocument(
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
          //If true:
          //update document
          //If false:
          window.location.href = "https://socialfollower.xyz/Dashboard";
        }
        console.log(res);
      },
      (error) => {
        console.log(error);
      },
    );
  }
}
