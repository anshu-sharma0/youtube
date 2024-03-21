"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  //comment
  const router = useRouter();
  const [name, setName] = useState("Akshat");

  const navigate = (name) => {
    router.push(name);
  };

  const names = () => {
    setName("Sharma");
  };

  return (
    <main className={styles.main}>
      <h1>{name}</h1>

      <button onClick={() => setName("Sharma")}>Change name</button>

      <button onClick={() => navigate("/log-student")}>Login Page</button>

      <button onClick={() => navigate("about")}>About Page</button>
      
      <button onClick={() => navigate("study")}>Study Page</button>
    </main>
  );
}
