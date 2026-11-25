import { Icons } from "@/components/ui/icons";
import { Crown } from "lucide-react";

export default function SignIn() {
  return (
    <div className="w-full">
      <div className="w-full md:w-1/5 mx-4 bg-zinc-800">
        <Crown />
        <p>
          Welcome, by continuing with Next-CMS Sign In, you'll be getting the
          experience of your own
        </p>
        <button className="flex items-center gap-2 bg-gray-800/50 px-5 py-2 rounded font-bold text-lg">
          <Icons.GoogleLogo className="size-8" />
          Sign In
        </button>
      </div>
    </div>
  );
}
