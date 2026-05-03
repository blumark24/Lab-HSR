import { useEffect } from 'react';
import { supabase } from '../lib/supabase';
export const useRealtime = (table, onChange) => { useEffect(() => { const ch = supabase.channel(table).on('postgres_changes', { event: '*', schema: 'public', table }, onChange).subscribe(); return () => { supabase.removeChannel(ch); }; }, [table, onChange]); };
