import { useEffect } from "react";
import { LoginUser } from "@/lib/server/linkedin/controller";

export default function LinkedInAuthHandler() {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const code = urlParams.get("code");
  useEffect(() => {
    if (code) LoginUser(code);
  }, [code]);
  return <></>;
}
