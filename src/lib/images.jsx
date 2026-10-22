import { createContext, useContext, useEffect, useState } from 'react';
import { supabase } from './supabase.js';

// Charge les images envoyées depuis le tableau de bord : { [slot]: { url, label } }
export async function chargerImages() {
  if (!supabase) return {};
  const { data, error } = await supabase.from('itg_images').select('slot, url, label');
  if (error) return {};
  return Object.fromEntries(data.map((r) => [r.slot, r]));
}

const ImagesContext = createContext({});

export function ImagesProvider({ children }) {
  const [images, setImages] = useState({});
  useEffect(() => { chargerImages().then(setImages).catch(() => {}); }, []);
  return <ImagesContext.Provider value={images}>{children}</ImagesContext.Provider>;
}

export const useImages = () => useContext(ImagesContext);
