import { useEffect } from "react";
import { LoginUser } from "@/lib/server/linkedin/controller";

export default function LinkedInAuthHandler() {
  useEffect(() => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const code = urlParams.get("code");
    console.log(code);
    if (code) LoginUser(code);
  });
  return <></>;
}
