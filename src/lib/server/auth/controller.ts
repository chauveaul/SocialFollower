import AuthService from "@/lib/server/auth/service";

export async function registerUser(email: string, password: string) {
  return AuthService.registerUser(email, password);
}

export async function loginUser(email: string, password: string) {
  return AuthService.loginUser(email, password);
}

export async function isLoggedIn(): Promise<boolean> {
  return AuthService.isLoggedIn();
}
