import FormInput from "@/components/ui/prebuilts/FormInput";
import { Button } from "@/components/ui/button";

export default function Login() {
  return (
    <div className="flex flex-col dark:bg-neutral-800 h-full w-full items-center gap-12 mt-10">
      {/* Put the linear gradient in the span */}
      <h1 className="dark:text-slate-100 text-6xl">
        Login into <span className="">SocialFollower</span>
      </h1>
      <div className="flex flex-col gap-10 w-2/3 items-center">
        <FormInput
          name="Email"
          className="w-[32rem] h-12 translate-x-[-20%]"
          top="0.55rem"
          left="-6"
        />
        <FormInput
          name="Password"
          className="w-[32rem] h-12 translate-x-[-20%]"
          top="0.55rem"
          left="-6"
          password
        />
        <Button variant={"outline"} className="w-1/6 h-12 text-2xl rounded-xl">
          Login
        </Button>
        <p className="dark:text-slate-100 text-center text-xl">
          Don't have an account? Register{" "}
          <a href="#" className="">
            {" "}
            here
          </a>
        </p>
        <hr />
        {/*Horizontal bar here*/}
      </div>
      <div className="flex">
        <h3 className="dark:text-slate-100">Or login using providers</h3>
        <div className="flex">{/* This will be the buttons for OAuth */}</div>
      </div>
    </div>
  );
}
