import { Crown } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  const auth = false;
  return (
    <div className="w-full flex justify-between px-8 h-12">
      <Link href="/" className="flex gap-2">
        <Crown />
        <span className="font-extrabold"> Next-CMS</span>
      </Link>
      {auth ? <div>User </div> : <Link href="/sign-in">Sign In </Link>}
    </div>
  );
}
