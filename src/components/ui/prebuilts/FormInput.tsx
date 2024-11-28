import React, { useState, useRef, useEffect, useMemo } from "react";
import { FormInputProps } from "@/lib/types";

import { useForm, useFormContext } from "react-hook-form";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { error } from "console";

let cities: Object[] = [];

const FormInput = React.forwardRef<HTMLInputElement, FormInputProps>(
  (props, ref) => {
    const { name, className, top, left, password, country, valueAsNumber } =
      props;
    const [isInputFocused, setIsInputFocused] = useState(false);
    const [inputValue, setInputValue] = useState("");

    const labelRef = useRef<HTMLLabelElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    const { register } = useFormContext();

    useEffect(() => {
      //set the inital left and top here
      if (labelRef.current) {
        labelRef.current.style.transition = "none";
        labelRef.current.style.left = left ? `${left}rem` : "0.5rem";
        labelRef.current.style.top = `${top}`;
      }
    }, []);

    if (isInputFocused && labelRef.current) {
      labelRef.current.style.transition = "";
      labelRef.current.style.top = "-0.8rem";
      labelRef.current.style.fontSize = "0.8rem";
      labelRef.current.style.left = left
        ? `${Number(left) + 0.3}rem`
        : "0.8rem";
      labelRef.current.style.zIndex = "1";
    } else if (!isInputFocused && !inputValue && labelRef.current) {
      labelRef.current.style.transition = "";
      labelRef.current.style.top = `${top}`;
      labelRef.current.style.fontSize = "1.25rem";
      labelRef.current.style.left = left ? `${left}rem` : "0.5rem";
      labelRef.current.style.zIndex = "0";
    }

    useMemo(() => {
      try {
        if (country) {
          fetch("https://countriesnow.space/api/v0.1/countries/cities", {
            method: "POST",
            mode: "cors",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              order: "asc",
              orderBy: "name",
              country: `${country}`,
            }),
          }).then((res) => {
            if (res.ok) {
              res
                .json()
                .then((res) => res.data)
                .then((data) => {
                  cities = [];
                  if (data) {
                    for (const city of data) {
                      cities.push({
                        value: city.toLowerCase(),
                        label: city,
                      });
                    }
                  }
                });
            }
          });
        }
      } catch (e) {
        console.log("Bad request");
      }
    }, [country]);

    if (country && cities && inputValue) {
      if (!isInputInCities(cities, inputValue)) {
        //Invalid City
        //Do error handling or "Did you mean..." here
      } else {
        //Valid city
      }
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
          className={
            "form--input absolute top-0 left-0 w-full h-full transition-all hover:!border-amber-100 focus:!border-amber-200 !bg-opacity-0 " +
            className
          }
          autoComplete="off"
          type={password ? "password" : "text"}
          {...register(name, {
            onChange: ({ target: { value, name } }) => {
              setInputValue(value);
            },
            valueAsNumber,
          })}
          onFocus={() => setIsInputFocused(true)}
          onBlur={() => setIsInputFocused(false)}
        />
        {error && <span className="error-message">{error.message}</span>}
      </div>
    );
  },
);

function isInputInCities(cities: Object[], inputValue: string): boolean {
  for (const city of cities) {
    if (inputValue.toLowerCase() === city.value) {
      return true;
    }
  }
  return false;
}

export { FormInput };
