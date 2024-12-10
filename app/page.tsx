"use client";

import { WatchStudio } from "@/components/watch-studio";
import { WatchProvider } from "@/context/watch-context";

export default function Home() {
  return (
    <WatchProvider>
      <main className="min-h-screen bg-white">
        <WatchStudio />
      </main>
    </WatchProvider>
  );
}