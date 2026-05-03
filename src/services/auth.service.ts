import { supabase } from '../lib/supabase';

export const authService = {
  login: (email: string, password: string) => supabase.auth.signInWithPassword({ email, password }),
  logout: () => supabase.auth.signOut(),
  session: () => supabase.auth.getSession(),
  onAuthChange: (cb: Parameters<typeof supabase.auth.onAuthStateChange>[0]) => supabase.auth.onAuthStateChange(cb),
  profile: async () => {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return null;
    const { data } = await supabase.from('profiles').select('*').eq('id', user.id).single();
    return data;
  },
};
