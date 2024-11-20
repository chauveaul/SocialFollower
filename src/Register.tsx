import React, { useRef, useState } from "react";
import FormInput from "@/components/ui/prebuilts/FormInput";
import FormCountryComboBox from "@/components/ui/prebuilts/FormCountryComboBox";
import FormCitiesComboBox from "@/components/ui/prebuilts/FormCitiesComboBox";
import { Button } from "@/components/ui/button";

export default function Register() {
  const [value, setValue] = useState("");

  return (
    <div className="flex justify-center items-center w-screen h-screen">
      <div className="flex flex-col dark:bg-neutral-800 w-screen items-center gap-14">
        <h1 className="dark:text-slate-100 text-6xl mb-4">
          Make a{" "}
          <span className="bg-gradient-to-r from-orange-500 to-rose-500 bg-clip-text text-transparent">
            SocialFollower
          </span>{" "}
          account
        </h1>
        <div className="flex flex-col gap-10 w-2/3 items-center">
          <FormInput
            name="Full Name"
            className="w-[32rem] h-12 translate-x-[-20%]"
            top="0.55rem"
            left="-6"
          />
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
          <FormInput
            name="Repeat Password"
            className="w-[32rem] h-12 translate-x-[-20%]"
            top="0.55rem"
            left="-6"
            password
          />
          <div className="flex gap-6 translate-x-[10%]">
            <FormCountryComboBox refValue={value} refSetValue={setValue} />
            {/* Change that for an input that checks if the inputted city is in the set. */}
            {/* Might make a suggestion system as in "Did you mean ..." */}
            {/*<FormCitiesComboBox country={value} />*/}
            <FormInput name="City" country={value} className="!w-48" />
          </div>
          <Button
            variant={"outline"}
            className="w-1/6 h-12 text-2xl rounded-xl mt-2"
          >
            Register
          </Button>
          <p className="dark:text-white/[60%] text-center text-xl mt-2">
            Already have an account? Login{" "}
            <a href="/login" className="border-b">
              here
            </a>
          </p>
        </div>
        <div className="flex flex-col gap-4 -mt-10 justify-center items-center"></div>
      </div>
    </div>
  );
}
