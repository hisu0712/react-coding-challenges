import { SignInWithOAuth } from "@/api/auth";
import type { UseMutationCallback } from "@/types";
import { useMutation } from "@tanstack/react-query";

export function UseSignInWithOAuth(callbacks?: UseMutationCallback) {
  return useMutation({
    mutationFn: SignInWithOAuth,
    onError: (error) => {
      if (callbacks?.onError) callbacks.onError(error);
    },
  });
}
