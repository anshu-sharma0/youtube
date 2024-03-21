// "use client";
import Link from "next/link";
import styles from "@/app/page.module.css";

const Page = () => {
  return (
    <main className={styles.main}>
      <h1>About Student</h1>
      <div>
        <h4>Not Logged in? </h4>
        <br />
        <Link href="/log-student">
          <button>Login in now</button>
        </Link>
      </div>
      <Link href="/about">
        <button>Back</button>
      </Link>
    </main>
  );
};
export default Page;
