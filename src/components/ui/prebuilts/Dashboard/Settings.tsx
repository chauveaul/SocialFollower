import { deleteDocument, getDocument } from "@/lib/server/database/controller";
import { GenericInput } from "@/components/ui/prebuilts/GenericInput";
import { Button } from "@/components/ui/button";
import { CardTemplate } from "../CardTemplate";
import {
  GitHubIcon,
  GoogleIcon,
  MicrosoftIcon,
  AppleIcon,
  InstagramIcon,
  TikTokIcon,
  LinkedinIcon,
  YouTubeIcon,
} from "@/assets/Icons";
import { getUserInfo, logoutUser } from "@/lib/server/auth/controller";
import { useEffect, useState } from "react";

export default function Settings() {
  const [linkedInConnectionState, setLinkedInConnectionState] = useState<
    "connect" | "disconnect"
  >("connect");
  const [instagramConnectionState] = useState<"connect" | "disconnect">(
    "connect",
  );
  const [tikTokConnectionState] = useState<"connect" | "disconnect">("connect");
  const [youTubeConnectionState] = useState<"connect" | "disconnect">(
    "connect",
  );

  useEffect(() => {
    async function serviceCall() {
      const account = await getUserInfo();
      const accountId = account.$id;
      getDocument("67a67744001f4587566f", "LinkedInAuth", accountId)
        .then(() => console.log("true"))
        .then(() => {
          setLinkedInConnectionState("disconnect");
        })
        .catch(() => {
          console.log("Document doesnt exist");
        });
    }

    serviceCall();
  }, []);

  function handleLinkedInClick() {
    if (linkedInConnectionState === "connect") {
      const clientId = import.meta.env.VITE_LINKEDIN_CLIENT_ID;
      const callbackURL =
        import.meta.env.DEV === true
          ? "http://localhost:5173/linkedin-auth"
          : "https://socialfollower.xyz/linkedin-auth";
      const linkedinOAuthURL = `https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=${clientId}&redirect_uri=${callbackURL}&scope=openid%20profile%20email`;

      window.open(linkedinOAuthURL);
    } else {
      async function deleteDoc() {
        const account = await getUserInfo();
        const accountId = account.$id;

        deleteDocument("67a67744001f4587566f", "LinkedInAuth", accountId);
      }
      deleteDoc();
      setLinkedInConnectionState("connect");
    }
  }

  return (
    <div className="flex justify-center gap-4 mb-24">
      <div className="flex flex-col gap-8 items-center max-w-[35vw] p-4 m-8">
        <h1 className="text-center text-5xl text-white mb-4">Account</h1>
        <CardTemplate
          className="w-full p-2 pt-6"
          cardContent={
            <div className="flex flex-col gap-6">
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
                <div className="flex gap-8 w-full justify-between mt-8">
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
                onClick={async () => {
                  await logoutUser().then(() => window.location.reload());
                }}
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
      <div className="flex flex-col gap-2 w-[35vw] p-4 m-8">
        <h1 className="text-5xl text-center text-white mb-10">Connections</h1>
        <div className="flex gap-2 w-full">
          {/* OAuth Providers */}
          <CardTemplate
            className="w-full"
            cardContent={
              <div className="flex justify-between pt-6">
                <div className="flex flex-col gap-4">
                  <GoogleIcon
                    width={92}
                    height={92}
                    color="#ffffff"
                    opacity={0.75}
                  />
                  <Button variant={"outline"}>Connect</Button>
                </div>
                <div className="flex flex-col gap-4">
                  <GitHubIcon
                    width={92}
                    height={92}
                    color="#ffffff"
                    opacity={0.75}
                  />
                  <Button variant={"outline"}>Connect</Button>
                </div>
                <div className="flex flex-col gap-4">
                  <MicrosoftIcon
                    width={92}
                    height={92}
                    color="#ffffff"
                    opacity={0.75}
                  />
                  <Button variant={"outline"}>Connect</Button>
                </div>
                <div className="flex flex-col gap-4">
                  <AppleIcon
                    width={92}
                    height={92}
                    color="#ffffff"
                    opacity={0.75}
                  />
                  <Button variant={"outline"}>Connect</Button>
                </div>
              </div>
            }
          />
        </div>
        <hr className="my-6 h-0.5 border-t-0 bg-neutral-100 dark:bg-white/10" />
        <div className="flex gap-8">
          {/* Social Media Auth */}
          <CardTemplate
            className="w-full"
            cardContent={
              <div className="flex justify-between pt-6">
                <div className="flex flex-col items-center gap-4">
                  <LinkedinIcon
                    width={92}
                    height={92}
                    color="#ffffff"
                    opacity={0.75}
                  />
                  <Button variant={"outline"} onClick={handleLinkedInClick}>
                    <p
                      className={
                        linkedInConnectionState === "disconnect"
                          ? "text-[#DB6262]"
                          : ""
                      }
                    >
                      {linkedInConnectionState[0].toUpperCase() +
                        linkedInConnectionState.substring(1)}
                    </p>
                  </Button>
                </div>
                <div className="flex flex-col items-center gap-4">
                  <InstagramIcon
                    width={92}
                    height={92}
                    color="#ffffff"
                    opacity={0.75}
                  />
                  <Button variant={"outline"}>
                    {instagramConnectionState[0].toUpperCase() +
                      instagramConnectionState.substring(1)}
                  </Button>
                </div>
                <div className="flex flex-col items-center gap-4">
                  <TikTokIcon
                    width={92}
                    height={92}
                    color="#ffffff"
                    opacity={0.75}
                  />
                  <Button variant={"outline"}>
                    {tikTokConnectionState[0].toUpperCase() +
                      tikTokConnectionState.substring(1)}
                  </Button>
                </div>
                <div className="flex flex-col items-center gap-4">
                  <YouTubeIcon
                    width={92}
                    height={92}
                    color="#ffffff"
                    opacity={0.75}
                  />
                  <Button variant={"outline"}>
                    {youTubeConnectionState[0].toUpperCase() +
                      youTubeConnectionState.substring(1)}
                  </Button>
                </div>
              </div>
            }
          />
        </div>
      </div>
    </div>
  );
}
