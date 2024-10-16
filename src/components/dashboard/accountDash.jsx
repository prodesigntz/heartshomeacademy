"use client"

import { CreditCard, LogOut, Settings, User } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import { useAppContext } from "@/context/AppContext";
import { useRouter } from "next/navigation";
import { signOut } from "firebase/auth";
import firebase from "@/firebase/firebaseInit";

export function AccountDash() {
    const router = useRouter();
    const { unSetAuthUser } = useAppContext();

    const handleLogout = async () => {
    try {
      await signOut(auth);
      // Redirect or do something after successful logout
      router.replace("/login");
    } catch (error) {
      window.alert("Logout failed");
    }
  };
    };
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Avatar>
          <AvatarImage alt="profile" src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <Link href="" className="flex items-center">
              <User className="mr-2 h-4 w-4" />
              <span>Profile</span>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link href="" className="flex items-center">
              {" "}
              <CreditCard className="mr-2 h-4 w-4" />
              <span>Billing</span>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link href="" className="flex items-center">
              {" "}
              <Settings className="mr-2 h-4 w-4" />
              <span>Setting</span>
            </Link>
          </DropdownMenuItem>
        </DropdownMenuGroup>

        <DropdownMenuSeparator />
        <DropdownMenuItem
          onClick={handleSignOut}
          className="flex items-center cursor-pointer"
        >
          <LogOut className="mr-2 h-4 w-4" />
          <span>Log out</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
