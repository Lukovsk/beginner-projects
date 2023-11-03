"use client";

import "react";
import { useSession, signIn, signOut } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();

  const handleSignIn = () => {
    signIn();
  };

  if (session) {
    return (
      <main>
        <div className="flex justify-center items-center">
          Esta é uma boa home! Você está logado
        </div>
        <button className="btn" onClick={() => signOut()}>
          signout
        </button>
      </main>
    );
  }

  return (
    <div className="flex justify-evenly items-center">
      <p> Você precisa logar</p>
      <button onClick={handleSignIn}>Sign in</button>
    </div>
  );
}
