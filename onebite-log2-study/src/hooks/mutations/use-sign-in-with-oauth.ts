import { SignInWithOAuth } from "@/api/auth";
import { useMutation } from "@tanstack/react-query";

export function UseSignInWithOAuth() {
  return useMutation({
    mutationFn: SignInWithOAuth,
  });
}
