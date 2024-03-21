import Link from "next/link";
export default function notFound() {
  return (
    <div>
      <h1>This About page is not available</h1>
      <Link href="/about">
        <button>Go Back</button>
      </Link>
    </div>
  );
}
