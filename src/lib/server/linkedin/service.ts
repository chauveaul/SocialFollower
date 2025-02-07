import { Client, Functions, Databases, Permission, Role } from "appwrite";
import { getUserInfo } from "../auth/controller";

export default class LinkedInService {
  static async LoginUser(code: string) {
    const client = new Client();
    const functions = new Functions(client);
    const databases = new Databases(client);

    client.setProject("671d9734ace647d7440b");

    const account = await getUserInfo();
    const accountId = account.$id;

    const promise = functions.createExecution("67a64f59002be4d49e85", code);
    promise.then(
      async (res) => {
        if (res.status === "completed") {
          //Add appwrite database
          await databases.createDocument(
            "67a67744001f4587566f",
            "LinkedInAuth",
            accountId,
            { accountToken: res.responseBody },
            [Permission.create(Role.any()), Permission.write(Role.any())],
          );
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
