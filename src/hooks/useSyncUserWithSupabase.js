import { useEffect } from 'react';
import { useUser } from '@clerk/clerk-react';
import { supabase } from '../supabaseClient';

export default function useSyncUserWithSupabase() {
  const { user, isSignedIn } = useUser();

  useEffect(() => {
    if (!isSignedIn || !user) return;

    const syncUser = async () => {
      // Vérifie si l'utilisateur existe déjà dans Supabase
      const { data, error } = await supabase
        .from('users')
        .select('id')
        .eq('clerk_id', user.id)
        .single();

      if (!data && !error) {
        // Si l'utilisateur n'existe pas, on l'insère
        await supabase.from('users').insert([
          {
            clerk_id: user.id,
            email: user.primaryEmailAddress?.emailAddress,
            created_at: new Date().toISOString(),
          },
        ]);
      }
    };

    syncUser();
  }, [isSignedIn, user]);
}
