import { useState } from "react";
import { useForm } from "react-hook-form";
import { FormInput } from "@/components/ui/prebuilts/FormInput";
import { FormCountryComboBox } from "@/components/ui/prebuilts/FormCountryComboBox";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { RegisterFormData } from "@/lib/types";
import { getRegistrationSchema } from "@/lib/form-validation";
import { zodResolver } from "@hookform/resolvers/zod";

export default function Register() {
  const methods = useForm<RegisterFormData>({
    resolver: zodResolver(getRegistrationSchema()),
  });

  const [value, setValue] = useState("");

  function onSubmit(data) {}

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
              onSubmit={methods.handleSubmit(onSubmit)}
              className="flex flex-col gap-10 w-2/3 items-center"
            >
              <FormInput
                className="w-[32rem] h-12 translate-x-[-20%]"
                top="0.55rem"
                left="-6"
                name="Full Name"
                error={methods.formState.errors.fullName}
              />
              <FormInput
                className="w-[32rem] h-12 translate-x-[-20%]"
                top="0.55rem"
                left="-6"
                name="Email"
                error={methods.formState.errors.email}
              />
              <FormInput
                className="w-[32rem] h-12 translate-x-[-20%]"
                top="0.55rem"
                left="-6"
                password
                name="Password"
                error={methods.formState.errors.password}
              />
              <FormInput
                className="w-[32rem] h-12 translate-x-[-20%]"
                top="0.55rem"
                left="-6"
                password
                name="Repeat Password"
                error={methods.formState.errors.repeatPassword}
              />
              <div className="flex gap-6 translate-x-[10%]">
                <FormCountryComboBox
                  refValue={value}
                  refSetValue={setValue}
                  form={methods}
                  error={methods.formState.errors.country}
                />
                <FormInput
                  country={value}
                  className="!w-48"
                  name="City"
                  top="0.35rem"
                  error={methods.formState.errors.city}
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
