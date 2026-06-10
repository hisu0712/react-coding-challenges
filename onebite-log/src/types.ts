import { type Database } from "@/database.types";

// 자동 생성된 database.types 파일의 타입 정제

export type PostEntity = Database["public"]["Tables"]["post"]["Row"];
export type ProfileEntity = Database["public"]["Tables"]["profile"]["Row"];

export type UseMutationCallback = {
  onSuccess?: () => void;
  onError?: (error: Error) => void;
  onMutate?: () => void;
  onSettled?: () => void;
};
