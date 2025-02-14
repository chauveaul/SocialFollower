import { Client } from "appwrite";
//import {
//  getDocument,
//  updateDocument,
//  createDocument,
//} from "@/lib/server/database/controller";
//import { getUserInfo } from "@/lib/server/auth/controller";

export default class InstagramService {
  static async LoginUser() {
    const client = new Client();
    //const functions = new Functions(client);

    client.setProject("671d9734ace647d7440b");

    //const account = await getUserInfo();
    //const accountId = account.$id;
  }
}
