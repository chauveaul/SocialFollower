import React, { useState, useMemo } from "react";
import { ComboBoxProps } from "@/lib/types";

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
import { FormControl, FormItem, FormField, Form } from "@/components/ui/form";

let options: { value: string; label: string }[] = [];

const FormCountryComboBox = React.forwardRef<HTMLSelectElement, ComboBoxProps>(
  (props) => {
    const { form, error, refSetValue, name } = props;

    const [open, setOpen] = useState(false);

    const [styleChanges, setStyleChanges] = useState("");

    const fetchBody = {
      method: "POST",
      body: JSON.stringify({
        order: "asc",
        orderBy: "name",
      }),
    };

    useMemo(() => {
      fetch(
        "https://countriesnow.space/api/v0.1/countries/info?returns=country/filter",
        fetchBody,
      )
        .then((res) => res.json())
        .then((res) => res.data)
        .then((data) => {
          options = [];
          for (const country of data) {
            options.push({
              value: country.name.toLowerCase(),
              label: country.name,
            });
          }
        });
    }, []);

    useMemo(() => {
      open ? setStyleChanges("border-t-0 rounded-t-none") : setStyleChanges("");
    }, [open]);

    function onSubmit() { }

    return (
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div>
            <FormField
              control={form.control}
              name={name}
              render={({ field }) => (
                <FormItem>
                  <Popover open={open} onOpenChange={setOpen}>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant="outline"
                          role="combobox"
                          aria-expanded={open}
                          className={`w-[200px] justify-between ${styleChanges}`}
                        >
                          {field.value
                            ? options.find(
                              (option) => option.value === field.value,
                            )?.label
                            : "Select a Country"}
                          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-[202px] p-0" side="top">
                      <Command>
                        <CommandInput placeholder="Search countries" />
                        <CommandList>
                          <CommandEmpty>No results found.</CommandEmpty>
                          <CommandGroup>
                            {options.map((option) => (
                              <FormControl>
                                <CommandItem
                                  key={option.value}
                                  value={option.value}
                                  onSelect={(currentValue) => {
                                    field.value =
                                      field.value === currentValue
                                        ? ""
                                        : currentValue;
                                    form.setValue("country", currentValue);
                                    refSetValue(currentValue);
                                    setOpen(false);
                                  }}
                                >
                                  <Check
                                    className={cn(
                                      "mr-2 h-4 w-4",
                                      field.value === option.value
                                        ? "opacity-100"
                                        : "opacity-0",
                                    )}
                                  />
                                  {option.label}
                                </CommandItem>
                              </FormControl>
                            ))}
                          </CommandGroup>
                        </CommandList>
                      </Command>
                    </PopoverContent>
                  </Popover>
                </FormItem>
              )}
            />
          </div>
          {error && <span className="text-red-600">{error.message}</span>}
        </form>
      </Form>
    );
  },
);
//export default function FormCountryComboBox({
//  refValue,
//  refSetValue,
//}: countryForm) {
//}
export { FormCountryComboBox };
