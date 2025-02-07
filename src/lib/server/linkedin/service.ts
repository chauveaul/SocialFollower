import { Client, Functions } from "appwrite";

export default class LinkedInService {
  static async LoginUser(code: string) {
    const client = new Client();
    const functions = new Functions(client);

    client.setProject("671d9734ace647d7440b");

    const promise = functions.createExecution("67a64f59002be4d49e85", code);
    promise.then(
      (res) => {
        if (res.status === "completed") {
        }
        console.log(res);
      },
      (error) => {
        console.log(error);
      },
    );
  }
}
