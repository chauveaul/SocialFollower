import { GenericInput } from "@/components/ui/prebuilts/GenericInput";
import { Button } from "@/components/ui/button";
import { CardTemplate } from "../CardTemplate";

export default function Settings() {
  return (
    <div className="flex justify-center gap-4">
      <div className="flex flex-col gap-8 items-center justify-center max-w-[35vw] p-4 m-8">
        <h1 className="text-center text-5xl text-white mb-4">Account</h1>
        <CardTemplate
          className="w-full p-2 pt-6"
          cardContent={
            <div className="flex flex-col gap-4">
              <GenericInput
                name="fullName"
                placeholder="Full Name"
                className="max-w-[35vw] justify-self-center"
              />
              <GenericInput
                name="email"
                placeholder="Email"
                className="max-w-[35vw]"
              />
              <div className="w-[90%]">
                <div className="flex gap-8 w-full justify-between mt-4">
                  <Button
                    variant={"outline"}
                    className="w-full h-12 text-2xl rounded-xl"
                  >
                    Edit Password
                  </Button>
                  <Button
                    variant={"outline"}
                    className="w-full h-12 text-2xl rounded-xl"
                  >
                    Edit Location
                  </Button>
                </div>
              </div>
            </div>
          }
        />

        <CardTemplate
          className="w-full"
          cardContent={
            <div className=" pt-6 w-full grid grid-cols-2 justify-items-center">
              <Button
                variant={"outline"}
                className="max-w-[90%] h-12 text-2xl rounded-xl"
              >
                Sign Out
              </Button>
              <Button
                variant={"outline"}
                className="max-w-[90%] h-12 text-2xl rounded-xl justify-self-end"
              >
                <span className="text-[#DB6262]"> Delete Account </span>
              </Button>
            </div>
          }
        />
      </div>
      <div className="inline-block min-h-[1em] w-0.5 self-stretch bg-neutral-100 dark:bg-white/10 mt-[5rem]"></div>
      <div className="flex flex-col gap-12 w-[35vw] p-4 m-8">
        <h1 className="text-5xl text-center text-white">Connections</h1>
        <div className="flex gap-8">{/* OAuth Providers */}</div>
        <div className="flex gap-8">{/* Social Media Auth */}</div>
      </div>
    </div>
  );
}
