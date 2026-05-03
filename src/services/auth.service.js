import { supabase } from '../lib/supabase';
export const authService = {
    login: (email, password) => supabase.auth.signInWithPassword({ email, password }),
    logout: () => supabase.auth.signOut(),
    session: () => supabase.auth.getSession(),
    profile: async () => { const { data: { user } } = await supabase.auth.getUser(); if (!user)
        return null; const { data } = await supabase.from('profiles').select('*').eq('id', user.id).single(); return data; }
};
