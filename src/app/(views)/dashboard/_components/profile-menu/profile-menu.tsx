import { Github, LogOut, Settings, User } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { APP_ROUTES } from "@/constants";
import { signOut } from "@/modules";
import { getUser } from "@/modules/user/application/get-user";
import { userRepository } from "@/modules/user/infrastructure/dependencies";
import { generateInitials } from "@/lib/utils";

export const ProfileMenu = async () => {
  const user = await getUser(userRepository)();

  if (user === null) return null;

  const initials = user.name! || user.user_name! || user.email!;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Avatar className="cursor-pointer select-none">
          <AvatarImage
            src={user.avatar_url!}
            alt={`profile picture for ${initials}`}
            loading="lazy"
          />
          <AvatarFallback>{generateInitials(initials)}</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel className="flex flex-col">
          {user.name ? user.name : "Anonymous User"}

          {user.user_name ? (
            <span className="font-medium text-muted-foreground">
              @{user.user_name}
            </span>
          ) : user.email ? (
            <span className="font-medium text-muted-foreground">
              {user.email}
            </span>
          ) : (
            <span className="font-medium text-muted-foreground">
              ID. {user.id.slice(0, 12)}...
            </span>
          )}
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem disabled>
            <User className="mr-2 h-4 w-4" />
            <span>Profile</span>
          </DropdownMenuItem>
          <DropdownMenuItem disabled>
            <Settings className="mr-2 h-4 w-4" />
            <span>Settings</span>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild className="cursor-pointer">
          <a href={APP_ROUTES.github} target="_blank" rel="nofollow">
            <Github className="mr-2 h-4 w-4" />
            <span>GitHub</span>
          </a>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <form className="h-full w-full" action={signOut}>
            <button className="flex h-full w-full">
              <LogOut className="mr-2 h-4 w-4" />
              <span>Log out</span>
            </button>
          </form>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
