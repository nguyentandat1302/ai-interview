"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Intro() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/auth/login");
    }, 2000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div style={{ display: "flex", height: "100vh", alignItems: "center", justifyContent: "center" }}>
      <h1>Welcome to My App 🚀</h1>
    </div>
  );
}
