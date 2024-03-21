// "use client";
import styles from "../page.module.css";
import Link from "next/link";

const About = () => {
  return (
    <main className={styles.main}>
      <h1>About Page</h1>
      <Link href="/about/about-student">
        <button>Check Student</button>
      </Link>
      <Link href="/">
        <button>Back</button>
      </Link>
    </main>
  );
};
export default About;
