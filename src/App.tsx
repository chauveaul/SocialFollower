import { Client } from "appwrite";

import { Input } from "@/components/ui/input";

export default function App() {
  const client = new Client();
  client.setProject("671d9734ace647d7440b");

  return <Input />;
}
