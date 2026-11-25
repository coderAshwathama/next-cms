import { Crown } from "lucide-react";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "./button";
export default function Navbar() {
  const auth = true;
  const tempUser = {
    name: "Sam",
    username: "sam",
  };
  return (
    <div className="w-full flex justify-between px-8 h-12">
      <Link href="/" className="flex gap-2">
        <Crown />
        <span className="font-extrabold"> Next-CMS</span>
      </Link>
      {auth ? (
        <UserModalComponent user={tempUser} />
      ) : (
        <Link href="/sign-in">Sign In </Link>
      )}
    </div>
  );
}

const UserModalComponent = ({ user }) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">User</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuGroup>
          <DropdownMenuLabel>Hi, {user.name} </DropdownMenuLabel>
          <DropdownMenuItem>
            <Link href={`/profile/${user.username}`}>Go to profile</Link>
          </DropdownMenuItem>
          <DropdownMenuItem>Billing</DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>Team</DropdownMenuItem>
          <DropdownMenuItem>Subscription</DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
