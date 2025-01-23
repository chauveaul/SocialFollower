import AuthService from "@/lib/server/auth/service";
import { RegisterFormData } from "@/lib/types";

export async function registerUser(formData: RegisterFormData) {
  return AuthService.registerUser(formData);
}

export async function loginUser(email: string, password: string) {
  return AuthService.loginUser(email, password);
}

export async function isLoggedIn(): Promise<boolean> {
  return AuthService.isLoggedIn();
}
