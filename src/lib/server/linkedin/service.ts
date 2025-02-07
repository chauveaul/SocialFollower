export default class LinkedInService {
  static async LoginUser(code: string) {
    const clientId: string = import.meta.env.VITE_LINKEDIN_CLIENT_ID;
    const clientSecret: string = import.meta.env.LINKEDIN_CLIENT_SECRET;
    const callbackURL =
      process.env.NODE_ENV === "development"
        ? "http://localhost:5731/dashboard"
        : "";

    const response = await fetch(
      "https://www.linkedin.com/oauth/v2/accessToken",
      {
        method: "POST",
        body: new URLSearchParams({
          grant_type: "authorization_code",
          code,
          redirect_uri: callbackURL,
          client_id: clientId,
          client_secret: clientSecret,
        }),
      },
    );

    const data = await response.json();
    const accessToken = data.access_token;

    const userProfileResponse = await fetch(
      "https://api.linkedin.com/v2/me?projection=(id,firstName,lastName)",
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      },
    );
    const userProfile = await userProfileResponse.json();

    console.log(userProfile.localizedFirstName);
  }
}
