"use client";
import { Icons } from "@/components/ui/icons";
import { Crown } from "lucide-react";

export default function SignIn() {
  const onSignIn = () => {
    console.log("trying to sign in");
  };
  return (
    <div className="w-full flex h-screen justify-center items-center">
      <div className="w-full sm:w-1/2  md:w-1/5 mx-4 p-4 rounded bg-zinc-800/50 flex  flex-col items-center gap-4">
        <Crown className="size-16 text-gray-400" />
        <p className="text-sm text-center text-gray-300">
          Welcome, by continuing with Next-CMS Sign In, you'll be getting the
          experience of your own
        </p>
        <button
          className="flex items-center gap-2 bg-gray-500/50 hover:bg-gray-500/40 transition-colors duration-200 px-5 py-2 rounded font-bold text-lg"
          onClick={onSignIn}
        >
          <Icons.GoogleLogo className="size-7" />
          Sign In
        </button>
      </div>
    </div>
  );
}
