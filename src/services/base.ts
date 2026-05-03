import { supabase } from '../lib/supabase';

export const makeCrud = <T extends Record<string, unknown>>(table: string) => ({
  list: () => supabase.from(table).select('*').order('created_at', { ascending: false }),
  create: (payload: Partial<T>) => supabase.from(table).insert(payload).select().single(),
  update: (id: string, payload: Partial<T>) => supabase.from(table).update(payload).eq('id', id).select().single(),
  remove: (id: string) => supabase.from(table).delete().eq('id', id),
});
