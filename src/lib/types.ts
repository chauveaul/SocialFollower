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
  labelName: string;
  register: UseFormRegister<FormData>;
  error: FieldError | undefined;
  valueAsNumber?: boolean;
  className: string;
  top: string;
  left: string;
  password: boolean;
  country?: string;
};

export type ComboBoxProps = {
  refValue: string;
  refSetValue: (value: string) => void;
  form: any;
  error: FieldError | undefined;
  name: ValidFieldNames;
};

export type ValidFieldNames =
  | "fullName"
  | "email"
  | "password"
  | "repeatPassword"
  | "country"
  | "city";
