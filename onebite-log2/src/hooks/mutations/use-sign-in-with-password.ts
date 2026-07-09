import { SignInWithPassword } from "@/api/auth";
import type { UseMutationCallback } from "@/types";
import { useMutation } from "@tanstack/react-query";

export function UseSignInWithPassword(callbacks?: UseMutationCallback) {
  return useMutation({
    mutationFn: SignInWithPassword,
    onError: (error) => {
      console.log(error);

      if (callbacks?.onError) callbacks.onError(error);
    },
  });
}
