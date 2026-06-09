import { signInWithPassword } from "@/api/auth";
import { useMutation } from "@tanstack/react-query";

export function useSignUpInWithPassword() {
  return useMutation({
    mutationFn: signInWithPassword,
  });
}
