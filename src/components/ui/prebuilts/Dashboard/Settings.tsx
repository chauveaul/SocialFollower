import { GenericInput } from "@/components/ui/prebuilts/GenericInput";
import { Button } from "@/components/ui/button";

export default function Settings() {
  return (
    <div className="flex justify-center gap-4">
      <div className="flex flex-col gap-8 items-center justify-center max-w-[35vw] p-4 m-8">
        <h1 className="text-center text-5xl text-white mb-4">Account</h1>
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
          <div className="flex gap-8 mb-4 w-full justify-between">
            <Button
              variant={"outline"}
              className="w-full h-12 text-2xl rounded-xl mt-2"
            >
              Edit Password
            </Button>
            <Button
              variant={"outline"}
              className="w-full h-12 text-2xl rounded-xl mt-2"
            >
              Edit Location
            </Button>
          </div>
        </div>
        <div className="flex gap-8 w-full justify-between">
          <div className="flex flex-col items-center gap-4">
            <p className="text-3xl text-white text-center">Less Risky Zone</p>
            <Button
              variant={"outline"}
              className="max-w-[90%] h-12 text-2xl rounded-xl mt-2"
            >
              Sign Out
            </Button>
          </div>
          <div className="flex flex-col items-center gap-4">
            <p className="text-3xl text-[#DB6262] text-center"> Risky Zone </p>
            <Button
              variant={"outline"}
              className="max-w-[90%] h-12 text-2xl rounded-xl mt-2"
            >
              <span className="text-[#DB6262]"> Delete Account </span>
            </Button>
          </div>
        </div>
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
