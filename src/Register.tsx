import { LegacyRef, useRef, useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { FormInput } from "@/components/ui/prebuilts/FormInput";
import { FormCountryComboBox } from "@/components/ui/prebuilts/FormCountryComboBox";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { LoginFormData, RegisterFormData } from "@/lib/types";
import { RegistrationSchema } from "@/lib/form-validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginUser, registerUser } from "@/lib/server/auth/controller";

export default function Register() {
  const { setError, clearErrors, ...methods } = useForm<RegisterFormData>({
    resolver: zodResolver(RegistrationSchema),
  });

  const [value, setValue] = useState("");

  let emailRef: LegacyRef<HTMLInputElement> = useRef(null);
  let passwordRef: LegacyRef<HTMLInputElement> = useRef(null);

  async function onSubmit(formData: RegisterFormData) {
    try {
      const response = await registerUser(formData).then(() => {
        loginUser({
          email: emailRef.current?.value,
          password: passwordRef.current?.value,
        } as LoginFormData);
      });
    } catch (err) {
      setError("email", {
        type: "custom",
        message: "A user with this email already exists",
      });
    }

    //TODO: Fix redirect when I have a url for the site
    process.env.NODE_ENV === "development"
      ? (window.location.href = "http://localhost:5173/dashboard")
      : (window.location.href = "");
  }

  return (
    <div className="flex justify-center items-center w-screen h-screen">
      <div className="flex flex-col dark:bg-neutral-800 w-screen items-center gap-14">
        <h1 className="dark:text-slate-100 text-6xl">
          Make a{" "}
          <span className="bg-gradient-to-r from-orange-500 to-rose-500 bg-clip-text text-transparent">
            SocialFollower
          </span>{" "}
          account
        </h1>
        <div className="flex flex-col w-2/3 items-center">
          <Form {...methods}>
            <form
              onSubmit={methods.handleSubmit((data) => {
                if (methods.formState.errors.city) {
                  setError("city", {
                    type: "custom",
                    message: "This city isn't valid",
                  });
                  return;
                }
                onSubmit(data);
              })}
              className="flex flex-col gap-10 w-2/3 items-center"
            >
              <FormInput
                className="w-[32rem] h-12 translate-x-[-20%]"
                top="0.55rem"
                left="-6"
                labelName="Full Name"
                name="fullName"
                error={methods.formState.errors.fullName}
              />
              <FormInput
                className="w-[32rem] h-12 translate-x-[-20%]"
                top="0.55rem"
                left="-6"
                labelName="Email"
                name="email"
                error={methods.formState.errors.email}
                ref={emailRef}
              />
              <FormInput
                className="w-[32rem] h-12 translate-x-[-20%]"
                top="0.55rem"
                left="-6"
                password
                labelName="Password"
                name="password"
                error={methods.formState.errors.password}
                ref={passwordRef}
              />
              <FormInput
                className="w-[32rem] h-12 translate-x-[-20%]"
                top="0.55rem"
                left="-6"
                password
                labelName="Repeat Password"
                name="repeatPassword"
                error={methods.formState.errors.repeatPassword}
              />
              <div className="flex gap-6 translate-x-[10%]">
                <FormCountryComboBox
                  refValue={value}
                  refSetValue={setValue}
                  name="country"
                  form={methods}
                  error={methods.formState.errors.country}
                />
                <FormInput
                  country={value}
                  className="!w-48"
                  labelName="City"
                  name="city"
                  top="0.35rem"
                  error={methods.formState.errors.city}
                  setError={setError}
                  clearErrors={clearErrors}
                />
              </div>
              <Button
                variant={"outline"}
                className="w-1/6 h-12 text-2xl rounded-xl mt-2"
                type="submit"
              >
                Register
              </Button>
              <p className="dark:text-white/[60%] text-center text-xl mt-2">
                Already have an account? Login{" "}
                <a href="/login" className="border-b">
                  here
                </a>
              </p>
            </form>
          </Form>
        </div>
        <div className="flex flex-col gap-4 -mt-10 justify-center items-center"></div>
      </div>
    </div>
  );
}
