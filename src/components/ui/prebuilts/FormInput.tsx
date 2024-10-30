import React, { useState, useRef } from "react";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function FormInput(args: Object) {
  const name = args.name;

  const [isInputFocused, setIsInputFocused] = useState(false);

  const labelRef = useRef<HTMLLabelElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  if (isInputFocused && labelRef.current) {
    labelRef.current.style.top = "-0.8rem";
    labelRef.current.style.fontSize = "0.8rem";
    labelRef.current.style.left = "0.8rem";
    labelRef.current.style.zIndex = "1";
  } else if (!isInputFocused && !inputRef.current?.value && labelRef.current) {
    labelRef.current.style.top = "0.375rem";
    labelRef.current.style.fontSize = "1.25rem";
    labelRef.current.style.left = "0.5rem";
    labelRef.current.style.zIndex = "0";
  }

  return (
    <div className="relative w-80 h-10">
      <Label
        htmlFor="input"
        className="form--label text-xl dark:text-slate-100 absolute left-2 top-1.5 px-2 text-slate-100 transition-all delay-200 bg-neutral-800"
        ref={labelRef}
      >
        {name}
      </Label>
      <Input
        id="input"
        className="form--input absolute top-0 left-0 w-full h-full transition-all hover:!border-amber-100 focus:!border-amber-200 !bg-opacity-0"
        autoComplete="off"
        onFocus={() => setIsInputFocused(true)}
        onBlur={() => setIsInputFocused(false)}
        ref={inputRef}
      />
    </div>
  );
}
