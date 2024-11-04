import FormInput from "@/components/ui/prebuilts/FormInput";
import { Button } from "@/components/ui/button";

export default function Login() {
  return (
    <div className="flex">
      {/* Put the linear gradient in the span */}
      <h1 className="">
        Login into <span className="">SocialFollower</span>
      </h1>
      <div className="flex">
        <FormInput name="Email" />
        <FormInput name="Password" password />
        <Button />
        <p>
          Don't have an account? Register <a href="#">here</a>
        </p>
        {/* This span will be for the horizontal seperation bar, will probably change that for a div with border-top */}
        <span></span>
      </div>
      <div className="flex">
        <h3>Or login using providers</h3>
        <div className="flex">{/* This will be the buttons for OAuth */}</div>
      </div>
    </div>
  );
}
