import React, { useState, useMemo } from "react";

import { Check, ChevronsUpDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const options: Object[] = [];

export default function FormCountryComboBox() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");

  const [styleChanges, setStyleChanges] = useState("");

  useMemo(() => {
    fetch(
      "https://countriesnow.space/api/v0.1/countries/info?returns=country/filter",
      {
        method: "POST",
        body: {
          order: "asc",
          orderBy: "name",
        },
      },
    )
      .then((res) => res.json())
      .then((res) => res.data)
      .then((data) => {
        console.log(data);
        for (const country of data) {
          options.push({
            value: country.name.toLowerCase(),
            label: country.name,
          });
        }
      });
  }, []);

  useMemo(() => {
    open ? setStyleChanges("border-b-0 rounded-b-none") : setStyleChanges("");
  }, [open]);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className={`w-[200px] justify-between ${styleChanges}`}
        >
          {value
            ? options.find((option) => option.value === value)?.label
            : "Select option..."}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[202px] p-0">
        <Command>
          <CommandInput placeholder="Search options..." />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup>
              {options.map((option) => (
                <CommandItem
                  key={option.value}
                  value={option.value}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue);
                    setOpen(false);
                  }}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      value === option.value ? "opacity-100" : "opacity-0",
                    )}
                  />
                  {option.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
