import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useSignInWithOAuth } from "@/hooks/mutations/use-sign-in-with-oauth";
import { useSignInWithPassword } from "@/hooks/mutations/use-sign-in-with-password";
import { generateErrorMessage } from "@/lib/error";
import { useState } from "react";
import { Link } from "react-router";
import { toast } from "sonner";
import gitHubLogo from "@/assets/github-mark.svg";

export default function SignInPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { mutate: signInWithPassword, isPending: isSignInWithPasswordPending } =
    useSignInWithPassword({
      onError: (error) => {
        const message = generateErrorMessage(error);
        toast.error(message, {
          position: "top-center",
        });

        setPassword("");
      },
    });

  // OAuth 노션 로그인(강의: github)
  const { mutate: signInWithOAuth, isPending: isSignInWithOAuthPending } =
    useSignInWithOAuth({
      onError: (error) => {
        const message = generateErrorMessage(error);
        toast.error(message, {
          position: "top-center",
        });
      },
    });

  const handleSignInWithPasswordClick = () => {
    if (email.trim() === "") return;
    if (password.trim() === "") return;

    signInWithPassword({ email, password });
  };

  const handleSignInWithOAuthClick = () => {
    signInWithOAuth("notion");
  };

  const isPending = isSignInWithPasswordPending || isSignInWithOAuthPending;

  return (
    <div className="flex flex-col gap-8">
      <div className="text-xl font-bold">로그인</div>
      <div className="flex flex-col gap-2">
        <Input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={isPending}
          className="py-6"
          type="email"
          placeholder="example@abc.com"
        />
        <Input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          disabled={isPending}
          className="py-6"
          type="password"
          placeholder="password"
        />
      </div>
      <div className="flex flex-col gap-2">
        <Button
          onClick={handleSignInWithPasswordClick}
          disabled={isPending}
          className="w-full"
        >
          로그인
        </Button>
        <Button
          onClick={handleSignInWithOAuthClick}
          disabled={isPending}
          className="w-full"
          variant={"outline"}
        >
          <img src={gitHubLogo} className="h-4 w-4" />
          Notion 계정으로 로그인
        </Button>
      </div>
      <div className="flex flex-col gap-2">
        <Link className="text-muted-foreground hover:underline" to={"/sign-up"}>
          계정이 없으시다면? 회원가입
        </Link>
        <Link
          className="text-muted-foreground hover:underline"
          to={"/forget-password"}
        >
          비밀번호를 잊으셨나요?
        </Link>
      </div>
    </div>
  );
}
