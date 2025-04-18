import AuthService from "@/lib/server/auth/service";
import { LoginFormData, RegisterFormData } from "@/lib/types";

export async function registerUser(formData: RegisterFormData) {
  return AuthService.registerUser(formData);
}

export async function loginUser(formData: LoginFormData) {
  return AuthService.loginUser(formData);
}

export async function loginUserID(userID: string, secret: string) {
  return AuthService.loginUserID(userID, secret);
}

export async function logoutUser() {
  return AuthService.logoutUser();
}

export async function isLoggedIn(): Promise<boolean> {
  return AuthService.isLoggedIn();
}

export async function getUserInfo(): Promise<{ $id: string }> {
  return AuthService.getUserInfo();
}
