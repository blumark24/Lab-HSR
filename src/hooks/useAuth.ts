import { useEffect, useState } from 'react';
import { authService } from '../services/auth.service';
import type { Profile } from '../types';

export function useAuth() {
  const [loading, setLoading] = useState(true);
  const [profile, setProfile] = useState<Profile | null>(null);

  useEffect(() => {
    let mounted = true;
    authService.profile().then((p) => mounted && setProfile(p)).finally(() => mounted && setLoading(false));
    const { data } = authService.onAuthChange(async () => {
      const p = await authService.profile();
      if (mounted) setProfile(p);
    });
    return () => {
      mounted = false;
      data.subscription.unsubscribe();
    };
  }, []);

  return { loading, profile, setProfile };
}
