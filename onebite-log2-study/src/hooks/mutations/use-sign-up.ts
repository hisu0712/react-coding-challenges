import { SignUp } from "@/api/auth";
import { useMutation } from "@tanstack/react-query";

export function UseSignUp() {
  return useMutation({
    mutationFn: SignUp,
  });
}
