import { createClient } from '@supabase/supabase-js';

const url = import.meta.env.VITE_SUPABASE_URL;
const key = import.meta.env.VITE_SUPABASE_KEY;

// null si les variables ne sont pas définies : le site affiche alors les illustrations par défaut
export const supabase = url && key ? createClient(url, key) : null;

export const BUCKET = 'itg-images';
