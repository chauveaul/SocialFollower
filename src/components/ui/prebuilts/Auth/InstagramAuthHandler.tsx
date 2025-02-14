import { useEffect } from "react";
//import { LoginUser } from "@/lib/server/instagram/controller";

export default function InstagramAuthHandler() {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const code = urlParams.get("code");
  useEffect(() => {
    //if (code) LoginUser(code);
  }, [code]);
  return <></>;
}
