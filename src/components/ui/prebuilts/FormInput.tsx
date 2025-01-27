import React, { useState, useRef, useEffect, useMemo } from "react";
import { FormInputProps } from "@/lib/types";
import { custom, ZodError, ZodIssue } from "zod";

import { set, useFormContext } from "react-hook-form";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { clear } from "console";

let cities: Object[] = [];

const cityIssue: ZodIssue[] = [
  {
    code: "custom",
    message: "This city isn't valid",
    path: ["city"],
  },
];

const cityError = new ZodError(cityIssue);

const FormInput = React.forwardRef<HTMLInputElement, FormInputProps>(
  (props, userRef) => {
    const {
      labelName,
      name,
      className,
      top,
      left,
      password,
      error,
      country,
      valueAsNumber,
      setError,
      clearErrors,
    } = props;
    const [isInputFocused, setIsInputFocused] = useState(false);
    const [inputValue, setInputValue] = useState("");

    const labelRef = useRef<HTMLLabelElement>(null);

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

    const [isCityInCities, setIsCityInCities] = useState(false);

    useEffect(() => {
      if (!isCityInCities && inputValue && name === "city") {
        cityError.issues.forEach((issue) => {
          setError("city", {
            type: "custom",
            message: issue.message,
          });
        });
        //Do error handling or "Did you mean..." here
      } else {
        if (name === "city") {
          clearErrors("city");
        }
      }
    }, [isCityInCities, isInputFocused, inputValue, setError]);

    useEffect(() => {
      if (country && cities && inputValue) {
        setIsCityInCities(isInputInCities(cities, inputValue));
      }
    }, [country, cities, inputValue]);

    const { ref, ...methods } = register(name, {
      onChange: ({ target: { value, name } }) => {
        setInputValue(value);
      },
      valueAsNumber,
    });
    return (
      <div>
        <div className="relative w-80 h-10">
          <Label
            htmlFor="input"
            className="form--label text-xl dark:text-slate-100 absolute left-2 top-1.5 px-2 text-slate-100 transition-all delay-200 bg-neutral-800"
            ref={labelRef}
          >
            {labelName}
          </Label>
          <Input
            id="input"
            className={
              "form--input absolute top-0 left-0 w-full h-full transition-all hover:!border-amber-100 focus:!border-amber-200 !bg-opacity-0 " +
              className
            }
            autoComplete="off"
            type={password ? "password" : "text"}
            {...methods}
            ref={(e) => {
              ref(e);
              if (userRef) {
                userRef.current = e;
              }
            }}
            onFocus={() => setIsInputFocused(true)}
            onBlur={() => setIsInputFocused(false)}
          />
          {error &&
            (name !== "city" ? (
              <span className="text-red-600 absolute left-[-6rem] top-[3rem]">
                {error.message}
              </span>
            ) : (
              ""
            ))}
        </div>
        {error &&
          (name === "city" ? (
            <span className="text-red-600">{error.message}</span>
          ) : (
            ""
          ))}
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
