import React from "react";
import { GenericInputProps } from "@/lib/types";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const GenericInput = React.forwardRef<HTMLInputElement, GenericInputProps>(
  (props) => {
    const { placeholder, className, password } = props;

    return (
      <div className="w-full flex flex-col gap-2">
        <Label
          htmlFor="input"
          className="text-xl dark:text-slate-100 px-2 text-slate-100"
        >
          {placeholder}
        </Label>
        <Input
          id="input"
          className={
            "w-full h-full transition-all hover:!border-amber-100 focus:!border-amber-200 !bg-opacity-0 " +
            className
          }
          autoComplete="off"
          type={password ? "password" : "text"}
        />
      </div>
    );
  },
);

export { GenericInput };
