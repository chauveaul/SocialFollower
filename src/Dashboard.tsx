import { isLoggedIn, logoutUser } from "@/lib/server/auth/controller";

export default function Dashboard() {
  isLoggedIn().then((res) => {
    console.log(res);
  });

  return (
    <div>
      <span>Test</span>
    </div>
  );
}
