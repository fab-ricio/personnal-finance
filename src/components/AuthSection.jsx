import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton
} from "@clerk/clerk-react";
import useSyncUserWithSupabase from '../hooks/useSyncUserWithSupabase';

export default function AuthSection() {
  useSyncUserWithSupabase();

  return (
    <div className="flex flex-col items-center gap-4">
      <h2 className="text-xl font-semibold">Authentification</h2>
      <SignedOut>
        <div className="flex gap-4">
          <SignInButton mode="modal">
            <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">Se connecter</button>
          </SignInButton>
          <SignUpButton mode="modal">
            <button className="px-4 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400">Créer un compte</button>
          </SignUpButton>
        </div>
      </SignedOut>
      <SignedIn>
        <div className="flex flex-col items-center gap-2">
          <span className="text-green-700 font-semibold">Connecté !</span>
          <UserButton afterSignOutUrl="/" />
        </div>
      </SignedIn>
    </div>
  );
}
