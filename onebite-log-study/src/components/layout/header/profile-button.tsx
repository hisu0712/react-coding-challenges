import defaultAvater from "@/assets/default-avatar.png";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useSession } from "@/store/session";
import { PopoverClose } from "@radix-ui/react-popover";
import { Link } from "react-router";

export default function ProfileButton() {
  const session = useSession();

  return (
    <Popover>
      <PopoverTrigger>
        <img
          src={defaultAvater}
          className="h-6 w-6 cursor-pointer rounded-full object-cover"
        />
      </PopoverTrigger>
      <PopoverContent className="flex w-40 flex-col p-0">
        <PopoverClose asChild>
          <Link to={`/profile/${session!.user.id}`}>
            <div className="hover:bg-muted cursor-pointer px-4 py-3 text-sm">
              프로필
            </div>
          </Link>
        </PopoverClose>
        <PopoverClose asChild>
          <div className="hover:bg-muted cursor-pointer px-4 py-3 text-sm">
            로그아웃
          </div>
        </PopoverClose>
      </PopoverContent>
    </Popover>
  );
}
