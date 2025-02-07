import LinkedInService from "@/lib/server/linkedin/service";

export async function LoginUser(code: string) {
  return LinkedInService.LoginUser(code);
}
