export default class LinkedInService {
  static async LoginUser(code: string) {
    console.log("Calling appwrite function");
    const response = await fetch(
      "http://67a64f5a97d595ca07a0.appwrite.global",
      {
        method: "POST",
        body: JSON.stringify({
          code,
        }),
      },
    );

    const data = await response.json();
  }
}
