import GlobalLoader from "@/components/global-loader";
import { UseProfileData } from "@/hooks/queries/use-profile-data";
import { supabase } from "@/lib/supabase";
import { useSession, useSessionLoaded, useSetSession } from "@/store/session";
import { useEffect, type ReactNode } from "react";

export default function SessionProvider({ children }: { children: ReactNode }) {
  const session = useSession();
  const setSession = useSetSession();
  const isSessionLoaded = useSessionLoaded();

  const { data: profile, isLoading: isProfileLoading } = UseProfileData(
    session?.user.id,
  );

  useEffect(() => {
    supabase.auth.onAuthStateChange((event, session) => {
      setSession(session);
    });
  }, []);

  if (!isSessionLoaded) return <GlobalLoader />;
  if (isProfileLoading) return <GlobalLoader />;

  return children;
}
