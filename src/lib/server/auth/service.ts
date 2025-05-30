import { Client, Account, ID, AppwriteException } from "appwrite";
import { LoginFormData, RegisterFormData } from "@/lib/types";

const client =
  process.env.NODE_ENV === "development"
    ? new Client()
        .setEndpoint("http://localhost/v1")
        .setProject("673e5e130010788ad4c9")
    : new Client()
        .setEndpoint("https://cloud.appwrite.io/v1")
        .setProject("671d9734ace647d7440b");

export default class AuthService {
  static async registerUser(formData: RegisterFormData) {
    const { email, password } = formData;
    const account = new Account(client);

    let response;
    try {
      response = await account.create(ID.unique(), email, password);
    } catch (error) {
      const err = error as AppwriteException;

      //If this error is thrown, there already exists a user with this email
      throw new AppwriteException(err.message);
    }
    return {
      status: 200,
      message: "The account has been successfully created.",
      data: response,
    };
  }

  static async loginUser(formData: LoginFormData) {
    const { email, password } = formData;
    const account = new Account(client);
    await account.createEmailPasswordSession(email, password);
  }

  static async loginUserID(userID: string, secret: string) {
    const account = new Account(client);
    await account.createSession(userID, secret);
  }

  static async isLoggedIn(): Promise<boolean> {
    const account = new Account(client);

    try {
      await account.get();
      return true;
    } catch (error) {
      return false;
    }
  }

  static async logoutUser() {
    const account = new Account(client);

    const result = await account.deleteSession("current");

    return result;
  }

  static async getUserInfo(): Promise<{ $id: string }> {
    const account = new Account(client);

    const result = await account.get();

    return result;
  }
}
