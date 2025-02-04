import { useState, useMemo } from "react";

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
import { ComboBoxProps } from "@/lib/types";

let options: { value: string; label: string }[] = [];

export default function FormCitiesComboBox({ country }: ComboBoxProps) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");

  const [styleChanges, setStyleChanges] = useState("");

  useMemo(() => {
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
    })
      .then((res) => res.json())
      .then((res) => res.data)
      .then((data) => {
        options = [];
        for (const city of data) {
          options.push({
            value: city.toLowerCase(),
            label: city,
          });
        }
      });
  }, [country]);

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
            : "Select a city..."}
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
