import { signOut } from "@/api/auth";
import defaultAvatar from "@/assets/default-avatar.png";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { UseProfileData } from "@/hooks/queries/use-profile-data";
import { useSession } from "@/store/session";
import { PopoverClose } from "@radix-ui/react-popover";
import { Link } from "react-router";

export default function ProfileButton() {
  const session = useSession();
  const { data: profile } = UseProfileData(session?.user.id);

  if (!session) return null;

  return (
    <Popover>
      <PopoverTrigger>
        <img
          src={profile?.avatar_url || defaultAvatar}
          className="h-6 w-6 cursor-pointer rounded-full object-cover"
        />
      </PopoverTrigger>
      <PopoverContent>
        <PopoverClose asChild>
          <Link to={`/profile/${session.user.id}`}>
            <div className="hover:bg-muted cursor-pointer px-4 py-3 text-sm">
              프로필
            </div>
          </Link>
        </PopoverClose>
        <PopoverClose asChild>
          <div
            onClick={signOut}
            className="hover:bg-muted cursor-pointer px-4 py-3 text-sm"
          >
            로그아웃
          </div>
        </PopoverClose>
      </PopoverContent>
    </Popover>
  );
}
