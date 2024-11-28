import { FieldError, UseFormRegister } from "react-hook-form";

export type RegisterFormData = {
  fullName: string;
  email: string;
  password: string;
  repeatPassword: string;
  country: string;
  city: string;
};

export type LoginFormData = {
  email: string;
  password: string;
};

export type FormInputProps = {
  type: string;
  placeholder: string;
  name: ValidFieldNames;
  register: UseFormRegister<FormData>;
  error: FieldError | undefined;
  valueAsNumber?: boolean;
  className: string;
  top: string;
  left: string;
  password: boolean;
  country?: string;
};

export type ComboBoxProps = {};

export type ValidFieldNames =
  | "Full Name"
  | "Email"
  | "Password"
  | "Repeat Password"
  | "Country"
  | "City";
