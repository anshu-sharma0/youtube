// "use client";
import styles from "../page.module.css";
import Link from "next/link";

const Page = () => {
  return (
    <main className={styles.main}>
      <h1>Student Login</h1>
      <Link href="/">
        <button>Back</button>
      </Link>{" "}
    </main>
  );
};
export default Page;
