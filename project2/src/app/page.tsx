'use client'
import { useRouter } from "next/navigation";
import React from "react";

export default function Home() {
  const router = useRouter();

  return (
    <>
    <li><button onClick={() => router.push('/flashcards')}>
    Play Flashcards
    </button></li>

    <li><button onClick={() => router.push('/difficulty')}>
    Change Difficulty
    </button></li>

    <li><button onClick={() => router.push('/study')}>
    Study Flashcards
    </button></li>

    <li><button onClick={() => router.push('/add')}>
    Add Flashcards
    </button></li>
    
    </>

  );
}
