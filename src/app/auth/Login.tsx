import { FormInput } from "@/components/ui/prebuilts/FormInput";
import { IonIcon } from "@ionic/react";
import { logoMicrosoft, logoGoogle, logoGithub } from "ionicons/icons";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { LoginFormData } from "@/lib/types";
import { LoginSchema } from "@/lib/form-validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginUser, logoutUser } from "@/lib/server/auth/controller";

export default function Login() {
  const { setError, clearErrors, ...methods } = useForm<LoginFormData>({
    resolver: zodResolver(LoginSchema),
  });

  async function onSubmit(data: LoginFormData) {
    try {
      const response = await loginUser(data);
      process.env.NODE_ENV === "development"
        ? (window.location.href = "http://localhost:5173/dashboard")
        : (window.location.href = "");
    } catch (error) {
      if (error.message.includes("password")) {
        setError("password", {
          type: "custom",
          message: "Password or email is invalid",
        });
      } else {
        setError("password", {
          type: "custom",
          message: "Too many attempts, try again later",
        });
      }
    }
  }

  return (
    <div className="flex justify-center items-center w-screen h-screen">
      <div className="flex flex-col dark:bg-neutral-800 w-screen items-center gap-14">
        <h1 className="dark:text-slate-100 text-6xl mb-4">
          Login into{" "}
          <span className="bg-gradient-to-r from-orange-500 to-rose-500 bg-clip-text text-transparent">
            SocialFollower
          </span>
        </h1>
        <div className="flex flex-col gap-10 w-2/3 items-center">
          <Form {...methods}>
            <form
              onSubmit={methods.handleSubmit(onSubmit)}
              className="flex flex-col gap-10 w-2/3 items-center"
            >
              <FormInput
                name="email"
                labelName="Email"
                className="w-[32rem] h-12 translate-x-[-20%]"
                top="0.55rem"
                left="-6"
                error={methods.formState.errors.email}
              />
              <FormInput
                name="password"
                labelName="Password"
                className="w-[32rem] h-12 translate-x-[-20%]"
                top="0.55rem"
                left="-6"
                password
                error={methods.formState.errors.password}
              />
              <Button
                variant={"outline"}
                className="w-1/6 h-12 text-2xl rounded-xl mt-2"
              >
                Login
              </Button>
            </form>
          </Form>
          <p className="dark:text-white/[60%] text-center text-xl mt-2 border-b border-slate-100/[20%] pb-4">
            Don't have an account? Register{" "}
            <a href="/register" className="border-b">
              here
            </a>
          </p>
        </div>
        <div className="flex flex-col gap-4 -mt-10 justify-center items-center">
          <h3 className="dark:text-white/[60%] text-2xl">
            Or login using providers
          </h3>
          <div className="flex gap-6">
            <div className="rounded-2xl border p-2 flex justify-center items-center">
              <IonIcon
                icon={logoMicrosoft}
                className="text-4xl text-white/[60%]"
              ></IonIcon>
            </div>
            <div className="rounded-2xl border p-2 flex justify-center items-center">
              <IonIcon
                icon={logoGoogle}
                className="text-4xl text-white/[60%]"
              ></IonIcon>
            </div>
            <div className="rounded-2xl border p-2 flex justify-center items-center">
              <IonIcon
                icon={logoGithub}
                className="text-4xl text-white/[60%]"
              ></IonIcon>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
